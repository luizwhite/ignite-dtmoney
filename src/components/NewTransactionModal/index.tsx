import { FormEvent, useCallback, useState } from 'react';
import Modal from 'react-modal';

import { api } from '../../services/api';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import {
  Container,
  StyledCloseModalButton,
  TransactionTypeContainer,
} from './styles';

interface NewTransactinoModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const NewTransactionModal: React.FC<NewTransactinoModalProps> = ({
  isOpen,
  onRequestClose,
}) => {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');
  const [transactionType, setTransactionType] = useState<
    'deposit' | 'withdraw'
  >('deposit');

  const handleWithdrawButtonClick = useCallback(() => {
    setTransactionType('withdraw');
  }, []);

  const handleDepositButtonClick = useCallback(() => {
    setTransactionType('deposit');
  }, []);

  const handleCreateNewTransaction = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      const formData = {
        title,
        value,
        category,
        transactionType,
      };

      api.post('/transactions', formData);
    },
    [category, title, transactionType, value],
  );

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          placeholder="Título"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Valor"
          type="number"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />

        <TransactionTypeContainer transactionType={transactionType}>
          <button type="button" onClick={handleDepositButtonClick}>
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </button>

          <button type="button" onClick={handleWithdrawButtonClick}>
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </button>
        </TransactionTypeContainer>

        <input
          placeholder="Categoria"
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <button type="submit">Cadastrar</button>

        <StyledCloseModalButton onClick={onRequestClose} />
      </Container>
    </Modal>
  );
};

export { NewTransactionModal };
