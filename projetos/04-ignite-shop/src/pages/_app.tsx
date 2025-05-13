import type { AppProps } from 'next/app'
import { Bounce, ToastContainer } from 'react-toastify'

import Header from '@/components/Header'
import BagContextProvider from '@/contexts/BagContextProvider'
import { globalStyles } from '@/styles/global'
import { Container } from '@/styles/pages/app'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <BagContextProvider>
      <Container>
        <Header />
        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
        />
        <Component {...pageProps} />
      </Container>
    </BagContextProvider>
  )
}
