import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CCC from "./CCC.jsx";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import CD from "./CD.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <CD />
    <CCC />
  </StrictMode>
);