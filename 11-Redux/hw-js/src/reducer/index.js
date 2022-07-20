const { INCREMENTO, DECREMENTO, IMPAR, ASYNC } = require('../action-types');

const initialState = {
  contador: 0 //ESTADO INICIAL
}

// Nuestro reducer que maneja nuestros dos casos de acción incremento y decremento.
// Recibe el estado de nuestro store, junto con una action creada por nuestro action creator. 
// ¿Qué tiene que hacer el reducer con el contador de cada caso?

function contador(state = initialState, action) { //TOMA ESTADO INICIAL Y NUEVA ACCION
  switch (action.type) {
    //case "INCREMENTO":  PUEDE SER TAMBIEN CON UN if(action.type === INCREMENTO){return{contador: state.contador + 1}}
     case INCREMENTO:

      return {
      ...state,
      contador: state.contador + 1,
      }
      
  

     //case "DECREMENTO":
      case DECREMENTO:

      return {
      ...state,
      contador: state.contador - 1,
      }

      //case "IMPAR": //como es un string lo defino solo aca, sin comillas es una variable que está definida en otro archivo
      case IMPAR:  
       if(state.contador % 2 !== 0) {

        return {
      ...state,
      contador: state.contador + 1,
        };
      } 

      //case "ASYNC": //si lo tengo definido en una variable tengo la obligación de poner el nombre bien
      case ASYNC:
        

      return {
      ...state,
      contador: state.contador + 1,
      }

      
      
  
    default:
      return {...state}
  }
  
}

//solo acá funciones puras

module.exports = contador;