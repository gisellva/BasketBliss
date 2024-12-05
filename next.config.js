/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/Home', // Página a la que quieres redirigir
          permanent: true, // Marca la redirección como permanente (301)
        },
      ];
    },
  };
  
  module.exports = nextConfig;