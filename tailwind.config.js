/** @type {import('tailwindcss').Config} */
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
        torch: "torch 5s linear infinite",
      },
      keyframes: {
        torch: {
          from: {
            backgroundPosition: "-100% 0",
          },
          to: {
            backgroundPosition: "200% 0",
          },
        },
      },
    },
  },
  plugins: [],
};
