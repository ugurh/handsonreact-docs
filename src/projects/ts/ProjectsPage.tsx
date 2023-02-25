import { useEffect, useState } from "react";
import LoadingSpinner from "../js/LoadingSpinner";
import ErrorCard from "./ErrorCard";
import MoreButton from "./MoreButton";
import Project from "./Project";
import { projectAPI } from "./projectAPI";
import ProjectList from "./ProjectList";

const ProjectPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [currentPage, setCurrentPage] = useState(1);

  const onSave = (project: Project) => {
    let updatedProjects = projects.map((p: Project) => {
      return p.id === project.id ? project : p;
    });
    setProjects(updatedProjects);
  };

  const handleMoreClick = () => {
    console.log(currentPage)
    setCurrentPage((currentPage) => currentPage + 1);
  };

  useEffect(() => {
    async function loadProjects() {
      setLoading(true);
      try {
        const data = await projectAPI.getProjects(currentPage);
        setError("");
        if (currentPage === 1) {
          setProjects(data);
        } else {
          setProjects((projects) => [...projects, ...data]);
        }
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        }
      } finally {
        setLoading(false);
      }
    }
    loadProjects();
  }, [currentPage]);
  return (
    <>
      {loading && <LoadingSpinner />}
      {error && <ErrorCard message={error} />}
      {!error && !loading && (
        <ProjectList projects={projects} onSave={onSave} />
      )}
      {!error && !loading && <MoreButton moreClick={handleMoreClick} />}
    </>
  );
};
export default ProjectPage;
