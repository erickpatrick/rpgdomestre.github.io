// next.config.js
const withMDX = require("@next/mdx")({
  extension: /\.mdx$/,
});

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "mdx"],
  images: {
    domains: ["res.cloudinary.com"],
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
