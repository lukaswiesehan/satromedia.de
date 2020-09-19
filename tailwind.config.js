module.exports = {
  plugins: [
    require('@tailwindcss/custom-forms'),
  ],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    fontFamily: {
      'display': ['Montserrat', 'sans-serif'],
      'body': ['Open Sans', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      white: '#fff',
      black: {
        100: '#C8C8CD',
        300: '#A6A6A5',
        500: '#697173',
        700: '#3C3C3C',
        900: '#2d2d2d'
      },
      light: {
        100: '#F9FBFF',
        500: '#E5F0F5',
        900: '#D1E6EB'
      },
      dark: {
        100: '#8CA0C3',
        300: '#6477AA',
        500: '#46508c',
        900: '#282850'
      },
      gray: {
        300: '#A6A6AF',
        500: '#696A79',
        600: '#50505F',
        700: '#31313D',
        900: '#272730'
      },
      red: {
        100: '#FEB2B2',
        500: '#F56565',
        900: '#C53030'
      },
      green: {
        100: '#9AE6B4',
        500: '#68D391',
        900: '#48BB78'
      }
    },
    extend: {
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '112': '28rem',
        '128': '32rem',
      },
      boxShadow: {
        outline: '0 0 0 3px rgba(255, 255, 255, 0.2)'
      },
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
  },
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: [
    './src/**/*.vue'
  ],
}