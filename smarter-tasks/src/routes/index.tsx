import { createBrowserRouter, Navigate } from "react-router-dom";

import Signin from "../pages/signin";
import Signup from "../pages/signup";
import Logout from "../pages/logout";
import Members from "../pages/members";
import Projects from "../pages/projects";
import NotFound from "../pages/NotFound";
import { Outlet } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import ProtectedRoute from "./ProtectedRoute";
import AccountLayout from "../layouts/account";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/account/projects" replace />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
  {
    path: "/notfound",
    element: <NotFound />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "account",
    element: (
      <ProtectedRoute>
        <AccountLayout />
      </ProtectedRoute>
    ),

    children: [
      { index: true, element: <Navigate to="/account/projects" replace /> },
      {
        path: "projects",
        children: [
          { index: true, element: <Projects /> },
          {
            path: ":projectID",
            element: (
              <>
                Show project details <Outlet />
              </>
            ),
          },
        ],
      },
      {
        path: "members",
        element: <Members />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default router;
