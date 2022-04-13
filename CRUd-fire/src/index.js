import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AuthProvider } from "./context/AuthContext.jsx";
import { FireStoreProvider } from "./context/GeneralFireStore.jsx";
import { BrowserRouter } from "react-router-dom";
import { CardProvider } from "./context/GeneralCard.jsx";

ReactDOM.render(
  <React.StrictMode>
    <FireStoreProvider>
      <AuthProvider>
        <CardProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>{" "}
        </CardProvider>{" "}
      </AuthProvider>{" "}
    </FireStoreProvider>{" "}
  </React.StrictMode>,
  document.getElementById("root")
);
