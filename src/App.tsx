import { useState } from "react";
import "./App.css";
import Clock2 from "./projects/js/Clock2";
import SideEffect from "./projects/js/SideEffect";

function App() {
  const [counter, setCounter] = useState(0);

  const onIncrement = () => {
    setCounter((previousCounter) => previousCounter + 1);
  };

  return (
    <div className="container">
      <SideEffect />
      <Clock2 />
    </div>
  );
}

export default App;
