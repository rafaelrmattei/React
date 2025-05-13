import { X } from '@phosphor-icons/react'
import Image from 'next/image'
import { useContextSelector } from 'use-context-selector'

import { BagContext } from '@/contexts/BagContext'
import { Product } from '@/contexts/BagContextProvider'
import { CloseButton, ProductContainer, Products, SideBagContainer } from '@/styles/pages/sideBag'

export default function SideBag() {
  const { isBagOpen, products, totalProducts, totalProductsValue, toggleBagVisibility, removeProduct, placeOrder } = useContextSelector(
    BagContext,
    (context) => {
      return {
        isBagOpen: context.isBagOpen,
        products: context.products,
        totalProducts: context.totalProducts,
        totalProductsValue: context.totalProductsValue,
        toggleBagVisibility: context.toggleBagVisibility,
        removeProduct: context.removeProduct,
        placeOrder: context.placeOrder,
      }
    }
  )

  function handleRemoveProduct(product: Product) {
    removeProduct(product)
  }

  function handlePlaceOrder() {
    placeOrder()
  }

  return (
    <SideBagContainer open={isBagOpen}>
      <CloseButton onClick={toggleBagVisibility}>
        <X size={24} weight="bold" />
      </CloseButton>

      <header>Sacola de compras</header>

      <Products>
        {products.map((product, i) => {
          return (
            <ProductContainer key={`${product.id}-${i}`}>
              <Image src={product.imageUrl} width={100} height={100} alt={product.name} />
              <div>
                <span>{product.name}</span>
                <strong>{(product.price / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>
                <button onClick={() => handleRemoveProduct(product)}>Remover</button>
              </div>
            </ProductContainer>
          )
        })}
      </Products>

      <footer>
        <div>
          <span>Quantidade</span>
          <span>{totalProducts} item(s)</span>
        </div>
        <div>
          <strong>Valor total</strong>
          <strong>{(totalProductsValue / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>
        </div>
        <button onClick={handlePlaceOrder}>Finalizar Compra</button>
      </footer>
    </SideBagContainer>
  )
}
