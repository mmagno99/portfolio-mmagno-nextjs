import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import styles from '../../styles/pages/blog/[slug].module.css';

// 🧠 Importa los componentes MDX estilizados
import mdxComponents from '../../components/mdxComponents.jsx';

const components = {
  ...mdxComponents,
  code: ({ className, children, ...props }) => {
    const match = /language-(\w+)/.exec(className || '');
    return match ? (
      <SyntaxHighlighter
        style={vscDarkPlus}
        language={match[1]}
        PreTag="div"
        showLineNumbers
        {...props}
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
  img: (props) => (
    <Image
      {...props}
      alt={props.alt || ''}
      width={800}
      height={400}
      layout="responsive"
    />
  ),
};

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const files = fs.readdirSync(postsDirectory);

  const paths = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(path.join(postsDirectory, filename), 'utf-8');
    const { data } = matter(markdownWithMeta);
    return { params: { slug: data.slug } };
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params: { slug } }) {
  const filePath = path.join(process.cwd(), 'posts', `${slug}.mdx`);
  const markdownWithMeta = fs.readFileSync(filePath, 'utf-8');
  const { data: frontmatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontmatter,
      mdxSource,
    },
  };
}

export default function BlogPage({ frontmatter, mdxSource }) {
  return (
    <div className={styles.blog}>
      <div
        className={`${styles.blogImages} ${styles['contenedor-imagen']}`}
        style={{
          backgroundImage: `url(${frontmatter.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
        }}
      >
        <h1 className={styles['titulo-banner']}>{frontmatter.title}</h1>
      </div>

      <div className={styles.contenedor}>
        <MDXRemote {...mdxSource} components={components} />
      </div>
    </div>
  );
}
