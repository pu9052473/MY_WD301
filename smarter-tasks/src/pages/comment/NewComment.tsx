import { useForm, SubmitHandler } from "react-hook-form";
import { useParams } from "react-router-dom";
import {
  useCommentDispatch,
  useCommentState,
} from "../../context/comment/context";
// import { useState } from 'react';
import { CreateComment } from "../../context/comment/action";
import { CommentPayload } from "../../context/comment/types";

const NewCommentForm = () => {
  const { projectID, taskID } = useParams();
  const userID = JSON.parse(localStorage.getItem("userData") ?? "").id;

  const {
    register,
    handleSubmit,
    formState: {},
  } = useForm<CommentPayload>();

  const CommentState = useCommentState();
  const CommentDispatch = useCommentDispatch();

  const onSubmit: SubmitHandler<CommentPayload> = async (data) => {
    data["owner"] = userID;
    console.log(data);

    try {
      CreateComment(CommentDispatch, projectID ?? "", taskID ?? "", data);
    } catch (error) {
      console.log("Error While submitting", error);
    }
  };
  // const commentState = useCommentState()

  return (
    <>
      <div className="mt-2">
        <hr />
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="textarea"
            placeholder="Enter Comment"
            required
            autoFocus
            id="commentBox"
            {...register("description", { required: true })}
            className={`w-full border rounded-md py-2 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue`}
          />
          <button
            type="submit"
            // Set an id for the submit button
            id="addCommentBtn"
            className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 mr-2 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            Add Comment
          </button>
        </form>
        <div className="text-red-500">{CommentState.ErrorMessage}</div>
      </div>
    </>
  );
};
export default NewCommentForm;
