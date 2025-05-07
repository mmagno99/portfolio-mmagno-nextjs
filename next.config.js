/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Configuración de compilación para styled-components Y emotion
  compiler: {
    styledComponents: true,
    emotion: true // <-- Esta línea es clave para resolver el error de @emotion/react
  },
  images: {
    domains: ['localhost'],
  },
  webpack: (config) => {
    // Alias para resolver el problema de react-syntax-highlighter
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-syntax-highlighter/dist/esm': 'react-syntax-highlighter/dist/cjs',
      'react-syntax-highlighter/dist/esm/styles/prism': 'react-syntax-highlighter/dist/cjs/styles/prism'
    }
    return config
  },
  // Opcional: Configuración adicional para Emotion
  experimental: {
    esmExternals: false // Ayuda con algunos paquetes que usan ESM
  }
}

module.exports = nextConfig