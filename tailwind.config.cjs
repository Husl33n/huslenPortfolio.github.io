/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        float_X: {
          "0%": { transform: "translate(0, 0px)" },
          "10%": { transform: "translate(30px, 30px)" },
          "20%": { transform: "translate(0, 15px)" },
          "30%": { transform: "translate(30px, 30px)" },
          "30%": { transform: "translate(15px, 0)" },
          "40%": { transform: "translate(-30px, -30px)" },
          "50%": { transform: "translate(0px, -15px)" },
          "60%": { transform: "translate(30px, -30px)" },
          "70%": { transform: "translate(15px, 0px)" },
          "80%": { transform: "translate(0, 0)" },
          "90%": { transform: "translate(30px, 0)" },
          "90%": { transform: "translate(0, 0)" },
        },
      },
      animation: {
        float_X: "float_X 30s ease-in-out infinite",
      },
      fontFamily: {
        inter: ["inter", "serif"],
      },
    },
  },
  plugins: [require("tailwindcss-dotted-background")],
};
