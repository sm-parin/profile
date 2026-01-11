import React from "react";
import ReactDOM from "react-dom/client";
import Portfolio from "./pages/portfolio";
import "./styles/global.scss";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename="/profile">
      <Portfolio />
    </BrowserRouter>
  </React.StrictMode>
);
