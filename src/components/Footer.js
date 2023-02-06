import React from 'react'

import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import {Link} from 'react-router-dom';

import '../styles/Footer.css';


  //Funcion que retorna el año actual
  function anoActual()
  {
    const fecha = new Date();
    return fecha.getFullYear();
  }


function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
          <a href={"https://www.facebook.com/marco.magno19799/"} target={"blank"} ><FacebookIcon /></a>
            <a href={"https://www.instagram.com/mmagno99/"} target={"blank"}><InstagramIcon/></a>
            <a href={"https://www.linkedin.com/in/mmagnodev"} target={"blank"}><LinkedInIcon/></a>
        </div>
        <p className=""><Link to='/' className='linkHome'>Mmagno</Link> | Todos los derechos reservados &copy; {anoActual()}</p>
    </div>
  )
}

export default Footer