import { createContext } from "react"
import { Item } from "./CartContextProvider"

interface CartContextType {
  items: Item[]
  handleSetItems: (product: Item) => void
  itemsQuantity: number
}

export const CartContext = createContext({} as CartContextType)