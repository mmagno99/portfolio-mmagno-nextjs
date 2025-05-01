import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { ReactTyped as Typed } from 'react-typed';
import { skills } from '../helpers/SkillsList.js';
import BackToTop from '../components/BackToTop.js';
import { motion } from "framer-motion";
import "../styles/Inicio.css";

import {
  GithubLogo,
  EnvelopeSimple,
  DownloadSimple
} from "@phosphor-icons/react";

import Curriculum from "../assets/cv/CV Marcos Gonzalez Ingeniero informatico.pdf";

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
  return (
    <div className="home">
      <div className="about">
        <motion.h1
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
          viewport={{ once: isMobileDevice, amount: 0.6 }}
          className="text-4xl font-bold text-gray-900"
        >
          <h2>
            {" "}
            {"Bienvenido a "}<span>M</span>{"m>gno"}
          </h2>
        </motion.h1>

        <div className="prompt">
          <p>
            <Typed
              strings={[
                'Desarrollador Web apasionado, que ama crear proyectos innovadores. 🥵',
                'Especialista en React, creando interfaces modernas y fluidas. 😏',
                'Experto en WordPress Full Stack, llevando ideas a producción. 😎',
                'Tu socio digital para soluciones web funcionales y escalables. 🥸'
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
            href={Curriculum}
            download={"CV Marcos Gonzalez Ingeniero informatico"}
          >
            <DownloadSimple size={40} weight="regular" />
          </a>
          <a href={"https://github.com/mmagno99"} target={"blank"}>
            <GithubLogo size={40} weight="regular" />
          </a>
        </div>
      </div>

      <div className="skills">
        <h1>Habilidades</h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: isMobileDevice, amount: 0.3 }}
        >
          <SkillsContainer>
            {skills.map((skill) => (
              <Skill key={skill.title}>
                <SkillTitle>{skill.title}</SkillTitle>
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
