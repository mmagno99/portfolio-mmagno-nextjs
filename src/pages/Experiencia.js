import React from 'react'

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css'
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work'

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

          <h3 className="vertical-timeline-element-title">Trabajo como freelance</h3>
          <p className='paragraph'>Maquetación de paginas informativas con HTML, CSS Y JS, Tambien con Wordpress</p>

        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className='vertical-timeline-element--education' 
        date='2018 - 2022'
        iconStyle={{background: "#111111",color:"#fff"}}
        icon={<SchoolIcon/>}
        >

          <h3 className="vertical-timeline-element-title">Universidad interamericana</h3>
          <p className='paragraph'>Licenciatura en ingenieria informatica</p>

        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className='vertical-timeline-element--education' 
        date='2022 - 2023'
        iconStyle={{background: "#5333ed",color:"#fff"}}
        icon={<WorkIcon/>}
        >

          <h3 className="vertical-timeline-element-title">Front-End Jr - Balabox Inc</h3>
          <p className='paragraph'>Maquetación de paginas informativas con HTML, CSS Y JS, Tambien con Wordpress</p>

        </VerticalTimelineElement>

      </VerticalTimeline>

    </div>
  )
}

export default Experiencia