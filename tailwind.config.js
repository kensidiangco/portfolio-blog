module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark color theme
        'bg': '#18191A',
        'nav-footer': '#242526', 
        'card': '#242526',
        'button': '#3A3B3C',
        'button-hover': '#4E4F50',
        'active-button': '#2D88FF',
        'nav-button-hover': '#3A3B3C',
        'input-bg': '#3A3B3C',
        'text': '#E4E6EB',
        'faded-text': '#B0B3B8',
        
        // Light color theme
        'light-bg' : '#F0F2F5',
        'light-nav-footer': '#FFFFFF',
        'light-card': '#FFFFFF',
        'light-button': '#E4E6EB',
        'light-button-hover': '#D8DADF',
        'light-nav-button-hover': '#F2F2F2',
        'light-active-button': '#1877F2',
        'light-input-bg': '#F0F2F5',
        'light-text': '#050505',
        'light-faded-text': '#65676B',

      }
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}