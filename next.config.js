/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['firebase'],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        crypto: false,
        stream: false
      }
    }
    // Optimize module resolution
    config.resolve.alias = {
      ...config.resolve.alias,
      'undici': false
    }
    return config
  }
}

module.exports = nextConfig
