// src/TodoButton/index.js

import React, { useContext } from 'react';
import './TodoButton.css';
import addCircleIcon from './add-circle-solid-svgrepo-com.svg';
import { TodoContext } from '../TodoContext';

function TodoButton() {
  const { setOpenModal } = useContext(TodoContext);

  const toggleModal = () => {
    setOpenModal(true);
  };

  return (
    <button className="TodoButton" onClick={toggleModal}>
      <img src={addCircleIcon} alt="Agregar" />
    </button>
  );
}

export { TodoButton };
