/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "www.shutterstock.com",
      },
    ],
  },
};

export default nextConfig;
