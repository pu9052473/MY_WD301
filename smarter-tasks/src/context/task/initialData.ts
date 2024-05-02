import { ProjectData } from "./types";

const initialData: ProjectData = {
  columns: {
    pending: {
      id: "pending",
      title: "Pending",
      taskIDs: ["2"],
    },
    in_progress: {
      id: "in_progress",
      title: "In progress",
      taskIDs: ["1"],
    },
    done: {
      id: "done",
      title: "Done",
      taskIDs: [],
    },
  },
  tasks: {
    "1": {
      id: 1,
      title: "first Sample Task",
      description: "Sample description about the task which is to be completed",
      dueDate: "18-02-2024",
      state: "in_progress",
      assignee: undefined,
      assignedUserName: undefined,
    },
    "2": {
      id: 2,
      title: "second Sample Task",
      description: "Sample description about the task which is to be completed",
      dueDate: "16-06-2024",
      state: "pending",
      assignee: undefined,
      assignedUserName: undefined,
    },
    "3": {
      id: 3,
      title: "third Sample Task",
      description: "Sample description about the task which is to be completed",
      dueDate: "18-02-2024",
      state: "in_progress",
      assignee: undefined,
      assignedUserName: undefined,
    },
    "4": {
      id: 4,
      title: "forth Sample Task",
      description: "Sample description about the task which is to be completed",
      dueDate: "16-06-2024",
      state: "pending",
      assignee: undefined,
      assignedUserName: undefined,
    },
  },
  columnOrder: ["pending", "in_progress", "done"],
};

export default initialData;
