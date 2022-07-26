// next.config.js
const withMDX = require("@next/mdx")({
  extension: /\.mdx$/,
});

module.exports = withMDX({
  reactStrictMode: true,
  experimental: {
    newNextLinkBehavior: true,
  },
  swcMinify: true,
  pageExtensions: ["js", "jsx", "mdx"],
  images: {
    domains: ["res.cloudinary.com"],
  },
  i18n: {
    locales: ["pt-BR"],
    defaultLocale: "pt-BR",
  },
  async redirects() {
    return [
      {
        source: "/weekly/:yearweek/:edition",
        destination: "/weekly/:edition", // Matched parameters can be used in the destination
        permanent: true,
      },
    ];
  },
});
