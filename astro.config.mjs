import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://mmagno.dev',
  output: 'static',
  redirects: {
    '/projects': { destination: '/proyectos', status: 301 },
    '/about': { destination: '/acerca-de', status: 301 },
  },
  adapter: vercel(),
  integrations: [mdx(), sitemap(), react()],
  vite: { plugins: [tailwindcss()] },
  markdown: { shikiConfig: { theme: 'github-dark' } },
});
