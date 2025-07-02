import { styled } from '@/styles/stitches.config'

export const LayoutContainer = styled('div', {
  height: '100dvh',
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  padding: '$5',
  position: 'relative',
  overflow: 'hidden',

  '@tablet': {
    gridTemplateColumns: '1fr',
    height: 'unset',
    padding: '0',
    minHeight: '100dvh',
  },
})

export const Wrapper = styled('div', {
  position: 'relative',
  padding: '0 6rem',
  height: 'calc(-2.5rem + 100dvh)',

  '@tablet': {
    padding: '$6 $5 $5 $5',
    height: 'unset',
    minHeight: 'calc(-2.5rem + 100dvh)',
  },
})

export const Main = styled('main', {
  height: '100%',

  variants: {
    hasHeader: {
      true: {
        maxHeight: 'calc(100dvh - 170px)',
      },
      false: {
        maxHeight: 'calc(-2.5rem + 100dvh)',
      },
    },
  },

  '@tablet': {
    maxHeight: 'unset!important',
  },
})

export const NotFoundContainer = styled('div', {
  width: '100%',
  height: '100dvh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$gray400',
  backgroundColor: '$gray800',
  padding: '$6',

  img: {
    marginBottom: '$8',
  },

  h1: {
    marginBottom: '$4',
    textAlign: 'center',
  },

  a: {
    all: 'unset',
    marginTop: '$4',
    color: '$gray100',
    fontSize: '$2xl',
    cursor: 'pointer',
    transition: '.2s',
    opacity: '.8',

    '&:hover': {
      opacity: '1',
    },
  },
})
