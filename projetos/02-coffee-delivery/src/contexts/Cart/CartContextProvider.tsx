import { ReactNode, useEffect, useReducer } from "react";
import { CartContext } from "./CartContext";
import {
  addNewItemAction,
  cleanCartAction,
  removeItemAction,
  updateQuantityItemAction,
} from "../../reducers/items/actions";
import { Item, itemsReducer } from "../../reducers/items/reducer";

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [itemsState, dispatch] = useReducer(itemsReducer, [], () => {
    const storedItems = localStorage.getItem("@coffee-delivery:items-1.0.0");
    const storedItemsQuantity = localStorage.getItem(
      "@coffee-delivery:items-total-1.0.0"
    );

    const initialItems = storedItems ? JSON.parse(storedItems) : [];
    const initialItemsQuantity = storedItemsQuantity
      ? JSON.parse(storedItemsQuantity)
      : 0;

    return {
      items: initialItems,
      itemsQuantity: initialItemsQuantity,
    };
  });

  const { items, itemsQuantity } = itemsState;

  function handleSetItems(item: Item) {
    dispatch(addNewItemAction(item));
  }

  function handleUpdateItemQuantity(id: string, quantity: number) {
    dispatch(updateQuantityItemAction(id, quantity));
  }

  function handleRemoveItem(id: string) {
    dispatch(removeItemAction(id));
  }

  function handleCleanCart() {
    localStorage.setItem("@coffee-delivery:items-1.0.0", JSON.stringify([]));
    localStorage.setItem(
      "@coffee-delivery:items-total-1.0.0",
      JSON.stringify(0)
    );
    dispatch(cleanCartAction());
  }

  useEffect(() => {
    localStorage.setItem("@coffee-delivery:items-1.0.0", JSON.stringify(items));
    localStorage.setItem(
      "@coffee-delivery:items-total-1.0.0",
      JSON.stringify(itemsQuantity)
    );
  }, [items, itemsQuantity]);

  return (
    <CartContext.Provider
      value={{
        items,
        itemsQuantity,
        handleSetItems,
        handleUpdateItemQuantity,
        handleRemoveItem,
        handleCleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
