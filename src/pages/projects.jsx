import React from "react";
import "../styles/OptionCards.css";
import { Link } from "react-router-dom";

import { useTranslation } from 'react-i18next';

function OptionCards() {
  const { t } = useTranslation();
  return (
    <div className="cards">
      <h1 className="cardsTitle">{t("projects.title")}</h1>

      <div className="cardList">
        <div className="cardItem">
          <Link to="/personal-projects">
            <div className="bgImage"></div>

            <h1>{t("projects.cardtitle1")}</h1>
          </Link>
        </div>

        <div className="cardItem">
          <Link to="/projects-bbxs">
            <div className="bgImage2"></div>

            <h1>{t("projects.cardtitle2")}</h1>
          </Link>
        </div>

        <div className="cardItem" id="tdi">
          <div className="bgImage3"></div>
          <h1>{t("projects.cardtitle3")}</h1>
        </div>
      </div>
    </div>
  );
}

export default OptionCards;
