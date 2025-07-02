import { GetServerSideProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { NextSeo } from 'next-seo'

import LogoImageSrc from '@/assets/images/logo.png'
import VisitorImageSrc from '@/assets/images/rocket.png'
import { SocialLoginButton } from '@/components/Form/Buttons/SocialLogin'
import { pageLoginRedirect } from '@/config/pages'

import { authOptions } from '../api/auth/[...nextauth].api'
import { Box, LoginContainer, Logo, Titles } from './styles'

export default function Login() {
  return (
    <>
      <NextSeo title="Login" description="Cadastre-se ou acesse como visitante para encontrar, avaliar e acompanhar seus livros favoritos." />

      <LoginContainer>
        <Box>
          <Logo src={LogoImageSrc} width={223} height={43} alt="Bookwise" />

          <Titles>
            <h1>Boas vindas!</h1>
            <h2>Faça seu login ou acesse como visitante</h2>
          </Titles>

          <SocialLoginButton provider="google" />
          <SocialLoginButton provider="github" />

          <Link href={pageLoginRedirect}>
            <Image src={VisitorImageSrc} width={32} height={32} alt="Entrar como visitante" />
            <span>Entrar como visitante</span>
          </Link>
        </Box>
      </LoginContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions)

  if (session) {
    return {
      redirect: {
        destination: pageLoginRedirect,
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}
