import React, { useRef } from "react";

const ExampleForm = () => {
  const ref = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(ref.current);
    console.log(ref.current.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={ref} value="initial value" />
      <button>Submit</button>
    </form>
  );
};

export default ExampleForm;
