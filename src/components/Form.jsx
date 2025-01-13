// faz as importaçoes de bibliotecas e arquivos necessários
import axios from 'axios';
import PropTypes from 'prop-types';
import React from 'react';
import { toast } from 'react-toastify';
import { API_URL } from '../api';
import { Button, FormContainer, Input, InputArea, Label } from './styles/FormStyle';


const Form = ({ onEdit, setOnEdit, getTasks }) => {
  // Cria uma referência para o formulário
  const ref = React.useRef(null);

  // useEffect que verifica se a tarefa está em modo de edição e seta o foco no input da tarefa e o texto do botão para salvar
  React.useEffect(() => {
    if (onEdit) {
      const task = ref.current;
      task.task_name.focus();
      task.button.innerHTML = 'Salvar'

      task.task_name.value = onEdit.task_name;
    }
  }, [onEdit]);

  // Função handleSubmit que recebe um evento e previne o comportamento padrão do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const task = ref.current;
    task.button.innerHTML = 'Adicionar'

    if (!task.task_name.value) {
      return toast.warning('Preencha o campo Tarefa');
    }

    if (onEdit) {
      // verifica se a tarefa está em modo de edição e faz a requisição put para a API passando o id da tarefa e o nome da tarefa e usando a url criada e exportada do arquivo api.js

      await axios
        .put(`${API_URL}/${onEdit.id}`, {
          task_name: task.task_name.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      // faz a requisição post para a API passando o nome da tarefa e usando a url criada e exportada do arquivo api.js
      await axios
        .post(API_URL, {
          task_name: task.task_name.value,
        })
        .then(({ data }) => {
          toast.success(data)
          task.task_name.focus();
        })
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
      <Button id='button' type='submit'>Adicionar</Button>
    </FormContainer>
  );
};

Form.propTypes = {
  onEdit: PropTypes.object,
  setOnEdit: PropTypes.func.isRequired,
  getTasks: PropTypes.func.isRequired,
};

export default Form;
