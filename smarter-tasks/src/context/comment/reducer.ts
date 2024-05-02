import {
  CommentListAvailableAction,
  CommentAction,
  CommentDetails,
} from "./types";

export type CommentState = {
  comments: CommentDetails[];
  isLoading: boolean;
  isError: boolean;
  ErrorMessage: string;
};

export const initialState: CommentState = {
  comments: [],
  isLoading: false,
  isError: false,
  ErrorMessage: "",
};

export const CommentReducer = (
  state: CommentState = initialState,
  action: CommentAction
) => {
  // console.log("state", state);
  // console.log("action", action);

  switch (action.type) {
    case CommentListAvailableAction.FETCH_COMMENTS_REQUEST:
      // console.log("Fetch reqest");
      return { ...state, isLoading: true };

    case CommentListAvailableAction.FETCH_COMMENTS_SUCCESS:
      // console.log("Payload:", action.payload);
      return { ...state, isLoading: false, comments: action.payload };

    case CommentListAvailableAction.FETCH_COMMENTS_FAILURE:
      return { ...state, isLoading: false, ErrorMessage: action.payload };

    case CommentListAvailableAction.CREATE_COMMENT_REQUEST:
      return { ...state, isLoading: true };

    case CommentListAvailableAction.CREATE_COMMENT_SUCCESS:
      // console.log("Payload:", action.payload);
      return {
        ...state,
        isLoading: false,
        comments: [...state.comments, action.payload],
      };

    case CommentListAvailableAction.CREATE_COMMENT_FAILURE:
      return { ...state, isLoading: false, ErrorMessage: action.payload };

    default:
      return state;
  }
};
