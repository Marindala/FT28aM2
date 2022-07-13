import React, {useState} from 'react';
import Nav from './components/Nav.jsx'
import Cards from './components/Cards.jsx'
import './App.css';


export default function App() {
  const [cities, setCities] = useState([]); //cuando se ejecuta devuelve un array

  function onSearch(ciudad) {
    //Acá habría que hacer el llamado a la API para obtener los datos de la ciudad
    //pero de momento agregaremos una ciudad por default para ver que funcione

    const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

    fetch( //hacemos una llamada como un get //obtener datos de una APi
      `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json()) //r de respuesta puede variar nombre, transforma de json a objeto
      .then((recurso) => { //then entonces
        if(recurso.main !== undefined){ //se fija si le llego algo
          const ciudad = { //si le llego algo crea una ciudad y envia al estado
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]); //agrega ciudad
        } else {
          alert("Ciudad no encontrada");
        }
      });
    }

    function onClose(id) {
      setCities(oldCities => oldCities.filter(c => c.id != id)); //elimina estado de ciudades en base a ID
      //filter recibe una función de callback

    } 

  
    //setCities ejectuta el callback
    //oldCities lo nombro de esa manera para saber lo que estoy haciendo
    //oldCities le pasa el estado actual que es un array vacio
    //y actualiza pusheando una ciudad
  



  return (
    <div className="App">
      <Nav onSearch={onSearch}/> 
      
      <Cards cities={cities} onClose={onClose} /> 
    </div>
  );
}
// primero llamamos a Nav 
//invoco a Nav y le paso la función onSearch
//importo Cards
//llamo a useState
//ejecuto useState con estado inicial array vacio
//cities y setCities se pueden llamar de otra manera.a elección.
//pegamos la función onSearch con parámetro ciudad
//esta función crea una ciudad y actualiza el estado
//agrego al Nav la funcion onSearch
//pasarle a Cards las cities que figura en el const
//definir función function onClose(id) { llama a setCities
//<Cards cities={cities} onClose={onClose} agrego la función para filtrar o eliminar
//Cards se renderiza y renderiza a sus hijos le lega un array mas chico (cambian las propiedades), y vuelve a renderizar
      