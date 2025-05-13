import 'keen-slider/keen-slider.min.css'

import { Handbag } from '@phosphor-icons/react'
import { useKeenSlider } from 'keen-slider/react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { toast } from 'react-toastify'
import Stripe from 'stripe'
import { useContextSelector } from 'use-context-selector'

import { BagContext } from '@/contexts/BagContext'
import { Product } from '@/contexts/BagContextProvider'
import { stripe } from '@/lib/stripe'
import { AddToBag, Details, HomeContainer, ProductContainer } from '@/styles/pages/home'

interface HomeProps {
  products: Product[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 3,
      spacing: 32,
    },
    breakpoints: {
      '(max-width: 768px)': {
        slides: {
          perView: 1,
          spacing: 32,
        },
      },
    },
  })

  const addProduct = useContextSelector(BagContext, (context) => {
    return context.addProduct
  })

  function handleAddItem(event: React.MouseEvent, product: Product) {
    event.preventDefault()
    event.stopPropagation()
    addProduct(product)
    toast('Adicionado ao carrinho!')
  }

  return (
    <>
      <Head>
        <title>Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            <Link key={product.id} href={`/product/${product.id}`} className="keen-slider__slide" prefetch={false}>
              <ProductContainer>
                <Image src={product.imageUrl} width={520} height={520} alt={product.name} />

                <footer>
                  <Details>
                    <strong>{product.name}</strong>
                    <span>{(product.price / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                  </Details>
                  <AddToBag onClick={(event) => handleAddItem(event, product)}>
                    <Handbag size={32} weight="bold" />
                  </AddToBag>
                </footer>
              </ProductContainer>
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
      price: price.unit_amount,
      description: product.description ?? '',
      defaultPriceId: price.id,
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2,
  }
}
