/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      "dark-violet": "hsl(278, 68%, 11%)",
      "gray-violet": "hsl(279, 6%, 55%)",
      "light-violet": "hsl(270, 3%, 87%)",
      "red-error": "hsl(0, 100%, 66%)",
    },
    boxShadow: {
      subtle: "0px 0px 40px -30px #21092f",
    },
  },
  plugins: [],
};
