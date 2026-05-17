/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fix OneDrive rename conflict on Windows — disable filesystem cache locking
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;
