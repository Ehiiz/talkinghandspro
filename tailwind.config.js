/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        frenchLilac: "#985F99",
        blueJeans: "#63ADF2",
        viridian: "#2A7F62",
        lightPink: "#FCB0B3",
        teaGreen: "#BFEDC1",
        matteBlack: "#28282b",
      },

      fontFamily: {
        questrial: ["Questrial", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        RubikGlitch: ["Rubik Glitch", "cursive"],
        Patrick: ["Patrick Hand", "cursive"],
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        fadeIn: "fadeIn 4s ease-in-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      variants: {
        animation: ["motion-safe"],
      },
    },
  },
  plugins: [],
};
