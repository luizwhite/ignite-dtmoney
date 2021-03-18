import styled from 'styled-components';
import { transparentize } from 'polished';

import { rootColors } from '../../styles/globals';

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

    &:nth-child(2) strong {
      color: ${transparentize(0.3, rootColors.red)};
    }

    &:last-child {
      background-color: var(--green);
      color: var(--shape);
    }
  }
`;
