// helpers/ProjectList.jsx
import ComingSoonCard from "../components/ComingSoonCard.jsx";


export const ProjectList = [
  {
    name: "MagnoSocial",
    image: '/assets/proyectos/magnosocial2.png',
    skills: "Django, Python, Bootstrap",
    repository: 'https://github.com/mmagno99/SocialDjango',
    livedemo: function()
    {
      alert('Proximamente se desplegara...');
    }
  },
  {
    name: "Spotify Concept",
    image: '/assets/proyectos/spotify-concept-desktop.png',
    skills: "HTML, CSS, JS",
    repository: function()
    {
      alert('Proximamente se creara el repositorio...');
    },
    livedemo: "https://spotify-concept-2023.web.app/"
  },
  
  // Card prediseñada #1
  {
    comingSoon: true,
    component: <ComingSoonCard />,
  },
  // Card prediseñada #2
  {
    comingSoon: true,
    component: <ComingSoonCard />,
  },
  // Card prediseñada #3
  {
    comingSoon: true,
    component: <ComingSoonCard />,
  },
];