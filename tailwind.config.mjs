/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

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
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.brand.900'),
            a: {
              color: theme('colors.brand.accent'),
              '&:hover': {
                color: theme('colors.brand.accentHover'),
              },
            },
            h1: {
              color: theme('colors.brand.900'),
            },
            h2: {
              color: theme('colors.brand.900'),
            },
            h3: {
              color: theme('colors.brand.900'),
            },
            h4: {
              color: theme('colors.brand.900'),
            },
            strong: {
              color: theme('colors.brand.900'),
            },
            blockquote: {
              color: theme('colors.brand.800'),
              borderLeftColor: theme('colors.brand.accent'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    typography,
  ],
}
