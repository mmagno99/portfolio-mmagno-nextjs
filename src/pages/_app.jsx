import '@/styles/globals.css';
import '@/styles/Splide.css';
import '@/i18n.jsx';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import { useState, useEffect } from 'react';

import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config.js'; // Asegúrate que el archivo tenga extensión `.js`

export default function MyApp({ Component, pageProps }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div style={{ visibility: 'hidden' }}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Marcos González R.</title>
          <meta name="google-site-verification" content="HH9xzJYZot6pZPuhQRomr0W2QJZy4qyw0JrYVTzng38" />
        </Head>
      </div>
    );
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem storageKey="theme">
      <DefaultSeo {...SEO} />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Marcos González R.</title>
      </Head>
      <div className="container-mmagno">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
