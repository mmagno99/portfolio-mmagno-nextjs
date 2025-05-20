

// helpers/listAbout.js
const listAbout = {
  profileImage: 'https://ik.imagekit.io/mmagnodev/profile_1.webp', // O la ruta correcta a tu imagen
  name: 'Marcos González',
  descriptionKey : 'about.description',

  jobs: [
    {
      job: 'Full Stack WordPress',
      company: 'Tierra de ideas',
      dateKey: 'about.tdi.date',
      imagejob: 'https://ik.imagekit.io/mmagnodev/Logo%20TDI.webp',
      descjobKey: 'about.tdi.description',
    },
    {
      job: 'Frontend Developer',
      company: 'Balabox',
      dateKey: 'about.bbx.date',
      imagejob: 'https://ik.imagekit.io/mmagnodev/balabox.webp',
      descjobKey: 'about.bbx.description',
      recommendationUrl: 'https://ik.imagekit.io/mmagnodev/CARTA%20DE%20RECOMENDACIO%CC%81N%20Marcos.pdf', // URL de la carta
      recommendationButtonKey: 'about.button.title' // Clave para el texto del botón
    },
    {
      job: 'Freelancer',
      company: 'SAH',
      dateKey: 'about.sah.date',
      imagejob: 'https://ik.imagekit.io/mmagnodev/sah_logo.webp',
      descjobKey: 'about.sah.description',
      recommendationUrl: 'https://ik.imagekit.io/mmagnodev/CONSTANCIA%20LABORAL%20SISTEMA%20AGUAS%20DE%20HUIXQUILUCAN.pdf', // URL de la carta
      recommendationButtonKey: 'about.button.title' // Clave para el texto del botón
    },
  ],
};

export default listAbout;