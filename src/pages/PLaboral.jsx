import React from 'react';
import '../styles/PLaboral.css';
import '../styles/Splide.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import LaboralItem from '../components/LaboralItem';
import { LaboralList } from '../helpers/LaboralList';
import Book from '../assets/book-portfolio/Book-portfolio-wordpress-2023.pdf';

function ProyectosLaborales() {
  return (
    <div className="projectsLaboral">
      <h1 className="projectTitleLaboral">Proyectos en balabox</h1>
      <h3 style={{textAlign: 'center'}}>Probablemente algunos <br/>estén inactivos 😭</h3>
      
      <div className="slider-container">
        <Splide
          options={{
            type: 'loop',
            perPage: 3,
            perMove: 1,
           
            pagination: false,
            arrows: true,
            speed: 800, // Duración de la animación en ms (más lento para el efecto)
            easing: 'cubic-bezier(0.25, 1, 0.5, 1)', // Curva de animación personalizada
            breakpoints: {
              900: { 
                perPage: 2,
               
                arrows: true,
              },
              600: { 
                perPage: 1,
                
                arrows: true, // Flechas SIEMPRE activas
              },
            },
          }}
          aria-label="Proyectos laborales"
        >
          {LaboralList.map((projectLaboral, idx) => (
            <SplideSlide key={idx}>
              <div className="slide-inner">
                <LaboralItem 
                  id={idx} 
                  name={projectLaboral.name} 
                  image={projectLaboral.image} 
                />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>

      <div className="CTA">
        <a href={Book} download="Book Portfolio 2023">Descargar Book Portfolio</a>
      </div>
    </div>
  );
}

export default ProyectosLaborales;