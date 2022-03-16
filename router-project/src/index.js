import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GeneralProvider } from "./Context/GeneralContext.jsx";
import { SpeechProvider } from "@speechly/react-client";

ReactDOM.render(
  <React.StrictMode>
    <SpeechProvider
      appId="b80a0144-4148-4426-a82e-554c329e6537"
      language="en-US">
      <GeneralProvider>
        <App />
      </GeneralProvider>
    </SpeechProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
