import { createContext } from "react";
import { Order } from "./OrderContextProvider";

interface OrdertContextType {
  order: Order | null;
  handleAddOrder: (order: Order) => void;
}

export const OrderContext = createContext({} as OrdertContextType);
