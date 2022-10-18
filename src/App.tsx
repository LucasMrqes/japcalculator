import React from 'react'
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import './App.css'
import { CalculatorPage } from './pages'

Sentry.init({
  dsn: "https://d354aea677de45ff889fd3789ae03ece@o4504005034967040.ingest.sentry.io/4504005035819008",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

const App = () => {
  return (
    <div className="App">
      <CalculatorPage />
    </div>
  )
}

export default App
