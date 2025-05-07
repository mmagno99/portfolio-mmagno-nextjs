import React from 'react';
import { useRouter } from 'next/router';
import { LaboralList } from '../../helpers/LaboralList';
import styles from '../../styles/pages/project-bbx/[id].module.css';
import { ArrowSquareOut } from "@phosphor-icons/react";
import { useTranslation } from 'react-i18next';

function LaboralDisplay() {
  const { t } = useTranslation();
  const router = useRouter();
  const { id } = router.query;

  if (!id) return null;

  const proyecto = LaboralList[id];

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
        {proyecto.livedemo && (
          <a href={proyecto.livedemo} target="_blank" rel="noopener noreferrer">
            <ArrowSquareOut />
          </a>
        )}
      </div>
    </div>
  );
}

export default LaboralDisplay;
