import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { TransactionContext } from "../../contexts/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";
import { useContextSelector } from "use-context-selector";
import {
  TransactionsContainer,
  TransactionsTable,
  PriceHightLight,
} from "./styles";

export function Transactions() {
  const transactions = useContextSelector(TransactionContext, (context) => {
    return context.transactions;
  });

  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHightLight variant={transaction.type}>
                      {transaction.type === "outcome" && "-"}{" "}
                      {priceFormatter.format(transaction.price)}
                    </PriceHightLight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
