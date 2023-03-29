import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { SignInContextProvider } from "./contexts/SignInContext";
import App from "./App";

import "./styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SignInContextProvider>
        <App />
      </SignInContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
