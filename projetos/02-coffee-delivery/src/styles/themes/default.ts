import { css } from 'styled-components'

export const defaultTheme = {
  white: '#FFF',

  'yellow-light': '#F1E9C9',
  yellow: '#DBAC2C',
  'yellow-dark': '#C47F17',

  'purple-light': '#EBE5F9',
  purple: '#8047F8',
  'purple-dark': '#4B2995',

  'base-title': '#272221',
  'base-subtitle': '#403937',
  'base-text': '#574F4D',
  'base-label': '#8D8686',
  'base-hover': '#D7D5D5',
  'base-button': '#E6E5E5',
  'base-input': '#EDEDED',
  'base-card': '#F3F2F2',

  background: '#FAFAFA',

  fonts: {
    title: {
      xl: css`
        font-family: 'Baloo 2', sans-serif;
        font-size: 3rem;
        line-height: 130%;
        font-weight: 800;
      `,
      l: css`
        font-family: 'Baloo 2', sans-serif;
        font-size: 2rem;
        line-height: 130%;
        font-weight: 800;
      `,
      m: css`
        font-family: 'Baloo 2', sans-serif;
        font-size: 1.5rem;
        line-height: 130%;
        font-weight: 800;
      `,
      s: css`
        font-family: 'Baloo 2', sans-serif;
        font-size: 1.25rem;
        line-height: 130%;
        font-weight: 700;
      `,
      xs: css`
        font-family: 'Baloo 2', sans-serif;
        font-size: 1.125rem;
        line-height: 130%;
        font-weight: 700;
      `,
    },

    text: {
      l: css`
        font-family: 'Roboto', sans-serif;
        font-size: 1.25rem;
        line-height: 130%;
        font-weight: 400;
      `,
      m: css`
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        line-height: 130%;
        font-weight: 400;
      `,
      s: css`
        font-family: 'Roboto', sans-serif;
        font-size: 0.875rem;
        line-height: 130%;
        font-weight: 400;
      `,
      xs: css`
        font-family: 'Roboto', sans-serif;
        font-size: 0.75rem;
        line-height: 130%;
        font-weight: 700;
      `,
    },

    tag: css`
      font-family: 'Roboto', sans-serif;
      font-size: 0.625rem;
      line-height: 130%;
      font-weight: 700;
    `,

    button: {
      g: css`
        font-family: 'Roboto', sans-serif;
        font-size: 0.875rem;
        line-height: 160%;
        font-weight: 700;
      `,
      m: css`
        font-family: 'Roboto', sans-serif;
        font-size: 0.75rem;
        line-height: 160%;
        font-weight: 400;
      `,
    },
  },
}
