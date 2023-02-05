import ProjectCard from "./ProjectCard";
import ProjectForm from "../../ProjectForm";
import { useState } from "react";

function ProjectList({ projects }) {
  const [projectBeingEdited, setProjectBeingEdited] = useState({});

  const onEdit = (project) => {
    setProjectBeingEdited(project);
  };

  const items = projects.map((project) => (
    <div key={project.id} className="cols-sm">
      {project == projectBeingEdited ? (
        <ProjectForm />
      ) : (
        <ProjectCard project={project} onEdit={onEdit} />
      )}
    </div>
  ));

  return <div className="row">{items}</div>;
}

export default ProjectList;
