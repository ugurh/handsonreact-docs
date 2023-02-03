import Project from "../Project";
import ProjectCard from "./ProjectCard";

interface ProjectListProps {
  projects: Project[];
}

const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <div className="row">
      {projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
      ))}
    </div>
  );
};

export default ProjectList;
