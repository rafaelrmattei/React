import { Item } from "./reducer";

export enum ActionTypes {
  ADD_NEW_ITEM = "ADD_NEW_ITEM",
  UPDATE_QUANTITY_ITEM = "UPDATE_QUANTITY_ITEM",
  REMOVE_ITEM = "REMOVE_ITEM",
}

export interface AddNewItemAction {
  type: ActionTypes.ADD_NEW_ITEM;
  payload: { item: Item };
}

export interface UpdateQuantityItemAction {
  type: ActionTypes.UPDATE_QUANTITY_ITEM;
  payload: { id: string; quantity: number };
}

export interface RemoveItemAction {
  type: ActionTypes.REMOVE_ITEM;
  payload: { id: string };
}

export type ItemActions =
  | AddNewItemAction
  | UpdateQuantityItemAction
  | RemoveItemAction;

export function addNewItemAction(item: Item): AddNewItemAction {
  return {
    type: ActionTypes.ADD_NEW_ITEM,
    payload: {
      item,
    },
  };
}

export function updateQuantityItemAction(
  id: string,
  quantity: number
): UpdateQuantityItemAction {
  return {
    type: ActionTypes.UPDATE_QUANTITY_ITEM,
    payload: {
      id,
      quantity,
    },
  };
}

export function removeItemAction(id: string): RemoveItemAction {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: {
      id,
    },
  };
}
