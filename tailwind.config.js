/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        rgb: "rgba(0,0,0,0.5)",
        rgba: "rgba(0,0,0,0.8)",
        primary: "var(--primary-color)",
      },
    },
    screens: {
      sm: "450px",
      // => @media (min-width: 640px) { ... }

      md: "600px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
    },
  },
  plugins: [],
};
