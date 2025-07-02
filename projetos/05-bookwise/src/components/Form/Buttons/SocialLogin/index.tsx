import Image from 'next/image'
import { signIn } from 'next-auth/react'
import { ButtonHTMLAttributes, useCallback } from 'react'

import GitHubImageSrc from '@/assets/images/github.png'
import GoogleImageSrc from '@/assets/images/google.png'
import { pageLoginRedirect } from '@/config/pages'

import { Button } from './styles'

interface SocialLoginButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  provider: 'google' | 'github'
}

const SocialLoginMap = {
  google: {
    title: 'Entrar com Google',
    image: GoogleImageSrc,
  },
  github: {
    title: 'Entrar com GitHub',
    image: GitHubImageSrc,
  },
} as const

export function SocialLoginButton({ provider, ...props }: SocialLoginButtonProps) {
  const { title, image } = SocialLoginMap[provider]

  const handleSignInClick = useCallback(() => {
    signIn(provider, {
      callbackUrl: pageLoginRedirect,
    })
  }, [provider])

  return (
    <Button onClick={handleSignInClick} {...props}>
      <Image src={image} width={32} height={32} alt={title} />
      <span>{title}</span>
    </Button>
  )
}

SocialLoginButton.displayName = 'SocialLoginButton'
