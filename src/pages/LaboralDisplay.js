import React from 'react';

import { useParams } from "react-router-dom";
import {LaboralList} from '../helpers/LaboralList';
import '../styles/ProyectoDisplay.css';

import LiveDemoIcon from '@material-ui/icons/LiveTv';

function LaboralDisplay()
{
    const { id } = useParams();
    const proyecto = LaboralList[id];

    return (
        <div className='project'>
          <h1>{proyecto.name}</h1>
          <img src={proyecto.image} alt="" />
    
          <p className='paragraphDisplay'>
            <b>Skills:</b> {proyecto.skills}
          </p>
    
          <div className="iconsDisplay">
            {/* Con el evento onClick dispara un alert desde las funciones si es que tienen */}
            <a href={proyecto.livedemo} onClick={proyecto.livedemo} target={"blank"}><LiveDemoIcon/></a>
            
          </div>
        </div>
      )

}

export default LaboralDisplay;