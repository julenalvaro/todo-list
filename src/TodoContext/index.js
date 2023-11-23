// src/TodoContext/index.js

import React from "react";
import { useLocalStorage } from "./useLocalStorage";
import { todos_por_defecto } from "./var_defecto";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V1', todos_por_defecto);
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  const toggleTodoCompletion = (texto) => {
    const todoIndex = todos.findIndex(todo => todo.texto === texto);
    if (todoIndex !== -1) {
      const newTodos = todos.map((todo, index) => {
        if (todoIndex === index) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      saveTodos(newTodos);
    }
  };

  const addTodo = (newTodo) => {
    const updatedTodos = [...todos, newTodo];
    saveTodos(updatedTodos);
  };

  const deleteTodo = (texto) => {
    const newTodos = todos.filter(todo => todo.texto !== texto);
    saveTodos(newTodos);
  };

  return (
    <TodoContext.Provider value={{
      loading,
      error,
      todos,
      searchValue,
      setSearchValue,
      toggleTodoCompletion,
      addTodo, // Exponiendo addTodo a través del contexto
      deleteTodo,
      openModal,
      setOpenModal
    }}>
      {children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider }
