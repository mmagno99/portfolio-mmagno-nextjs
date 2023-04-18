import React from 'react';

import { useParams } from "react-router-dom";
import {ProjectList} from '../helpers/ProjectList';
import '../styles/ProyectoDisplay.css';

import GitHubIcon from '@material-ui/icons/GitHub';
import LiveDemoIcon from '@material-ui/icons/LiveTv';




function ProyectoDisplay() {
  const { id } = useParams();
  const proyecto = ProjectList[id];

  return (
    <div className='project'>
      <h1>{proyecto.name}</h1>
      <img src={proyecto.image} alt="" />

      <p className='paragraphDisplay'>
        <b>Skills:</b> {proyecto.skills}
      </p>

      <div className="iconsDisplay">
        <a href={proyecto.repository} onClick={proyecto.repository} target={"blank"}><GitHubIcon/></a>
        {/* Con el evento onClick dispara un alert desde las funciones si es que tienen */}
        <a href={proyecto.livedemo} onClick={proyecto.livedemo} target={"blank"}><LiveDemoIcon/></a>
        
      </div>
    </div>
  )
}

export default ProyectoDisplay;