/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter Variable', 'sans-serif'],
      },
      colors: {
        brand: {
          900: '#1e293b', // Slate 900
          800: '#334155', // Slate 700
          accent: '#ea580c', // Orange 600
          accentHover: '#c2410c', // Orange 700
        }
      }
    },
  },
  plugins: [],
}
