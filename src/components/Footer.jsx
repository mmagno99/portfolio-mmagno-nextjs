import React from 'react'
// import {Link} from 'react-router-dom';
import Link from 'next/link';
import styles from '../styles/components/Footer.module.css';
import BackToTop from '../components/BackToTop.jsx';
import {
  LinkedinLogo,
  InstagramLogo,
  SpotifyLogo,
  GithubLogo,
  EnvelopeSimple,
} from "@phosphor-icons/react";

import { useTranslation } from 'react-i18next';

//Funcion que retorna el año actual
function anoActual(){ return new Date().getFullYear(); }

function Footer() {
  const { t } = useTranslation();
  return (
    <div className={styles.footer}>
        <div className={styles.socialMedia}>
            <a href={"https://github.com/mmagno99"} target={"blank"}><GithubLogo size={40} weight="regular" /></a>
            <a href={"https://www.instagram.com/mmagno99/"} target={"blank"}><InstagramLogo size={40} weight="regular" /></a>
            <a href={"https://www.linkedin.com/in/mmagno99/"} target={"blank"}><LinkedinLogo size={40} weight="regular" /></a>
            <a href={"mailto:mmagno.dev@gmail.com"}><EnvelopeSimple size={40} weight="regular" /></a>
        </div>
       
        <p>
          <Link href='/' className={styles.linkHome}>Mmagno</Link> 
          <span className={styles.heart}>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.2 9.4c0 1.3.2 3.3 2 5.1 1.6 1.6 6.9 5.2 7.1 5.4.2.1.4.2.6.2s.4-.1.6-.2c.2-.2 5.5-3.7 7.1-5.4 1.8-1.8 2-3.8 2-5.1 0-3-2.4-5.4-5.4-5.4-1.6 0-3.2.9-4.2 2.3-1-1.4-2.6-2.3-4.4-2.3-2.9 0-5.4 2.4-5.4 5.4z">
              </path>
            </svg>
          </span> | {t("footer.copy")} &copy; {anoActual()}
        </p>

        



    </div>
  )
}

export default Footer