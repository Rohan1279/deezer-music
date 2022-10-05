/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f7389b",

          secondary: "#ed9a15",

          accent: "#3246c9",

          neutral: "#26232F",

          "base-100": "#FAFAFA",

          info: "#2B6CEE",

          success: "#4CEBB9",

          warning: "#F9DD62",

          error: "#FB183E",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
