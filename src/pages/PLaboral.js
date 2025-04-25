import React from 'react';

import '../styles/PLaboral.css';

import LaboralItem from '../components/LaboralItem';
import { LaboralList } from '../helpers/LaboralList';

import Book  from '../assets/book-portfolio/Book-portfolio-wordpress-2023.pdf';

function ProyectosLaborales(){
    return (
        <div className="projectsLaboral">
          <h1 className="projectTitleLaboral">Proyectos en balabox</h1>
          <h3 style={{ textAlign: 'center' }}>Probablemente <br/>algunos esten inactivos 😭</h3>
          <div className="projectListLaboral">
            {LaboralList.map((projectLaboral, idx) => {
              return (
                <LaboralItem id={idx} name={projectLaboral.name} image={projectLaboral.image} />
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