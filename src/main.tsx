import { StrictMode } from "react";
import AppRouter from "@router/index";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.min.css";
import "@styles/index.css";
import "@styles";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppRouter />
    <ToastContainer />
  </StrictMode>
);
