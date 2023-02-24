import Proj1 from "../assets/proyectos/dgenerador.png";
import Proj2 from "../assets/proyectos/magnosocial1.png";
import Proj3 from "../assets/proyectos/dineout1.png";


export const ProjectList = [
  {
    name: "Generate Password",
    image: Proj1,
    skills: "Django, Python, Bootstrap",
    repository: 'https://github.com/mmagno99/django-password-generator',
    livedemo: function(){
      alert('Estamos trabajando en eso...');
    }
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

  
  
];