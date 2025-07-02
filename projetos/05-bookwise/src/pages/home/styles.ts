import { styled } from '@/styles/stitches.config'

export const HomeContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '63% 32%',
  gap: '5%',
  maxHeight: 'inherit',

  '@tablet': {
    gridTemplateColumns: '1fr',
    gap: '$6',
  },
})

export const Ratings = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',

  '@desktop': {
    height: '100%',
    overflowX: 'auto',
    scrollBehavior: 'smooth',
    scrollbarWidth: 'none',
    '-ms-overflow-style': 'none',
    WebkitOverflowScrolling: 'touch',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },

  '@tablet': {
    order: 2,
  },
})
