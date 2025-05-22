import React from 'react';
import styles from '@/styles/pages/blog/[slug].module.css';

const mdxComponents = {
  p: (props) => <p className={styles.paragraphBlog} {...props} />,
  ul: (props) => <ul className={styles.paragraphBlog} {...props} />,
};

export default mdxComponents;
