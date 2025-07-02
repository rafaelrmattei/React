import { styled } from '@/styles/stitches.config'

export const Button = styled('button', {
  all: 'unset',
  background: '$gray600',
  width: 40,
  height: 40,
  borderRadius: '$2xs',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',

  svg: {
    color: 'inherit',
  },

  variants: {
    variantColor: {
      green100: {
        color: '$green100',
      },
      purple100: {
        color: '$purple100',
      },
    },
  },

  '&:hover': {
    background: '$gray500',
    transition: '.4s',
  },

  '&:disabled': {
    background: '$gray800',
    cursor: 'not-allowed',
  },
})
