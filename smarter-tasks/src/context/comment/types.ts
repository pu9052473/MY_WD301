import React from "react";

export type CommentDetails = {
  id: number;
  task_id: number;
  owner: number;
  discription: string;
  createdAt: string;
  updatedAT: string;
};

export type Comment = Omit<
  CommentDetails,
  "id" | "task_id" | "createdAt" | "updatedAT"
>;

export enum CommentListAvailableAction {
  FETCH_COMMENTS_REQUEST = "FETCH_COMMENTS_REQUEST",
  FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS",
  FETCH_COMMENTS_FAILURE = "FETCH_COMMENTS_FAILURE",

  CREATE_COMMENT_REQUEST = "CREATE_COMMENT_REQUEST",
  CREATE_COMMENT_SUCCESS = "CREATE_COMMENT_SUCCESS",
  CREATE_COMMENT_FAILURE = "CREATE_COMMENT_FAILURE",
}

export type CommentAction =
  | { type: CommentListAvailableAction.FETCH_COMMENTS_REQUEST }
  | {
      type: CommentListAvailableAction.FETCH_COMMENTS_SUCCESS;
      payload: CommentDetails[];
    }
  | { type: CommentListAvailableAction.FETCH_COMMENTS_FAILURE; payload: string }
  | { type: CommentListAvailableAction.CREATE_COMMENT_REQUEST }
  | {
      type: CommentListAvailableAction.CREATE_COMMENT_SUCCESS;
      payload: CommentDetails;
    }
  | {
      type: CommentListAvailableAction.CREATE_COMMENT_FAILURE;
      payload: string;
    };

export type CommentPayload = {
  owner: string; //here it is the name of the owner
  description: string;
};

export type CommentDispatch = React.Dispatch<CommentAction>;
