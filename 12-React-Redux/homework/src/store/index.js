import { createStore, applyMiddleware, compose} from "redux"; //compose combina algunos métdos
import rootReducer from "../reducers/index";
import thunk from "redux-thunk"; //thunk es el middlewre que usamos

//const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

//Lo primero para una APP la construcción del Store
//puedo tener muchos reducer con el combienReducer(reducer1, reducer2,..)
const store = createStore(
    rootReducer, 
    compose(
        applyMiddleware(thunk),
        //(typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose()
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        ));
//Aplicamos applyMiddleware(thunk) consulta a la API y vuelve

export default store;