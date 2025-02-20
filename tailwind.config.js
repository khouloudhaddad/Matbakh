/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        "sea-buckthorn": {
          50: "#fff9eb",
          100: "#fdecc8",
          200: "#fbd88c",
          300: "#f9bd50",
          400: "#f79f1a",
          500: "#f1820f",
          600: "#d65f09",
          700: "#b13f0c",
          800: "#903210",
          900: "#762911",
          950: "#441204",
        },
        "soft-peach": {
          50: "#f9f6f8",
          100: "#f4eff2",
          200: "#efe7eb",
          300: "#dac7d0",
          400: "#c2a4b2",
          500: "#ad8797",
          600: "#966c7c",
          700: "#7f5765",
          800: "#6a4a55",
          900: "#5a4149",
          950: "#342329",
        },
      },
    },
  },
  plugins: [],
};
