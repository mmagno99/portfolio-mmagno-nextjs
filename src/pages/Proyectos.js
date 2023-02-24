import React from "react";

import ProjectItem from "../components/ProjectItem";
import "../styles/Projects.css";
import { ProjectList } from "../helpers/ProjectList";

function Proyectos() {
  return (
    <div className="projects">
      <h1 className="projectTitle">Mis proyectos personales</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem id={idx} name={project.name} image={project.image} />
          );
        })}
      </div>
    </div>
  );
}

export default Proyectos;
