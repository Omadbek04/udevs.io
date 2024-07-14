/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1b5bf7",
        navbarClose: "#f4f7ff",
        secondary: "#464359",
        dark: "#18191f",
        bgCard: "#e0e8ff",
        bacground: "#f4f7ff",
      },
    },
  },
  plugins: [],
};
