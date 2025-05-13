import { styled } from '..'

export const HeaderContainer = styled('header', {
  width: '100%',
  maxWidth: '88%',
  margin: '0 auto',
  height: '12dvh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '4dvh',

  variants: {
    success: {
      true: {
        justifyContent: 'center',
      },
    },
  },
})

export const Bag = styled('button', {
  backgroundColor: '$gray800',
  width: '3rem',
  height: '3rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 6,
  position: 'relative',
  cursor: 'pointer',
  border: 'none',

  '&:disabled': {
    opacity: '.6',
  },

  svg: {
    color: '$gray300',
  },
})

export const BagTotal = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  top: '-1rem',
  right: '-1rem',
  width: '1.5rem',
  height: '1.5rem',
  borderRadius: '50%',
  backgroundColor: '$green500',
  color: '$white',
  fontSize: '$sm',
  border: '5px solid $gray900',

  '&:empty': {
    display: 'none',
  },
})
