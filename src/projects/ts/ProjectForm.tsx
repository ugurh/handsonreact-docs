import React, { SyntheticEvent, useState } from "react";
import ErrorCard from "./ErrorCard";
import Project from "./Project";

interface ProjectFormProps {
  onSave: (project: Project) => void;
  cancelEditing: () => void;
  project: Project;
}

function ProjectForm({
  onSave,
  cancelEditing,
  project: initialProject,
}: ProjectFormProps) {
  const [project, setProject] = useState(initialProject);
  const [error, setError] = useState({
    name: "",
    description: "",
    budget: "",
  });

  function validate(project: Project) {
    let errors: any = { name: "", description: "", budget: "" };
    if (project.name.length === 0) {
      errors.name = "Name is required";
    }
    if (project.name.length > 0 && project.name.length < 3) {
      errors.name = "Name needs to be at least 3 characters.";
    }
    if (project.description.length === 0) {
      errors.description = "Description is required.";
    }
    if (project.budget === 0) {
      errors.budget = "Budget must be more than $0.";
    }
    return errors;
  }

  function isValid() {
    return (
      error.name.length === 0 &&
      error.description.length === 0 &&
      error.budget.length === 0
    );
  }

  const handleChange = (event: any) => {
    const { type, name, value, checked } = event.target;
    let updatedValue = type === "checkbox" ? checked : value;

    if (type === "number") {
      updatedValue = Number(updatedValue);
    }
    const change = {
      [name]: updatedValue,
    };

    let updatedProject: Project;
    setProject((p) => {
      updatedProject = new Project({ ...p, ...change });
      return updatedProject;
    });
    setError(() => validate(updatedProject));
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    if (!isValid()) return;
    onSave(project);
  };

  return (
    <form className="input-group vertical" onSubmit={handleSubmit}>
      <label htmlFor="name">Project Name</label>
      <input
        type="text"
        name="name"
        placeholder="enter name"
        value={project.name}
        onChange={handleChange}
      />
      {error.name.length > 0 && <ErrorCard message={error.name} />}
      <label htmlFor="description">Project Description</label>
      <textarea
        name="description"
        placeholder="enter description"
        value={project.description}
        onChange={handleChange}
      />
      {error.description.length > 0 && (
        <ErrorCard message={error.description} />
      )}

      <label htmlFor="budget">Project Budget</label>
      <input
        type="number"
        name="budget"
        placeholder="enter budget"
        value={project.budget}
        onChange={handleChange}
      />
      {error.budget.length > 0 && <ErrorCard message={error.budget} />}

      <label htmlFor="isActive">Active?</label>
      <input
        type="checkbox"
        name="isActive"
        checked={project.isActive}
        onChange={handleChange}
      />
      <div className="input-group">
        <button className="primary bordered medium">Save</button>
        <span />
        <button
          type="button"
          className="bordered medium"
          onClick={cancelEditing}
        >
          cancel
        </button>
      </div>
    </form>
  );
}

export default ProjectForm;
