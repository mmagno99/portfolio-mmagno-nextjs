import React from 'react';
import { useRouter } from 'next/router';
import styles from "@/styles/pages/personal-projects/index.module.css";

function ProjectItem({ image, name, id }) {
  const router = useRouter();

  return (
    <div className={styles.projectItem} onClick={() => router.push(`/personal-projects/${id}`)}>
      <div style={{ backgroundImage: `url(${image})` }} className={styles.bgImage} />
      <h1>{name}</h1>
    </div>
  );
}

export default ProjectItem;
