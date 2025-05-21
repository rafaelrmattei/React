import { styled, keyframes } from '../../styles'
import * as Toast from '@radix-ui/react-toast'

const slideIn = keyframes({
  from: { transform: 'translateX(calc(100% + 25px))' },
  to: { transform: 'translateX(0)' },
})

const hide = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: 'translateX(calc(100% + 25px))' },
})

export const ToastContainer = styled(Toast.Root, {
  position: 'relative',
  backgroundColor: '$gray800',
  width: 360,
  padding: '$4 $6',
  borderRadius: '$sm',
  border: '1px solid $gray600',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },
  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
})

export const CloseButton = styled(Toast.Close, {
  all: 'unset',
  position: 'absolute',
  top: '$4',
  right: '$5',
  cursor: 'pointer',
  color: '$gray200',
})

export const Title = styled(Toast.Title, {
  fontFamily: '$default',
  fontWeight: '$bold',
  fontSize: '$lg',
  lineHeight: '$base',
  color: '$white',
  marginBottom: '$1',
  width: 325,
})

export const Description = styled(Toast.Description, {
  fontFamily: '$default',
  fontWeight: '$regular',
  fontSize: '$sm',
  lineHeight: '$base',
  color: '$gray200',
  width: 325,
})

export const Viewport = styled(Toast.Viewport, {
  '--viewport-padding': '25px',
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: 'var(--viewport-padding)',
  gap: '10px',
  width: '390px',
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
})
