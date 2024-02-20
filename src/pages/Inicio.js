import React from "react";

import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";

import CV from "@material-ui/icons/CloudDownload";

import Curriculum from "../assets/cv/CV Marcos Gonzalez Ingeniero informatico.pdf";

import "../styles/Inicio.css";

function Inicio() {
  return (
    <div className="home">
      <div className="about">
        <h2 className="">
          {" "}
          Bienvenido a <span>M</span>magno
        </h2>
        <div className="prompt">
          <p> Desarrollador Web con pasión por aprender y crear</p>
          <a href={"mailto:contacto.marcosgr@gmail.com"}>
            <EmailIcon />
          </a>
          <a
            href={Curriculum}
            download={"CV Marcos Gonzalez Ingeniero informatico"}
          >
            <CV />
          </a>
          <a href={"https://github.com/mmagno99"} target={"blank"}>
            <GithubIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1>Habilidades</h1>
        <h2 className="anuncio">Proximamente se <span className="txt">mejorarán</span> los skills con CSS 🥵</h2>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              HTML5, CSS3, JavaScript, Bootstrap, SASS, React Js, WordPress{" "}
            </span>
            <span>Figma, Elementor, Divi, WP-Bakery</span>
          </li>

          <li className="item">
            <h2>Back-End</h2>
            <span>Python, PHP, MySQL, SQL</span>
          </li>

          <li className="item">
            <h2>Lenguajes</h2>
            <span>JavaScript, C++, Java, PHP</span>
          </li>

          <li className="item">
            <h2>Soporte Técnico</h2>
            <span>Niveles 1 y 2</span>
          </li>

          <li className="item">
            <h2>Redes | Ciberseguridad</h2>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Inicio;
