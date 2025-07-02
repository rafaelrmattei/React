import { styled } from '@/styles/stitches.config'

export const SimplifiedRatingCardContainer = styled('article', {
  position: 'relative',
  width: '100%',
  padding: '$8',
  borderRadius: '$2sm',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$gray700',
  gap: '$5',
})

export const Header = styled('div', {
  display: 'inline-flex',
  justifyContent: 'space-between',
})

export const Profile = styled('div', {
  display: 'inline-flex',
  gap: '$4',
  cursor: 'pointer',

  div: {
    display: 'flex',
    flexDirection: 'column',

    'span:first-of-type': {
      color: '$gray100',
      lineHeight: '$base',
      fontSize: '$md',
    },

    'span:last-of-type': {
      color: '$gray400',
      lineHeight: '$base',
      fontSize: '$sm',
    },
  },
})

export const Rating = styled('div', {
  display: 'flex',
  color: '$gray300',
})
