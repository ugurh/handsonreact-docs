import { useState } from "react";

const Box = () => {
  const [position, setPosition] = useState({ left: 0, top: 0 });
  const [size, setSize] = useState({ width: 100, height: 100 });

  const handleWindowMouseMove = (e) => {
    setPosition({ left: e.pageX, top: e.pageY });
  };
  return <div onMouseMove={handleWindowMouseMove}>X:{position.left} Y:{position.top}</div>;
};

export default Box;
