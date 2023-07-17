const { PHASE_DEVELOPMENT_SERVER } = require("next/dist/shared/lib/constants");

/** @type {import('next').NextConfig} */
const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      async rewrites() {
        return [
          {
            source: "/sitemap.xml",
            destination: "/api/sitemap",
          },
        ];
      },
      reactStrictMode: false,
      webpack: (config) => {
        config.resolve.fallback = { fs: false };
        return config;
      },
      images: {
        domains: ["firebasestorage.googleapis.com"],
        remotePatterns: [
          {
            protocol: "https",
            hostname: "api.adorable.io",
            port: "",
            pathname: "/avatars/23/abott@adorable.png",
          },
          {
            hostname: "*.googleusercontent.com",
          },
        ],
      },
      env: {
        markdownPath: "",
      },
    };
  }

  return {
    async rewrites() {
      return [
        {
          source: "/sitemap.xml",
          destination: "/api/sitemap",
        },
      ];
    },
    reactStrictMode: true,
    webpack: (config) => {
      config.resolve.fallback = { fs: false };
      return config;
    },
    images: {
      domains: ["firebasestorage.googleapis.com"],
      remotePatterns: [
        {
          protocol: "https",
          hostname: "api.adorable.io",
          port: "",
          pathname: "/avatars/23/abott@adorable.png",
        },
        {
          hostname: "*.googleusercontent.com",
        },
      ],
    },
    env: {
      markdownPath: "",
    },
  };
};
``;

module.exports = nextConfig;
