import styled, { css } from 'styled-components';
import { darken, transparentize } from 'polished';

import { CloseModalButton } from '../CloseModalButton';

import { rootColors } from '../../styles/globals';

interface TransactionTypeContainerProps {
  transactionType: 'deposit' | 'withdraw';
}

export const Container = styled.form`
  position: relative;

  h2 {
    margin-bottom: 2rem;
    color: var(--text-title);
    font-size: 1.5rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;

    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;
    background-color: var(--background-input);

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type='submit'] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    margin-top: 1.5rem;

    background-color: var(--green);
    color: #ffffff;
    border-radius: 0.25rem;
    border: 0;

    font-size: 1rem;
    font-weight: 600;
    box-shadow: inset 0 0 0 2px var(--green);
    transition: box-shadow 0.3s;

    &:hover {
      filter: saturate(0.7);
      box-shadow: inset 0 0 0 2px green;
    }
  }
`;

export const TransactionTypeContainer = styled.div<TransactionTypeContainerProps>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  margin: 1rem 0;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;

    background-color: transparent;
    /* transition: border-color 0.3s; */
    outline: 0;

    &:hover {
      border-color: ${darken(0.1, '#d7d7d7')};
    }

    ${({ transactionType }) =>
      transactionType === 'deposit'
        ? css`
            &:first-child {
              border-color: transparent;
              /* background-color: var(--green-dark); */
              background-color: ${transparentize(0.9, rootColors.greenDark)};
            }
          `
        : css`
            &:last-child {
              border-color: transparent;
              /* background-color: var(--red); */
              background-color: ${transparentize(0.9, rootColors.red)};
            }
          `}

    img {
      width: 20px;
      height: 20px;
    }

    span {
      display: inline-block;
      margin-left: 0.5rem;
      font-size: 1rem;
      color: var(--text-title);
    }
  }
`;

export const StyledCloseModalButton = styled(CloseModalButton).attrs({
  styles: {
    top: '-0.5rem',
    right: '-1.5rem',
  },
})``;
