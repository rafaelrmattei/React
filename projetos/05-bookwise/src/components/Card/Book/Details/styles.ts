import { styled } from '@/styles/stitches.config'

export const DetailsBookCardContainer = styled('article', {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$gray700',
  padding: '$6 $8 $4',
  position: 'relative',
  width: '100%',
  borderRadius: '$md',
  gap: '$10',
  height: 'fit-content',
})

export const Top = styled('div', {
  width: '100%',
  display: 'flex',
  gap: '$8',

  img: {
    borderRadius: '$md',

    '@tablet': {
      maxWidth: 120,
      height: 'auto',
    },
  },
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

  strong: {
    color: '$gray100',
    fontSize: '$lg',
    lineHeight: '$short',
    marginBottom: '$2',
  },

  span: {
    color: '$gray300',
    fontSize: '$md',
    fontWeight: '$regular',
    lineHeight: '$base',
  },
})

export const Footer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',

  span: {
    color: '$gray400',
    fontSize: '$sm',
    fontWeight: '$regular',
    lineHeight: 'normal',
    marginLeft: '2px',
  },
})

export const Bottom = styled('div', {
  borderTop: '1px solid $gray600',
  width: '100%',
  padding: '$6 $2',
  display: 'flex',
  gap: '$14',
})

export const Metric = styled('div', {
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  gap: '$4',

  div: {
    display: 'flex',
    flexDirection: 'column',
  },

  svg: {
    color: '$green100',
  },

  span: {
    color: '$gray300',
    fontSize: '$sm',
    fontWeight: '$regular',
    lineHeight: '$base',
  },

  strong: {
    color: '$gray200',
    fontSize: '$md',
    lineHeight: '$short',
  },
})
