import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style from 'styled-components';
import Form from './components/Form';
import Grid from './components/Grid';
import GblobalStyle from './styles/Global';
import axios from 'axios';
import { API_URL } from './api';

const Container = style.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = style.h2``;

function App() {

  // inicia o estado de tasks como um arry vazio && inicia o estado de onEdit como null
  const [tasks, setTasks] = React.useState([]);
  const [onEdit, setOnEdit] = React.useState(null);  

  // função que buscas as tasks no banco utilizando o axios em um bloco try para caso der sucesso setar as tasks no estado tasks e em caso de erro exibir um toast de erro
  const getTasks = async () => {
    try {
      const res = await axios.get(API_URL);
      setTasks(res.data);
    } catch (error) {
      toast.error(error);
    }
  }

  // faz a busca das tasks ao carregar a página
  React.useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      <Container>
        <Title>Todo List</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getTasks={getTasks}/>
        <Grid tasks={tasks} setTasks={setTasks} setOnEdit={setOnEdit}/>
      </Container>
      <ToastContainer autoClose={3000} position="bottom-left" />
      <GblobalStyle />
    </>
  );
}

export default App;