import styled from 'styled-components';

export const Container = styled.header`
  background-color: var(--blue);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 2rem 1rem 10rem;

  max-width: 1120px;

  button {
    padding: 0 2rem;
    background-color: var(--blue-light);
    height: 3rem;

    border-radius: 0.25rem;
    
    font-size: 1rem;
    color: #ffffff;

    transition: 0.3s;

    &:hover {
      filter: saturate(0.9);
    }
  }
`;