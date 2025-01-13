### Projeto TodoList

Este projeto é uma aplicação web de lista de tarefas desenvolvida com React e Vite. A aplicação permite aos usuários adicionar, editar e remover tarefas.

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)


### Tecnologias Usadas
- React 
- Vite
- Axios
- Styled-components
- React-icons
- React-toastify

### Dependências
As dependências do projeto estão especificadas no arquivo `package.json`:

```json
"dependencies": {
  "axios": "^1.7.9",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-icons": "^5.4.0",
  "react-toastify": "^11.0.2",
  "styled-components": "^6.1.14"
},
"devDependencies": {
  "@eslint/js": "^9.17.0",
  "@types/react": "^18.3.18",
  "@types/react-dom": "^18.3.5",
  "@vitejs/plugin-react": "^4.3.4",
  "eslint": "^9.17.0",
  "eslint-plugin-react": "^7.37.2",
  "eslint-plugin-react-hooks": "^5.0.0",
  "eslint-plugin-react-refresh": "^0.4.16",
  "globals": "^15.14.0",
  "vite": "^6.0.5"
}
```

### Arquitetura do Projeto
A arquitetura do projeto é baseada em componentes React, seguindo a estrutura padrão de uma aplicação Vite. Os principais diretórios e arquivos incluem:
- `src/`: Contém os componentes React.
- `public/`: Arquivos públicos estáticos.
- `package.json`: Gerenciamento de dependências e scripts de build.

### Funcionalidades
1. **Adicionar Tarefa**: Permite adicionar novas tarefas à lista.
2. **Editar Tarefa**: Permite editar tarefas existentes.
3. **Remover Tarefa**: Permite remover tarefas da lista.
4. **Vizualizar Tarefas**: As tarefas adicionadas ou editadas sao exibidas na tela.

### Como Foi Feito
- **Front-end**: Desenvolvido com React, utilizando componentes funcionais e hooks para o gerenciamento de estado.
- **Estilização**: Utiliza styled-components para gerenciamento de estilos e layout.
- **Notificações**: Utiliza react-toastify para exibir notificações de sucesso e erro.
- **API**: As tarefas são gerenciadas através de uma API externa, utilizando axios para realizar as requisições HTTP.

### Como Rodar o Projeto
1. Clone o repositório:
   ```bash
   git clone https://github.com/vitoinacio/TodoList.git
   cd TodoList
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Utilize a API do repositório ou crie uma API com as mesmas funcionalidades, Adicionar, Deletar e Editar, como mostrado abixo:
   ```bash
   https://github.com/vitoinacio/api_TodoList
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
5. Abra o navegador e acesse `http://localhost:3000`.

### Conexão com a API

A conexão com a API é feita utilizando o Axios para realizar as requisições HTTP para o repositório [api_TodoList](https://github.com/vitoinacio/api_TodoList). A URL base da API é configurada no Axios, e todas as operações de gerenciamento de tarefas são realizadas através de endpoints da API.

#### Exemplo de Uso do Axios

```javascript
import API_URL from './api';

// Função para buscar todas as tarefas
const getTasks = async () => {
    try {
      const res = await axios.get(API_URL);
      setTasks(res.data);
    } catch (error) {
      toast.error(error);
    }
  }

// Função para adicionar uma nova tarefa
export const addTask = async (task) => {
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
};

// Função para editar uma tarefa
export const editTask = async (taskId, updatedTask) => {
 await axios
        .put(`${API_URL}/${onEdit.id}`, {
          task_name: task.task_name.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
};

// Função para remover uma tarefa
export const deleteTask = async (taskId) => {
  await axios
      .delete(`${API_URL}/${id}`)
      .then(({ data }) => {
        const newArray = tasks.filter((task) => task.id !== id);

        setTasks(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));
};
```

Para utilizar essa API, é necessário clonar o repositório [api_TodoList](https://github.com/vitoinacio/api_TodoList) ou criar uma API que realize as mesmas funções. Siga os passos abaixo para clonar o repositório da API:

1. Clone o repositório:
   ```bash
   git clone https://github.com/vitoinacio/api_TodoList.git
   cd api_TodoList
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor da API:
   ```bash
   npm start
   ```
4. Certifique-se de que a URL base da API no frontend (`baseURL` no arquivo `api.js`) está apontando para o servidor da API que você acabou de iniciar.

### Como Contribuir
1. Faça um fork do repositório.
2. Crie uma nova branch:
   ```bash
   git checkout -b minha-contribuicao
   ```
3. Faça as alterações desejadas e commit:
   ```bash
   git commit -m "Minha contribuição"
   ```
4. Envie as alterações para o seu fork:
   ```bash
   git push origin minha-contribuicao
   ```
5. Abra um Pull Request no repositório original.

Para mais detalhes sobre o projeto [página do projeto](https://github.com/vitoinacio/TodoList).