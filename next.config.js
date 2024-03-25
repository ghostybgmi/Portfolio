/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      domains: ['images.unsplash.com', 'www.google.com','img.freepik.com','media.licdn.com'],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
