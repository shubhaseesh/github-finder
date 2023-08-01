/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "wireframe",
      "dracula",
      "luxury",
      "business",
      "garden",
      "aqua",
      "lofi",
      "pastel",
      "night",
      "lemonade",
      "acid"
    ],
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
