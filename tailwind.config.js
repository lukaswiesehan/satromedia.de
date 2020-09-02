module.exports = {
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
        500: '#46508c',
        900: '#282850'
      }
    },
    extend: {
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '128': '32rem',
      }
    }
  }
}