import axios from 'axios';
import PropTypes from 'prop-types';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { API_URL } from '../api';

const Table = styled.table`
  width: 100%;
  background: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 800px;
  margin: 20px auto;
  word-break: break-all;
`;

export const Thead = styled.thead``;

export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;
`;

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.$alignCenter ? 'center' : 'start')};
  width: ${(props) => (props.width ? props.width : 'auto')};
`;

const Tbody = styled.tbody``;

const Grid = ({ tasks , setTasks, setOnEdit}) => {

  const handleEdit = (task) => {
    setOnEdit(task);
  }

  const handleDelete = async (id) => {
    await axios
      .delete(`${API_URL}/${id}`)
      .then(({ data }) => {
        const newArray = tasks.filter((task) => task.id !== id);

        setTasks(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));
     setOnEdit(null);
  };

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Tarefas</Th>
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {tasks.map((task) => (
          <Tr key={task.id}>
            <Td width='80%'>{task.task_name}</Td>
            <Td $alignCenter={true} width='5%'>
              <FaEdit style={{
                cursor: 'pointer',
              }} onClick={()=> handleEdit(task)}/>
            </Td>
            <Td $alignCenter={true} width='5%'>
              <FaTrash style={{
                cursor: 'pointer',
              }} onClick={() => handleDelete(task.id)} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};
Grid.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      task_name: PropTypes.string.isRequired,
    })
  ).isRequired,

  setTasks: PropTypes.func.isRequired,
  setOnEdit: PropTypes.func.isRequired,
};

export default Grid;
