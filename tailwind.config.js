module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          200: "#f0f2ef",
          600: "#748c70",
          700: "#5a6d57",
          800: "#404040",
          900: "#202020",
          "900_01": "#272f25",
        },
        purple: { 200: "#cfa5e9" },
        blue_gray: { 100: "#d1d9cf", "100_01": "#cbcbcb" },
        light_blue: { 200: "#7cc3eb" },
        lime: { 800: "#8f9125" },
        black: { 900: "#0c0c0c" },
        white: { A700: "#ffffff" },
        indigo: { 800: "#19408d" },
      },
      fontFamily: {
        montserrat: "Montserrat",
        leaguespartan: "League Spartan",
        gillsansmt: "Gill Sans MT",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
