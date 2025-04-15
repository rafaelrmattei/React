import { ReactNode, useEffect, useState } from "react"
import { CartContext } from "./CartContext"

export interface Item {
  id: string
  quantity: number
}

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {

  const storedItems = localStorage.getItem('@coffee-delivery:items-1.0.0')
  const storedItemsQuantity = localStorage.getItem('@coffee-delivery:items-total-1.0.0')

  const initialItems = storedItems ? JSON.parse(storedItems) : []
  const initialItemsQuantity = storedItemsQuantity ? JSON.parse(storedItemsQuantity) : 0

  const [items, setItems] = useState<Item[]>(initialItems)
  const [itemsQuantity, setItemsQuantity] = useState(initialItemsQuantity)

  function handleSetItems(item: Item) {
    setItems((prevItems) => {
      const itemFound = prevItems.find((prevItem) => prevItem.id === item.id)

      if (itemFound) {
        return prevItems.map((prevItem) => {
          if (prevItem.id === item.id) {
            return {
              ...prevItem,
              quantity: prevItem.quantity + item.quantity
            }
          }
          return prevItem
        })
      } else {
        return [...prevItems, item]
      }
    })  
  }

  useEffect(() => {
    const totalItems = items.reduce((total, item) => {
      return total + item.quantity
    }, 0)
    setItemsQuantity(totalItems);
    localStorage.setItem('@coffee-delivery:items-1.0.0', JSON.stringify(items))
    localStorage.setItem('@coffee-delivery:items-total-1.0.0', JSON.stringify(totalItems))
  }, [items])

  return (
    <CartContext.Provider value={{
      items,
      handleSetItems,
      itemsQuantity
    }}
    >
      {children}
    </CartContext.Provider>
  )
}