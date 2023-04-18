import React from 'react';


import EmailIcon from '@material-ui/icons/Email';
import GithubIcon from '@material-ui/icons/GitHub';

import CV from '@material-ui/icons/CloudDownload';

import Curriculum from '../assets/cv/Marcos_Gonzalez_CV.pdf';





import '../styles/Inicio.css';

function Inicio() {
  return (
    <div className="home">
      <div className="about">
        <h2 className=""> Bienvenido a <span>M</span>magno</h2>
        <div className="prompt"> 
          <p> Desarrollador Web Jr con pasión por aprender y crear</p>
          <a href={"mailto:contacto.marcosgr@gmail.com"} ><EmailIcon/></a>
          <a href={Curriculum} download={"CV_Marcos_2023"}><CV/></a>
          <a href={"https://github.com/mmagno99"} target={"blank"}><GithubIcon/></a>
        </div>
        </div>
        <div className="skills">
          <h1>Habilidades</h1>
          <ol className='list'>

            <li className="item">
              <h2>Front-End</h2>
              <span>HTML5, CSS3, JavaScript, Bootstrap, SASS, React Js, WordPress </span>
            </li>

            <li className="item">
              <h2>Back-End</h2>
              <span>Python, MySql, PHP</span>
            </li>

            <li className="item">
              <h2>Lenguajes</h2>
              <span>JavaScript, C++, Java, PHP, SQL</span>
            </li>
          </ol>
        </div>
      </div>

  )
}

export default Inicio