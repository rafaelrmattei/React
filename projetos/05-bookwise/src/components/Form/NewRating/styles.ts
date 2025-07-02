import { styled } from '@/styles/stitches.config'

export const NewRatingFormContainer = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$gray700',
  borderRadius: '$2sm',
  padding: '$8',
  marginBottom: '$3',
})

export const Header = styled('div', {
  display: 'inline-flex',
  justifyContent: 'space-between',
  marginBottom: '$6',
})

export const UserContainer = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '$4',

  strong: {
    color: '$gray100',
    fontSize: '$md',
    lineHeight: '$short',
  },
})

export const TextareaContainer = styled('div', {
  position: 'relative',
  width: '100%',

  textarea: {
    borderRadius: '$2xs',
    border: '1px solid $gray500',
    backgroundColor: '$gray800',
    height: 164,
    color: '$gray200',
    fontSize: '$sm',
    fontWeight: '$regular',
    lineHeight: '$base',
    resize: 'none',
    padding: '$3 $4',
    width: '100%',

    '&::placeholder': {
      color: '$gray400',
    },

    '&:focus': {
      outline: 'none',
      borderColor: '$green200',
      boxShadow: 'none',
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
  },

  span: {
    position: 'absolute',
    bottom: 13,
    right: 13,
    color: '$gray400',
    fontSize: '$xs',
  },
})

export const Error = styled('div', {
  fontSize: '$sm',
  paddingLeft: '$1',
  fontWeight: '$medium',
  color: '$red200',
  marginTop: '$2',
})

export const Footer = styled('div', {
  display: 'inline-flex',
  alignSelf: 'flex-end',
  gap: '$2',
  marginTop: '$3',
})
