/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'warm-white': '#fefcf8',
        'warm-brown': '#4a4a4a',
        'brand-gold': '#f4c430',
        'brand-gold-dark': '#e6b800',
        'brand-purple': '#8b5a96',
        'brand-purple-dark': '#7a4d85',
        'brand-purple-light': '#b19bc7',
        'accent-gray': '#6b6b6b',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fadeInUp': 'fadeInUp 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};