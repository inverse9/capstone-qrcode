import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Superadmin from "./pages/super-admin/index.jsx";
import Layout from "./pages/Layout.jsx";
import ScannedObject from "./pages/public-user/scanned-object/index.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import Objects from "./pages/admin/Objects.jsx";
import CreateObject from "./pages/admin/CreateObject.jsx";

import "./index.css";
import Report from "./pages/admin/Report.jsx";
import Dashboard from "./pages/admin/index.jsx";
import ListUser from "./pages/super-admin/ListUser.jsx";
import ProtectedRoute from "./utils/ProtectedRoute.jsx";
import CreateUser from "./pages/super-admin/CreateUser.jsx";
const router = createBrowserRouter([
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            path: "/superadmin",
            element: <Superadmin />,
          },
          {
            path: "/list-user",
            element: <ListUser />,
          },
          {
            path: "/user/:id",
            element: <CreateUser />,
          },
          {
            path: "/user",
            element: <CreateUser />,
          },
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
          {
            path: "/objects",
            element: <Objects />,
          },
          {
            path: "/object/:id",
            element: <CreateObject />,
          },
          {
            path: "/object",
            element: <CreateObject />,
          },
          {
            path: "/report",
            element: <Report />,
          },
        ],
      },
    ],
  },
  {
    index: true,
    path: "/",
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
