export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#F5F2EA',
          dark: '#EBE6D8',
        },
        gold: {
          DEFAULT: '#B49B57',
          light: '#D4C494',
          dark: '#7A6530',
          text: '#6B5520',
        },
        bronze: {
          DEFAULT: '#3D3322',
          dark: '#2A2215',
          light: '#5C4E38',
        },
        garden: {
          DEFAULT: '#5B6B4A',
          light: '#7A8C66',
          dark: '#3E4A33',
          pale: '#E8EBE2',
          accent: '#6E8258',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        serif: ['"EB Garamond"', 'Georgia', '"Times New Roman"', 'serif'],
      },
    },
  },
}