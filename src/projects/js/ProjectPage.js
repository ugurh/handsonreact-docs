import { useEffect, useState } from "react";
import ErrorCardLarge from "./ErrorCardLarge";
import LoadingSpinner from "./LoadingSpinner";
import { projectAPI } from "./projectAPI";
import ProjectList from "./ProjectList";

const ProjectPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    setLoading(true);
    try {
      const data = await projectAPI.getProjects(1, 2);
      setError(null);
      setProjects(data);
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

  return (
    <>
      {error && <ErrorCardLarge error={error} />}
      <ProjectList projects={projects} onSave={saveProject} />
      {loading && <LoadingSpinner />}
    </>
  );
};

export default ProjectPage;
