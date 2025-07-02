import Link from 'next/link'
import { signOut } from 'next-auth/react'
import { SignIn, SignOut } from 'phosphor-react'
import { useContextSelector } from 'use-context-selector'

import { Avatar } from '@/components/Avatar'
import { pageLogoutRedirect } from '@/config/pages'
import { SessionContext } from '@/contexts/Session/SessionContext'

import { LoginLogoutButtonContainer, SignOutButton, User } from './styles'

export function LoginLogoutButton() {
  const session = useContextSelector(SessionContext, (context) => context.session)
  const status = useContextSelector(SessionContext, (context) => context.status)

  function handleSignOutClick() {
    signOut({ callbackUrl: '/login' })
  }

  if (status !== 'loading') {
    return (
      <LoginLogoutButtonContainer>
        {session ? (
          <User>
            <Avatar image={session.user?.image ?? undefined} name={session.user?.name ?? 'BW'} />
            <span>{session.user?.name?.split(/\s+/)[0]}</span>
            <SignOutButton onClick={handleSignOutClick} title="Sair">
              <SignOut size={20} />
            </SignOutButton>
          </User>
        ) : (
          <Link href={pageLogoutRedirect}>
            Fazer login
            <SignIn size={20} />
          </Link>
        )}
      </LoginLogoutButtonContainer>
    )
  }
}

LoginLogoutButton.displayName = 'LoginLogoutButton'
