import React from 'react'

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css'
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work'

import cartaBalabox from '../assets/cv/CARTA DE RECOMENDACIÓN Marcos.pdf';

import '../styles/Experience.css'

function Experiencia() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor='#111111'>

        <VerticalTimelineElement 
        className='vertical-timeline-element--education' 
        date='2015 - 2018'
        iconStyle={{background: "#111111",color:"#fff"}}
        icon={<SchoolIcon/>}
        >

          <h3 className="vertical-timeline-element-title">CETis 44</h3>
          <p className='paragraph'>Carrera técnica en programación</p>

        </VerticalTimelineElement>


        <VerticalTimelineElement 
        className='vertical-timeline-element--education' 
        date='2019 - 2021'
        iconStyle={{background: "#5333ed",color:"#fff"}}
        icon={<WorkIcon/>}
        >

          <h3 className="vertical-timeline-element-title">Freelance/ Maquetador web</h3>
          <p className='paragraph'>
            <ul>
              <li>Maquetaciones Web con Bootstrap</li>
              <li>Maquetaciones Web con Elementor y Divi</li>
              <li>Configuracion de servidores</li>
              <li>Aplicaciones Web con HTML, CSS & JS</li>
              <li>Soporte técnico</li>
            </ul>
          </p>

        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className='vertical-timeline-element--education' 
        date='2018 - 2022'
        iconStyle={{background: "#111111",color:"#fff"}}
        icon={<SchoolIcon/>}
        >

          <h3 className="vertical-timeline-element-title">Universidad interamericana/ UNIT</h3>
          <p className='paragraph'>Licenciatura en ingenieria informatica</p>

        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className='vertical-timeline-element--education' 
        date='2022 - 2023'
        iconStyle={{background: "#5333ed",color:"#fff"}}
        icon={<WorkIcon/>}
        >

          <h3 className="vertical-timeline-element-title">Balabox Inc/ Front-End Jr</h3>
          <p className='paragraph'>

            <ul>
              <li>Desarrollo web front-end</li>
              <li>Maquetaciones web - WordPress</li>
              <li>Desarrollo de tiendas en línea</li>
              <li><a className='cartabbx' href={cartaBalabox} target={'blank'}>VER CARTA DE RECOMENDACIÓN</a></li>
            </ul>

          </p>

        </VerticalTimelineElement>

      </VerticalTimeline>

    </div>
  )
}

export default Experiencia