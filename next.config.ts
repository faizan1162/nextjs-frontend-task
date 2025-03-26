/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    reactStrictMode: true,
    experimental: {
        optimizeCss: true, // Optimizes CSS for production
    },
};

export default nextConfig;
