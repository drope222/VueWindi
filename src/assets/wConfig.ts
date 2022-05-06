import colors from "windicss/colors";
import { varToRgba } from "../helper/index";
import plugin from 'windicss/plugin'

export default {
  preflight: {
    safelist: "button a ul li",
  },
  theme: {
    colors: {
      primary: {
        50: varToRgba("--color-primary-50"),
        100: varToRgba("--color-primary-100"),
        200: varToRgba("--color-primary-200"),
        300: varToRgba("--color-primary-300"),
        400: varToRgba("--color-primary-400"),
        500: varToRgba("--color-primary-500"),
        600: varToRgba("--color-primary-600"),
        700: varToRgba("--color-primary-700"),
        800: varToRgba("--color-primary-800"),
        900: varToRgba("--color-primary-900"),
      },
      vuewindi: {
        bg: varToRgba("--vuewindi-bg"),
        bc: varToRgba("--vuewindi-bc"),
        text: varToRgba("--vuewindi-text"),
      },
    },
    extend: {
      colors: {
        teal: colors.teal,
        blue: colors.sky,
        rose: colors.rose,
        violet: colors.violet,
        orange: colors.orange,
        white: colors.white,
        black: colors.black,
        gray: colors.gray,
        dark: colors.dark,
        light: colors.light,
        red: colors.red,
        yellow: colors.yellow,
        green: colors.green,
      },    
    },
  },
  
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.border-tl-inherit': {
          'border-top-left-radius': 'inherit',
        },
        '.border-tr-inherit': {
          'border-top-right-radius': 'inherit',
        },
        '.border-bl-inherit': {
          'border-bottom-left-radius': 'inherit',
        },
        '.border-br-inherit': {
          'border-bottom-right-radius': 'inherit',
        },
        '.border-tl-unset': {
          'border-top-left-radius': 'unset',
        },
        '.border-tr-unset': {
          'border-top-right-radius': 'unset',
        },
        '.border-bl-unset': {
          'border-bottom-left-radius': 'unset',
        },
        '.border-br-unset': {
          'border-bottom-right-radius': 'unset',
        },


      })
    }),
  ]
};
