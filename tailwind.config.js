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
      },

      flex: {
        4: "4 4 0%",
        3: "3 3 0%",
      },
    },
  },
  plugins: [],
};
