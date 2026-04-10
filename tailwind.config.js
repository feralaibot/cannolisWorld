/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Cinzel', 'Times New Roman', 'serif'],
      },
      boxShadow: {
        neon: '0 0 30px rgba(255, 195, 0, 0.18)',
        ember: '0 0 30px rgba(255, 92, 92, 0.18)',
      },
      backgroundImage: {
        'noise-grid': 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
