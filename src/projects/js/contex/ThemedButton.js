import { useContext } from "react";
import { ThemeContext } from "./Contex";

const ThemedButton = () => {
  const { background, foreground } = useContext(ThemeContext);

  return (
    <button
      style={{
        backgroundColor: background,
        color: foreground,
      }}
    >
      Click Me
    </button>
  );
};

export default ThemedButton;
