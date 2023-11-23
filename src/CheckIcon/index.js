// src/CheckIcon/index.js

// FILENAME: index

// src/CheckIcon.js
import React from 'react';
import './CheckIcon.css'; // Suponiendo que has movido los estilos relacionados a CheckIcon aquí
import addCheckIcon from './check-circle-solid-svgrepo-com.svg';

function CheckIcon({ onClick }) {
  return (
    <img 
      src={addCheckIcon} 
      alt="Check" 
      className="CheckIcon"
      onClick={onClick} 
    />
  );
}

export default CheckIcon;
