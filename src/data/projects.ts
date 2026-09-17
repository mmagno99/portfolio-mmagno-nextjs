import { LaboralList } from './work.js';
export interface Project {
  id: string;
  name: string;
  image: string;
  skills: string;
  repository?: string;
  livedemo?: string;
  category: 'personal-projects' | 'projects-bbx';
}
export const personalProjects: Project[] = [
  {
    id: '0',
    name: 'MagnoSocial',
    image: 'https://ik.imagekit.io/mmagnodev/magnosocial.webp',
    skills: 'Django, Python, Bootstrap',
    repository: 'https://github.com/mmagno99/SocialDjango',
    category: 'personal-projects',
  },
  {
    id: '1',
    name: 'Spotify Concept',
    image: 'https://ik.imagekit.io/mmagnodev/spotify-concept-desktop.webp',
    skills: 'HTML, CSS, JavaScript',
    livedemo: 'https://spotify-concept-2023.web.app/',
    category: 'personal-projects',
  },
];
// IDs are explicit and stable: changing display order must never change URLs.
export const workProjects: Project[] = LaboralList.map((project) => ({
  ...project,
  category: 'projects-bbx',
}));
export const projects = [...personalProjects, ...workProjects];
