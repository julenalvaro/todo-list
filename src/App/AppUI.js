// src/App/AppUI.js

// FILENAME: AppUI

import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';

import './App.css';
import { TodoProvider } from '../TodoContext';

function AppUI() {
  return (
    <div className="App">
      <TodoProvider>
        <TodoCounter />
        <TodoSearch />
        <TodoList />
      </TodoProvider>
    </div>
  );
}

export default AppUI;
