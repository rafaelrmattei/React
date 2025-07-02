import { styled } from '@/styles/stitches.config'

export const UserDetailsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$5',
  marginBottom: '$2',

  '@tablet': {
    display: 'inline-flex',
    flexDirection: 'unset',
  },
})

export const Details = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  strong: {
    color: '$gray100',
    fontSize: '$xl',
    lineHeight: '$short',
  },

  span: {
    color: '$gray400',
    fontSize: '$sm',
    lineHeight: '$base',
  },

  '@tablet': {},
})
