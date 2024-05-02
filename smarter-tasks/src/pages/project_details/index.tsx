import { Outlet } from "react-router-dom";
import ProjectDetails from "./ProjectDetails";
import { TasksProvider } from "../../context/task/context";

const ProjectDetailsIndex: React.FC = () => {
  return (
    <>
      <TasksProvider>
        <ProjectDetails />
        <Outlet />
      </TasksProvider>
    </>
  );
};

export default ProjectDetailsIndex;
