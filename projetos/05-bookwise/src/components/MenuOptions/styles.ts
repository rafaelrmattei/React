import { styled } from '@/styles/stitches.config'

export const MenuOptionsContainer = styled('nav', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'start',
  gap: '$4',

  a: {
    position: 'relative',
    width: 105,
    height: 42,
    display: 'inline-flex',
    alignItems: 'center',
    gap: '$3',
    textDecoration: 'none',
    color: '$gray400',
    fontSize: '$md',
    transition: '.4s',

    '&:hover': {
      color: '$gray100',
    },

    '&[data-active="true"]': {
      color: '$gray100',
      fontWeight: '$bold',
    },

    '&[data-active="true"]::before': {
      content: '',
      position: 'absolute',
      left: '-20px',
      top: '9px',
      bottom: 0,
      width: 4,
      height: 24,
      backgroundImage: '$gradient-vertical',
      borderRadius: '$full',
    },

    '@tablet': {
      fontSize: '$xl',
    },
  },

  '@tablet': {
    gap: '$6',
  },
})
