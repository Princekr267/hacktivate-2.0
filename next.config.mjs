/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimise images served from the /public folder
  images: {
    // All sponsor images are local (/public/Sponser/…) so no external domains needed.
    // Enabling quality/format tweaks for best LCP scores on Vercel.
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
};

export default nextConfig;
