// src/TodoItem/index.js

import React from 'react';
import './TodoItem.css';
import CheckIcon from '../CheckIcon';
import DeleteIcon from '../DeleteIcon';

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li className={`TodoItem ${todo.completed ? 'completed' : ''}`}>
      <CheckIcon onClick={toggleTodo} />
      <p>{todo.texto}</p>
      <DeleteIcon onClick={deleteTodo} />
    </li>
  );
}

export { TodoItem };
