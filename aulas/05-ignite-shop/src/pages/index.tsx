import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Stripe from 'stripe'

import { stripe } from '@/lib/stripe'
import { HomeContainer, Product } from '@/styles/pages/home'

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
  }[]
}

export default function Home({ products }: HomeProps) {
  return (
    <>
      <Head>
        <title>Ignite Shop</title>
      </Head>

      <HomeContainer>
        {products.map((product) => {
          return (
            <Link key={product.id} href={`/product/${product.id}`} prefetch={false}>
              <Product>
                <Image src={product.imageUrl} width={520} height={520} alt={product.name} />

                <footer>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </footer>
              </Product>
            </Link>
          )
        })}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: ((price.unit_amount ?? 0) / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2,
  }
}
