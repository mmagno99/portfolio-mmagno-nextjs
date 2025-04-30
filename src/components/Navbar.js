import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  useEffect(() => {
    if (expandNavbar) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [expandNavbar]);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      // Si el menú está abierto, no modificar el navbar
      if (expandNavbar) {
        return;
      }

      if (currentScrollY === 0) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 10) {
        setShowNavbar(false);
      } else if (currentScrollY < lastScrollY) {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar, { passive: true });
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY, expandNavbar]); // Agregado expandNavbar

  const toggleMenu = () => {
    setExpandNavbar((prev) => !prev);
  };

  return (
    <div className={`navbar ${!showNavbar ? 'hidden' : ''}`} id={expandNavbar ? 'open' : 'close'}>
      <div className="toggleButton">
        <div className="logoContainer">
          <Link to="/" className="logoLink">
            <div className="logoName">
              <h2><span>M</span>m{`>`}gno</h2>
            </div>
          </Link>
        </div>

        <button 
          className={`hamburger ${expandNavbar ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Menu"
          aria-expanded={expandNavbar}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className="links">
        <Link to="/">Inicio</Link>
        <Link to="/projects">Proyectos</Link>
        <Link to="/experience">Experiencia</Link>
        <Link to="/blog">Blog</Link>
      </div>

    </div>

  );
}

export default Navbar;