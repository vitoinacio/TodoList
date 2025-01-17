// faz as importaçoes de bibliotecas e arquivos necessários
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form from './components/Form';
import List from './components/List';
import GblobalStyle from './styles/Global';
import axios from 'axios';
import { API_URL } from './api';
import { Container, Title } from './styles/AppStyle';

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
        <Title>Lista de Tarefas</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getTasks={getTasks}/>
        <List tasks={tasks} setTasks={setTasks} setOnEdit={setOnEdit}/>
      </Container>
      <ToastContainer autoClose={3000} position="bottom-left" />
      <GblobalStyle />
    </>
  );
}

export default App;
