import { createStitches } from '@stitches/react'

export const { styled, css, getCssText, globalCss, theme, keyframes } = createStitches({
  media: {
    mobile: '(max-width: 640px)',
    tablet: '(max-width: 768px)',
    desktop: '(min-width: 769px)',
  },

  theme: {
    fonts: {
      default: 'Nunito, Nunito Fallback',
    },

    space: {
      px: '1px',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      13: '3.25rem',
      14: '3.5rem',
    },

    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
    },

    fontWeights: {
      regular: '400',
      medium: '500',
      bold: '700',
    },

    lineHeights: {
      shorter: '125%',
      short: '140%',
      base: '160%',
      tall: '180%',
    },

    colors: {
      white: '#FFFFFF',
      black: '#000000',

      green100: '#50B2C0',
      green200: '#255D6A',
      green300: '#0A313C',

      purple100: '#8381D9',
      purple200: '#2A2879',

      gray100: '#F8F9FC',
      gray200: '#E6E8F2',
      gray20010: 'rgba(230, 232, 242, .1)',
      gray20030: 'rgba(230, 232, 242, .3)',
      gray300: '#D1D6E4',
      gray400: '#8D95AF',
      gray500: '#303F73',
      gray600: '#252D4A',
      gray700: '#181C2A',
      gray800: '#0E1116',

      red200: '#F75A68',

      'gradient-vertical': `linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)`,
      'gradient-horizontal': `linear-gradient(90deg, #7FD1CC 0%, #9694F5 100%)`,
    },

    radii: {
      xs: '2.5px',
      '2xs': '4px',
      sm: '5px',
      '2sm': '8px',
      md: '10px',
      lg: '12px',
      xl: '20px',
      full: '99999px',
    },
  },
})
