/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{ts,tsx}", // padrão do ShadCN
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Cores customizadas do seu projeto
        "programin-blue": "#3170D7",
        "programin-light-blue": "#e7ecf8",

        primary: {
          DEFAULT: "#0073ff",
          50: "#e6f1ff",
          100: "#cce3ff",
          200: "#99c7ff",
          300: "#66abff",
          400: "#338fff",
          500: "#0073ff",
          600: "#005cd9",
          700: "#0044b3",
          800: "#002d8c",
          900: "#001766",
        },
        secondary: {
          DEFAULT: "#00cc00",
          50: "#e6ffe6",
          100: "#ccffcc",
          200: "#99ff99",
          300: "#66ff66",
          400: "#33ff33",
          500: "#00cc00",
          600: "#00a600",
          700: "#007f00",
          800: "#005900",
          900: "#003300",
        },
        accent: {
          DEFAULT: "#ffeb00",
          50: "#fffde6",
          100: "#fffbcc",
          200: "#fff799",
          300: "#fff366",
          400: "#ffef33",
          500: "#ffeb00",
          600: "#d9c700",
          700: "#b3a300",
          800: "#8c7f00",
          900: "#665c00",
        },
        text: {
          primary: "#1a1a1a",
          secondary: "#4d4d4d",
          light: "#ffffff",
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
