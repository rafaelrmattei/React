import { ReactNode, useState } from "react";
import { OrderContext } from "./OrderContext";
import { Item } from "../../reducers/items/reducer";

interface OrderContextProviderProps {
  children: ReactNode;
}

interface Adress {
  cep: string;
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
}

export interface Order {
  items: Item[];
  adress: Adress;
  paymentMethod: string;
}

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [order, setOrder] = useState<Order | null>(null);

  function handleAddOrder(order: Order) {
    setOrder(order);
  }

  return (
    <OrderContext.Provider
      value={{
        order,
        handleAddOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
