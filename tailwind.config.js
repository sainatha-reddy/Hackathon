/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        neon: {
          DEFAULT: '#39FF14', // neon green
        },
        black: '#000000',
        midnight: {
          DEFAULT: '#141b2d',
        },
        primary: {
          DEFAULT: '#8a2be2',
        },
        glow: {
          DEFAULT: '#1abc9c',
        },
        text: {
          DEFAULT: '#eaeaea',
        },
        cta: {
          DEFAULT: '#f75990',
        },
      },
    },
  },
  plugins: [],
};
