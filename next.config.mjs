/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://jengt-provest-backend-1.onrender.com/v1/jengt_provest/:path*'
        }
      ];
    },
  };
  
  export default nextConfig;
  