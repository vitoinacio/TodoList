import styled from 'styled-components';

// arquivo de estilo do Form.jsx contendo todos os estilos em styled-components

export const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;

  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

export const Input = styled.input`
  width: 250px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;

  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 600;

  @media (max-width: 400px) {
    font-size: 20px;
  }
`;

export const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background: #449944;
  color: #fff;
  height: 42px;
  
  &:hover {
    background: #228844;
  }

  @media (max-width: 400px) {
    width: 100%;
  }
`;