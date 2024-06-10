/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    scrollMargin: {
      header: '88px',
    },
    extend: {
      colors: {
        bg: '#daf5f0',
        main: '#c4a1ff',
        mainAccent: '#9e66ff',
      },
      borderRadius: {
        base: '5px',
      },
      boxShadow: {
        base: '4px 4px 0px 0px rgba(0,0,0,1)',
      },
      translate: {
        boxShadowX: '4px',
        boxShadowY: '4px',
      },
      fontFamily: {
        hero: ['Unbounded', 'sans-serif'],
        heading: ['Unbounded', 'sans-serif'],
        body: ['Space Grotesk', 'sans-serif'],
      },
      fontWeight: {
        base: '500',
        heading: '500',
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        marquee2: 'marquee2 30s linear infinite',
        slideDown: 'slideDown 0.5s ease-in-out forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        slideDown: {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(50px)' },
        },
      },
    },
  },
  plugins: [],
}
