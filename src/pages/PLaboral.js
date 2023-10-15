import React from 'react';

import '../styles/PLaboral.css';

import LaboralItem from '../components/LaboralItem';
import { LaboralList } from '../helpers/LaboralList';

import Book  from '../assets/book-portfolio/Book-portfolio-wordpress-2023.pdf';

function ProyectosLaborales(){
    return (
        <div className="projects">
          <h1 className="projectTitle">Proyectos laborales</h1>
          <div className="projectList">
            {LaboralList.map((project, idx) => {
              return (
                <LaboralItem id={idx} name={project.name} image={project.image} />
              );
            })}
          </div>

          <div className="CTA">
              <a href={ Book } download={"Book Portfolio 2023"}>Descargar Book Portfolio</a>
          </div>

        </div>
      );
}

export default ProyectosLaborales;