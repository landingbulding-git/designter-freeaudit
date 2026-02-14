/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          900: '#1e293b', // Slate 900
          800: '#334155', // Slate 700
          accent: '#ea580c', // Orange 600
          accentHover: '#c2410c', // Orange 700
        }
      }
    }
  },
  plugins: [],
}
