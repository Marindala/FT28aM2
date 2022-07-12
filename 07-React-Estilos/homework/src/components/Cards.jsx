import React from 'react';
import Card from './Card.jsx';
import styles from './Cards.module.css';

export default function Cards({cities}) {
  // acá va tu código
  // tip, podés usar un map
  return (
   <div>
    {
    //A la hora de hacer el mapeo
    cities?.map((city) => //si hay ciudades hace el map //renderizar //recibo cities array
    (<Card
    name= {city.name} //siempre en llaves por jsx
    min = {city.main.temp_min}
    max = {city.main.temp_max}
    img = {city.weather[0].icon} //unico objeto dentro de un array
    onClose = {() => alert(city.name)}
    key = {city.id}

    /> 
    ))}
    
    </div>
  )
};