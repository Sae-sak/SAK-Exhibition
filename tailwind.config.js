/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        kgu_main_red: "#E9511D",
        kgu_main_yellow: "#F49800",
        kgu_main_green: "#009E59",
        kgu_main_blue: "#0050A0",

        light_gray_1: "#303030",
        light_gray_2: "#808080",
        light_gray_3: "#BDBDBD",
        light_gray_4: "#EEEEEE",
        light_bg_1: "#FBFBFB",
        light_font_1: "#000000",

        night_main_yellow: "#FFE922",

        night_gray_1: "#EEEEEE",
        night_gray_2: "#BDBDBD",
        night_gray_3: "#808080",
        night_gray_4: "#303030",
        night_bg_1: "#101010",
        night_font_1: "#FFFFFF",

        alert_success: "#219653",
        alert_warning: "#F2C94C",
        alert_danger: "#EB5757",
        alert_info: "#2F80ED",
      },
      fontFamily: {
        header: ["Frank The Architect", "serif"],
        title: ["Kimjungchul Myungjo"],
        body: ["Kimjungchul Gothic"],
      },
    },
  },
  plugins: [],
};
