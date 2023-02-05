import ProjectCard from "./ProjectCard";
import ProjectForm from "../../ProjectForm";

function ProjectList({ projects }) {

     const onEdit = (project) => {
         console.log(project);
       };
    

  const items = projects.map((project) => (
    <div key={project.id} className="cols-sm">
      <ProjectCard project={project} onEdit={onEdit} />
      <ProjectForm />
    </div>
  ));

  return <div className="row">{items}</div>;
}

export default ProjectList;
