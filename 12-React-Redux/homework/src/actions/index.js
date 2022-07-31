const APY_KEY = "234c0dbc"

//funciones de acciones
//SINCRONIA
export function addMovieFavorite(payload) { //función que contiene la aciión agrega a favorito
    return { type: "ADD_MOVIE_FAVORITE", payload }; //guardar pelicula favorita
    
  }

  //removeMovieFavorite CARD--->BUTTON---->DESPACHA ACCION
  //SINCRONIA
  export function removeMovieFavorite(id) { //función que contiene la acción remover una de las favoritas
    return { type: "REMOVE_MOVIE_FAVORITE", payload: id }; //guardar pelicula favorita
    
  }

  // removeMovieFavorite(payload) PODIA SER (index)
  //cuando llamo a la funcion  removeMovieFavorite(5)


  //get usa una api
  //ASINCRONICO //PORQUE LLAMA A LA API//OBTIENE LAS PELICULAS
  export function getMovies(titulo) {
    return function(dispatch) {
        //llamado a la Api
      return fetch(`http://www.omdbapi.com/?apikey=${APY_KEY}&s=${titulo}`) //tengo que poner comillas invertidas
        .then(response => response.json()) //respuesta del json la paso a un objeto
        
        .then(json => { //se despacha la acción
          dispatch({ type: "GET_MOVIES", payload: json });//en el payload lo que le haya llegado de respuesta
        });
    };
  }

  //AXIOS:
/*export function getRandomQuote() {
  return async function (dispatch) {
    var json = await axios.get('https://www.breakingbadapi.com/api/quote/random');
    //console.log("action");
    return ({
      type: "GET_RANDOM_QUOTE",
      payload: json.data*/

  //getMovieDetail---> asincronico....>xq es pedido a la APi
  //OBTIENE LOS DETALLES DE LAS PELICULAS

  export function getMovieDetail(idMovie) {

    return function (dispatch) { //como es asincronico devuelve otra funcion, dispatch para despachar
       //si no pasa dispatch como parametro no podria despacharlo
       //fetch para pedido a la API
       return fetch(`http://www.omdbapi.com/?apikey=${APY_KEY}&i=${idMovie}`) //de la anterior llamada tenemos la i para ID
       .then((response) => response.json()) //cuando me llegue la respuesta then ejecuta
       .then(json => { // ahora que tenes la respuesta se despacha la acción
        dispatch({ type: "GET_DETAIL", payload: json }); //el then ejecuta lo demás son todas declaraciones
       })
    }
}
