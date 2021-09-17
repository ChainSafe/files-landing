import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import posthog from "posthog-js"

if (process.env.REACT_APP_POSTHOG_PROJECT_API_KEY &&
  process.env.REACT_APP_POSTHOG_INSTANCE_ADDRESS) {
  posthog.init(process.env.REACT_APP_POSTHOG_PROJECT_API_KEY, {
    api_host: process.env.REACT_APP_POSTHOG_INSTANCE_ADDRESS,
    opt_out_capturing_by_default: true
  },
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
)
