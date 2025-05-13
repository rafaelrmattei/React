import { styled } from '..'

export const SideBagContainer = styled('div', {
  display: 'flex',
  backgroundColor: '$gray800',
  position: 'fixed',
  right: 0,
  top: 0,
  width: '384px',
  height: 'calc(100dvh - 120px)',
  flexDirection: 'column',
  zIndex: '1000',
  boxShadow: '-3px 1px 29px 0px rgba(0,0,0,0.8)',
  padding: '72px 48px 48px 48px',
  transform: 'translateX(100%)',
  transition: '.2s',

  header: {
    color: '$gray100',
    fontWeight: 'bold',
    fontSize: '$lg',
    marginBottom: '2rem',
  },

  footer: {
    marginTop: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '.3rem',

    div: {
      width: '100%',
      display: 'inline-flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      color: 'gray100',

      'span:first-child': {
        fontSize: '1rem',
      },

      'span:last-child': {
        fontSize: '$md',
      },

      'strong:first-child': {
        fontSize: '$md',
      },

      'strong:last-child': {
        fontSize: '$xl',
      },
    },

    button: {
      marginTop: '3rem',
      height: '69px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '$white',
      backgroundColor: '$green500',
      borderRadius: 8,
      border: 'none',
      fontSize: '$md',
      cursor: 'pointer',
    },
  },

  variants: {
    open: {
      true: {
        transform: 'translateX(0%)',
      },
      false: {
        transform: 'translateX(100%)',
      },
    },
  },

  '@media (max-width: 768px)': {
    width: 'calc(100% - 94px)',
  },
})

export const CloseButton = styled('button', {
  border: 0,
  position: 'absolute',
  top: '24px',
  right: '24px',
  cursor: 'pointer',
  background: 'transparent',
  lineHeight: '100%',

  svg: {
    color: '$gray500',
    lineHeight: '100%',
  },
})

export const Products = styled('div', {
  flex: 1,
  paddingBottom: '2rem',
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
})

export const ProductContainer = styled('div', {
  display: 'inline-flex',
  gap: '1.25rem',

  img: {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    border: 'none',
  },

  div: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '.5rem',

    span: {
      color: '$gray300',
      fontSize: '$md',
    },

    strong: {
      color: '$gray100',
      fontSize: '$md',
    },

    button: {
      color: '$green500',
      textDecoration: 'none',
      fontWeight: 'bold',
      fontSize: '1rem',
      border: 'none',
      backgroundColor: 'transparent',
      width: 'fit-content',
      height: 'fit-content',
      cursor: 'pointer',
    },
  },
})
