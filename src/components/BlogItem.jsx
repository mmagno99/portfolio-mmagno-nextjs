import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/pages/blog/index.module.css';

function BlogItem({ image, name, id }) {
  const router = useRouter();

  return (
    <div className={styles.blogItem} onClick={() => router.push(`/blog/${id}`)}>
      <div
        style={{ backgroundImage: `url(${image})` }}
        className={styles.bgImageBlog}
      />
      <h1>{name}</h1>
    </div>
  );
}

export default BlogItem;