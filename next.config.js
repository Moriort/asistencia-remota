/** @type {import('next').NextConfig} */
const nextConfig = {
  // Para producción, descomenta estas líneas
  output: 'export',
  // distDir: 'build',
  images: {
    unoptimized: true,
  },
  // Opciones básicas para evitar problemas
  reactStrictMode: false,
  webpack: (config) => {
    // Configuración personalizada de webpack
    return config;
  }
}

module.exports = nextConfig