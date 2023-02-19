import { useState } from "react";
import "./App.css";
import ProjectPage from "./projects/ts/ProjectsPage";
function App() {
  const [counter, setCounter] = useState(0);

  const onIncrement = () => {
    setCounter((previousCounter) => previousCounter + 1);
  };

  return (
    <div className="container">
    <ProjectPage />
    </div>
  );
}

export default App;
