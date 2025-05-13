import { styled } from '..'

export const HomeContainer = styled('main', {
  display: 'flex',
  width: '100%',
  maxWidth: 'calc(100dvw - ((100dvw - 88%) / 2 ))',
  marginLeft: 'auto',
  height: '68dvh',
})

export const ProductContainer = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '68dvh',

  '&:active': {
    cursor: 'grabbing',
  },

  img: {
    objectFit: 'cover',
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '2rem',
    borderRadius: 6,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    strong: {
      fontSize: '$lg',
      color: '$gray100',
    },

    span: {
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$green300',
    },

    '@media (max-width: 768px)': {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  },
})

export const Details = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '.5rem',
})

export const AddToBag = styled('button', {
  backgroundColor: '$green500',
  width: '3.5rem',
  height: '3.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 6,
  position: 'relative',
  cursor: 'pointer',
  border: 'none',

  '&:hover': {
    backgroundColor: '$green300',
    transition: '.2s',
  },

  svg: {
    color: '$white',
  },
})
