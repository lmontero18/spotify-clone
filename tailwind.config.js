/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Green shades
        spotifyGreen: "#1ED760",
        spotifyGreenDark: "#164E2A", // Disabled / onClick color

        // Gray shades
        grayLight: "#7C7C7C",
        grayDark: "#121212",
        grayMedium: "#292929",

        // Gradient Background
        gradientBg: "linear-gradient(to bottom, #2A2A2A, #000000)",
      },
    },
  },
  plugins: [],
};
