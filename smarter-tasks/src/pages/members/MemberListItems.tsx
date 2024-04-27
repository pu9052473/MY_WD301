// First, I'll import the useMembersState custom hook to access Members state.
import { useMembersState } from "../../context/members/context";
import { useMembersDispatch } from "../../context/members/context";
import { deleteMember } from "../../context/members/action";
export default function MemberListItems() {
  // I'll define a new constant called `state`, to call the useMembersState() hook,
  // and get access to Members state.
  const state: any = useMembersState();
  console.log("state", state);
  const dispatchMembers = useMembersDispatch();
  const handleDeleteMember = (id: number) => {
    deleteMember(dispatchMembers, id);
  };
  // console.log(state)
  // Next, I'll destructure the state object to gain access to Members,
  // isLoading, isError and errorMessage property.
  const { Members, isLoading, isError, errorMessage } = state;

  // If `isLoading` is true, and there are no Members, in that case,
  // I'll show a loading text
  if (Members.length === 0 && isLoading) {
    return <span>Loading...</span>;
  }

  // Next, if there is an error, I'll show the error message.
  if (isError) {
    return <span>{errorMessage}</span>;
  }

  // And finally I'll iterate over the Members object to show the
  // individual Members card.
  return (
    <>
      {Members.map((Member: any) => (
        <div
          key={Member.id}
          className="member block p-6 w-fit bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
            Name: {Member.name}
          </h5>
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
            Email: {Member.email}
          </h5>
          <button
            onClick={() => handleDeleteMember(Member.id)}
            className="mt-2 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
}
