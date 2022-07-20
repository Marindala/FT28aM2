const redux = require('redux');

const createStore = redux.createStore; //createStore está tachado xq hay otra manera nueva

const ADD_TODO = 'ADD_TODO' //acciones
const REMOVE_TODO = 'REMOVE_TODO';


const initialState = { //por convencion initialState
  todos: [] //estado global inicial objeto con propiedad todos con array
}

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO: //tipo de caso agregar/ expuesto en reducer
      return {
        todos: [...state.todos, action.payload] //en el estado inicial,lee la accion que estoy despachando
      }
    case REMOVE_TODO: //en la accion remove//eliminar
      return {
        todos: state.todos.filter((text, i) => i !== action.payload) //nuevo estado//que elimine solo una parte
      }
    default:
      return state;
  }
}

const store = createStore(rootReducer); //creo el store pasando por paramentro el reducer

//ahora en store que a ser un objeto gigante voy a tener
//{subscribe(), getState(), dispatch(), reducer, state}

//comento todo lo de abajo y hago un console.log(store);
//node todos.js

store.subscribe(() => { //asi se implementa el método del store que es subscribe, calback
  console.log('Subscription: ', store.getState()); //ante cada cambio en el estado global, ejecuta un calback que haga determinada acción
}); //en este caso que haga un console.log con la palabra Subscription: y del valor del estado actual
//el store.subscribe se ejectua ante cada cambio


//function action creations

function addTodo(text) { //funciones que retornan acciones //para no escribir type y payload todo el tiempo
  return {               //realizo función que me retorne esa acción
    type: ADD_TODO,      //y despues solo llamo a la función addTodo() ejemplp addTodo("pasear al perro")
    payload: text
  }
}

//ejemplo de despachar una accion
//store.dispatch(addTodo("Comprar Pan")) asi se entera el reducer

function removeTodo(index) { //por el array i
  return {
    type: REMOVE_TODO,
    payload: index
  }
}

store.dispatch(addTodo('Comprar pan'))
store.dispatch(addTodo('Correr'))

store.dispatch(removeTodo(1)) //1 xq está establecido por indice en el array, remueve "Correr"

console.log(store.getState());