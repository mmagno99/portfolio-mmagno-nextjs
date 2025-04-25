import catFrontEnd from "../assets/blog/catFrontEnd.jpg";
import catBackEnd from "../assets/blog/catBackEnd.jpg";
import developerJr from "../assets/blog/developer.jpg";


export const BlogList = [
  {
    name: "¿Qué hace un Front-end Developer?",
    image: catFrontEnd,
    paragraph: 
    <>
      <p className="paragraphBlog">Un Front-end Developer es el encargado de desarrollar la parte visual y la experiencia de usuario de una aplicación web.<br/>
    Su trabajo consiste en traducir diseños en código utilizando tecnologías como HTML, CSS y JavaScript.<br/>
    También se encarga de optimizar el rendimiento, hacer que la web sea accesible y asegurar que funcione en distintos dispositivos y navegadores.<br/>
    Es fundamental que un Front-end Developer tenga conocimientos en frameworks y bibliotecas como React, Vue o Angular, además de estar en constante aprendizaje para adaptarse a las tendencias del desarrollo web.</p>
    </>,
  },
  {
    name: "Mejorar tu perfil como developer",
    image: developerJr,
    paragraph: 
    <>
    <p className="paragraphBlog">
    Darte a conocer como desarrollador es esencial para destacar en la industria tecnológica.<br/>
    Algunas recomendaciones para mejorar tu perfil como dev son:<br/><br/>
    <ul>
      <li>LinkedIn: Mantén tu perfil actualizado con tus habilidades, proyectos y experiencia laboral.</li>
      <li>GitHub: Publica tus proyectos y contribuye en repositorios de código abierto.</li>
      <li>Portafolio: Crea una página web donde muestres tus mejores trabajos y experiencia.</li>
      <li>Blog: Comparte conocimientos y escribe sobre lo que aprendes.</li>
      <li>Networking: Participa en eventos, meetups y comunidades para conectar con otros desarrolladores.</li>
    </ul>
    <br/>
    La clave está en la constancia y la mejora continua para construir una marca personal sólida.
    </p>
    </>,
  },
  {
    name: "¿Qué hace un Back-end Developer?",
    image: catBackEnd,
    paragraph: 
    <>
    <p className="paragraphBlog">
    Un Back-end Developer es el encargado de desarrollar la lógica y el funcionamiento interno de una aplicación web o sistema.<br/>
    Se centra en el procesamiento de datos, la seguridad, la autenticación de usuarios y la integración con bases de datos.<br/><br/>
    Utiliza tecnologías como:
    <ul>
      <li>Node.js</li>
      <li>Python (Django, Flask)</li>
      <li>Java (Spring Boot)</li>
      <li>Ruby on Rails</li>
      <li>Bases de datos como MySQL, PostgreSQL o MongoDB.</li>
    </ul>
    <br/>
    Y además, un Back-end Developer debe conocer sobre APIs REST, GraphQL, arquitectura de software y seguridad informática.<br/>
    Su rol es crucial para que la información fluya correctamente entre el servidor y el cliente, garantizando la eficiencia y escalabilidad de las aplicaciones.
    </p>
    </>,
  },
];