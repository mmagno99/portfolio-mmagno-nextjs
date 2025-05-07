import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/pages/project-bbx/index.module.css';

function LaboralItem({ image, name, id }) {
  const router = useRouter();

  return (
    <div className={styles.projectItemLaboral} onClick={() => router.push(`/projects-bbx/${id}`)}>
      <div style={{ backgroundImage: `url(${image})` }} className={styles.bgImage} />
      <h1>{name}</h1>
    </div>
  );
}

export default LaboralItem;
