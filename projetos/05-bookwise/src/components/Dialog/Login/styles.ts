import { Close, Content, DialogTitle, Overlay } from '@radix-ui/react-dialog'

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
    transform: 'translate(-50%, -48%) scale(0.96)',
  },
  to: {
    opacity: '1',
    transform: 'translate(-50%, -50%) scale(1)',
  },
})

export const DialogOverlay = styled(Overlay, {
  backgroundColor: 'RGBA(0,0,0,.6)',
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  zIndex: 13,
})

export const DialogContent = styled(Content, {
  backgroundColor: '$gray700',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: 516,
  maxHeight: '85vh',
  boxShadow: '-4px 0 30px 0 rgba(0,0,0,0.5)',
  padding: '$14 4.5rem',
  display: 'flex',
  flexDirection: 'column',
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  borderRadius: '$lg',
  overflow: 'auto',
  gap: '$4',
  zIndex: 14,

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
    padding: '$14 2rem',
  },
})

export const DialogCloseButton = styled(Close, {
  all: 'unset',
  position: 'absolute',
  top: 'calc($14 - 36px)',
  right: 'calc($14 - 36px)',
  cursor: 'pointer',
  lineHeight: 0,

  svg: {
    color: '$gray400',
  },
})

export const Title = styled(DialogTitle, {
  color: '$gray200',
  fontSize: '$md',
  fontWeight: '$bold',
  lineHeight: '$short',
  textAlign: 'center',
  marginBottom: '$6',
})
