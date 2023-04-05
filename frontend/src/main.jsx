import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { SignInContextProvider } from "./contexts/SignInContext";
import { UploadContextProvider } from "./contexts/UploadContext";
import App from "./App";

import "./styles/index.scss";
import { FavoriteContextProvider } from "./contexts/FavoriteContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SignInContextProvider>
        <UploadContextProvider>
          <FavoriteContextProvider>
            <App />
          </FavoriteContextProvider>
        </UploadContextProvider>
      </SignInContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
