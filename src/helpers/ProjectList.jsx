import Proj1 from "../assets/proyectos/dgenerador.png";
import Proj2 from "../assets/proyectos/magnosocial2.png";
import Proj3 from "../assets/proyectos/dineout1.png";
import Proj4 from "../assets/proyectos/spotify-concept-desktop.png";


export const ProjectList = [
  {
    name: "Generate Password",
    image: Proj1,
    skills: "Django, Python, Bootstrap",
    repository: 'https://github.com/mmagno99/django-password-generator',
    livedemo: 'https://django-password-generator-production.up.railway.app/'
  },
  {
    name: "MagnoSocial",
    image: Proj2,
    skills: "Django, Python, Bootstrap",
    repository: 'https://github.com/mmagno99/SocialDjango',
    livedemo: function()
    {
      alert('Estamos trabajando en eso...');
    }
  },
  {
    name: "Dine's Food",
    image: Proj3,
    skills: "HTML, CSS, JS",
    repository: 'https://github.com/mmagno99/LandingRestaurant',
    livedemo: function()
    {
      alert('Estamos trabajando en eso...');
    }
  },
  {
    name: "Spotify Concept",
    image: Proj4,
    skills: "HTML, CSS, JS",
    repository: function()
    {
      alert('No existe el repositorio');
    },
    livedemo: "https://spotify-concept-2023.web.app/"
  },

  
  
];