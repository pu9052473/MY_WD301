import { createBrowserRouter, Navigate, RouterProvider, } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TaskListPage from "./pages/TaskListPage";
import TaskApp from "./TaskApp";
import Layout from "./Layout";
import TaskDetailsPage from "./pages/TaskDetailsPage";
import Signin from "./pages/Signin";
import ProtectedRoute from "./ProtectedRoute";


// this is a "router metthod" for rendering the pages
const router = createBrowserRouter([
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
      element: <TaskApp />
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
