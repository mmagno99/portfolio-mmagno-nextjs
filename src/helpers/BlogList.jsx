import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import styles from '../styles/pages/blog/[id].module.css';

export const BlogList = [
  {
    name: "blog.article1",
    image: '/assets/blog/catFrontEnd.jpg',
    paragraph: (
      <>
        <p className={styles.paragraphBlog}>
          Un <strong>Front-end Developer</strong> es quien se encarga de construir toda la parte visual e interactiva de un sitio web o aplicación.<br/><br/>
          Utiliza tecnologías esenciales como <strong>HTML, CSS y JavaScript</strong> para transformar un diseño en algo funcional y agradable para el usuario.<br/><br/>
          Además de estas tecnologías, suele trabajar con frameworks modernos como <strong>React, Vue o Angular</strong> para construir interfaces dinámicas y eficientes.<br/><br/>
          A continuación, te muestro una estructura básica que todo front-end debe dominar:
        </p>
        <SyntaxHighlighter language="html" style={vscDarkPlus} showLineNumbers>
{`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi primera página</title>
  <style>
    body {
      font-family: 'Poppins', sans-serif;
      background-color: #f4f4f4;
      color: #333;
      text-align: center;
      padding: 50px;
    }
  </style>
</head>
<body>
  <h1>¡Hola Mundo!</h1>
  <p>Esta es mi primera página web.</p>
</body>
</html>`}
        </SyntaxHighlighter>
        <p className={styles.paragraphBlog}>
          <br/>
          Un Front-end Developer no solo debe escribir código, también debe asegurarse de que su trabajo sea accesible, rápido, optimizado para SEO y adaptable a todos los dispositivos.
        </p>
      </>
    ),
  },
  {
    name: "blog.article2",
    image: '/assets/blog/developer.jpg',
    paragraph: (
      <>
        <p className={styles.paragraphBlog}>
          Para sobresalir en el mundo del desarrollo, debes construir y potenciar tu presencia profesional en línea.<br/><br/>
          Aquí tienes algunos consejos esenciales:
        </p>
        <ul className={styles.paragraphBlog}>
          <li><strong>LinkedIn:</strong> Mantén tu perfil actualizado con proyectos, certificaciones y experiencia.</li>
          <li><strong>GitHub:</strong> Publica tus repositorios, contribuye a proyectos de código abierto y documenta bien tus proyectos.</li>
          <li><strong>Portafolio Web:</strong> Diseña una página donde muestres tus mejores trabajos con detalles técnicos.</li>
          <li><strong>Blog Técnico:</strong> Comparte aprendizajes, experiencias, tutoriales y proyectos personales.</li>
          <li><strong>Networking:</strong> Asiste a eventos, webinars y meetups para expandir tus conexiones profesionales.</li>
        </ul>
        <p className={styles.paragraphBlog}>
          <br/>
          Recuerda que tu marca personal será una gran diferencia entre pasar desapercibido o captar oportunidades laborales.<br/><br/>
          Aquí tienes un ejemplo rápido de cómo un portafolio podría estructurarse:
        </p>
        <SyntaxHighlighter language="javascript" style={vscDarkPlus} showLineNumbers>
{`const portfolio = {
  name: "Juan Pérez",
  role: "Front-end Developer",
  skills: ["React", "Next.js", "TypeScript", "TailwindCSS"],
  projects: [
    { name: "Tienda Online", url: "https://mi-tienda.com" },
    { name: "Blog Personal", url: "https://mi-blog.com" }
  ]
};`}
        </SyntaxHighlighter>
      </>
    ),
  },
  {
    name: "blog.article3",
    image: '/assets/blog/catBackEnd.jpg',
    paragraph: (
      <>
        <p className={styles.paragraphBlog}>
          Un <strong>Back-end Developer</strong> se encarga de que todo lo que ocurre detrás de la interfaz gráfica funcione correctamente.<br/><br/>
          Su trabajo abarca desde la gestión de bases de datos, servidores, APIs, hasta la seguridad de la aplicación.<br/><br/>
          Algunas tecnologías populares incluyen:
        </p>
        <ul className={styles.paragraphBlog}>
          <li><strong>Node.js:</strong> Para construir servidores rápidos y escalables con JavaScript.</li>
          <li><strong>Python:</strong> Usando frameworks como Django o Flask para APIs robustas.</li>
          <li><strong>Java:</strong> Muy usado en aplicaciones empresariales mediante Spring Boot.</li>
          <li><strong>Ruby on Rails:</strong> Ideal para startups que buscan agilidad.</li>
          <li><strong>Bases de datos:</strong> MySQL, PostgreSQL y MongoDB son esenciales en su stack.</li>
        </ul>
        <p className={styles.paragraphBlog}>
          <br/>
          Un ejemplo básico de un servidor en Node.js sería:
        </p>
        <SyntaxHighlighter language="javascript" style={vscDarkPlus} showLineNumbers>
{`const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('¡Hola desde el servidor!');
});

app.listen(PORT, () => {
  console.log(\`Servidor corriendo en http://localhost:\${PORT}\`);
});`}
        </SyntaxHighlighter>
        <p className={styles.paragraphBlog}>
          <br/>
          Su rol es indispensable para garantizar que toda la infraestructura de la aplicación funcione de manera estable, segura y eficiente.
        </p>
      </>
    ),
  },
];
