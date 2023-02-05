import { useState } from "react";
import "./App.css";
import ProjectList from "./projects/js/ProjectList";
import { MOCK_PROJECTS } from "./projects/MockProjects";

function App() {
  const [counter, setCounter] = useState(0);

  const onIncrement = () => {
    setCounter((previousCounter) => previousCounter + 1);
  };

  return (
    <div className="container">
     <ProjectList projects={MOCK_PROJECTS} />
    </div>
  );
}

export default App;
