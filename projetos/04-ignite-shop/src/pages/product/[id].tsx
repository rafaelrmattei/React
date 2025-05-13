import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { toast } from 'react-toastify'
import Stripe from 'stripe'
import { useContextSelector } from 'use-context-selector'

import { BagContext } from '@/contexts/BagContext'
import type { Product } from '@/contexts/BagContextProvider'
import { stripe } from '@/lib/stripe'
import { ImageContainer, ProductContainer, ProductDetails } from '@/styles/pages/product'

export default function Product(product: Product) {
  const { isCreatingCheckoutSession, addProduct } = useContextSelector(BagContext, (context) => {
    return {
      isCreatingCheckoutSession: context.isCreatingCheckoutSession,
      addProduct: context.addProduct,
    }
  })

  function handleAddItem(product: Product) {
    addProduct(product)
    toast('Adicionado ao carrinho!')
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={520} layout="intrinsic" alt={product.name} />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{(product.price / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
          <p>{product.description}</p>
          <button onClick={() => handleAddItem(product)} disabled={isCreatingCheckoutSession}>
            Colocar na sacola
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<Product, { id: string }> = async ({ params }) => {
  if (!params || !params.id) {
    return {
      notFound: true,
    }
  }

  const product = await stripe.products.retrieve(params.id, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount ?? 0,
      description: product.description ?? '',
      defaultPriceId: price.id,
    },
    revalidate: 60 * 60 * 1,
  }
}
