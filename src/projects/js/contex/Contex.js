import { createContext, useState } from "react";
import Toolbar from "./Toolbar";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};
export const ThemeContext = createContext(themes.light);

const Contex = () => {
  const [themeName, setThemeName] = useState("light");
  const currentTheme = themes[themeName];

  return (
    <>
      <select
        value={currentTheme}
        onChange={(event) => setThemeName(event.target.value)}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>

      <ThemeContext.Provider value={currentTheme}>
        <Toolbar />
      </ThemeContext.Provider>
    </>
  );
};

export default Contex;
