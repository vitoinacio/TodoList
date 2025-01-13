import styled from 'styled-components';
import { FaEdit, FaTrash } from 'react-icons/fa';

// arquivo de estilo do List.jsx contendo todos os estilos em styled-components

export const Table = styled.table`
  width: 100%;
  background: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 800px;
  margin: 20px auto;
  word-break: break-all;

  @media (max-width: 400px) {
    max-width: 300px;
  }
`;

export const Thead = styled.thead``;

export const Tr = styled.tr`
  display: flex;
  gap: 10px;

  .button{
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;

    }


  @media (max-width: 400px) {
    gap: 15px;
  }
`;

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;

  @media (max-width: 400px) {
    font-size: 20px;
  }
`;

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.$alignCenter ? 'center' : 'start')};
  width: ${(props) => (props.width ? props.width : 'auto')};

  @media (max-width: 400px) {
    font-size: 20px;
  }
`;

export const Tbody = styled.tbody``;

export const EditIcon = styled(FaEdit)`
  cursor: pointer;
  color: #333;
  transition: 0.3s;
  font-size: 20px;

  &:hover {
    color: #555;
  }
`;

export const TrashIcon = styled(FaTrash)`
  cursor: pointer;
  color: red;
  transition: 0.3s;
  font-size: 20px;

  &:hover {
    color: darkred;
  }
`;