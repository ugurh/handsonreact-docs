import PropTypes from "prop-types";
import Project from "../ts/Project";

function ProjectForm(props) {
  const { onCancel , onSave } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(new Project({ name: "Updated Project" }));
  };

  return (
    <form className="input-group vertical" onSubmit={handleSubmit}>
      <label htmlFor="name">Project Name</label>
      <input type="text" name="name" placeholder="enter name" />
      <label htmlFor="description">Project Description</label>
      <textarea name="description" placeholder="enter description" />
      <label htmlFor="budget">Project Budget</label>
      <input type="number" name="budget" placeholder="enter budget" />
      <label htmlFor="isActive">Active?</label>
      <input type="checkbox" name="isActive" />
      <div className="input-group">
        <button className="primary bordered medium">
          Save
        </button>
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
};

export default ProjectForm;