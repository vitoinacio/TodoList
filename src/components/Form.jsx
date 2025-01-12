// faz as importaçoes de bibliotecas e arquivos necessários
import axios from 'axios';
import PropTypes from 'prop-types';
import React from 'react';
import { toast } from 'react-toastify';
import { API_URL } from '../api';
import { Button, FormContainer, Input, InputArea, Label } from './styles/FormStyle';


const Form = ({ onEdit, setOnEdit, getTasks }) => {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (onEdit) {
      document.querySelector('button[type="submit"]').innerHTML = 'Salvar'
      const task = ref.current;

      task.task_name.value = onEdit.task_name;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    document.querySelector('button[type="submit"]').innerHTML = 'Adicionar'
    e.preventDefault();

    const task = ref.current;

    if (!task.task_name.value) {
      return toast.warning('Preencha o campo Tarefa');
    }

    if (onEdit) {
      // Atualiza a tarefa e utiliza a função getTasks para atualizar a lista de tarefas usando a url criada e exportada do arquivo api.js

      await axios
        .put(`${API_URL}/${onEdit.id}`, {
          task_name: task.task_name.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post(API_URL, {
          task_name: task.task_name.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    task.task_name.value = '';

    setOnEdit(null);
    getTasks();
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label htmlFor='task_name'>Tarefa</Label>
        <Input type='text' id='task_name' />
      </InputArea>
      <Button type='submit'>Adicionar</Button>
    </FormContainer>
  );
};

Form.propTypes = {
  onEdit: PropTypes.object,
  setOnEdit: PropTypes.func.isRequired,
  getTasks: PropTypes.func.isRequired,
};

export default Form;
