import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Superadmin from "./pages/super-admin/index.jsx";
import Admin from "./pages/admin/index.jsx";
import Layout from "./pages/Layout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/superadmin",
        element: <Superadmin />,
      },
      {
        index: true,
        // path: "/admin",
        element: <Admin />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
