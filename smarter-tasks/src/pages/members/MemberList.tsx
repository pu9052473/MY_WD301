import { useEffect } from "react";
import { fetchMembers } from "../../context/members/action";
import { useMembersDispatch } from "../../context/members/context";
import MemberListItems from "./MemberListItems";

const MemberList = () => {
  const dispatchMembers = useMembersDispatch();
  useEffect(() => {
    // Fetch the list of projects here
    fetchMembers(dispatchMembers);
  }, []);

  return (
    <div className="flex flex-wrap gap-5 mt-5">
      <MemberListItems />
    </div>
  );
};
export default MemberList;
