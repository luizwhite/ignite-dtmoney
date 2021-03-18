import styled from 'styled-components';

export const Container = styled.button`
  position: absolute;
  top: 0;
  right: 0;

  padding: 0.125rem;
  font-size: 0;

  img {
    transition: 0.3s;
  }

  &:hover img {
    filter: brightness(0.7);
  }
`;