import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import { useTheme } from 'next-themes';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import LanguageSelector from "../components/LanguageSelector";
import { useTranslation } from 'react-i18next';

function Navbar() {
  const { t } = useTranslation();
  const [expandNavbar, setExpandNavbar] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
      if (expandNavbar) return;
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
  }, [lastScrollY, expandNavbar]);

  const isDark = resolvedTheme === 'dark';
  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };
  const toggleMenu = () => {
    setExpandNavbar(prev => !prev);
  };

  if (!mounted) return null;

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
        <Link to="/">{t("navbar.nav1")}</Link>
        <Link to="/projects">{t("navbar.nav2")}</Link>
        <Link to="/experience">{t("navbar.nav3")}</Link>
        <Link to="/blog">{t("navbar.nav4")}</Link>
        
        <div className="mobileButtonsContainer">
          <div className="theme-switch">
            <DarkModeSwitch
              checked={isDark}
              onChange={toggleTheme}
              size={30}
              sunColor="#facc15"
              moonColor={isDark ? "#6366f1" : "#1e3a8a"}
            />
          </div>
          <LanguageSelector />
        </div>
      </div>

      <div className="desktopButtonsContainer">
        <div className="theme-switch">
          <DarkModeSwitch
            checked={isDark}
            onChange={toggleTheme}
            size={30}
            sunColor="#facc15"
            moonColor={isDark ? "#6366f1" : "#1e3a8a"}
          />
        </div>
        <LanguageSelector />
      </div>
    </div>
  );
}

export default Navbar;