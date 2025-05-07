import React from 'react';
import { useRouter } from 'next/router';
import { BlogList } from '../../helpers/BlogList.jsx';
import styles from '../../styles/pages/blog/[id].module.css';
import BackToTop from '../../components/BackToTop.jsx';
import { useTranslation } from 'react-i18next';

function BlogDisplay() {
  const { t } = useTranslation();
  const router = useRouter();
  const { id } = router.query;

  if (!id) return null;

  const blog = BlogList[id];

  if (!blog) {
    return <p className={styles.notFound}>{t("blog.notFound") || "Blog no encontrado"}</p>;
  }

  return (
    <div className={styles.blog}>
      <div
        className={`${styles.blogImages} ${styles['contenedor-imagen']}`}
        style={{ backgroundImage: `url(${blog.image})`, backgroundSize: 'cover', backgroundPosition: 'bottom' }}
      >
        <h1 className={`${styles["titulo-banner"]}`}>{t(blog.name)}</h1>
        
      </div>

      <div className={styles.contenedor}>
        <p className={styles.paragraphBlog}>{blog.paragraph}</p>
      </div>

      <BackToTop />
    </div>
  );
}

export default BlogDisplay;
