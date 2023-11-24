// src/TodoCounter/index.js

import React, { useContext } from 'react';
import './TodoCounter.css'; // Importa el archivo CSS
import { TodoContext } from '../TodoContext';

function TodoCounter() {
  const { todos, loading } = useContext(TodoContext);

  // Cuenta la cantidad total de todos
  const totalTodos = todos.length;

  // Cuenta la cantidad de completados
  const completedTodos = todos.filter(todo => !!todo.completed).length;

  if (loading) {
    return <h1 className="todo-counter">Cargando... ⌛</h1>;
  }

  if (totalTodos === 0) {
    return <h1 className="todo-counter">No tienes tareas por hacer</h1>;
  }

  if (totalTodos > 0 && completedTodos === totalTodos) {
    return <h1 className="todo-counter">¡Has completado todas tus tareas! 🎉</h1>;
  }

  return (
    <h1 className="todo-counter">
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOS
    </h1>
  );
}

export { TodoCounter };
