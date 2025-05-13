import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
  },

  body: {
    backgroundColor: '$gray900',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400,
  },

  '.Toastify__toast-theme--dark': {
    background: '$green300',
    color: '$gray800',
    fontWeight: 'bold',
    justifyContent: 'center',
  },

  '.Toastify__progress-bar-theme--dark': {
    background: '$gray800',
  },
})
