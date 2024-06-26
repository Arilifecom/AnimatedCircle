/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#6B92E5", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
      },
      backgroundImage: {
        blueGradiate: "linear-gradient(to left,  #83EAF1, #63A4FF)",
        circleLight:
          "repeating-radial-gradient(circle at 50%, #1b1b1b, #1b1b1b 2px, #f5f5f5 1px, #f5f5f5 70px);",
        circleLightSm:
          "repeating-radial-gradient(circle at 50%, #1b1b1b, #1b1b1b 1px, #f5f5f5 1px, #f5f5f5 40px);",
      },
      screens: {
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }
        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }
        lg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }
        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }
        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
        xs: { max: "479px" },
        // => @media (max-width: 479px) { ... }
      },
    },
  },
  plugins: [],
};
