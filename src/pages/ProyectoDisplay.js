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
        <a href={proyecto.repository} target={"blank"}><GitHubIcon/></a>
        <LiveDemoIcon onClick={proyecto.livedemo} className='liveDemo'/>

      </div>
    </div>
  )
}

export default ProyectoDisplay;