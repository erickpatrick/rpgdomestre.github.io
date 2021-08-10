module.exports = {
  mode: "jit",
  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    safelist: [
      "text-yellow-600",
      "hover:text-yellow-800",
      "text-blue-600",
      "hover:text-blue-800",
      "text-pink-600",
      "hover:text-pink-800",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
