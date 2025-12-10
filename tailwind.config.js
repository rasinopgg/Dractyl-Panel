/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs", "./plugins/**/**/*.ejs"],
  theme: {
    extend: {
      colors: {
        gold: {
          400: '#FFE566',
          500: '#FFD700',
          600: '#D4AF37',
          700: '#B8860B',
          900: '#404040', // Background for buttons
          910: 'rgba(255, 215, 0, 0.1)', // Gold background
        },
        dark: {
          900: '#0a0a0a',  // Primary background
          800: '#111111',  // Sidebar
          700: '#1a1a1a',  // Card backgrounds
          border: '#333333'
        },
        panel: '#050505' // Main page background
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow': '0 0 15px rgba(255, 215, 0, 0.15)',
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
