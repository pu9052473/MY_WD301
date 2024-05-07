import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { fetchMembers } from "../../context/members/action";
import { fetchProjects } from "../../context/projects/actions";
import { useMembersDispatch } from "../../context/members/context";
import { useProjectsDispatch } from "../../context/projects/context";

const ProjectContainer = () => {
  // Get the dispatch function from the projects context
  const memberDispatch = useMembersDispatch();
  const projectDispatch = useProjectsDispatch();
  // Fetch projects when the component mounts
  useEffect(() => {
    fetchProjects(projectDispatch);
    fetchMembers(memberDispatch);
  }, [projectDispatch, memberDispatch]); // Dependency array ensures the effect runs when projectDispatch changes

  // Render the child route components using Outlet
  return <Outlet />;
};

export default ProjectContainer;
