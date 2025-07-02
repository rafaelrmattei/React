import Image from 'next/image'
import { List, X } from 'phosphor-react'
import { useEffect, useState } from 'react'

import LogoImageSrc from '@/assets/images/logo.png'

import { LoginLogoutButton } from '../Form/Buttons/LoginLogout'
import { MenuOptions } from '../MenuOptions'
import { CloseMenuButton, HiddenMenu, MenuMobileContainer, OpenMenuButton } from './styles'

interface MenuMobileProps {
  pathname: string
}

export function MenuMobile({ pathname }: MenuMobileProps) {
  const [menuOptionsOpened, setMenuOptionsOpened] = useState(false)

  function handleClickOpenMenu() {
    setMenuOptionsOpened(true)
  }

  function handleClickCloseMenu() {
    setMenuOptionsOpened(false)
  }

  useEffect(() => {
    if (menuOptionsOpened) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOptionsOpened])

  return (
    <>
      <MenuMobileContainer>
        <Image src={LogoImageSrc} width={166} height={32} alt="Bookwise" priority />

        <OpenMenuButton onClick={handleClickOpenMenu} show={!menuOptionsOpened}>
          <List size={26} weight="bold" />
        </OpenMenuButton>

        <CloseMenuButton onClick={handleClickCloseMenu} show={menuOptionsOpened}>
          <X size={26} weight="bold" />
        </CloseMenuButton>
      </MenuMobileContainer>

      <HiddenMenu open={menuOptionsOpened} onClick={handleClickCloseMenu}>
        <MenuOptions pathname={pathname} />

        <LoginLogoutButton />
      </HiddenMenu>
    </>
  )
}

MenuMobile.displayName = 'MenuMobile'
