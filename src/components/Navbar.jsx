import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '@/styles/components/Navbar.module.css';
import { useTheme } from 'next-themes';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

function Navbar() {
  const { t } = useTranslation();
  const [expandNavbar, setExpandNavbar] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const router = useRouter();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setExpandNavbar(false);
  }, [router.asPath]);

  useEffect(() => {
    document.body.style.overflow = expandNavbar ? 'hidden' : 'auto';
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
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY, expandNavbar]);

  const isDark = resolvedTheme === 'dark';
  const toggleTheme = () => setTheme(isDark ? 'light' : 'dark');
  const toggleMenu = () => setExpandNavbar(prev => !prev);

  if (!mounted) return null;

  return (
    <div className={clsx(
      styles.navbar,
      !showNavbar && styles.hidden,
      expandNavbar ? styles.open : styles.close
    )}>
      <div className={styles.toggleButton}>
        <div className={styles.logoContainer}>
          <Link href="/" className={styles.logoLink}>
            <div className={styles.logoName}>
              <h2><span>M</span>m{`a`}gno</h2>
            </div>
          </Link>
        </div>
        <button
          className={clsx(styles.hamburger, expandNavbar && styles.active)}
          onClick={toggleMenu}
          aria-label="Menu"
          aria-expanded={expandNavbar}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={styles.links}>
        <Link href="/">{t("navbar.nav1")}</Link>
        <Link href="/projects">{t("navbar.nav2")}</Link>
        <Link href="/about">{t("navbar.nav3")}</Link>
        <Link href="/blog">{t("navbar.nav4")}</Link>
        
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
      </div>

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
    </div>
  );
}

export default Navbar;