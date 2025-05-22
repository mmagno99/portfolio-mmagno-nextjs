import React, { useEffect, useState } from "react";
import styled, { keyframes } from 'styled-components';
import { ReactTyped as Typed } from 'react-typed';
import { skills } from '@/helpers/SkillsList.jsx';
import BackToTop from '@/components/BackToTop.jsx';
import { motion } from "framer-motion";
import styles from "@/styles/pages/index.module.css";
import { useTranslation } from 'react-i18next';

/* Estilos para los componentes */

// Tamaños en rem (1rem = 16px, entonces 0.25rem = 4px)
const reactSize = 'calc(0.25rem * 48)'; // = 12rem = 192px
const jsSize = 'calc(0.25rem * 32)';    // = 8rem = 128px

// Contenedor para los íconos
const IconWrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`;

// Ícono de React con animación de rotación
const ReactIcon = styled(motion.img)`
  width: ${reactSize};
  height: auto;
  position: absolute;
  left: 20em;
  bottom: 0;

  /* Celulares */
  @media (max-width: 640px) {
    width: calc(0.25rem * 24);
    left: 0;
    bottom: 0;
  }

  /* Tabletas */
  @media (min-width: 641px) and (max-width: 1024px) {
  width: calc(0.25rem * 40);
  left: 0;
  bottom: 1em;
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
  /* Estilos para pantallas entre 1025px y 1440px laptops*/
  left: 2em;
  bottom: 0;
}
`;

// Ícono de JavaScript con animación de traslación vertical
const JsIcon = styled(motion.img)`
  width: ${jsSize};
  height: auto;
  position: absolute;
  right: 25em;
  bottom: 5em;

  /* Celulares */
  @media (max-width: 640px) {
    width: calc(0.25rem * 20);
    right: 0;
    bottom: 6em;
  }

  /* Tabletas */
  @media (min-width: 641px) and (max-width: 1024px) {
    width: calc(0.25rem * 30);
    right: 2em;
    bottom: 5em;
  }

  /* Laptops */
  @media (min-width: 1025px) and (max-width: 1440px) {
    right: 5em;
    bottom: 5em;
  }
`;


const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`;

const Skill = styled.div`
  width: 450px;
  background-color: var(--card-bg);
  box-shadow: var(--shadow-elevation);
  transition: 0.3s ease-in;
  border-radius: .5rem;
  color: var(--color-subtitle);
  padding: 18px 36px;

  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 250px;
    padding: auto;
  }

  &:hover {
    box-shadow: var(--shadow-elevation-hover);
    cursor: pointer;
  }
`;

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

const SkillItem = styled.div`
  font-family: var(--text-font-roboto);   
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--primary-color);
  background-color: #040d18;
  color: white;
  gap: 8px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;

function Inicio() {
  const { t } = useTranslation();

  const [isMobileDevice, setIsMobileDevice] = useState(false);

    useEffect(() => {
      const isMobile = /Mobi|Android|iPhone|iPad|iPod|Tablet/i.test(navigator.userAgent);
      setIsMobileDevice(isMobile);
    }, []);

  return (
    <div className={styles.home}>
      <div className={styles.about}>
        <motion.h2
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
          viewport={{ once: isMobileDevice, amount: 0.6 }}
          className="text-4xl font-bold text-gray-900"
        >
            {t("home.welcome")} <span>{t("home.letter")}</span>{t("home.brand")}
            <br/>
            {t("home.job_start")} {isMobileDevice && <br />} {t("home.job_end")}
        </motion.h2>

        <IconWrapper>
              <ReactIcon
                src="/assets/icons/react_icon.svg"
                alt="React Icon"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 16,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />

              <JsIcon
                src="/assets/icons/javascript_icon.svg"
                alt="JavaScript Icon"
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
        </IconWrapper>

        <div className={styles.prompt}>
          <p>
            <Typed
              strings={[
                t("home.typed1"),
                t("home.typed2"),
                t("home.typed3"),
                t("home.typed4")
              ]}
              typeSpeed={80}
              backSpeed={70}
              loop
            />
          </p>
        </div>
      </div>

      <div className={styles.skills}>
        <h1>{t("home.skillsTitle")}</h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: isMobileDevice, amount: 0.3 }}
        >
          <SkillsContainer>
            {skills.map((skill) => (
              <Skill key={skill.title}>
                <SkillTitle>{skill.titleKey ? t(skill.titleKey) : skill.title}</SkillTitle>
                <SkillList>
                  {skill.skills.map((item) => (
                    <SkillItem key={item.name}>
                      <SkillImage src={item.image} />
                      {item.name}
                    </SkillItem>
                  ))}
                </SkillList>
              </Skill>
            ))}
          </SkillsContainer>

        </motion.div>
      </div>

      <BackToTop />
    </div>
  );
}

export default Inicio;
