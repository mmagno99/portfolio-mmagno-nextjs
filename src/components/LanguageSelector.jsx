import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import mexicoFlag from '../assets/flags/mx.svg';
import usaFlag from '../assets/flags/us.svg';
import portugalFlag from '../assets/flags/pt.svg';
import '../styles/LanguageSelector.css';

const allLanguages = [
  { code: 'es', flag: mexicoFlag, alt: 'Español' },
  { code: 'en', flag: usaFlag, alt: 'English' },
  { code: 'pt', flag: portugalFlag, alt: 'Português' },
];

function LanguageSelector() {
  const { i18n } = useTranslation();

  const orderedLanguages = [
    ...allLanguages.filter(lang => lang.code === i18n.language),
    ...allLanguages.filter(lang => lang.code !== i18n.language),
  ];

  return (
    <div className="language-selector">
      <AnimatePresence initial={false}>
        {orderedLanguages.map(({ code, flag, alt }) => (
          <motion.img
            layout
            key={code}
            src={flag}
            alt={alt}
            onClick={() => i18n.changeLanguage(code)}
            className={`flag-icon ${code === i18n.language ? 'active' : 'hidden'}`}
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
