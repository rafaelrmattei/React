import { styled } from '@/styles/stitches.config'

export const StarsContainer = styled('div', {
  display: 'inline-flex',
  gap: '$1',
  height: 'fit-content',

  svg: {
    display: 'block',
    color: '$purple100',
    cursor: 'pointer',
  },
})
