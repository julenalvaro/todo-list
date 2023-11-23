// src/DeleteIcon/index.js

// FILENAME: index

// src/DeleteIcon.js
import React from 'react';
import './DeleteIcon.css'; // Suponiendo que has movido los estilos relacionados a DeleteIcon aquí
import addDeleteIcon from './trash-disable-solid-svgrepo-com.svg';

function DeleteIcon({ onClick }) {
  return (
    <img 
      src={addDeleteIcon} 
      alt="Delete" 
      className="DeleteIcon"
      onClick={onClick} 
    />
  );
}

export default DeleteIcon;
