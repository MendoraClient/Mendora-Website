/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '',
  assetPrefix: '',
  images: {
    unoptimized: true, // Make sure this is at root level, not under experimental
  },
  webpack(config) {
    if (config.optimization.splitChunks) {
      config.optimization.splitChunks.maxSize = 20000000;
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
