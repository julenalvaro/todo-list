// src/TodoList/index.js


import React, { useContext } from 'react';
import { TodoItem } from '../TodoItem';
import './TodoList.css';
import { TodoButton } from '../TodoButton';
import { TodosLoader } from '../TodosLoader';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal/Modal';
import { CreateTodoForm } from '../CreateTodoForm/CreateTodoForm';

function TodoList() {
  const { todos, 
          searchValue, 
          toggleTodoCompletion, 
          deleteTodo, 
          loading, 
          error, 
          openModal,
          } = useContext(TodoContext);
  const isFiltered = searchValue.trim() !== '';

  if (loading) {
    return (
      <div className='ContainerLoader'>
        <TodosLoader />
      </div>
    );
  }

  if (error) {
    return <p>Error: {error.message}❌</p>;
  }

  const filteredAndSortedTodos = todos
    .filter(todo => {
      const todoText = todo.texto.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
    .sort((a, b) => (a.completed === b.completed ? 0 : a.completed ? 1 : -1));

  if (filteredAndSortedTodos.length === 0) {
    return isFiltered ? (
      <p>No hay tareas que coincidan con la búsqueda.🦕</p>
    ) : (
      <div className='EmptyTodoList'>
        <p>¡Crea tu primer ToDo!🚀</p>
        
        <TodoButton />

        {openModal && ( // Mostrar Modal solo si openModal es true
        <Modal>
          <CreateTodoForm />
        </Modal>
        )}
      </div>
    );
  }

  return (
    <ul className='TodoList'>
      {filteredAndSortedTodos.map((todo) => (
        <TodoItem
          key={todo.texto}
          todo={todo}
          toggleTodo={() => toggleTodoCompletion(todo.texto)}
          deleteTodo={() => deleteTodo(todo.texto)}
        />
      ))}

      <TodoButton />

      {openModal && ( // Mostrar Modal solo si openModal es true
        <Modal>
          <CreateTodoForm />
        </Modal>
      )}
    </ul>
  );
}

export { TodoList };
