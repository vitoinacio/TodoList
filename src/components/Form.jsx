import axios from 'axios';
import PropTypes from 'prop-types';
import React from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { API_URL } from '../api';

const FormContainer = styled.form`
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

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

const Input = styled.input`
  width: 250px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;

  @media (max-width: 400px) {
    width: 100%;
  }
`;

const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
`;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background: #2c73d2;
  color: #fff;
  height: 42px;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 400px) {
    width: 100%;
  }
`;

const Form = ({ onEdit, setOnEdit, getTasks }) => {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (onEdit) {
      const task = ref.current;

      task.task_name.value = onEdit.task_name;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const task = ref.current;

    if (!task.task_name.value) {
      return toast.warning('Preencha o campo Tarefa');
    }

    if (onEdit) {
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
