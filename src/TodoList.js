// src/TodoList.js

import React from 'react';
import { TodoItem } from './TodoItem';
import './TodoList.css';

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem className="TodoList"
                  key={index} 
                  todo={todo}
        />
      ))}
    </ul>
  );
}

export { TodoList };
