import AsideBackgroundImageSrc from '@/assets/images/aside-background.png'
import { styled } from '@/styles/stitches.config'

export const SidebarContainer = styled('aside', {
  position: 'relative',
  height: '100%',
  borderRadius: '$lg',
  width: 232,
  overflow: 'hidden',
  backgroundImage: `url(${AsideBackgroundImageSrc.src})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  flexDirection: 'column',

  '@tablet': {
    display: 'none',
  },
})

export const SidebarHeader = styled('div', {
  width: '100%',
  padding: '$10 0 $14',
  display: 'flex',
  justifyContent: 'center',
})
