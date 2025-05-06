import React from 'react';

// import { useParams } from "react-router-dom";
import { useParams } from 'next/navigation'

import {LaboralList} from '../helpers/LaboralList';
import '../styles/ProyectoDisplay.css';
import { ArrowSquareOut } from "@phosphor-icons/react";

import { useTranslation } from 'react-i18next';

function LaboralDisplay(){
    const { t } = useTranslation();

    const { id } = useParams();
    const proyecto = LaboralList[id];

    return (
        <div className='project'>
          <h1>{proyecto.name}</h1>
          <img src={proyecto.image} alt="" />
    
          <p className='paragraphDisplay'>
            <b>{t("projects.project.paragraph")}</b> {proyecto.skills}
          </p>
    
          <div className="iconsDisplay">
            {/* Con el evento onClick dispara un alert desde las funciones si es que tienen */}
            <a href={proyecto.livedemo} onClick={proyecto.livedemo} target={"blank"}><ArrowSquareOut/></a>
            
          </div>
        </div>
      )

}

export default LaboralDisplay;