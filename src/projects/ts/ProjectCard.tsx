import Project from "../Project";

interface ProjectCardProps {
  project: Project;
  editProject: (project: Project) => void;
}

const ProjectCard = ({ project, editProject }: ProjectCardProps) => {
  return (
    <div key={project.id} className="cols-sm">
      <div className="card">
        <img src={project.imageUrl} alt={project.name} />
        <section className="section dark">
          <h5 className="strong">
            <strong>{project.name}</strong>
          </h5>
          <p>{project.description}</p>
          <p>Budget : {project.budget.toLocaleString()}</p>
          <button
            className="bordered"
            onClick={() => {
              editProject(project);
            }}
          >
            <span className="icon-edit "></span>
            Edit
          </button>
        </section>
      </div>
    </div>
  );
};

export default ProjectCard;
