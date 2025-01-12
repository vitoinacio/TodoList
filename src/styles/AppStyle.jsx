import style from 'styled-components';

// arquivo de estilos do componente App.jsx contendo o estilo do container e do título

export const Container = style.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Title = style.h2``;