// src/App.js

import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';

const todos_por_defecto = [
  { texto: "vender a D Lopez", completed: true },
  { texto: "Comprar a Koundé", completed: true },
  { texto: "ver el - de Koundé", completed: false },
  { texto: "alinear a D.Rico", completed: false },
  { texto: "analizar llorería grupal", completed: false },
];

function App() {
  return (
    <div className="App">
      <TodoCounter completed={5} total={20} />
      <TodoSearch />
      <TodoList todos={todos_por_defecto} />
      <CreateTodoButton />
    </div>
  );
}

export default App;
