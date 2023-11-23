// src/App/index.js

// FILENAME: index

import React from 'react';
import AppUI from './AppUI';
import { TodoProvider } from '../TodoContext';

function App() {
  //Fragmento stateful: toda la lógica dependiente de estados, va en TodoContext 
  
  //Fragmento stateless: toda la lógica que no depende de estados (esencialmente UI), va enn AppUI.js
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
