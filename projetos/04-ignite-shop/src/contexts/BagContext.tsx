import { createContext } from 'use-context-selector'

import { Product } from './BagContextProvider'

interface BagContextType {
  isBagOpen: boolean
  products: Product[]
  totalProducts: number
  totalProductsValue: number
  isCreatingCheckoutSession: boolean
  toggleBagVisibility: () => void
  addProduct: (product: Product) => void
  removeProduct: (product: Product) => void
  placeOrder: () => void
}

export const BagContext = createContext({} as BagContextType)
