import React from "react";
import styled from 'styled-components';
import {skills} from '../helpers/SkillsList.js';

import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";

import CV from "@mui/icons-material/CloudDownload";

import Curriculum from "../assets/cv/CV Marcos Gonzalez Ingeniero informatico.pdf";

import "../styles/Inicio.css";

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1100px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

export const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
margin-top: 12px;
      font-size: 32px;
  }
`;

export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
  
`

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background-color:#040d18;
  border: 1px solid #2cd3d9;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 14px 34px;
  border-radius: 16px;
  
  color:white;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }


`

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
  border: 1px solid #5333ed;
  
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
          <p> Desarrollador Web con pasión por aprender y crear</p>
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
