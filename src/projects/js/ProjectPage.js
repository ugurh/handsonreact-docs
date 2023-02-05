import React from "react";
import ProjectList from "./ProjectList";
import { MOCK_PROJECTS } from "../MockProjects";

const ProjectPage = () => {

  const saveProject = (project) => {
    console.log("Saving project: ", project);
  };

  return (
    <div>
      <ProjectList projects={MOCK_PROJECTS} onSave={saveProject} />
    </div>
  );
};

export default ProjectPage;
