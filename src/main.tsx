import React from "react";
import ReactDOM from "react-dom/client";
import Portfolio from "./pages/portfolio";
import "./styles/global.scss";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>
);
