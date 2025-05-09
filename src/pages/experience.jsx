import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import SchoolIcon from '@mui/icons-material/School'
import WorkIcon from '@mui/icons-material/Work'
import Certificate from '@mui/icons-material/EmojiEvents'
import { useTheme } from 'next-themes'
import styles from '../styles/pages/Experience.module.css'
import BackToTop from '../components/BackToTop.jsx'

import { useTranslation } from 'react-i18next';

function Experiencia() {
  const { t } = useTranslation();

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
    <div className={styles.experience} style={{ background: currentColors.background }}>
      <VerticalTimeline lineColor={currentColors.line}>

        {/* Educación 1 */}
        <VerticalTimelineElement 
          className='vertical-timeline-element--education' 
          date={t("experience.school1.date")}
          iconStyle={{background: currentColors.iconSchool, color:"#fff"}}
          icon={<SchoolIcon/>}
          contentStyle={{ background: currentColors.card, color: currentColors.text }}
          contentArrowStyle={{ borderRight: `7px solid ${currentColors.card}` }}
        >
          <h3 className="vertical-timeline-element-title">{t("experience.school1.name")}</h3>
          <p className={styles.paragraph}>{t("experience.school1.desc")}</p>
        </VerticalTimelineElement>

        {/* Trabajo 1 */}
        <VerticalTimelineElement 
          className='vertical-timeline-element--education' 
          date={t("experience.job1.date")}
          iconStyle={{background: currentColors.iconWork, color:"#fff"}}
          icon={<WorkIcon/>}
          contentStyle={{ background: currentColors.card, color: currentColors.text }}
          contentArrowStyle={{ borderRight: `7px solid ${currentColors.card}` }}
        >
          <h3 className="vertical-timeline-element-title">{t("experience.job1.name")}</h3>
          <p className={styles.paragraph}>
            <ul>
              <li>{t("experience.job1.dot1")}</li>
              <li>{t("experience.job1.dot2")}</li>
              <li>{t("experience.job1.dot3")}</li>
              <li>{t("experience.job1.dot4")}</li>
              <li>{t("experience.job1.dot5")}</li>
              <li><a className={styles.cartasah} href='/assets/cv/CONSTANCIA LABORAL SISTEMA AGUAS DE HUIXQUILUCAN.pdf' target={'blank'} style={{color: currentColors.link}}>{t("experience.job1.viewLetter")}</a></li>
            </ul>
          </p>
        </VerticalTimelineElement>

        {/* Certificado 1 */}
        <VerticalTimelineElement 
          className='vertical-timeline-element--education' 
          date={t("experience.certificate1.date")}
          iconStyle={{background: currentColors.iconCert, color:"#fff"}}
          icon={<Certificate/>}
          contentStyle={{ background: currentColors.card, color: currentColors.text }}
          contentArrowStyle={{ borderRight: `7px solid ${currentColors.card}` }}
        >
          <h3 className="vertical-timeline-element-title">{t("experience.certificate1.name")}</h3>
          <p className={styles.paragraph}>
            <ul>
              <li><a className={styles.certificate} href={'https://udemy.com/certificate/UC-31b96167-5a80-453c-a2dc-94c845a2c522/'} target={'blank'} style={{color: currentColors.link}}>{t("experience.certificate1.viewCertificate")}</a></li>
            </ul>
          </p>
        </VerticalTimelineElement>

        {/* Educación 2 */}
        <VerticalTimelineElement 
          className='vertical-timeline-element--education' 
          date={t("experience.school2.date")}
          iconStyle={{background: currentColors.iconWork, color:"#fff"}}
          icon={<SchoolIcon/>}
          contentStyle={{ background: currentColors.card, color: currentColors.text }}
          contentArrowStyle={{ borderRight: `7px solid ${currentColors.card}` }}
        >
          <h3 className="vertical-timeline-element-title">{t("experience.school2.name")}</h3>
          <p className={styles.paragraph}>{t("experience.school2.desc")}</p>
        </VerticalTimelineElement>

        {/* Trabajo 2 */}
        <VerticalTimelineElement 
          className='vertical-timeline-element--education' 
          date={t("experience.job2.date")}
          iconStyle={{background: currentColors.iconWork, color:"#fff"}}
          icon={<WorkIcon/>}
          contentStyle={{ background: currentColors.card, color: currentColors.text }}
          contentArrowStyle={{ borderRight: `7px solid ${currentColors.card}` }}
        >
          <h3 className="vertical-timeline-element-title">{t("experience.job2.name")}</h3>
          <p className={styles.paragraph}>
            <ul>
              <li>{t("experience.job2.dot1")}</li>
              <li>{t("experience.job2.dot2")}</li>
              <li>{t("experience.job2.dot3")}</li>
              <li><a className={styles.cartabbx} href='/assets/cv/CARTA DE RECOMENDACIÓN Marcos.pdf' target={'blank'} style={{color: currentColors.link}}>{t("experience.job2.viewLetter")}</a></li>
            </ul>
          </p>
        </VerticalTimelineElement>

        {/* Certificado 2 */}
        <VerticalTimelineElement 
          className='vertical-timeline-element--education' 
          date={t("experience.certificate2.date")}
          iconStyle={{background: currentColors.iconCert, color:"#fff"}}
          icon={<Certificate/>}
          contentStyle={{ background: currentColors.card, color: currentColors.text }}
          contentArrowStyle={{ borderRight: `7px solid ${currentColors.card}` }}
        >
          <h3 className="vertical-timeline-element-title">{t("experience.certificate2.name")}</h3>
          <p className={styles.paragraph}>
            <ul>
              <li><a className={styles.certificate} href={'https://www.udemy.com/certificate/UC-e7e1f977-a76c-461c-be45-b940bd8642df/'} target={'blank'} style={{color: currentColors.link}}>{t("experience.certificate2.viewCertificate")}</a></li>
            </ul>
          </p>
        </VerticalTimelineElement>

        {/* Trabajo Actual */}
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date={
            <>
              {t("experience.job3.date")}<span className={styles.active} style={{color: currentColors.active}}>{t("experience.job3.active")} {anoActual()}</span>
            </>
          }
          iconStyle={{background: currentColors.iconWork, color:"#ffffff"}}
          icon={<WorkIcon/>}
          contentStyle={{ background: currentColors.card, color: currentColors.text }}
          contentArrowStyle={{ borderRight: `7px solid ${currentColors.card}` }}
        >
          <h3 className="vertical-timeline-element-title">{t("experience.job3.name")}</h3>
          <p className={styles.paragraph}>
            <ul>
              <li>{t("experience.job3.dot1")}</li>
              <li>{t("experience.job3.dot2")}</li>
              <li>{t("experience.job3.dot3")}</li>
              <li>{t("experience.job3.dot4")}</li>
            </ul>
          </p>
        </VerticalTimelineElement>

        {/* Certificado 3 */}
        <VerticalTimelineElement 
          className='vertical-timeline-element--education' 
          date={t("experience.certificate3.date")}
          iconStyle={{background: currentColors.iconCert, color:"#fff"}}
          icon={<Certificate/>}
          contentStyle={{ background: currentColors.card, color: currentColors.text }}
          contentArrowStyle={{ borderRight: `7px solid ${currentColors.card}` }}
        >
          <h3 className="vertical-timeline-element-title">{t("experience.certificate3.name")}</h3>
          <p className={styles.paragraph}>
            <ul>
              <li><a className={styles.certificate} href={'https://platzi.com/p/mmagno.dev/curso/1098-ingenieria/diploma/detalle/'} target={'blank'} style={{color: currentColors.link}}>{t("experience.certificate3.viewCertificate")}</a></li>
            </ul>
          </p>
        </VerticalTimelineElement>

        

      </VerticalTimeline>
      <BackToTop/>
    </div>
  )
}

export default Experiencia