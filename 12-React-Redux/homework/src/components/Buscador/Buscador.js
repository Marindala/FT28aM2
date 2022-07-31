//import { map } from "@11ty/eleventy/src/TemplateGlob";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Buscador.css';
import { getMovies, addMovieFavorite } from "../../actions/index.js";




export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "" //se guarda en el estado despues de buscar
    };
  }
  handleChange(event) { //setea un estado //se ejecuta cuando voy a buscar
    this.setState({ title: event.target.value }); 
  }
  handleSubmit(event) { //previene el default
    event.preventDefault(); //despacha la acción getmovies
    this.props.getMovies(this.state.title);//paso de parametro lo que se guardo en el estado
  }                     // despacha el título

  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
         {this.props.movies?.map(movie =>  //map recorre x cada movie vas a hacer algo//por el mapeo veo las peliculas
            //movie.Title sale del mapeo //la key viene de la data//de la APi
            <div key={movie.imdbID}> 
              <Link to={`/movies/${movie.imdbID}`}>
                {movie.Title}</Link>
              {/*cuando una persona haga click en el título de una pelicula lo lleve a esa ruta */}
              <button  
              onClick={() => 
              this.props.addMovieFavorite({title: movie.Title, id: movie.imdbID})}>Fav</button>
            </div>
          )
         //guarda title: movie.Title, id: movie.imdbID}) titulo y Id en favoritos
         }
        </ul>
      </div>
    );
  }//x cada movie vas a hacer algo
}

function mapStateToProps(state) { //funcion que se encarga de mapear el estado
  return {
    movies: state.moviesLoaded //tengo disponible esto desde el estado
  };
}

function mapDispatchToProps(dispatch) { //funcion que se encarga de mapear el dispatch
  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovies: title => dispatch(getMovies(title))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);
//usamos connect cuando necesitamos posibilidad de pasar acciones

