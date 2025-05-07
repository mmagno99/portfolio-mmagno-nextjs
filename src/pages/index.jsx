import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { ReactTyped as Typed } from 'react-typed';
import { skills } from '../helpers/SkillsList.jsx';
import BackToTop from '../components/BackToTop.jsx';
import { motion } from "framer-motion";
import styles from "../styles/pages/index.module.css";

import { useTranslation } from 'react-i18next';

import {
  GithubLogo,
  EnvelopeSimple,
  DownloadSimple
} from "@phosphor-icons/react";

// Detecta si es móvil o tablet REAL
const isMobileDevice = typeof window !== 'undefined' &&
  /Mobi|Android|iPhone|iPad|iPod|Tablet/i.test(navigator.userAgent);

/* Estilos para los componentes */
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
          {/* <h2> */}
            {t("home.welcome")} <span>{t("home.letter")}</span>{t("home.brand")}
          {/* </h2> */}
        </motion.h2>

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

          <a href={"mailto:contacto.marcosgr@gmail.com"}>
            <EnvelopeSimple size={40} weight="regular" />
          </a>
          <a
            href="/assets/cv/CV Marcos Gonzalez Ingeniero informatico.pdf"
            download={"CV Marcos Gonzalez Ingeniero informatico"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <DownloadSimple size={40} weight="regular" />
          </a>
          <a href={"https://github.com/mmagno99"} target={"blank"}>
            <GithubLogo size={40} weight="regular" />
          </a>
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
