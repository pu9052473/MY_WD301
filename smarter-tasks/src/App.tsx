/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  Routes,
} from "react-router-dom";

import router from "./routes";
import { useContext } from "react";
import { ThemeContext } from "./context/theme";
import { ProjectsProvider } from "./context/projects/context";
import { MembersProvider } from "./context/members/context";

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

function App() {
  const { theme } = useContext(ThemeContext); // we are taking and storing the value of "ThemeContext" using "useContext"
  return (
    <div
      className={`h-screen w-full mx-auto py-2 ${
        theme === "dark" ? "dark" : ""
      }`}
    >
      <MembersProvider>
        <ProjectsProvider>
          <RouterProvider router={router} />
        </ProjectsProvider>
      </MembersProvider>
    </div>
  );
}

export default App;
