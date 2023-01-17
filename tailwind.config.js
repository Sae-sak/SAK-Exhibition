const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        kgu_main_orange: "#F25822",
        kgu_main_yellow: "#F7941D",
        kgu_main_blue: "#005AAB",
        kgu_main_green: "#00AB5B",

        sak_main_pink: "#FCDAB0",
        sak_main_orange: "#F89F80",
        sak_main_apricot: "#F57B1F",
        sak_main_olivegreen: "#707E55",
        sak_main_artemisiagreen: "#698741",

        sak_point_green: "#A1E0C3",
        sak_point_jungle: "#007D88",
        sak_point_blue: "#95BADC",
      },
      fontFamily: {
        header: ["Amagro", "serif"],
        headerKR: ["Nanum Myeongjo", "serif"],
        title: ["PT serif", "serif"],
        titleKR: ["Noto Serif KR", "serif"],
        subtitle: ["Lustria", "serif"],
        body: ["Roboto", "sans-serif"],
        button: ["Bebas Neue", "cursive"],
        buttonKR: ["Do Hyeon", "sans-serif"],
      },
    },
  },
  plugins: [],
};
