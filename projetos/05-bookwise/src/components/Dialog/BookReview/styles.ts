import { Close, Content, Overlay } from '@radix-ui/react-dialog'

import { keyframes, styled } from '@/styles/stitches.config'

const overlayShow = keyframes({
  from: {
    opacity: '0',
  },
  to: {
    opacity: '1',
  },
})

const contentShow = keyframes({
  from: {
    opacity: '0',
    transform: 'translateX(100%)',
  },
  to: {
    opacity: '1',
    transform: 'translateX(0)',
  },
})

export const DialogOverlay = styled(Overlay, {
  backgroundColor: 'RGBA(0,0,0,.6)',
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  zIndex: 11,
})

export const DialogContent = styled(Content, {
  backgroundColor: '$gray800',
  position: 'fixed',
  top: 0,
  right: 0,
  width: 660,
  height: '100dvh',
  boxShadow: '-4px 0 30px 0 rgba(0,0,0,0.5)',
  padding: '$5 $8',
  display: 'flex',
  flexDirection: 'column',
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  overflow: 'auto',
  zIndex: 12,

  '&:focus': {
    outline: 'none',
  },

  '&:focus-visible': {
    outline: 'none',
  },

  '&::-webkit-scrollbar': {
    width: 6,
  },

  '&::-webkit-scrollbar-track': {
    background: '$gray700',
    borderRadius: '$full',
  },

  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '$gray600',
    borderRadius: '$full',
  },

  scrollbarWidth: 6,
  scrollbarColor: '$gray600 $gray700',

  '@tablet': {
    width: '100%',
  },
})

export const DialogCloseButton = styled(Close, {
  all: 'unset',
  cursor: 'pointer',
  alignSelf: 'flex-end',
  marginBottom: '$3',

  svg: {
    color: '$gray400',
  },
})

export const Titles = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  minHeight: 34,
  marginTop: '$10',
  padding: '0 $1',
  marginBottom: '$3',

  h3: {
    color: '$gray200',
    fontSize: '$sm',
    fontWeight: '$regular',
    lineHeight: '$base',
  },
})

export const Ratings = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
})

export const LoaderContainer = styled('div', {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const ButtonNewRating = styled('button', {
  all: 'unset',
  cursor: 'pointer',
  color: '$purple100',
  fontSize: '$md',
  fontWeight: '$bold',
  lineHeight: '$base',

  variants: {
    visible: {
      true: {
        display: 'block',
      },
      false: {
        display: 'none',
      },
    },
  },
})

export const NewRating = styled('div', {
  display: 'none',

  variants: {
    visible: {
      true: {
        display: 'block',
      },
    },
  },
})
