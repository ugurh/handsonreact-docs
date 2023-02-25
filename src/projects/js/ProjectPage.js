import { useEffect, useState } from "react";
import ErrorCardLarge from "./ErrorCardLarge";
import LoadingSpinner from "./LoadingSpinner";
import PagingButton from "./PagingButton";
import { projectAPI } from "./projectAPI";
import ProjectList from "./ProjectList";

const ProjectPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    loadProjects();
  }, [currentPage]);

  const loadProjects = async () => {
    setLoading(true);
    try {
      const data = await projectAPI.getProjects(currentPage, 2);
      setError(null);
      if (currentPage === 1) {
        setProjects(data);
      } else {
        setProjects((projects) => [...projects, ...data]);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const saveProject = (project) => {
    let updatedProjects = projects.map((p) => {
      return p.id === project.id ? project : p;
    });
    setProjects(updatedProjects);
  };

  const handleMoreClick = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };

  return (
    <>
      {error && <ErrorCardLarge error={error} />}
      <ProjectList projects={projects} onSave={saveProject} />
      {loading && <LoadingSpinner />}
      {!loading && !error && <PagingButton handleMoreClick={handleMoreClick} />}
    </>
  );
};

export default ProjectPage;
