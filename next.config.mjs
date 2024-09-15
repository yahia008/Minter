/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['prlabsapi.com']
      },
      experimental: {
        esmExternals: true,
      },
};

export default nextConfig;
