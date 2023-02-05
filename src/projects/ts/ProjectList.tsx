import { useState } from "react";
import Project from "../Project";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";

interface ProjectListProps {
  projects: Project[];
}

const ProjectList = ({ projects }: ProjectListProps) => {
  const [projectBeingEdited, setProjectBeingEdited] = useState({});

  const editProject = (project: Project) => {
    setProjectBeingEdited(project);
  };

  const cancelEditing = () => {
    setProjectBeingEdited({});
  };

  return (
    <div className="row">
      {projects.map((project) =>
        projectBeingEdited === project ? (
          <ProjectForm cancelEditing={cancelEditing} />
        ) : (
          <ProjectCard
            project={project}
            key={project.id}
            editProject={editProject}
          />
        )
      )}
    </div>
  );
};

export default ProjectList;
