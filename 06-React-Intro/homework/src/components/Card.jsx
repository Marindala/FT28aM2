import React from 'react';

//funciones constructoras

export default function Card(props) {  //({onClose, name, img, min, max}){
  // acá va tu código
  return (
   <div> 
    <button onClick= {props.onClose}> X </button>
    <h1>{props.name}</h1> 
    <div>
    <h2>Max</h2>
    <h2> {props.max +"°"}</h2>
    </div>
    <div>
    <h2> Min</h2>
    <h2> {props.min +"°"}</h2>
    </div>
    <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="#" />
    </div>)
};