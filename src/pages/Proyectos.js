import React from "react";

import "../styles/Projects.css";

import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";

function Proyectos() {
  return (
    <div className="projects">
      <h1 className="projectTitle">Mis proyectos personales</h1>
      <h3>Me hace falta agregar más 😓</h3>
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
