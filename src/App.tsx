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
import SplitPane from "./projects/js/composition/SplitPane";
import Contacts from "./projects/js/composition/Contacts";
import Chat from "./projects/js/composition/Chat";
import SignUpDialog from "./projects/js/composition/SignUpDialog";
import Example from "./projects/js/react_query/Example";
import { QueryClient, QueryClientProvider } from "react-query";
import Boxx from "./projects/js/Boxx";

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
        <NavLink to="/composition" className="button rounded">
          Composition
        </NavLink>
        <NavLink to="/singup" className="button rounded">
          SignUp
        </NavLink>
        <NavLink to="/react-query" className="button rounded">
          React Query
        </NavLink>
        <NavLink to="/boxx" className="button rounded">
          Render Props
        </NavLink>
      </header>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
          <Route path="/contex" element={<Contex />} />
          <Route
            path="/composition"
            element={<SplitPane left={<Contacts />} right={<Chat />} />}
          />
          <Route path="singup" element={<SignUpDialog />} />
          <Route
            path="react-query"
            element={
              <QueryClientProvider client={new QueryClient()}>
                <Example />
              </QueryClientProvider>
            }
          />
          <Route
            path="/boxx"
            element={<Boxx render={() => <h3>Jack</h3>}><h3>Jack From Children</h3></Boxx>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
