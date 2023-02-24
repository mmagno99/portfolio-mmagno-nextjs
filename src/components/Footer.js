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

       
        <p>
          <Link to='/' className='linkHome'>Mmagno</Link>  | Todos los derechos reservados &copy; {anoActual()}
        </p>

        <span class="heart"><svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2.2 9.4c0 1.3.2 3.3 2 5.1 1.6 1.6 6.9 5.2 7.1 5.4.2.1.4.2.6.2s.4-.1.6-.2c.2-.2 5.5-3.7 7.1-5.4 1.8-1.8 2-3.8 2-5.1 0-3-2.4-5.4-5.4-5.4-1.6 0-3.2.9-4.2 2.3-1-1.4-2.6-2.3-4.4-2.3-2.9 0-5.4 2.4-5.4 5.4z"></path></svg></span>

        
       

        
        
    </div>
  )
}

export default Footer