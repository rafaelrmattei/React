import Link from 'next/link'
import { useContextSelector } from 'use-context-selector'

import { pageItems } from '@/config/pages'
import { SessionContext } from '@/contexts/Session/SessionContext'

import { MenuOptionsContainer } from './styles'

interface MenuOptionsProps {
  pathname: string
}

export function MenuOptions({ pathname }: MenuOptionsProps) {
  const session = useContextSelector(SessionContext, (context) => context.session)
  const status = useContextSelector(SessionContext, (context) => context.status)

  if (status !== 'loading') {
    return (
      <MenuOptionsContainer>
        {pageItems
          .filter(({ isSignedIn }) => !isSignedIn || !!session || pathname === '/profile')
          .map(({ href, label, icon: Icon }) => (
            <Link key={href} href={href} data-active={pathname === href}>
              <Icon size={24} />
              {label}
            </Link>
          ))}
      </MenuOptionsContainer>
    )
  }
}

MenuOptions.displayName = 'MenuOptions'
