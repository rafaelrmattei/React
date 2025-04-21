import { createContext } from "use-context-selector";
import {
  CreateTransactionInput,
  Transaction,
} from "./TransactionsContextProvider";

interface TransactionContextType {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction: (data: CreateTransactionInput) => Promise<void>;
}

export const TransactionContext = createContext({} as TransactionContextType);
