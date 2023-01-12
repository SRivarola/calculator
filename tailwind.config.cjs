/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#161616",
        blue: "#0c88ee",
        yellow: "ffeb43",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        orbitron: ["Orbitron", "mono"],
      },
      boxShadow: {
        '3xl': '2px 2px 5px rgba(124, 124, 124)',
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};