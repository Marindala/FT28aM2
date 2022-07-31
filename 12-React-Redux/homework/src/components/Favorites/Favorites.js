import React, { Component } from "react";
import { removeMovieFavorite } from "../../actions";
import { connect } from "react-redux";
//import { Link } from 'react-router-dom';
import './Favorites.css';
//import Movie from "../Movie/Movie";
import { Link } from "react-router-dom";

export class ConnectedList extends Component {

  render() {
    console.log(this.props.movies)
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {this.props.movies?.map(movie => 
              <li key={movie.imdbID}>
                <Link to={`/movie/${movie.imdbID}`}>{movie.title}</Link>
                
                <button  
                onClick={() => 
                this.props.removeMovieFavorite(movie.imdbID)}>X</button>

              </li>
            )

          }
        </ul>
      </div>
    );
  }
}
function mapStateToProps(state){
  return {
    movies: state.moviesFavourites,

  };
}

//function mapDispatch(dispatch){ //acciones buscar o remover en la acción remover se ejecuta está función para luego ir a actions
  //return{
   // removeMovieFavorite: (id) => dispatch (removeMovieFavorite(id)),
  //};
//}


export default connect (mapStateToProps, {removeMovieFavorite}) (ConnectedList);
