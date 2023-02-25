import ProjectCard from "./ProjectCard";
import PropTypes from "prop-types";
import { useState } from "react";
import ProjectForm from "./ProjectForm";

function ProjectList({ projects, onSave }) {
  const [projectBeingEdited, setProjectBeingEdited] = useState({});

  const editProject = (project) => {
    setProjectBeingEdited(project);
  };

  const cancelEditingProject = () => {
    setProjectBeingEdited({})
  }

  const items = projects.map((project) => (
    <div key={project.id} className="cols-sm">
      {project === projectBeingEdited ? (
        <ProjectForm  onCancel={cancelEditingProject} onSave = {onSave} project={project}/>
      ) : (
        <ProjectCard project={project} onEdit={editProject} />
      )}
    </div>
  ));

  return <div className="row">{items}</div>;
}

ProjectList.propTypes = {
  onSave: PropTypes.func.isRequired
};

export default ProjectList;
