// faz as importaçoes de bibliotecas e arquivos necessários
import axios from 'axios';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { API_URL } from '../api';
import { Table, Thead, Tbody, Tr, Th, Td, EditIcon, TrashIcon } from './styles/GridStyle';

const Grid = ({ tasks , setTasks, setOnEdit}) => {

  // Função handleEdit que recebe uma task e seta a task no estado onEdit
  const handleEdit = (task) => {
    setOnEdit(task);
  }

  // Função handleDelete que recebe um id e deleta a task com o id recebido filtrando o array de tasks
  const handleDelete = async (id) => {

    // Faz a requisição delete para a API passando o id da task e usando a url criada e exportada do arquivo api.js
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
            <Td width='70%'>{task.task_name}</Td>
            <Td $alignCenter={true} width='10%'>
              <EditIcon onClick={()=> handleEdit(task)}/>
            </Td>
            <Td $alignCenter={true} width='10%'>
              <TrashIcon onClick={() => handleDelete(task.id)} />
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
