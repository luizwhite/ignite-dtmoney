import { Container } from './styles';

import closeImg from '../../assets/close.svg';

interface CloseModalButtonProps {
  onClick: () => void;
  styles?: React.CSSProperties;
}

const CloseModalButton: React.FC<CloseModalButtonProps> = ({ onClick, styles }) => {

  return (
    <Container style={styles} onClick={onClick}>
      <img src={closeImg} alt="Fechar modal" />
    </Container>
  )
}

export { CloseModalButton };