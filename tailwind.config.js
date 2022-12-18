const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#D3FBD8"
      }
    },
    fontFamily: {
      sans: ["Darker Grotesque", ...defaultTheme.fontFamily.sans],
      special: "Heebo",
    },
  },
  plugins: [],
};
