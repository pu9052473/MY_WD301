import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { fetchComments } from "../../context/comment/action";
import { useMembersState } from "../../context/members/context";
import {
  useCommentDispatch,
  useCommentState,
} from "../../context/comment/context";

const formatCommentsDate = (commentDate: string) => {
  const commentdateObject: Date = new Date(commentDate);
  const year = commentdateObject.getFullYear();
  const month = String(commentdateObject.getMonth() + 1);
  const day = String(commentdateObject.getDay());
  return `${day}-${month}-${year}`;
};

const CommentsList = () => {
  const CommentDispatch = useCommentDispatch();
  const { projectID, taskID } = useParams();

  //   console.log("projectID", projectID, "->taskID", taskID);

  useEffect(() => {
    fetchComments(CommentDispatch, projectID ?? "", taskID ?? "");
  }, [projectID, taskID, CommentDispatch]);

  const state = useCommentState();
  //   console.log("Comments State", state);

  const { comments, isLoading, isError, ErrorMessage } = state;
  //   console.log(comments);

  const members: any = useMembersState()?.Members;
  //   console.log("members", members);

  if (comments.length == 0 && isLoading) {
    return <div className={`text-blue-400 font-semibold`}>Loading...</div>;
  }
  if (isError) {
    return <div>{ErrorMessage}</div>;
  }
  if (comments.length == 0) {
    return (
      <div className={`text-blue-400 font-semibold`}>Add First Comment</div>
    );
  }
  // const sortedComments = Comments.sort
  // Assuming you have an array of objects named 'comments'
  //Sorting Comments into Chronological reverse order
  //   comments.sort(
  //     (a, b) => new Date(b.createdAt).getDate - new Date(a.createdAt).getDate
  //   );
  const selectedTaskComments = comments.filter(
    (task: any) => `${task.task_id}` === taskID
  );

  //   console.log("selectedTaskComments:", selectedTaskComments);

  return (
    <>
      {/* <div className="mt-4 ">
            <Link 
                to={`comments/new`}
            >Add New Comment</Link>
        </div> */}
      <b>List of Comments:</b>
      {comments.map((comment: any) => {
        const commentOwner = members.filter(
          (member: any) => member.id === comment.owner
        );

        return (
          <div
            className="comment my-3 bg-white-200 rounded p-2"
            key={`${comment.owner}-${comment.createdAt}`}
          >
            <fieldset className="rounded-md border-2 border-black-800 ">
              <legend className="text-blue-600">{`${
                commentOwner[0].name
              }: ${formatCommentsDate(comment.createdAt)}`}</legend>
              <p>{comment.description}</p>
            </fieldset>
          </div>
        );
      })}
    </>
  );
};

export default CommentsList;
