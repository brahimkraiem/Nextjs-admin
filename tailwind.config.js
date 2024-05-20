/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      spacing: {
        2.5: "10px",
        5: "20px",
        1.25: "5px",
        6: "24px",
        450: "450px",
        88: "88px",
        30: "30px",
        50: "50px",
        300: "300px",
      },
      width: {
        "1/2": "50%",
        45: "45%",
        500: "500px",
      },
      height: {
        "1/2": "50%",
        500: "500px",
      },
      borderRadius: { custom: "10px" },
      colors: {
        "custom-blue": "#182237",
        "custom-soft": "#b7bac1",
        purple: "#3f3cbb",
        "custom-bg": "#2e374a",
        "bg-pending": "#f7cb7375",
        "bg-done": "#afd6ee75",
        "bg-cancelled": "#f7737375",
        "light-bg": "#253352",
        "bg-button": "#5d57c9",
      },

      flex: {
        4: "4 4 0%",
        3: "3 3 0%",
      },
    },
  },
  plugins: [],
};
