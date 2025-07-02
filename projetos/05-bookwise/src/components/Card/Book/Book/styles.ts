import { styled } from '@/styles/stitches.config'

export const BookCardContainer = styled('article', {
  position: 'relative',
  width: '100%',
  backgroundColor: '$gray700',
  borderRadius: '$2sm',
  border: '2px solid transparent',

  '&:hover': {
    borderColor: ' $gray600',
    transition: '.4s',
  },
})

export const BookCardButton = styled('button', {
  all: 'unset',
  width: '100%',
  padding: '$4 $5',
  display: 'flex',
  gap: '$5',
  cursor: 'pointer',
  boxSizing: 'border-box',
  height: 'fit-content',
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
  maxWidth: 'calc(100% - 55px + 1.25rem)',

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

export const ReadedFlag = styled('div', {
  position: 'absolute',
  top: 0,
  right: 0,
  width: 53,
  height: 24,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$green300',
  fontSize: '$xs',
  fontWeight: '$bold',
  color: '$green100',
  borderRadius: '0 $2sm 0 $2sm',
})
