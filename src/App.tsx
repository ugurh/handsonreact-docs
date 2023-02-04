import { useState } from "react";
import "./App.css";
import Increment from "./projects/js/Increment";
import Result from "./projects/js/Result";

function App() {
  const [counter, setCounter] = useState(0);

  const onIncrement = () => {
    setCounter((previousCounter) => previousCounter + 1);
  };

  return (
    <div className="container">
      <Result counter={counter} />
      <Increment onIncrement={onIncrement} />
    </div>
  );
}

export default App;
