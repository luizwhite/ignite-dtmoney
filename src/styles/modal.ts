import { createGlobalStyle } from 'styled-components';

const styled = { createGlobalStyle };

export default styled.createGlobalStyle`
  .react-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    background-color: rgba(0, 0, 0, 0.4);
  }

  .react-modal-content {
    position: absolute;
    top: 50%;
    left: 50%;
    right: auto;
    bottom: auto;
  
    width: 100%;
    max-width: 576px;
    padding: 2rem 3rem;

    background-color: var(--background);
    border-radius: 0.875rem;
    border: none;
  
    transform: translate(-50%, -50%);
    outline: 0;
  }
 `;