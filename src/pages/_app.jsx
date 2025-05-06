// /pages/_app.jsx
import React from 'react';
import { ThemeProvider } from 'next-themes';
import '../i18n';
import '../styles/globals.css'; // Asegúrate de tener un archivo global si lo necesitas

export default function MyApp({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem storageKey="theme">
        <Component {...pageProps} />
      </ThemeProvider>
    </React.StrictMode>
  );
}
