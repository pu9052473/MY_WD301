import { createBrowserRouter, Navigate, RouterProvider, Routes, } from "react-router-dom";
import Signin from "./pages/signin";
import Signup from './pages/signup';
import Dashboard from "./pages/dashboard";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./ProtectedRoute";


// this is a "router metthod" for rendering the pages
const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <Signin />,
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
    path: "*",
    element: <NotFound />,
  }
  // {
    //   element: (
      //     <ProtectedRoute>
      //       <Layout /> 
      //     </ProtectedRoute>
      //   ),
      //   children: [ // in this every one is child components of "<Layout />" component
      //   {
        //     path: "/home", // path of url
        //     element: <HomePage /> // the page that we are show in the upper url
        //   },
        //   {
          //     path: "/tasks",
          //     element: <TaskListPage />
          //   },
          //   {
            //     path: "/tasks/:id",
            //     element: (<TaskDetailsPage />)
            //   },
            //  ]
            // }
]);


function App() {
  return (
    <div>
      {/* <Form />
      <ReactPlayground /> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
