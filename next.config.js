/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
      styledComponents: true
    },
    images: {
      domains: ['localhost'], // o el dominio que necesites
    },
  };
  
  module.exports = nextConfig;
  