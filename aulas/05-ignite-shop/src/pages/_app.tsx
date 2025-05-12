import { Handbag } from '@phosphor-icons/react'
import type { AppProps } from 'next/app'
import Image from 'next/image'

import { globalStyles } from '@/styles/global'
import { Cart, CartTotal, Container, Header } from '@/styles/pages/app'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src="/logo.svg" width={130} height={52} alt="" />

        <Cart>
          <Handbag size={24} weight="bold" />
          <CartTotal></CartTotal>
        </Cart>
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
