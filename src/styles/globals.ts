import { createGlobalStyle } from 'styled-components';

const styled = { createGlobalStyle };

export const rootColors = {
  greenDark: '#12a454',
  red: '#e62e4d',
}

export default styled.createGlobalStyle`
  :root {
    --blue: #5429cc;
    --green: #33cc95;
    --red: ${rootColors.red};

    --green-dark: ${rootColors.greenDark};
    --blue-light: #6933ff;

    --text-title: #363f5f;
    --text-body: #969cb3;

    --shape: #ffffff;
    --background: #f0f2f5;
    --background-input: #e7e9ee;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; /* 15px */
    }

    @media (max-width: 720px) {
      font-size: 87.5%; /* 14px */
    }
  }

  body {
    background-color: var(--background);
    color: var(--text-body);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body,
  input,
  button,
  textarea {
    font: 400 1rem 'Poppins', sans-serif;
  }

  h1 {
    color: var(--text-title);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
    border: none;
  }

  strong {
    display: block;
  }

  input {
    &[type=number] {
      -moz-appearance: textfield;
    }

    &::-webkit-outer-spin-button, &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ul {
    list-style: none;
  }
`;
