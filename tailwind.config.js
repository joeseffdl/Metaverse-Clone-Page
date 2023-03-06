/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
      },
      animation: {
        torch: "torch 5s linear",
        hoverTorch: "torch 4s linear infinite",
        reveal: "reveal 0.8s ease-in-out",
      },
      keyframes: {
        torch: {
          from: {
            backgroundPosition: "-50% 0",
          },
          to: {
            backgroundPosition: "200% 0",
          },
        },
        reveal: {
          "0%": {
            transform: "translatey(100%)",
          },
          "100%": {
            transform: "translatey(0)",
          },
        },
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "animation-delay": (value) => {
            return {
              "animation-delay": value,
            };
          },
        },
        {
          values: theme("transitionDelay"),
        }
      );
    }),
  ],
};
