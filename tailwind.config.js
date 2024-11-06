/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        violet: '#9e7f66',
        white: '#ffffff',
        lightviolet: '#939BF4',
        lightGray: '#F4F6F8',
        veryDarkBlue: '#19202D',
        gray: '#9DAEC2',
        midnight: '#121721',
        darkGray: '#6E8098',
        blueLotus: '#5964E0',

        background: 'var(--bg-color)',
        card: 'var(--card-color)',
        txtColor: 'var(--text-color)',
      },

      screens: {
        'can-hover': { raw: '(hover: hover)' },
      },
    },
  },
  plugins: [],
};
