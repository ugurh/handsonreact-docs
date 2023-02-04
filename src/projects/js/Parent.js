import { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [words, setWords] = useState("");

  const handleClick = () => {
    setWords("Did you do your homework?");
  };

  const onRequest = (request) => {
    if (request.includes("car")) {
      alert("No");
    }
  };

  return (
    <div>
      <h1>Parent</h1>
      <button onClick={handleClick}>Ask</button>
      <Child words={words} onRequest={onRequest} />
    </div>
  );
};

export default Parent;
