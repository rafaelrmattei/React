import { styled } from '@/styles/stitches.config'

export const RatingsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',
  height: '100%',
  overflowX: 'auto',

  scrollBehavior: 'smooth',

  scrollbarWidth: 'none',
  '-ms-overflow-style': 'none',
  WebkitOverflowScrolling: 'touch',

  '&::-webkit-scrollbar': {
    display: 'none',
  },

  '@tablet': {
    order: 2,
  },
})

export const NotFound = styled('div', {
  textAlign: 'center',
  color: '$gray100',
  fontSize: '$lg',
})
