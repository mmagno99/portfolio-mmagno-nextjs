import React from "react";
import "../styles/OptionCards.css";

import {Link} from 'react-router-dom';


function OptionCards() {

  return (
    <div className="cards">
      <h1 className="cardsTitle">Elige una categoria</h1>

      <div className="cardList">

        <Link to="/proyectos">
            <div className="cardItem">
                <div className="bgImage"></div>
            <h1>Proyectos Personales</h1>
            </div>
        </Link>

        <Link to="/laborales">
        <div className="cardItem">
            <div className="bgImage2"></div>
          <h1>Proyectos Laborales</h1>
        </div>
        </Link>

      </div>
    </div>
  );
}

export default OptionCards;
