import {createGlobalStyle} from 'styled-components';

// criei um estilo global para o body e limpei o padding e margin padrao;
const Global = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial , sans-serif; 
  }

  body{
    width: 100vw;
    heigth: 100vh;
    display: flex;
    justify-content: center;
    background-color: #f2f2f2;
  }
`;

export default Global;