import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./projects/js/Home";
import ProjectPage from "./projects/js/ProjectsPage";
import ProjectsPage from "./projects/js/ProjectsPage";
import Contex from "./projects/js/contex/Contex";

function App() {
  return (
    <Router>
      <header className="sticky">
        <span className="logo">
          <img src="/assets/logo-3.svg" alt="logo" width="49" height="99" />
        </span>
        <NavLink to="/" className="button rounded">
          <span className="icon-home"></span>
          Home
        </NavLink>
        <NavLink to="/projects" className="button rounded">
          Projects
        </NavLink>
        <NavLink to="/contex" className="button rounded">
          Contex
        </NavLink>
      </header>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
          <Route path="/contex" element={<Contex />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
