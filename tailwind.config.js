/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./node_modules/daisyui/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        xs: "330px",
      },
    },
  },
  plugins: [
    // require("@tailwindcss/forms"), // incompatible with daisyui accordion
    // require("@headlessui/tailwindcss"),
    require("daisyui"),
  ],
};
