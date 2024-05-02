import { API_ENDPOINT } from "../../config/constants";
import { CommentDispatch, CommentListAvailableAction } from "./types";

const token = localStorage.getItem("authToken") ?? "";

export const fetchComments = async (
  dispatch: CommentDispatch,
  projectID: string,
  taskID: string
) => {
  try {
    //This will toogle "isLoading to true"
    dispatch({ type: CommentListAvailableAction.FETCH_COMMENTS_REQUEST });

    //Getting Comments from backend Server through "API"
    const response = await fetch(
      `${API_ENDPOINT}/projects/${projectID}/tasks/${taskID}/comments`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to get Comments");
    }

    const data = await response.json();
    console.log("Commenst data: ", data);

    dispatch({
      type: CommentListAvailableAction.FETCH_COMMENTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: CommentListAvailableAction.FETCH_COMMENTS_FAILURE,
      payload: "unable to load comments",
    });
  }
};

export const CreateComment = async (
  dispatch: CommentDispatch,
  projectID: string,
  taskID: string,
  args: any
) => {
  try {
    dispatch({ type: CommentListAvailableAction.CREATE_COMMENT_REQUEST });
    console.log("args", args);

    const response = await fetch(
      `${API_ENDPOINT}/projects/${projectID}/tasks/${taskID}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(args),
      }
    );

    const data = await response.json();
    console.log("Create Comment DATA: ", data);

    dispatch({
      type: CommentListAvailableAction.CREATE_COMMENT_SUCCESS,
      payload: data,
    });
    fetchComments(dispatch, projectID, taskID);
  } catch (error) {
    console.log(error);
    dispatch({
      type: CommentListAvailableAction.CREATE_COMMENT_FAILURE,
      payload: "Error while creating comment",
    });
  }
};
