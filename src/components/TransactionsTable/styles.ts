import styled from 'styled-components';

export const Container = styled.div`
  margin-top: -50px;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th,
    td {
      vertical-align: middle;
      
      &:first-child {
        padding-left: 2rem;
      }
    }

    th {
      padding: 1rem 0;

      color: var(--text-body);
      font-weight: 400;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      height: 70px;
      padding: 1.25rem 0;
      background-color: var(--shape);

      &:first-child {
        border-radius: 6px 0 0 6px;
        color: var(--text-title);
      }

      &:last-child {
        padding-right: 2rem;
        border-radius: 0 6px 6px 0;
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }
  }
`;
