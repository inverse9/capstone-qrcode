import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Superadmin from "./pages/super-admin/index.jsx";
import Admin from "./pages/admin/index.jsx";
import Layout from "./pages/Layout.jsx";
import ScannedObject from "./pages/public-user/scanned-object/index.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import Objects from "./pages/admin/Objects.jsx";
import CreateObject from "./pages/admin/CreateObject.jsx";

import "./index.css";
import Report from "./pages/admin/Report.jsx";
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
        element: <Admin />,
      },
      {
        path: "/objects",
        element: <Objects />,
      },
      {
        path: "/object/*",
        element: <CreateObject />,
      },
      {
        path: "/report",
        element: <Report />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/scan/:id",
    element: <ScannedObject />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
