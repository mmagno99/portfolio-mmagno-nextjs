import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../styles/components/Navbar.module.css';
import { useTheme } from 'next-themes';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import LanguageSelector from "../components/LanguageSelector";
import { useTranslation } from 'react-i18next';

function Navbar() {
  const { t } = useTranslation();
  const [expandNavbar, setExpandNavbar] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const router = useRouter();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Para evitar problemas de hidratación de next-themes
  useEffect(() => {
    setMounted(true);
  }, []);

  // Detectar si el viewport es de escritorio (>=1025px)
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1025);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Al cambiar de ruta se cierra el menú móvil
  useEffect(() => {
    setExpandNavbar(false);
  }, [router.asPath]);

  // Bloquear scroll cuando el menú móvil está abierto
  useEffect(() => {
    document.body.style.overflow = expandNavbar ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [expandNavbar]);

  // Mostrar u ocultar la navbar al hacer scroll (solo en móvil o menú cerrado)
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
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY, expandNavbar]);

  const isDark = resolvedTheme === 'dark';
  const toggleTheme = () => setTheme(isDark ? 'light' : 'dark');
  const toggleMenu = () => setExpandNavbar(prev => !prev);

  if (!mounted) return null;

  return (
    <div
      className={`${styles.navbar} ${!showNavbar ? styles.hidden : ''} ${
        expandNavbar ? styles.open : styles.closed
      }`}
    >
      <div className={styles.toggleButton}>
        <div className={styles.logoContainer}>
          <Link href="/" className={styles.logoLink}>
            <div className={styles.logoName}>
              <h2>
                <span>M</span>m{`>`}gno
              </h2>
            </div>
          </Link>
        </div>
        {/* Mostrar botón hamburguesa solo en móvil */}
        {!isDesktop && (
          <button
            className={`${styles.hamburger} ${expandNavbar ? styles.active : ''}`}
            onClick={toggleMenu}
            aria-label="Menu"
            aria-expanded={expandNavbar}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        )}
      </div>

      <div className={styles.links}>
        {/* En desktop se muestran siempre los links; en móvil, solo si el menú está expandido */}
        {(isDesktop || expandNavbar) && (
          <>
            <Link href="/">{t("navbar.nav1")}</Link>
            <Link href="/projects">{t("navbar.nav2")}</Link>
            <Link href="/experience">{t("navbar.nav3")}</Link>
            <Link href="/blog">{t("navbar.nav4")}</Link>
          </>
        )}

        {/* En móvil, si el menú está abierto, se muestran los botones de tema y selector de idioma */}
        {!isDesktop && expandNavbar && (
          <div className={styles.mobileButtonsContainer}>
            <div className={styles.themeSwitch}>
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
        )}
      </div>

      {/* Botones para desktop siempre visibles */}
      {isDesktop && (
        <div className={styles.desktopButtonsContainer}>
          <div className={styles.themeSwitch}>
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
      )}
    </div>
  );
}

export default Navbar;
