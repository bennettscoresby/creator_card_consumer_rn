export default (parent = {}) => {
  // We gracefully destruct these parameters to avoid "undefined" errors:
  const { config = {} } = parent
  const { env = {} } = process || {}

  const {
    // This is the URL of your deployment. Now loaded from .env file
    KRATOS_URL,

    // Marqeta API configuration
    MARQETA_BASE_URL,
    MARQETA_API_KEY,
    MARQETA_API_SECRET,

    // We use sentry.io for error tracing. This helps us identify errors
    // in the distributed packages. You can remove this.
    //SENTRY_DSN = "https://8be94c41dbe34ce1b244935c68165eab@o481709.ingest.sentry.io/5530799",
  } = env

  return {
    ...config,
    extra: {
      kratosUrl: KRATOS_URL,
      marqetaBaseUrl: MARQETA_BASE_URL,
      marqetaApiKey: MARQETA_API_KEY,
      marqetaApiSecret: MARQETA_API_SECRET,
      //sentryDsn: SENTRY_DSN,
    },
  }
}
