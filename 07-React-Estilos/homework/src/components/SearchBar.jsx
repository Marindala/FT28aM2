import React from 'react';

export default function SearchBar({onSearch}) { //es lo que nos llega
  // acá va tu código
  return (
  <div>
    <input type="text" placeholder='Ciudad...' />  
    <button onClick={() => onSearch ("buscando") }>Agregar </button> 
    
    </div>
  )
};
 
//placeholder: te detalla en la casilla de input lo que quieres escribir
//Componentes el nombre del archivo va con mayúscula
//función flecha para que la función onSearch pueda recibir un parametro