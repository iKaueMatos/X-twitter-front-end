/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const nextReactSvgConfig = {
  include: path.resolve(__dirname, '.'),
};

const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true
  },
  images: {
    domains: ['twitter-clone-storages.s3.amazonaws.com'],
  },
}

const withReactSvg = require('next-react-svg')(nextReactSvgConfig);

module.exports = withReactSvg(nextConfig);
