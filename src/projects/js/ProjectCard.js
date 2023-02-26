import PropTypes from "prop-types";
import Project from "../ts/Project";
import { Link } from "react-router-dom";

function ProjectCard(props) {
  const { project, onEdit } = props;

  function editProject(project) {
    onEdit(project);
  }

  return (
    <div className="card">
      <img src={project.imageUrl} alt={project.name} />
      <section className="section dark">
        <Link to={`/projects/${project.id}`}>
          <h5 className="strong">
            <strong>{project.name}</strong>
          </h5>
          <p>{formatDescription(project.description)}</p>
          <p>Budget : {project.budget.toLocaleString()}</p>
        </Link>
        <button className="bordered" onClick={() => editProject(project)}>
          <span className="icon-edit "></span>
          Edit
        </button>
      </section>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.instanceOf(Project).isRequired,
  onEdit: PropTypes.func.isRequired,
};

function formatDescription(description) {
  return description.substring(0, 60) + "...";
}

export default ProjectCard;
