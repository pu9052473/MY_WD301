import { createBrowserRouter, Navigate, RouterProvider, } from "react-router-dom";
import Layout from "./Layout";
import Signin from "./pages/Signin";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./ProtectedRoute";
import TaskListPage from "./pages/TaskListPage";
import TaskDetailsPage from "./pages/TaskDetailsPage";


// this is a "router metthod" for rendering the pages
const router = createBrowserRouter([
  {
    path: "*",
    element: <Navigate to= "/notfound" replace />
  },
  {
    path: "/notfound",
    element: <NotFound />
  },
  {
    path: "/",
    element: <Navigate to= "/signin" replace /> // whenever user enters he goes in "/" url but we replace and navigates it to the "/signin" url, in which we give "<Signin />" component 
  },
  {
    path: "/signin",
    element: <Signin />
  },
  {
    element: (
      <ProtectedRoute>
        <Layout /> 
      </ProtectedRoute>
    ),
    children: [ // in this every one is child components of "<Layout />" component
    {
      path: "/home", // path of url
      element: <HomePage /> // the page that we are show in the upper url
    },
    {
      path: "/tasks",
      element: <TaskListPage />
    },
    {
      path: "/tasks/:id",
      element: (<TaskDetailsPage />)
    },
   ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
