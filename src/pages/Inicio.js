import React from "react";
import styled from 'styled-components';
import {skills} from '../helpers/SkillsList.js';

import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";

import CV from "@mui/icons-material/CloudDownload";

import Curriculum from "../assets/cv/CV Marcos Gonzalez Ingeniero informatico.pdf";

import "../styles/Inicio.css";

/* Estilos para los componentes */

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
  
`

const Skill = styled.div`
  width: 450px;
  background-color:transparent;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  transition: 0.3s ease-in;
  border-radius: 15px;
  color:#040d18;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
  max-width:250px;
    padding: auto;
  }

  &:hover {
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.5);
  border: 1px solid #5333ed;
    cursor: pointer;
    }


`;


const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`

const SkillList = styled.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
  
  
`

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
  border: 1px solid #2cd3d9;
  background-color:#040d18;
  color:white;
  
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`

function Inicio() {
  return (
    <div className="home">
      <div className="about">
        <h2 className="">
          {" "}
          Bienvenido a <span>M</span>magno
        </h2>
        <div className="prompt">
          <p> Desarrollador Web apasionado, que ama desarrollar proyectos innovadores.</p>

          <a href={"mailto:contacto.marcosgr@gmail.com"}>
            <EmailIcon />
          </a>
          <a
            href={Curriculum}
            download={"CV Marcos Gonzalez Ingeniero informatico"}
          >
            <CV />
          </a>
          <a href={"https://github.com/mmagno99"} target={"blank"}>
            <GithubIcon />
          </a>
        </div>
      </div>

      <div className="skills">
        <h1>Habilidades</h1>
        <SkillsContainer >
          {skills.map((skill) => (
            <Skill>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item) => (
                  <SkillItem>
                    <SkillImage src={item.image}/>
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}

        </SkillsContainer>
      
      </div>
    </div>
  );
}

export default Inicio;
