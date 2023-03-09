import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Acceuil from "./components/Acceuil"
import Inscription from "./components/Inscription"
import Params from "./components/Params"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Inscription />
  },
  {
    path: "/Acceuil",
    element: <Acceuil />
  },
  {
    path: "/Parametres",
    element: <Params />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);