/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  basePath: '',
  assetPrefix: '',
  images: {
    unoptimized: true, // Required for GitHub Pages
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
