import PropTypes from "prop-types";
import { useState } from "react";
import Project from "../ts/Project";
import ErrorCard from "./ErrorCard";

function ProjectForm(props) {
  const { onCancel, onSave, project: initialProject } = props;
  const [project, setProject] = useState(initialProject);
  const [error, setError] = useState({ name: "", description: "", budget: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValid()) return;
    onSave(project);
  };

  const handleChange = (event) => {
    const { type, name, value, checked } = event.target;
    // if input type is checkbox use checked otherwise it's type is text, number etc. so use value
    let updatedValue = type === "checkbox" ? checked : value;

    //if input type is number convert the updatedValue string to a +number
    if (type === "number") {
      updatedValue = Number(updatedValue);
    }
    const change = {
      [name]: updatedValue,
    };

    let updatedProject;
    // need to do functional update b/c
    // the new project state is based on the previous project state
    // so we can keep the project properties that aren't being edited +like project.id
    // the spread operator (...) is used to
    // spread the previous project properties and the new change
    setProject((p) => {
      updatedProject = new Project({ ...p, ...change });
      return updatedProject;
    });
    setError(() => valide(updatedProject));
  };

  const valide = (project) => {
    let error = { name: "", description: "", budget: "" };
    if (project.name.length === 0) {
      error.name = "Name is required";
    }
    if (project.name.length > 0 && project.name.length < 3) {
      error.name = "Name needs to be at least 3 characters.";
    }
    if (project.description.length === 0) {
      error.description = "Description is required.";
    }
    if (project.budget <= 0) {
      error.budget = "Budget must be more than $0.";
    }
    return error;
  };

  const isValid = () => {
    return (
      error.name.length === 0 &&
      error.description.length === 0 &&
      error.budget.length === 0
    );
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
      {error.name.length > 0 && <ErrorCard errorMessage={error.name} />}
      <label htmlFor="description">Project Description</label>
      <textarea
        name="description"
        placeholder="enter description"
        value={project.description}
        onChange={handleChange}
      />
      {error.description.length > 0 && (
        <ErrorCard errorMessage={error.description} />
      )}
      <label htmlFor="budget">Project Budget</label>
      <input
        type="number"
        name="budget"
        placeholder="enter budget"
        value={project.budget}
        onChange={handleChange}
      />
      {error.budget.length > 0 && <ErrorCard errorMessage={error.budget} />}

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
        <button type="button" className="bordered medium" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}

ProjectForm.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  project: PropTypes.instanceOf(Project),
};

export default ProjectForm;
