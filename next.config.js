const {PHASE_DEVELOPMENT_SERVER} = require("next/dist/shared/lib/constants");

/** @type {import('next').NextConfig} */
const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      webpack: (config) => {
        config.resolve.fallback = {fs: false};
        return config;
      },
      env: {
        markdownPath: "",
      },
    };
  }

  return {
    reactStrictMode: true,
    webpack: (config) => {
      config.resolve.fallback = {fs: false};
      return config;
    },
    env: {
      markdownPath: "",
    },
  };
};
``;

module.exports = nextConfig;
