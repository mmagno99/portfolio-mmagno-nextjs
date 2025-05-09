import React from "react";

import styles from "../../styles/pages/personal-projects/index.module.css";
// import "../styles/Splide.css"; se llamanda a llamar en _app.jsx

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import ProjectItem from "../../components/ProjectItem.jsx";
import { ProjectList } from "../../helpers/ProjectList.jsx";

import { useTranslation } from 'react-i18next';

function Proyectos() {
  const { t } = useTranslation();
  return (
    <div className={styles.projects}>
      <h1 className={styles.projectTitle}>{t("projects.personalProjects.title")}</h1>

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
              1024: {   // Tabletas (1024px o menos)
                perPage: 2,  // Muestra 2 slides
                arrows: true,
              },
              600: {    // Móviles (600px o menos)
                perPage: 1,  // Muestra 1 slide
                arrows: true,
              },
            },
          }}
          aria-label="Proyectos personales"
        >
          {/* {ProjectList.map((project, idx) => (
            <SplideSlide key={idx}>
              <div className="slide-inner">
                <ProjectItem 
                  id={idx} name={project.name} image={project.image}
                />
              </div>
            </SplideSlide>
          ))} */}

            {ProjectList.map((project, idx) => (
              <SplideSlide key={idx}>
                <div className="slide-inner">
                  {project.comingSoon && project.component ? (
                    project.component
                  ) : (
                    <ProjectItem
                      id={idx}
                      name={project.name}
                      image={project.image}
                    />
                  )}
                </div>
              </SplideSlide>
            ))}
        </Splide>
      </div>

    </div>
  );
}

export default Proyectos;
