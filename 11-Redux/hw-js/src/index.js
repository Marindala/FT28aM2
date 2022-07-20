const { createStore } = require('redux');
const reducer = require('./reducer');
//importo las acciones
const { incremento, decremento, impar, async } = require('./actions');

// En esta linea creamos nuestro store. Pasandole como parametro nuestro Reducer
var store = createStore(reducer); //store creado

// Obtenemos el elemento con el id `valor`.
var valor = document.querySelector ("#valor");

// Esta funcion nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.
function renderContador() {
  // Obtenemos la propiedad 'contador' de nuestro store:
 //valor del store
var num = store.getState().contador//getState  = {contador:0} y hay que guardar en variable
                                   //de ese objeto la propiedad contador
  // Seteamos el numero obtenido como texto dentro del elemento con id 'valor':
  valor.innerHTML = num; //el valor que esta dentro del html

}

// Ejecutamos la funcion 'renderContador':

renderContador();



// Nos subscribimos al store pasandole la misma funcion. Asi cada vez que llegue una accion, ejecutamos la funcion:

store.subscribe(() => renderContador()) //lo ejecuta store.subscribe cuando haya cambios

// Por ultimo, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la accion correspondiente:

var btnIncrement = document.querySelector("#incremento");

btnIncrement.onclick = () => store.dispatch(incremento()); //despacho a incremento y llamo a la función para que incremento devuelva el objeto
//
var btnDecrement =document.querySelector("#decremento");
btnDecrement.onclick = () => store.dispatch(decremento());
//cuando alguien haga click, recibe dispatch ejecuta decremento,devuelve un objeto {type:DECREMENTO} lo lleva al store
//el store lo pasa a reducer state, recibe tambien la acción type:DECREMENTO

var incrementoImpar =document.querySelector("#incrementoImpar");
incrementoImpar.onclick = () => store.dispatch(impar()); //como la funcion dispatch tiene que recibir  un parametro
//                                                       lanza función flecha                                                         
var incrementoAsync =document.querySelector("#incrementoAsync");
incrementoAsync.onclick = () => setTimeout (() => store.dispatch(async()), 1000) //recibe un calback y un tiempo 1000 = 1 segundo





//store----state
// reducer---función.---hace los cambios en el state
//actions----objetos---describe lo que queremos hacer
//payload---se utiliza por convención {type: "", payload:}

//apreta botón---emite acción---recibe reducer---que va a hacer cambios en el state--se obtiene nuevo state.