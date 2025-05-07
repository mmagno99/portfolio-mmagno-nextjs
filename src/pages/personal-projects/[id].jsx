import React from 'react';
import { useRouter } from 'next/router';
import { ProjectList } from '../../helpers/ProjectList';
import styles from '../../styles/pages/personal-projects/[id].module.css';
import { ArrowSquareOut, GithubLogo } from "@phosphor-icons/react";
import { useTranslation } from 'react-i18next';

function ProyectoDisplay() {
  const { t } = useTranslation();
  const router = useRouter();
  const { id } = router.query;

  if (!id) return null; // Previene errores si el ID no ha cargado

  const proyecto = ProjectList[id];

  if (!proyecto) {
    return <p className={styles.notFound}>{t("projects.project.notFound") || "Proyecto no encontrado"}</p>;
  }

  return (
    <div className={styles.project}>
      <h1>{proyecto.name}</h1>
      <img src={proyecto.image} alt={proyecto.name} />

      <p className={styles.paragraphDisplay}>
        <b>{t("projects.project.paragraph")}</b> {proyecto.skills}
      </p>

      <div className={styles.iconsDisplay}>
        {proyecto.repository && (
          <a href={proyecto.repository} target="_blank" rel="noopener noreferrer">
            <GithubLogo />
          </a>
        )}
        {proyecto.livedemo && (
          <a href={proyecto.livedemo} target="_blank" rel="noopener noreferrer">
            <ArrowSquareOut />
          </a>
        )}
      </div>
    </div>
  );
}

export default ProyectoDisplay;
