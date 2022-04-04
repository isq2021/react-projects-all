import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AuthProvider } from "./context/AuthContext.jsx";
import { FireStoreProvider } from "./context/GeneralFireStore.jsx";

ReactDOM.render(
  <React.StrictMode>
    <FireStoreProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </FireStoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
