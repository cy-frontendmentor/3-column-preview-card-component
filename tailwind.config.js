/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      title: ['Big Shoulders Display', 'cursive'],
      sans: ['Lexend Deca', 'sans-serif', 'ui-sans-serif', 'system-ui'],
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        'white-paragraphs': 'hsla(0,0%,100%,0.75)',
        'gray-light-very': 'hsl(0,0%,95%)',
        'orange-bright': 'hsl(31,77%,52%)',
        'cyan-dark': 'hsl(184,100%,22%)',
        'cyan-dark-very': 'hsl(179,100%,12%)',
      },
    },
  },
  plugins: [],
};
