const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
    emotion: true
  },
  images: {
    domains: ['localhost'],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-syntax-highlighter/dist/esm': 'react-syntax-highlighter/dist/cjs',
      'react-syntax-highlighter/dist/esm/styles/prism': 'react-syntax-highlighter/dist/cjs/styles/prism'
    };
    return config;
  },
  experimental: {
    esmExternals: false
  },
  pageExtensions: ['js', 'jsx', 'mdx']
};

module.exports = withMDX(nextConfig);