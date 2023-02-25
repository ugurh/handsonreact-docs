import { useState } from "react";
import { MOCK_PROJECTS } from "./MockProjects";
import Project from "./Project";
import ProjectList from "./ProjectList";

const ProjectPage = () => {
  const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS);

  const onSave = (project: Project) => {
    let updatedProjects = projects.map((p: Project) => {
      return p.id === project.id ? project : p;
    });
    setProjects(updatedProjects);
  };

  return (
    <>
      <h1>Projects</h1>
      <ProjectList projects={projects} onSave={onSave} />
    </>
  );
};
export default ProjectPage;
