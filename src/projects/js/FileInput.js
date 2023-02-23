import React, { useRef } from "react";

const FileInput = () => {
  const fileInput = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(fileInput.current);
    if (!fileInput) return;
    alert(`Selected file - ${fileInput.current.files[0].name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Upload file:
        <input type="file" ref={fileInput} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FileInput;
