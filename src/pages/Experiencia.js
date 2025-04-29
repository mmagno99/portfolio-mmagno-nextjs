import React from 'react'

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css'
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work'
import Certificate from '@mui/icons-material/EmojiEvents'

import cartaBalabox from '../assets/cv/CARTA DE RECOMENDACIÓN Marcos.pdf';
import cartaSah from '../assets/cv/CONSTANCIA LABORAL SISTEMA AGUAS DE HUIXQUILUCAN.pdf';

import '../styles/Experience.css';

import BackToTop from '../components/BackToTop.js';

//Funcion que retorna el año actual
function anoActual() { return new Date().getFullYear(); }

function Experiencia() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor='#111111'>

        <VerticalTimelineElement 
        className='vertical-timeline-element--education' 
        date='Agosto 2015 - Julio 2018'
        iconStyle={{background: "#111111",color:"#fff"}}
        icon={<SchoolIcon/>}
        >

          <h3 className="vertical-timeline-element-title">CETis 44</h3>
          <p className='paragraph'>Carrera técnica en programación</p>

        </VerticalTimelineElement>


        <VerticalTimelineElement 
        className='vertical-timeline-element--education' 
        date='Marzo 2019 - Julio 2021'
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
              <li><a className='cartasah' href={cartaSah} target={'blank'}>VER CARTA DE RECOMENDACIÓN</a></li>
            </ul>
          </p>

        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className='vertical-timeline-element--education' 
        date='Octubre - 2021'
        iconStyle={{background: "#111111",color:"#fff"}}
        icon={<Certificate/>}
        >

          <h3 className="vertical-timeline-element-title">Udemy - Universidad Desarrollo Web</h3>
          <p className='paragraph'>
            <ul>
      
              <li><a className='certificate' href={'https://udemy.com/certificate/UC-31b96167-5a80-453c-a2dc-94c845a2c522/'} target={'blank'}>VER CERTIFICADO</a></li>
            </ul>
          </p>

        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className='vertical-timeline-element--education' 
        date='2018 - 2022'
        iconStyle={{background: "#5333ed",color:"#fff"}}
        icon={<SchoolIcon/>}
        >

          <h3 className="vertical-timeline-element-title">Universidad interamericana/ UNIT</h3>
          <p className='paragraph'>Licenciatura en ingenieria informatica</p>

        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className='vertical-timeline-element--education' 
        date='Febrero 2022 - Septiembre 2023'
        iconStyle={{background: "#111111",color:"#fff"}}
        icon={<WorkIcon/>}
        >

          <h3 className="vertical-timeline-element-title">Balabox Inc/ Front-End</h3>
          <p className='paragraph'>

            <ul>
              <li>Desarrollo web front-end</li>
              <li>Maquetaciones web - WordPress</li>
              <li>Desarrollo de tiendas en línea</li>
              <li><a className='cartabbx' href={cartaBalabox} target={'blank'}>VER CARTA DE RECOMENDACIÓN</a></li>
            </ul>

          </p>

        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className='vertical-timeline-element--education' 
        date='Octubre - 2023'
        iconStyle={{background: "#5333ed",color:"#fff"}}
        icon={<Certificate/>}
        >

          <h3 className="vertical-timeline-element-title">Udemy - Universidad Javascript</h3>
          <p className='paragraph'>
            <ul>
      
              <li><a className='certificate' href={'https://www.udemy.com/certificate/UC-e7e1f977-a76c-461c-be45-b940bd8642df/'} target={'blank'}>VER CERTIFICADO</a></li>
            </ul>
          </p>

        </VerticalTimelineElement>


        <VerticalTimelineElement
        className='vertical-timeline-element--education'
        date={
          // Contenedor vacio para que acepte jsx llamado - dangerouslySetInnerHTML
          <>
            Desde Octubre 2023 - <span className="active">En activo {anoActual()}</span>
          </>
          
        }
        iconStyle={{background: "#111111", color:"#ffffff"}}
        icon={<WorkIcon/>}
        >

          <h3 className="vertical-timeline-element-title">Tierra de ideas/ Full Stack WordPress</h3>

          <p className='paragraph'>

            <ul>
              <li>Desarrollo Web UI/UX</li>
              <li>Seguridad Web</li>
              <li>Escalabilidad Web</li>
              <li>Desarrollo de plugins</li>

            </ul>


          </p>


        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className='vertical-timeline-element--education' 
        date='Noviembre - 2024'
        iconStyle={{background: "#5333ed",color:"#fff"}}
        icon={<Certificate/>}
        >

          <h3 className="vertical-timeline-element-title">Platzi - Fundamentos de Ingeniería de Software</h3>
          <p className='paragraph'>
            <ul>
      
              <li><a className='certificate' href={'https://platzi.com/p/mmagno.dev/curso/1098-ingenieria/diploma/detalle/'} target={'blank'}>VER CERTIFICADO</a></li>
            </ul>
          </p>

        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className='vertical-timeline-element--education' 
        date='Diciembre - 2024'
        iconStyle={{background: "#5333ed",color:"#fff"}}
        icon={<Certificate/>}
        >

          <h3 className="vertical-timeline-element-title">Platzi - Curso de Pensamiento Lógico (3/3)</h3>
          <p className='paragraph'>
            <ul>
      
              <li><a className='certificate' href={'https://platzi.com/p/mmagno.dev/curso/3221-pensamiento-logico/diploma/detalle/'} target={'blank'}>VER CERTIFICADO</a></li>
            </ul>
          </p>

        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className='vertical-timeline-element--education' 
        date='Abril - 2025'
        iconStyle={{background: "#5333ed",color:"#fff"}}
        icon={<Certificate/>}
        >

          <h3 className="vertical-timeline-element-title">Platzi - Programación Básica</h3>
          <p className='paragraph'>
            <ul>
      
              <li><a className='certificate' href={'https://platzi.com/p/mmagno.dev/curso/3208-programacion-basica/diploma/detalle/'} target={'blank'}>VER CERTIFICADO</a></li>
            </ul>
          </p>

        </VerticalTimelineElement>

        
      </VerticalTimeline>
      <BackToTop/>
    </div>
  )
}

export default Experiencia