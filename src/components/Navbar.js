import React, { useEffect, useState } from 'react'
import {Link, useLocation} from 'react-router-dom';

import '../styles/Navbar.css';

function Navbar() {


    const [expandNavbar, setExpandNavbar] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false);
    },[location])

    useEffect(() => {
        if (expandNavbar) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'auto';
        }
      
        // Limpieza por si acaso
        return () => {
          document.body.style.overflow = 'auto';
        };
      }, [expandNavbar]);

      // Tercer useeffect

      useEffect(() => {
        let lastScrollY = window.scrollY;
      
        const handleScroll = () => {
          if (window.scrollY === 0) {
            setShowNavbar(true);
          } else if (window.scrollY > lastScrollY) {
            // Scrolling down
            setShowNavbar(false);
          } else {
            // Scrolling up
            setShowNavbar(true);
          }
          lastScrollY = window.scrollY;
        };
      
        window.addEventListener('scroll', handleScroll);
      
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
      
      


  return (

    <div className='navbar' id={expandNavbar ? 'open' : 'close' }>
        
        <div className="toggleButton">

            <div className="logoName">
                <h2> <span>M</span>m{`>`}gno </h2>
            </div>
      
            <button 
            className={`hamburger ${expandNavbar ? 'active' : ''}`}
            onClick={() => setExpandNavbar((prev) => !prev)}
            >
            <span></span>
            <span></span>
            <span></span>
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