import { styled } from '@/styles/stitches.config'

export const ProfileContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '63% 32%',
  gap: '5%',
  maxHeight: 'inherit',

  '@tablet': {
    gridTemplateColumns: '1fr',
    gap: '$6',
  },
})

export const Analytics = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  borderLeft: '1px solid $gray700',
  alignItems: 'center',
  gap: '$8',
  maxHeight: 'fit-content',

  '@tablet': {
    borderLeft: 'none',
    padding: '$5 0',
    alignItems: 'flex-start',
  },
})

export const Divider = styled('div', {
  width: 32,
  height: 4,
  backgroundImage: '$gradient-horizontal',
  borderRadius: '$full',

  '@tablet': {
    marginLeft: '$5',
  },
})
