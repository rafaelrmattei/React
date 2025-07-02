import AsideBackgroundImageSrc from '@/assets/images/aside-background.png'
import { styled } from '@/styles/stitches.config'

export const MenuMobileContainer = styled('section', {
  width: '100%',
  height: 64,
  display: 'inline-flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '$5 0 $5 $5',
  backgroundColor: '$gray700',
  zIndex: 10,
  boxShadow: '1px 7px 9px 0px rgba(0,0,0,0.2)',

  img: {
    width: 'auto',
    maxHeight: 24,
    marginTop: '$1',
  },

  button: {
    background: 'unset',
    border: 'unset',
    lineHeight: '0',
    cursor: 'pointer',
    padding: '0 $5',
    height: 64,

    svg: {
      color: '$purple100',
      lineHeight: '0',
    },
  },

  '@desktop': {
    display: 'none',
  },
})

export const OpenMenuButton = styled('button', {
  variants: {
    show: {
      true: {
        display: 'block',
      },
      false: {
        display: 'none',
      },
    },
  },

  defaultVariants: {
    show: true,
  },
})

export const CloseMenuButton = styled('button', {
  variants: {
    show: {
      true: {
        display: 'block',
      },
      false: {
        display: 'none',
      },
    },
  },

  defaultVariants: {
    show: false,
  },
})

export const HiddenMenu = styled('aside', {
  width: '100%',
  height: 'calc(100dvh - 64px)',
  backgroundImage: `url(${AsideBackgroundImageSrc.src})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: '$14 $5',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'space-between',
  zIndex: 9,

  variants: {
    open: {
      true: {
        display: 'flex',
      },
      false: {
        display: 'none',
      },
    },
  },

  defaultVariants: {
    open: false,
  },
})
