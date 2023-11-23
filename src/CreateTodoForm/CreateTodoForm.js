// src/CreateTodoForm/CreateTodoForm.js

import React, { useState, useContext, useEffect } from 'react';
import './CreateTodoForm.css';
import { TodoContext } from '../TodoContext';

function CreateTodoForm() {
  const [newTodoValue, setNewTodoValue] = useState('');
  const { addTodo, setOpenModal, openModal } = useContext(TodoContext);

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault(); // Evita que la página se recargue al submit
    if (newTodoValue.trim()) {
      addTodo({
        texto: newTodoValue,
        completed: false,
      });
    }
    setOpenModal(false);
  };

  const onKeyDown = (event) => {
    // Si la tecla presionada es "Enter" (código 13), enviar el formulario
    if (event.key === 'Enter') {
      event.preventDefault();
      onSubmit(event);
    }
    // Si la tecla presionada es "Escape" (código 27), cancelar
    if (event.key === 'Escape') {
      event.preventDefault();
      onCancel();
    }
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        onCancel();
      }
    };

    if (openModal) {
      document.querySelector('.CreateTodoForm').classList.add('active');
      document.addEventListener('keydown', handleEscapeKey);
    } else {
      document.querySelector('.CreateTodoForm').classList.remove('active');
      document.removeEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [openModal]);

  return (
    <form onSubmit={onSubmit} className="CreateTodoForm">
      <label>Escribe tu nueva tarea</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        onKeyDown={onKeyDown} // Usar onKeyDown en lugar de onKeyPress
        placeholder="Escribe aquí la tarea..."
      />
      <div className="CreateTodoForm-buttons">
        <button
          type="button"
          onClick={onCancel}
          className="CreateTodoForm-button cancel"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="CreateTodoForm-button accept"
        >
          Añadir
        </button>
      </div>
    </form>
  );
}

export { CreateTodoForm };
