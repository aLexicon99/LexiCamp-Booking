/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        // Såhär tillåts bilder att laddas från externa sidor
        // ett objekt för varje ny extern sida
        // Exempel från Camping.se
        // https://camping.se/sites/cb_camping/files/styles/medium/http/images.citybreak.com/
        protocol: 'https',
        hostname: 'camping.se',
        port: '',
        pathname: '/sites/cb_camping/files/styles/medium/http/images.citybreak.com/**',
      },
      {
        // lägg till ny extern sida här
        protocol: 'http',
        hostname: '',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
