// src/TodoItem.js

import './TodoItem.css';

function TodoItem(props) {
    return (
      <li className={`TodoItem ${props.todo.completed ? 'completed' : ''}`}>
        <span className="TodoItem-check">V</span>
        <p>{props.todo.texto}</p>
        <span className="TodoItem-delete">X</span>
      </li>
    );
  }
  
export { TodoItem };