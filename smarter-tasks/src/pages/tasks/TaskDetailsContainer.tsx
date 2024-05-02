import TaskDetails from "./TaskDetails";
import { useParams } from "react-router-dom";
import { useTasksState } from "../../context/task/context";
import { CommentsProvider } from "../../context/comment/context";
import { useProjectsState } from "../../context/projects/context";

const TaskDetailsContainer = () => {
  const { taskID } = useParams();
  const taskListState = useTasksState();
  const projectState = useProjectsState();
  const isFetchingTasks = taskListState.isLoading;
  const selectedTask = taskListState.projectData.tasks?.[taskID || ""];
  // We will render a loader based on the status,
  // We make sure, the tasks have been fetched, project is a valid one.
  if (isFetchingTasks || !projectState || projectState?.isLoading) {
    return <>Loading...</>;
  }
  if (!selectedTask) {
    return <>No such task!</>;
  }

  return (
    <CommentsProvider>
      <TaskDetails />
    </CommentsProvider>
  );
};

export default TaskDetailsContainer;
