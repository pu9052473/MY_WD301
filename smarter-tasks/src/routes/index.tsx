import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

const Signin = React.lazy(() => import("../pages/signin"));
const Signup = React.lazy(() => import("../pages/signup"));
const Logout = React.lazy(() => import("../pages/logout"));
const Members = React.lazy(() => import("../pages/members"));
const Projects = React.lazy(() => import("../pages/projects"));
const NotFound = React.lazy(() => import("../pages/NotFound"));
const Dashboard = React.lazy(() => import("../pages/dashboard"));
const NewTask = React.lazy(() => import("../pages/tasks/NewTask"));
const ProtectedRoute = React.lazy(() => import("./ProtectedRoute"));
const AccountLayout = React.lazy(() => import("../layouts/account"));
const ProjectDetailsIndex = React.lazy(
  () => import("../pages/project_details")
);
const ProjectContainer = React.lazy(
  () => import("../pages/projects/ProjectContainer")
);
const TaskDetailsContainer = React.lazy(
  () => import("../pages/tasks/TaskDetailsContainer")
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/signin" replace />,
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
    ErrorBoundary: () => <>Faild TO Load The Page</>,

    children: [
      { index: true, element: <Navigate to="/account/projects" replace /> },
      {
        path: "projects",
        element: <ProjectContainer />,
        children: [
          { index: true, element: <Projects /> },
          {
            path: ":projectID",
            element: <ProjectDetailsIndex />,
            children: [
              { index: true, element: <></> },
              {
                path: "tasks",
                children: [
                  { index: true, element: <Navigate to="../" replace /> },
                  {
                    path: "new",
                    element: <NewTask />,
                  },
                  {
                    path: ":taskID",
                    children: [
                      { index: true, element: <TaskDetailsContainer /> },
                    ],
                  },
                ],
              },
            ],
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
