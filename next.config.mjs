/** @type {import('next').NextConfig} */
const nextConfig = {
  // cacheComponents is intentionally OFF for this project
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "puppy.instabizweb.com" },
    ],
  },
};

export default nextConfig;