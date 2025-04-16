import { ActionTypes, ItemActions } from "./actions";

export interface Item {
  id: string;
  image: string;
  title: string;
  price: number;
  quantity: number;
}

interface ItemState {
  items: Item[];
  itemsQuantity: number;
}

function calculateTotalItems(items: Item[]): number {
  return items.reduce((total, item) => total + item.quantity, 0);
}

export function itemsReducer(state: ItemState, action: ItemActions) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_ITEM: {
      const newItem = action.payload.item;
      const itemFound = state.items.find((item) => item.id === newItem.id);

      if (itemFound) {
        const updatedItems = state.items.map((item) => {
          if (item.id === newItem.id) {
            return {
              ...item,
              quantity: item.quantity + newItem.quantity,
            };
          }
          return item;
        });

        return {
          items: updatedItems,
          itemsQuantity: calculateTotalItems(updatedItems),
        };
      } else {
        const updatedItems = [...state.items, newItem];

        return {
          items: updatedItems,
          itemsQuantity: calculateTotalItems(updatedItems),
        };
      }
    }

    case ActionTypes.UPDATE_QUANTITY_ITEM: {
      const quantity = action.payload.quantity;

      const updatedItems = state.items.map((prevItem) =>
        prevItem.id === action.payload.id ? { ...prevItem, quantity } : prevItem
      );

      return {
        items: updatedItems,
        itemsQuantity: calculateTotalItems(updatedItems),
      };
    }

    case ActionTypes.REMOVE_ITEM: {
      const updatedItems = state.items.filter(
        (prevItem) => prevItem.id !== action.payload.id
      );

      return {
        items: updatedItems,
        itemsQuantity: calculateTotalItems(updatedItems),
      };
    }

    default:
      return { ...state };
  }
}
