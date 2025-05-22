import '@/styles/globals.css';
import '@/styles/Splide.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/i18n.jsx';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import { useState, useEffect } from 'react';

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
        </Head>
      </div>
    );
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true} storageKey="theme">
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