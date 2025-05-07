import React from "react";
import styles from "../styles/pages/projects.module.css";
// import { Link } from "react-router-dom";
import Link from 'next/link';

import { useTranslation } from 'react-i18next';

function OptionCards() {
  const { t } = useTranslation();
  return (
    <div className={styles.cards}>
      <h1 className={styles.cardsTitle}>{t("projects.title")}</h1>

      <div className={styles.cardList}>
        <div className={styles.cardItem}>
          <Link href="/personal-projects">
            <div className={styles.bgImage}></div>

            <h1>{t("projects.cardtitle1")}</h1>
          </Link>
        </div>

        <div className={styles.cardItem}>
          <Link href="/projects-bbx">
            <div className={styles.bgImage2}></div>

            <h1>{t("projects.cardtitle2")}</h1>
          </Link>
        </div>

        <div className={styles.cardItem} id="tdi">
          <div className={styles.bgImage3}></div>
          <h1>{t("projects.cardtitle3")}</h1>
        </div>
      </div>
    </div>
  );
}

export default OptionCards;
