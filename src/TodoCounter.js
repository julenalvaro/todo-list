// src/TodoCounter.js

import React from 'react';
import './TodoCounter.css'; // Importa el archivo CSS

function TodoCounter({ total, completed }) {
  return (
    <h1 className="todo-counter"> {/* Aplica la clase CSS al elemento */}
      Has completado {completed} de {total} TODOS
    </h1>
  );
}

export { TodoCounter };
