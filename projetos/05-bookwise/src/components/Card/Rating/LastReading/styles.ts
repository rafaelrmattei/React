import { styled } from '@/styles/stitches.config'

export const LastReadingRatingCardContainer = styled('article', {
  position: 'relative',
  width: '100%',
  borderRadius: '$2sm',
  backgroundColor: '$gray600',
  border: '2px solid transparent',

  '&:hover': {
    borderColor: ' $gray500',
    transition: '.4s',
  },
})

export const RatingCardButton = styled('div', {
  all: 'unset',
  role: 'button',
  padding: '$8',
  display: 'flex',
  flexDirection: 'column',
  gap: '$8',
  boxSizing: 'border-box',
  cursor: 'pointer',
})

export const Rating = styled('div', {
  display: 'flex',
  gap: '$8',
  color: '$gray300',

  img: {
    width: '100%',
    height: 'auto',
    maxWidth: 120,
    maxHeight: 160,
  },
})

export const Info = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  width: '100%',
})

export const Header = styled('div', {
  display: 'inline-flex',
  justifyContent: 'space-between',
})

export const BookInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  strong: {
    color: '$gray100',
    lineHeight: '$short',
    fontSize: '$md',
  },

  span: {
    color: '$gray400',
    lineHeight: '$base',
    fontSize: '$sm',
    marginBottom: '$3',
  },

  button: {
    all: 'unset',
    cursor: 'pointer',
    color: '$purple100',
    fontSize: '$sm',
    fontWeight: '$bold',
    lineHeight: '$base',
  },
})

export const Description = styled('div', {
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  fontSize: '$sm',
  lineHeight: '$base',

  variants: {
    lines: {
      2: {
        WebkitLineClamp: 2,
      },
      all: {
        WebkitLineClamp: 'none',
      },
    },
  },
})
