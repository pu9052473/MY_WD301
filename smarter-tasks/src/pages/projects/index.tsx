import NewProject from "./NewProject";
import React, { Suspense } from "react";
import ErrorBoundary from "../../components/ErrorBoundary";
const ProjectList = React.lazy(() => import("./ProjectList"));

// The <Suspense> component takes a fallback prop, which is content to be rendered while the lazy component is loading.
// The <ErrorBoundary> component will catch any errors that occur within its children components.
const Projects = () => {
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-2xl font-medium tracking-tight">Projects</h2>
        <NewProject />
      </div>
      <ErrorBoundary>
        <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
          <ProjectList />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};
export default Projects;
