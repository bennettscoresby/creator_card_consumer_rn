// A small which adds retries to axios

import axios, { AxiosInstance } from "axios"

export const resilience = (axios: AxiosInstance) => {
  axios.interceptors.response.use(
    (v) => Promise.resolve(v),
    (error) => {
      if (!error.config) {
        console.error("Received network error without axios details", error)
        return Promise.reject(error)
      }

      if (
        error.response &&
        (error.response.status == 400 ||
          error.response.status == 401 ||
          error.response.status == 403)
      ) {
        console.debug("Network request failed but this is ok", {
          config: error.config,
          error,
        })
        return Promise.reject(error)
      }

      if (
        error.response &&
        (error.response.status >= 400 && error.response.status < 500)
      ) {
        // 4xx status means we should not retry.
        console.error("Network request failed", { config: error.config, error })
        return Promise.reject(error)
      }

      const config = {
        ...error.config,
        timeout: 1000,
        count: (error?.config?.count || 0) + 1,
      }

      if (config.count > 60) {
        const err = new Error(
          "Unable to reach network, gave up after 60 retries. Please restart the app and try again.",
        )
        console.error(err, {
          url: error.config?.url,
          baseURL: error.config?.baseURL,
          fullURL: error.config?.baseURL
            ? `${error.config.baseURL}${error.config.url}`
            : error.config?.url,
          method: error.config?.method,
          timeout: error.config?.timeout,
          retryCount: config.count,
          originalError: error.message,
        })
        return Promise.reject(err)
      }

      console.debug("Retrying due to network error", {
        attempt: config.count,
        url: error.config?.url,
        baseURL: error.config?.baseURL,
        method: error.config?.method,
        error: error.message,
      })
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          axios.request(config).then(resolve).catch(reject)
        }, 1000)
      })
    },
  )
}

function containsGenericError(
  data: unknown,
): data is { error: { id?: string } & Record<string, unknown> } {
  if (!data) {
    return false
  }
  if (typeof data !== "object") {
    return false
  }

  if (!("error" in data)) {
    return false
  }

  const e = data.error
  return typeof e === "object" && !!e
}

export function logSDKError(e: unknown): void {
  if (!axios.isAxiosError(e)) {
    console.error("Something went wrong", JSON.stringify(e, null, 2))
    return
  }
  const data = e.response?.data

  if (!containsGenericError(data)) {
    console.error("Something went wrong", {
      message: e.message,
      status: e.response?.status,
      statusText: e.response?.statusText,
      url: e.config?.url,
      method: e.config?.method,
    })
    return
  }

  let message = undefined
  switch (data.error.id) {
    case "self_service_flow_return_to_forbidden":
      message =
        "Your project does not allow to return to the app. Please add the URL to the allowed_return_to URLs."
      break
  }

  console.error(
    message || data.error.reason || "Something went wrong",
    "\n\n",
    "error details:",
    JSON.stringify(data.error, null, 2),
  )
  return
}
