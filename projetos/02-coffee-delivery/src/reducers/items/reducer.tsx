import { ActionTypes, ItemActions } from "./actions";
import { produce } from "immer";

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
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.item.id
      );

      if (itemIndex < 0) {
        return produce(state, (draft) => {
          draft.items.push(action.payload.item);
          draft.itemsQuantity = calculateTotalItems(draft.items);
        });
      } else {
        return produce(state, (draft) => {
          draft.items[itemIndex].quantity += action.payload.item.quantity;
          draft.itemsQuantity = calculateTotalItems(draft.items);
        });
      }
    }

    case ActionTypes.UPDATE_QUANTITY_ITEM: {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      return produce(state, (draft) => {
        draft.items[itemIndex].quantity = action.payload.quantity;
        calculateTotalItems(draft.items);
      });
    }

    case ActionTypes.REMOVE_ITEM: {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      return produce(state, (draft) => {
        draft.items.splice(itemIndex, 1);
        draft.itemsQuantity = calculateTotalItems(draft.items);
      });
    }

    case ActionTypes.CLEAN_CART: {
      return produce(state, (draft) => {
        draft.items = [];
        draft.itemsQuantity = 0;
      });
    }

    default:
      return { ...state };
  }
}
