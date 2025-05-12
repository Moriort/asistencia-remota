/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'build',
  images: {
    unoptimized: true,
  },
  // Opciones básicas para evitar problemas
  reactStrictMode: false,
  swcMinify: false,
  experimental: {
    // Desactivar funcionalidades experimentales que podrían causar problemas
    esmExternals: false
  },
  webpack: (config) => {
    // Configuración personalizada de webpack
    return config;
  }
}

module.exports = nextConfig