import { Configuration, FrontendApi } from "@ory/client"
import axios from "axios"
import Constants from "expo-constants"
import { resilience } from "./axios"

// canonicalize removes the trailing slash from URLs.
const canonicalize = (url: string = "") => url.replace(/\/+$/, "")

// This value comes from ../../app.config.js
export const kratosUrl = (project: string = "playground") => {
  const url = canonicalize(Constants.expoConfig?.extra?.kratosUrl) || ""

  if (!url) {
    console.error(
      "❌ KRATOS URL NOT CONFIGURED! Add 'extra.kratosUrl' to your app.json",
      {
        expoConfig: Constants.expoConfig?.extra,
      }
    )
  }

  if (url.indexOf("https://playground.projects.oryapis.com/") == -1) {
    // The URL is not from Ory, so let's just return it.
    console.log("Using Kratos URL:", url)
    return url
  }

  // We handle a special case where we allow the project to be changed
  // if you use an ory project.
  const finalUrl = url.replace("playground.", `${project}.`)
  console.log("Using Ory project URL:", finalUrl)
  return finalUrl
}

// Create an axios instance with retry logic
const axiosWithRetry = axios.create()
resilience(axiosWithRetry)

export const newOrySdk = (project: string) =>
  new FrontendApi(
    new Configuration({
      basePath: kratosUrl(project),
      baseOptions: {
        // Setting this is very important as axios will send the CSRF cookie otherwise
        // which causes problems with Ory Kratos' security detection.
        withCredentials: false,

        // Timeout after 5 seconds.
        timeout: 10000,
      },
    }),
    "",
    // Ensure that we are using the axios client with retry.
    axiosWithRetry,
  )
