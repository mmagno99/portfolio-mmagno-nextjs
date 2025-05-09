// import React from "react";
// import BlogItem from '../../components/BlogItem.jsx';
// import styles from '../../styles/pages/blog/index.module.css';
// import { BlogList } from '../../helpers/BlogList.jsx'
// import { useTranslation } from 'react-i18next';

// function Blog() {
//   const { t } = useTranslation();
  
//   return (
//     <div className={styles.blogs}>
//       <h1 className={styles.blogTitle}>{t("blog.title")}</h1> 
      
//       <div className={styles.blogList}>
//         {BlogList.map((blog, idx) => (
//           <BlogItem key={idx} id={idx} name={t(blog.name)} image={blog.image} />
//         ))}
//       </div> 
//     </div>
//   );
// }

// export default Blog;


import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import styles from '../../styles/pages/blog/index.module.css';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const files = fs.readdirSync(postsDirectory);

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(path.join(postsDirectory, filename), 'utf-8');
    const { data } = matter(markdownWithMeta);

    return {
      slug: data.slug,
      title: data.title,
      image: data.image,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default function Blog({ posts }) {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <div className={styles.blogs}>
      <h1 className={styles.blogTitle}>{t('blog.title')}</h1>

      <div className={styles.blogList}>
        {posts.map((post) => (
          <div
            key={post.slug}
            className={styles.blogItem}
            onClick={() => router.push(`/blog/${post.slug}`)}
          >
            <div
              style={{ backgroundImage: `url(${post.image})` }}
              className={styles.bgImageBlog}
            />
            <h1>{post.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
