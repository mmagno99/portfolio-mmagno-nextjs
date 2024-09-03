import React, { useEffect, useState } from 'react'
import {Link, useLocation} from 'react-router-dom';

import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';
import ExitIcon from '@mui/icons-material/CloseRounded'

function Navbar() {


    const [expandNavbar, setExpandNavbar] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false);
    },[location])


  return (

    <div className='navbar' id={expandNavbar ? 'open' : 'close' }>

        
        <div className="toggleButton">

       
            <div className="logoName">
            
                <h2> <span>M</span>m{`>`}gno.dev</h2>
           
            </div>
       
        
            <button 
            onClick={() => {
                setExpandNavbar((prev) => !prev);
                }}
                
                //Hacemos una condicion con operador ternario, si se abrio el navbar que cambie de icono
                >
                {expandNavbar ? <ExitIcon /> :  <ReorderIcon/> }
                
            </button>

          

        </div>
        
        <div className="links">
            <Link to="/"> Inicio </Link>
            <Link to="/opciones"> Proyectos </Link>
            <Link to="/experiencia"> Experiencia </Link>
            <Link to="/blog"> Blog </Link>
        </div>
    </div>
  )
}

export default Navbar