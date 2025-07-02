import { styled } from '@/styles/stitches.config'

export const LoginLogoutButtonContainer = styled('div', {
  marginTop: 'auto',
  width: '100%',
  padding: '$8 0',
  display: 'flex',
  justifyContent: 'center',

  a: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '$3',
    color: '$gray200',
    fontSize: '$md',
    fontWeight: '$bold',
    textDecoration: 'none',
    lineHeight: '0',
    borderRadius: '$sm',
    transition: '.4s',
    padding: '$4 $5',

    svg: {
      color: '$green100',
    },

    '&:hover': {
      backgroundColor: '$gray20030',
    },

    '@tablet': {
      fontSize: '$xl',
    },
  },

  '@tablet': {
    marginTop: '$8',
  },
})

export const User = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$3',
  color: '$gray200',

  span: {
    fontSize: '$sm',
    fontWeight: '$regular',

    '@tablet': {
      fontSize: '$xl',
    },
  },
})

export const SignOutButton = styled('button', {
  all: 'unset',
  cursor: 'pointer',
  lineHeight: '0',
  transition: '.4s',
  borderRadius: '$2xs',
  width: 32,
  height: 32,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  svg: {
    color: '$red200',
  },

  '&:hover': {
    backgroundColor: '$gray20010',
  },
})
