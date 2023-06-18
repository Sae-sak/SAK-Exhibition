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
        light_gray_1: "#303030",
        light_gray_2: "#808080",
        light_gray_3: "#BDBDBD",
        light_gray_4: "#EEEEEE",
        light_bg_1: "#FBFBFB",

        night_main_yellow: "#FFE922",

        accent_pink: "#ca7089",
        accent_green: "#024138",

        font_white: "#FFFFFF",
        font_black: "#000000",

        night_gray_1: "#EEEEEE",
        night_gray_2: "#BDBDBD",
        night_gray_3: "#808080",
        night_gray_4: "#303030",
        night_bg_1: "#101010",

        alert_success: "#219653",
        alert_warning: "#F2C94C",
        alert_danger: "#EB5757",
        alert_info: "#2F80ED",
      },
      fontFamily: {
        accent: ["DM serif"],
        body: ["Noto Sans KR"],
        title: ["Hanamdaum"],
        arch: ["Playfair Display"],
      },
    },
  },
  plugins: [],
};
