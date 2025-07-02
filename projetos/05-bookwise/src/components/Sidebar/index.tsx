import Image from 'next/image'

import LogoImageSrc from '@/assets/images/logo.png'

import { LoginLogoutButton } from '../Form/Buttons/LoginLogout'
import { MenuOptions } from '../MenuOptions'
import { SidebarContainer, SidebarHeader } from './styles'

interface SidebarProps {
  pathname: string
}

export function Sidebar({ pathname }: SidebarProps) {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <Image src={LogoImageSrc} width={128} height={25} quality={100} alt="BookWise Logo" priority />
      </SidebarHeader>

      <MenuOptions pathname={pathname} />
      <LoginLogoutButton />
    </SidebarContainer>
  )
}

Sidebar.displayName = 'Sidebar'
