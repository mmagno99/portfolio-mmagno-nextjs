import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../styles/components/LanguageSelector.module.css';

const allLanguages = [
  { code: 'es', flag: '/assets/flags/mx.svg', alt: 'Español' },
  { code: 'en', flag: '/assets/flags/us.svg', alt: 'English' },
  { code: 'pt', flag: '/assets/flags/pt.svg', alt: 'Português' },
];

function LanguageSelector() {
  const { i18n } = useTranslation();

  const orderedLanguages = [
    ...allLanguages.filter(lang => lang.code === i18n.language),
    ...allLanguages.filter(lang => lang.code !== i18n.language),
  ];

  return (
    <div className={`${styles["language-selector"]}`}>
      <AnimatePresence initial={false}>
        {orderedLanguages.map(({ code, flag, alt }) => (
          <motion.img
            layout
            key={code}
            src={flag}
            alt={alt}
            onClick={() => i18n.changeLanguage(code)}
            className={`${styles["flag-icon"]} ${code === i18n.language ? 'active' : 'hidden'}`}
            style={{ transitionDelay: `${orderedLanguages.indexOf(code) * 80}ms` }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: code === i18n.language ? 1 : 0.6, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

export default LanguageSelector;
