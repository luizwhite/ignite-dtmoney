import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  transform: translateY(calc(-50% - var(--dash-padding-top)));

  div {
    padding: 1.5rem 2rem;

    border-radius: 0.25rem;
    background-color: var(--shape);

    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      margin-top: 1rem;

      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &:last-child {
      background-color: var(--green);
      color: var(--shape);
    }
  }
`;
