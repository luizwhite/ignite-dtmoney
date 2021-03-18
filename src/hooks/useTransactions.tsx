import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { api } from '../services/api';

interface Transaction {
  title: string;
  type: 'withdraw' | 'deposit';
  amount: number;
  category: string;
  createdAt: string;
}

type TransactionInput = Omit<Transaction, 'createdAt'>;

interface TransactionsContextData {
  transactions: Transaction[];
  income: number;
  outcome: number;
  addTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData,
);

const TransactionsProvider: React.FC = ({ children }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const { income, outcome } = useMemo(() => {
    if (!transactions.length)
      return {
        income: 0,
        outcome: 0,
        total: 0,
      };

    return transactions.reduce(
      ({ income, outcome }, { amount, type }) => ({
        income: type === 'deposit' ? income + amount : income,
        outcome: type === 'withdraw' ? outcome + amount : outcome,
      }),
      {
        income: 0,
        outcome: 0,
      },
    );
  }, [transactions]);

  const addTransaction = useCallback(
    async (transaction: TransactionInput) => {
      await api
        .post('/transactions', {
          ...transaction,
          createdAt: new Date(),
        })
        .then(({ data }) => {
          setTransactions([...transactions, data.transaction]);
        });
    },
    [transactions],
  );

  useEffect(() => {
    api
      .get<{ transactions: Transaction[] }>('/transactions')
      .then(({ data }) => setTransactions(data.transactions));
  }, []);

  return (
    <TransactionsContext.Provider
      value={{ transactions, income, outcome, addTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};

function useTransactions(): TransactionsContextData {
  const context = useContext(TransactionsContext);

  /* if (!context) throw Error('useTransactions must be used within an TransactionsProvider'); */

  return context;
}

export { TransactionsProvider, useTransactions };
