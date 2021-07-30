// next.config.js
const withMDX = require("@next/mdx")({
  extension: /\.mdx$/,
});

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "mdx"],
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
