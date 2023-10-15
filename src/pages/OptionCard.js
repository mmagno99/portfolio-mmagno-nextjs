import React from "react";
import "../styles/OptionCards.css";

import {Link} from 'react-router-dom';


function OptionCards() {

  return (
    <div className="cards">
      <h1 className="cardsTitle">Elige una categoria</h1>

      <div className="cardList">

        
            <div className="cardItem">
              <Link to="/proyectos">
                  <div className="bgImage"></div>

            <h1>Proyectos Personales</h1>
            </Link>
            </div>
       

        
        <div className="cardItem">
        <Link to="/laborales">
            <div className="bgImage2"></div>
        
          <h1>Proyectos Laborales</h1>
          </Link>
        </div>
        

      </div>
    </div>
  );
}

export default OptionCards;
