/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'outfit': ['"Outfit"', 'sans-serif'],
      },
      keyframes: {
        rotateWords: {
          '0%': { opacity: '0', transform: 'translateY(100%)' },
          '10%': { opacity: '1', transform: 'translateY(0)' },
          '20%': { opacity: '1', transform: 'translateY(0)' },
          '30%': { opacity: '0', transform: 'translateY(-100%)' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        rotateWords: 'rotateWords 10s infinite',
      },
      animationDelay: {
        '0s': '0s',
        '2s': '2s',
        '4s': '4s',
        '6s': '6s',
        '8s': '8s',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.delay-0s': { 'animation-delay': '0s' },
        '.delay-2s': { 'animation-delay': '2s' },
        '.delay-4s': { 'animation-delay': '4s' },
        '.delay-6s': { 'animation-delay': '6s' },
        '.delay-8s': { 'animation-delay': '8s' },
      });
    },
  ],
}