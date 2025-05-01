import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import SchoolIcon from '@mui/icons-material/School'
import WorkIcon from '@mui/icons-material/Work'
import Certificate from '@mui/icons-material/EmojiEvents'
import { useTheme } from 'next-themes'

import cartaBalabox from '../assets/cv/CARTA DE RECOMENDACIÓN Marcos.pdf'
import cartaSah from '../assets/cv/CONSTANCIA LABORAL SISTEMA AGUAS DE HUIXQUILUCAN.pdf'
import '../styles/Experience.css'
import BackToTop from '../components/BackToTop.jsx'

function Experiencia() {
  const { theme } = useTheme()
  
  // Configuración de colores
  const colors = {
    dark: {
      background: '#020617',
      card: '#1e293b',
      text: '#e2e8f0',
      primary: '#818cf8',
      secondary: '#22d3ee',
      iconWork: '#6366f1',
      iconSchool: '#334155',
      iconCert: '#facc15',
      line: '#334155',
      link: '#38bdf8',
      active: '#22d3ee'
    },
    light: {
      background: '#f8fafc',
      card: '#ffffff',
      text: '#1e293b',
      primary: '#4f46e5',
      secondary: '#0ea5e9',
      iconWork: '#4f46e5',
      iconSchool: '#e2e8f0',
      iconCert: '#f59e0b',
      line: '#e2e8f0',
      link: '#2563eb',
      active: '#4f46e5'
    }
  }

  const currentColors = theme === 'dark' ? colors.dark : colors.light

  function anoActual() { return new Date().getFullYear() }

  return (
    <div className="experience" style={{ background: currentColors.background }}>
      <VerticalTimeline lineColor={currentColors.line}>

        {/* Educación 1 */}
        <VerticalTimelineElement 
          className='vertical-timeline-element--education' 
          date='Agosto 2015 - Julio 2018'
          iconStyle={{background: currentColors.iconSchool, color:"#fff"}}
          icon={<SchoolIcon/>}
          contentStyle={{ background: currentColors.card, color: currentColors.text }}
          contentArrowStyle={{ borderRight: `7px solid ${currentColors.card}` }}
        >
          <h3 className="vertical-timeline-element-title">CETis 44</h3>
          <p className='paragraph'>Carrera técnica en programación</p>
        </VerticalTimelineElement>

        {/* Trabajo 1 */}
        <VerticalTimelineElement 
          className='vertical-timeline-element--education' 
          date='Marzo 2019 - Julio 2021'
          iconStyle={{background: currentColors.iconWork, color:"#fff"}}
          icon={<WorkIcon/>}
          contentStyle={{ background: currentColors.card, color: currentColors.text }}
          contentArrowStyle={{ borderRight: `7px solid ${currentColors.card}` }}
        >
          <h3 className="vertical-timeline-element-title">Freelance/ Maquetador web</h3>
          <p className='paragraph'>
            <ul>
              <li>Maquetaciones Web con Bootstrap</li>
              <li>Maquetaciones Web con Elementor y Divi</li>
              <li>Configuracion de servidores</li>
              <li>Aplicaciones Web con HTML, CSS & JS</li>
              <li>Soporte técnico</li>
              <li><a className='cartasah' href={cartaSah} target={'blank'} style={{color: currentColors.link}}>VER CARTA DE RECOMENDACIÓN</a></li>
            </ul>
          </p>
        </VerticalTimelineElement>

        {/* Certificado 1 */}
        <VerticalTimelineElement 
          className='vertical-timeline-element--education' 
          date='Octubre - 2021'
          iconStyle={{background: currentColors.iconCert, color:"#fff"}}
          icon={<Certificate/>}
          contentStyle={{ background: currentColors.card, color: currentColors.text }}
          contentArrowStyle={{ borderRight: `7px solid ${currentColors.card}` }}
        >
          <h3 className="vertical-timeline-element-title">Udemy - Universidad Desarrollo Web</h3>
          <p className='paragraph'>
            <ul>
              <li><a className='certificate' href={'https://udemy.com/certificate/UC-31b96167-5a80-453c-a2dc-94c845a2c522/'} target={'blank'} style={{color: currentColors.link}}>VER CERTIFICADO</a></li>
            </ul>
          </p>
        </VerticalTimelineElement>

        {/* Educación 2 */}
        <VerticalTimelineElement 
          className='vertical-timeline-element--education' 
          date='2018 - 2022'
          iconStyle={{background: currentColors.iconWork, color:"#fff"}}
          icon={<SchoolIcon/>}
          contentStyle={{ background: currentColors.card, color: currentColors.text }}
          contentArrowStyle={{ borderRight: `7px solid ${currentColors.card}` }}
        >
          <h3 className="vertical-timeline-element-title">Universidad interamericana/ UNIT</h3>
          <p className='paragraph'>Licenciatura en ingenieria informatica</p>
        </VerticalTimelineElement>

        {/* Trabajo 2 */}
        <VerticalTimelineElement 
          className='vertical-timeline-element--education' 
          date='Febrero 2022 - Septiembre 2023'
          iconStyle={{background: currentColors.iconWork, color:"#fff"}}
          icon={<WorkIcon/>}
          contentStyle={{ background: currentColors.card, color: currentColors.text }}
          contentArrowStyle={{ borderRight: `7px solid ${currentColors.card}` }}
        >
          <h3 className="vertical-timeline-element-title">Balabox Inc/ Front-End</h3>
          <p className='paragraph'>
            <ul>
              <li>Desarrollo web front-end</li>
              <li>Maquetaciones web - WordPress</li>
              <li>Desarrollo de tiendas en línea</li>
              <li><a className='cartabbx' href={cartaBalabox} target={'blank'} style={{color: currentColors.link}}>VER CARTA DE RECOMENDACIÓN</a></li>
            </ul>
          </p>
        </VerticalTimelineElement>

        {/* Certificado 2 */}
        <VerticalTimelineElement 
          className='vertical-timeline-element--education' 
          date='Octubre - 2023'
          iconStyle={{background: currentColors.iconCert, color:"#fff"}}
          icon={<Certificate/>}
          contentStyle={{ background: currentColors.card, color: currentColors.text }}
          contentArrowStyle={{ borderRight: `7px solid ${currentColors.card}` }}
        >
          <h3 className="vertical-timeline-element-title">Udemy - Universidad Javascript</h3>
          <p className='paragraph'>
            <ul>
              <li><a className='certificate' href={'https://www.udemy.com/certificate/UC-e7e1f977-a76c-461c-be45-b940bd8642df/'} target={'blank'} style={{color: currentColors.link}}>VER CERTIFICADO</a></li>
            </ul>
          </p>
        </VerticalTimelineElement>

        {/* Trabajo Actual */}
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date={
            <>
              Desde Octubre 2023 - <span className="active" style={{color: currentColors.active}}>En activo {anoActual()}</span>
            </>
          }
          iconStyle={{background: currentColors.iconWork, color:"#ffffff"}}
          icon={<WorkIcon/>}
          contentStyle={{ background: currentColors.card, color: currentColors.text }}
          contentArrowStyle={{ borderRight: `7px solid ${currentColors.card}` }}
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

        {/* Certificado 3 */}
        <VerticalTimelineElement 
          className='vertical-timeline-element--education' 
          date='Noviembre - 2024'
          iconStyle={{background: currentColors.iconCert, color:"#fff"}}
          icon={<Certificate/>}
          contentStyle={{ background: currentColors.card, color: currentColors.text }}
          contentArrowStyle={{ borderRight: `7px solid ${currentColors.card}` }}
        >
          <h3 className="vertical-timeline-element-title">Platzi - Fundamentos de Ingeniería de Software</h3>
          <p className='paragraph'>
            <ul>
              <li><a className='certificate' href={'https://platzi.com/p/mmagno.dev/curso/1098-ingenieria/diploma/detalle/'} target={'blank'} style={{color: currentColors.link}}>VER CERTIFICADO</a></li>
            </ul>
          </p>
        </VerticalTimelineElement>

        {/* Certificado 4 */}
        <VerticalTimelineElement 
          className='vertical-timeline-element--education' 
          date='Diciembre - 2024'
          iconStyle={{background: currentColors.iconCert, color:"#fff"}}
          icon={<Certificate/>}
          contentStyle={{ background: currentColors.card, color: currentColors.text }}
          contentArrowStyle={{ borderRight: `7px solid ${currentColors.card}` }}
        >
          <h3 className="vertical-timeline-element-title">Platzi - Curso de Pensamiento Lógico (3/3)</h3>
          <p className='paragraph'>
            <ul>
              <li><a className='certificate' href={'https://platzi.com/p/mmagno.dev/curso/3221-pensamiento-logico/diploma/detalle/'} target={'blank'} style={{color: currentColors.link}}>VER CERTIFICADO</a></li>
            </ul>
          </p>
        </VerticalTimelineElement>

        {/* Certificado 5 */}
        <VerticalTimelineElement 
          className='vertical-timeline-element--education' 
          date='Abril - 2025'
          iconStyle={{background: currentColors.iconCert, color:"#fff"}}
          icon={<Certificate/>}
          contentStyle={{ background: currentColors.card, color: currentColors.text }}
          contentArrowStyle={{ borderRight: `7px solid ${currentColors.card}` }}
        >
          <h3 className="vertical-timeline-element-title">Platzi - Programación Básica</h3>
          <p className='paragraph'>
            <ul>
              <li><a className='certificate' href={'https://platzi.com/p/mmagno.dev/curso/3208-programacion-basica/diploma/detalle/'} target={'blank'} style={{color: currentColors.link}}>VER CERTIFICADO</a></li>
            </ul>
          </p>
        </VerticalTimelineElement>

      </VerticalTimeline>
      <BackToTop/>
    </div>
  )
}

export default Experiencia