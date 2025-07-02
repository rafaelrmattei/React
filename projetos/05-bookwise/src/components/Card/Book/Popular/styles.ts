import { styled } from '@/styles/stitches.config'

export const PopularBookCardContainer = styled('article', {
  position: 'relative',
  width: '100%',
  borderRadius: '$2sm',
  backgroundColor: '$gray700',
  border: '2px solid transparent',

  '&:hover': {
    borderColor: ' $gray600',
    transition: '.4s',
  },
})

export const PopularBookCardButton = styled('button', {
  all: 'unset',
  width: '100%',
  padding: '$4 $5',
  display: 'flex',
  gap: '$5',
  cursor: 'pointer',
  boxSizing: 'border-box',
})

export const Info = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '100%',
  padding: '$1 0',
})

export const Header = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  strong: {
    color: '$gray100',
    fontSize: '$md',
    lineHeight: '$short',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    WebkitLineClamp: 2,
  },

  span: {
    color: '$gray400',
    fontSize: '$sm',
    lineHeight: '$base',
  },
})
