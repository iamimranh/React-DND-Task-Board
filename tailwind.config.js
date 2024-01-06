/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#401B60",
        secondary: "#D5D1D8",
        third: "#E9E6EB",
      },
      boxShadow: {
        custom: "0px 4px 33px 0px rgba(0, 0, 0, 0.10)",
      },
    },
  },
  plugins: [],
};
