import { createContext } from "react";
import { Item } from "../../reducers/items/reducer";

interface CartContextType {
  items: Item[];
  itemsQuantity: number;
  handleSetItems: (item: Item) => void;
  handleUpdateItemQuantity: (id: string, quantity: number) => void;
  handleRemoveItem: (id: string) => void;
  handleCleanCart: () => void;
}

export const CartContext = createContext({} as CartContextType);
