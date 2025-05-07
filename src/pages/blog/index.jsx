import React from "react";
import BlogItem from '../../components/BlogItem.jsx';
import styles from '../../styles/pages/blog/index.module.css';
import { BlogList } from '../../helpers/BlogList.jsx'
import { useTranslation } from 'react-i18next';

function Blog() {
  const { t } = useTranslation();
  
  return (
    <div className={styles.blogs}>
      <h1 className={styles.blogTitle}>{t("blog.title")}</h1> 
      
      <div className={styles.blogList}>
        {BlogList.map((blog, idx) => (
          <BlogItem key={idx} id={idx} name={t(blog.name)} image={blog.image} />
        ))}
      </div> 
    </div>
  );
}

export default Blog;
