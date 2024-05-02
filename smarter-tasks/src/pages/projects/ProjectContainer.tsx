import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { fetchMembers } from "../../context/members/action";
import { fetchProjects } from "../../context/projects/actions";
import { useMembersDispatch } from "../../context/members/context";
import { useProjectsDispatch } from "../../context/projects/context";

const ProjectContainer = () => {
  const memberDispatch = useMembersDispatch();
  const projectDispatch = useProjectsDispatch();
  useEffect(() => {
    fetchProjects(projectDispatch);
    fetchMembers(memberDispatch);
  }, [projectDispatch, memberDispatch]);

  return <Outlet />;
};

export default ProjectContainer;
