const initialState = {
    moviesFavourites: [], //varias
    moviesLoaded: [], //varias
    movieDetail: {} //el detalle de 1 sola pelicula
  };


  function rootReducer(state = initialState, action) { //estado inicial, y acción 
    if (action.type === "ADD_MOVIE_FAVORITE") {
      return {
          ...state,//se trae el estado 
          moviesFavourites: state.moviesFavourites.concat(action.payload) //concatenale lo que llegue en action.payload
        }
    }
    if (action.type === "GET_MOVIES") {
        return {
          ...state,
          moviesLoaded: action.payload.Search, // así lo devuelve la API //la APi tiene un search
        };
    }
    if (action.type === "REMOVE_MOVIE_FAVORITE"){
    return {
        ...state, //en las peliculas favoritas, filter por cada movie que sea distinto al action.payload, Id que recibimos.
        moviesFavourites: state.moviesFavourites.filter(movie => movie.id !== action.payload) //según el booleano saca o deja el elemento
    }   //imdbID
    }
    if (action.type === "GET_DETAIL"){
        return{
            ...state,
            movieDetail: action.payload,

        }
    }
    
  return state
}

  export default rootReducer;
  