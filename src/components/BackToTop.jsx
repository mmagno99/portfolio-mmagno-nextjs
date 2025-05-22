import React, { useEffect, useState } from 'react';
import { ArrowUp } from '@phosphor-icons/react';
import styles from '@/styles/components/BackToTop.module.css';

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`${styles["back-to-top"]} ${isVisible ? styles.visible : ''}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <ArrowUp size={24} weight="bold" />
    </button>
  );
}

export default BackToTop;
