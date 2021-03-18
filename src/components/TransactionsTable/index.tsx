import { useCallback } from 'react';

import { useTransactions } from '../../hooks/useTransactions';
// import { api } from '../../services/api';

import { Container } from './styles';

// interface Transaction {
//   title: string;
//   type: 'withdraw' | 'deposit';
//   amount: number;
//   category: string;
//   createdAt: string;
// }

const TransactionsTable: React.FC = () => {
  // const [transactions, setTransactions] = useState<Transaction[]>([]);

  const { transactions } = useTransactions();

  const formatCurrency = useCallback((amount, type) => {
    const stringValue = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(type === 'withdraw' ? -amount : amount);

    return stringValue.replace('-', '- ');
  }, []);

  const formatDate = useCallback(
    (dateISO8601) =>
      new Intl.DateTimeFormat('pt-BR').format(new Date(dateISO8601)),
    [],
  );

  // useEffect(() => {
  //   api
  //     .get<{ transactions: Transaction[] }>('/transactions')
  //     .then(({ data }) => setTransactions(data.transactions));
  // }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.length ? (
            transactions.map(({ title, type, category, amount, createdAt }) => (
              <tr key={createdAt}>
                <td>{title}</td>
                <td className={type}>{formatCurrency(amount, type)}</td>
                <td>{category}</td>
                <td>{formatDate(createdAt)}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td />
              <td />
              <td />
              <td />
            </tr>
          )}
          {[
            ...Array(
              5 - (transactions.length > 5 ? 5 : transactions.length || 1),
            ),
          ].map((_, index) => (
            <tr key={`dumb_${index + 1}`}>
              <td />
              <td />
              <td />
              <td />
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export { TransactionsTable };
