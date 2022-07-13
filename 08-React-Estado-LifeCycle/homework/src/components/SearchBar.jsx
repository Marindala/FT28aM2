import React, { useState } from "react";

export default function SearchBar({onSearch}) {

 const [city, setCity]  = useState (''); //estado inicial un string

 const handleInputChange = (e) => {
  e.preventDefault();
  setCity (e.target.value);

 }

  return (
    <form onSubmit={(e) => { //form escibo y guardo como onClick
      e.preventDefault();
      onSearch(city); // que muestre a city
      e.target[0].value = ""; //para limpiar el input y que vuelva a quedar Ciudad...
    }}
    >
      <input
        type="text"
        placeholder="Ciudad..."
        onChange={(e) => handleInputChange(e)} //agrego
      />
      <input type="submit" value="Agregar" /> 
       
    </form>
  );
}

//realizo un estado interno debajo de la función antes del return
//city y setCity o cualquier otro nombre identificatorio
//en el input agrego una función onChange
//{handleInputChange} por convención
//hay varias formas de manejar el form
//const handleInputChange = () => { captura los cambios
//con submit se recarga la página
// e.preventDefault(); para que no se recargue
//setCity (e.target.value); para que guarde los cambios y se entere React
//generalmente en input type se genera un button
  
 
