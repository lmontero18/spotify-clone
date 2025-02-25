/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gotham: ["Gotham, sans-serif"],
      },
      colors: {
        // Green shades
        spotifyGreen: "#1ED760",
        spotifyGreenDark: "#164E2A", // Disabled / onClick color\
        spotifyGreenLight: "#3be477", // Hover color

        // Gray shades
        grayLight: "#7C7C7C",
        grayDark: "#121212",
        grayMedium: "#292929",

        // Gradients
        grayGradientStart: "#2A2A2A",
        grayGradientEnd: "#000000",

        // Red shades
        redLight: "#FF6B6B",
        redDark: "#A30000",
      },
    },
  },
  plugins: [],
};
