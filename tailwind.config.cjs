/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  safelist: [
    "text-yellow-600",
    "hover:text-yellow-800",
    "text-blue-600",
    "hover:text-blue-800",
    "text-pink-600",
    "hover:text-pink-800",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
