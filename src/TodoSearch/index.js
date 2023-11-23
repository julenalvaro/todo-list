// src/TodoSearch/index.js

// FILENAME: index

import React, { useContext } from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContext';

function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);

  return (
    <input
      className="TodoSearch"
      placeholder="ejemplo: comprar aceite"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { TodoSearch };
