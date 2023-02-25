import { useState } from "react";
import ProjectList from "./ProjectList";
import { MOCK_PROJECTS } from "../ts/MockProjects";

const ProjectPage = () => {
  const [projects, setProjects] = useState(MOCK_PROJECTS);

  const saveProject = (project) => {
    let updatedProjects = projects.map((p) => {
      return (p.id = project.id ? project : p);
    });
    setProjects(updatedProjects);
  };

  return (
    <div>
      <ProjectList projects={projects} onSave={saveProject} />
    </div>
  );
};

export default ProjectPage;
