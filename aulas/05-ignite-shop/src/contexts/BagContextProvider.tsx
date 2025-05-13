import axios from 'axios'
import { ReactNode, useEffect, useState } from 'react'

import { BagContext } from './BagContext'

export interface Product {
  id: string
  name: string
  imageUrl: string
  price: number
  description?: string
  defaultPriceId?: string
}

interface BagContextProviderProps {
  children: ReactNode
}

export default function BagContextProvider({ children }: BagContextProviderProps) {
  const [isBagOpen, setIsBagOpen] = useState(false)
  const [products, setProducts] = useState<Product[]>([])
  const [totalProducts, setTotalProducts] = useState(0)
  const [totalProductsValue, setTotalProductsValue] = useState(0)
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

  function toggleBagVisibility() {
    setIsBagOpen((state) => !state)
  }

  function addProduct(product: Product) {
    setProducts((state) => [product, ...state])
  }

  function removeProduct(product: Product) {
    setProducts((state) => state.filter((productToRemove) => productToRemove.id !== product.id))
  }

  async function placeOrder() {
    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post('/api/checkout', {
        products: products,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (error) {
      setIsCreatingCheckoutSession(false)

      alert(`Falha ao redirecionar ao checkout! Erro: ${error}`)
    }
  }

  useEffect(() => {
    const totalValue = products.reduce((acc, product) => acc + product.price, 0)
    setTotalProducts(products.length)
    setTotalProductsValue(totalValue)
    if (totalProducts <= 0) {
      setIsBagOpen(false)
    }
  }, [products, totalProducts])

  return (
    <BagContext.Provider
      value={{
        isBagOpen,
        products,
        totalProducts,
        totalProductsValue,
        isCreatingCheckoutSession,
        toggleBagVisibility,
        addProduct,
        removeProduct,
        placeOrder,
      }}
    >
      {children}
    </BagContext.Provider>
  )
}
