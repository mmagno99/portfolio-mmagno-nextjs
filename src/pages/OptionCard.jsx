import React from "react";
import "../styles/OptionCards.css";

import { Link } from "react-router-dom";

function OptionCards() {

  return (
    <div className="cards">
      <h1 className="cardsTitle">Escoge el tipo de proyecto</h1>

      <div className="cardList">
        <div className="cardItem">
          <Link to="/personal-projects">
            <div className="bgImage"></div>

            <h1>Proyectos Personales</h1>
          </Link>
        </div>

        <div className="cardItem">
          <Link to="/projects-bbxs">
            <div className="bgImage2"></div>

            <h1>Proyectos BBX</h1>
          </Link>
        </div>

        <div className="cardItem" id="tdi">
          <div className="bgImage3"></div>
          <h1>Proyectos TDI</h1>
        </div>
      </div>
    </div>
  );
}

export default OptionCards;
