/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  // No basePath needed for organization.github.io sites
  basePath: "",
  assetPrefix: "",
  images: {
    unoptimized: true,
  },
  webpack(config) {
    if (config.optimization.splitChunks) {
      config.optimization.splitChunks.maxSize = 20000000; // ~20MB
    } else {
      config.optimization.splitChunks = {
        chunks: "all",
        maxSize: 20000000,
      };
    }
    return config;
  },
};

export default nextConfig;
