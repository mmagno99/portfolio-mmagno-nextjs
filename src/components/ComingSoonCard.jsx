// components/ComingSoonCard.jsx
import React, { useState } from 'react';
import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";
import { useTranslation } from 'react-i18next';

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
`;

const ping = keyframes`
  0% { transform: scale(1); opacity: 1; }
  75%, 100% { transform: scale(2); opacity: 0; }
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 0.5rem;
  width: 300px;
  height: 300px;
  margin: 40px;
  background-color: rgba(255, 255, 255, 0.3);
  -webkit-backdrop-filter: blur(8px); 
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-width: 280px;
  width: 100%;
  padding: 2.5rem;
`;

const SkeletonBar = styled.div`
  border-radius: 0.375rem;
  background-color: rgba(0, 131, 196, 0.1);
  animation: ${pulse} 1.5s infinite ease-in-out;
`;

const SkeletonTitle = styled(SkeletonBar)`
  height: 2rem;
  width: 100%;
`;

const SkeletonLine = styled(SkeletonBar)`
  height: 1rem;
  width: ${({ width }) => width || '100%'};
  margin-top: ${({ mt }) => mt || '0'};
`;

const CircleRow = styled.div`
  display: flex;
  gap: 0.5rem;
  padding-top: 1rem;
`;

const SkeletonCircle = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 9999px;
  background-color: rgba(0, 131, 196, 0.1);
  animation: ${pulse} 1.5s infinite ease-in-out;
  animation-delay: ${({ delay }) => delay || '0s'};
`;

const PingIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
  color: rgba(0, 131, 196, 0.7);
`;

const Dot = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 9999px;
  background-color: #0083C4;
  animation: ${ping} 1s infinite;
`;

const GridOverlay = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.05;
  z-index: 0;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 0.25rem;
  pointer-events: none;
`;

const GridSquare = styled.div`
  aspect-ratio: 1 / 1;
  background-color: #0083C4;
  border-radius: 0.125rem;
  opacity: ${({ isHovered }) => (isHovered ? 1 : 0)};
  transform: ${({ isHovered }) => (isHovered ? 'scale(1)' : 'scale(0.8)')};
  transition: opacity 0.4s ease, transform 0.4s ease;
  transition-delay: ${({ delay }) => delay || '0ms'};
  will-change: transform, opacity;
`;

export default function ComingSoonCard() {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ContentWrapper>
        <SkeletonTitle />
        <div>
          <SkeletonLine width="75%" />
          <SkeletonLine width="50%" mt="0.5rem" />
        </div>
        <CircleRow>
          {[0, 1, 2, 3].map((i) => (
            <SkeletonCircle key={i} delay={`${i * 0.1}s`} />
          ))}
        </CircleRow>
        <PingIndicator>
          <Dot />
          <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>
            {t("projects.personalProjects.comingSoonCard.title")}
          </span>
        </PingIndicator>
      </ContentWrapper>
      <GridOverlay>
        {Array.from({ length: 64 }).map((_, i) => (
          <GridSquare
            key={i}
            isHovered={isHovered}
            delay={`${Math.random() * 500}ms`}
          />
        ))}
      </GridOverlay>
    </Card>
  );
}
