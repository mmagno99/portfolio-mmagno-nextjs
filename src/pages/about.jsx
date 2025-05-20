import styled from "styled-components";
import listAbout from "../helpers/listAbout"; // Asegúrate que esta ruta sea correcta
import { useTranslation } from 'react-i18next';
import BackToTop from '../components/BackToTop.jsx';

// --- Styled Components ---
const Container = styled.main`
  min-height: 100vh;
  padding: 4rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--bg-body);
  transition: var(--transition-theme);
`;

const ProfileInfoSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 4rem;
  max-width: 768px;
  width: 100%;
  padding: 0 1rem;
`;

const ProfileImage = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1.5rem;
  box-shadow: var(--shadow-elevation);
  transition: var(--transition-theme);

  &:hover {
    box-shadow: var(--shadow-elevation-hover);
  }
`;

const ProfileName = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: var(--color-title);
  font-family: var(--alternative-font-acorn);
  transition: var(--transition-theme);
`;

const ProfileDescriptionText = styled.p`
  font-size: 1rem;
  color: var(--color-paragraph);
  line-height: 1.6;
  max-width: 600px;
  font-family: var(--text-font-roboto);
  transition: var(--transition-theme);
`;

const SectionWrapper = styled.div`
  max-width: 768px;
  width: 100%;
  padding: 0 1rem;
  position: relative;
`;

const TimelineItem = styled.div`
  margin-bottom: 3rem; 
  margin-left: 2rem;   
  position: relative;

  &:last-child {
    margin-bottom: 0;
  }

  /* Línea DESDE DEBAJO DEL PUNTO HASTA EL FINAL DE LA JobCard */
  &::after {
    content: '';
    position: absolute;
    width: 2px;
    background-color: var(--border-color);
    transition: var(--transition-theme);
    left: -1.5rem; 
    transform: translateX(-50%); 
    top: calc(2rem + 0.75rem); /* Comienza justo donde termina el punto */
    bottom: 0; /* Se extiende hasta el borde inferior del TimelineItem (JobCard) */
    z-index: 0; 
    /* display: ${(props) => (props.isLast ? "none" : "block")}; // QUITAMOS ESTA CONDICIÓN */
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  top: 2rem;      
  left: -1.5rem;  
  transform: translateX(-50%); 
  width: 0.75rem; 
  height: 0.75rem; 
  background-color: var(--primary-color); 
  border-radius: 50%;
  z-index: 1; 
  transition: var(--transition-theme);

  /* Línea superior CORTA */
  &::before {
    content: '';
    position: absolute;
    width: 2px;
    background-color: var(--border-color);
    left: 50%; 
    transform: translateX(-50%); 
    bottom: 100%; 
    height: 2rem; 
    /* display: ${(props) => (props.isFirst ? "none" : "block")}; // QUITAMOS ESTA CONDICIÓN */
    transition: var(--transition-theme);
  }
`;

const JobCard = styled.div`
  position: relative; 
  background-color: var(--card-bg);
  border-radius: 0.5rem;
  padding: 1.5rem;
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-elevation);
  transition: var(--transition-theme);

  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-elevation-hover);
  }
`;

const JobHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const CompanyLogo = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 0.375rem;
  object-fit: cover;
  flex-shrink: 0;
  border: 1px solid var(--border-color);
`;

const JobContent = styled.div`
  flex: 1;
`;

const JobTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: var(--color-subtitle);
  font-family: var(--alternative-font-acorn);
  transition: var(--transition-theme);
`;

const JobMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-bottom: 0.75rem;
  font-family: var(--text-font-roboto);
  transition: var(--transition-theme);

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
  }

  span {
    font-size: 0.875rem;
    color: var(--color-muted);
    transition: var(--transition-theme);
  }

  .company {
    font-weight: 500;
    color: var(--primary-color);
    transition: var(--transition-theme);
  }

  .separator {
    display: none;
    @media (min-width: 640px) {
      display: inline;
    }
  }
`;

const JobDescription = styled.p`
  color: var(--color-paragraph);
  font-size: 0.95rem;
  line-height: 1.5;
  font-family: var(--text-font-roboto);
  transition: var(--transition-theme);
`;

const RecommendationButton = styled.a`
  display: inline-block;
  padding: 0.4rem 0.9rem;
  background-color: transparent;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  border-radius: 0.375rem;
  text-decoration: none;
  font-family: var(--text-font-roboto);
  font-weight: 500;
  font-size: 0.8rem;
  text-align: center;
  cursor: pointer;
  transition: var(--transition-theme);

  &:hover {
    background-color: var(--primary-color);
    color: var(--white);
    border-color: var(--primary-color);
  }
`;

// --- Componente About ---
const About = () => {
const { t } = useTranslation();

  const { profileImage, name, descriptionKey, jobs } = listAbout;

  return (
    <Container>
      <ProfileInfoSection>
        <ProfileImage src={profileImage} alt={`Profile of ${name}`} />
        <ProfileName>{name}</ProfileName>
        <ProfileDescriptionText>{t(descriptionKey)}</ProfileDescriptionText>
      </ProfileInfoSection>

      <SectionWrapper>
        {jobs.map((job, index) => (
          // Ya no es necesario pasar isLast a TimelineItem si no se usa en su CSS
          <TimelineItem key={job.company + index}> 
            {/* Ya no es necesario pasar isFirst a TimelineDot si no se usa en su CSS */}
            <TimelineDot /> 
            <JobCard>
              <JobHeader>
                <CompanyLogo src={job.imagejob} alt={`${job.company} logo`} />
                <JobContent>
                  <JobTitle>{job.job}</JobTitle>
                  <JobMeta>
                    <span className="company">{job.company}</span>
                    <span className="separator" aria-hidden="true">•</span>
                    <span>{t(job.dateKey)}</span>
                  </JobMeta>
                  <JobDescription>{t(job.descjobKey)}</JobDescription>
                  
                  {job.recommendationUrl && job.recommendationButtonKey && (
                    <RecommendationButton
                      href={job.recommendationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t(job.recommendationButtonKey)}
                    </RecommendationButton>
                  )}
                </JobContent>
              </JobHeader>
            </JobCard>
          </TimelineItem>
        ))}
      </SectionWrapper>
      <BackToTop />
    </Container>
  );
};

export default About;