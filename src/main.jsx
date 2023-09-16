import React from "react";
import ReactDOM from "react-dom/client";
import { Global } from "@emotion/react";
import App from "./components/App.jsx";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./styles/GlogalStyles.styled.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/advert-cars">
      <Global styles={GlobalStyles} />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
