/** @type {import('next').NextConfig} */

const Dotenv = require("dotenv-webpack");

const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.plugins.push(new Dotenv({ silent: true }));

    return config;
  },
  async rewrites() {
    return [
      {
        source: process.env.SOURCE_PATH,
        destination: process.env.DESTINATION_URL,
      },
    ];
  },
};

module.exports = nextConfig;
