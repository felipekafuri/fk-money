import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root{
    --background: #f0f2f5;
    --red: #E22E4D;
    --blue: #5429CC;
    --green: #33CC95;

    --blue-light: #6933ff;

    --text-title: #363F5F;
    --text-body: #969CB3;

    --shape: #ffff;
  }
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // font-size: 16px; (Desktop)
  html{
    @media(max-width: 1080px){
      font-size: 93.75%; //15px
    }

    @media(max-width: 720px){
      font-size: 87.5%; //14px
    }
  }

  // REM = 1rem = 16px;

  body{
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, text-area, button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }
  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
  }

  button{ 
    cursor: pointer;
  }

  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }


  .react-modal-overlay{
    background: rgba(0, 0, 0, 0.5);
    
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content{
    width: 100%;
    max-width: 576px;

    background: var(--background);
    padding: 3rem;

    position: relative;
    border-radius: 0.25rem;
  }

  .react-modal-close{
    position: absolute;
    border: 0;
    top: 1.5rem;
    background: transparent;
    right: 1.5rem;
    transition: filter 0.2;

    &:hover{
      filter: brightness(0.8)
    }
  }

`