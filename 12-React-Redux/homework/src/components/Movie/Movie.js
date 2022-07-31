import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {

    componentDidMount(){
        this.props.getMovieDetail(this.props.match.params.id) //montando componente
    }



    render() { //renderizo componente
        return (
            <div className="movie-detail">
                Detalle de la pelicula 
                <h2>{this.props.movie.Title}</h2> 
                <h5>{this.props.movie.Actors}</h5>
                <p>{this.props.movie.Plot}</p>
            </div>

        );
    }
}

const mapDispatchToProps = (state) => {
    return{
        movie: state.movieDetail
    }
}


export default connect(mapDispatchToProps, {getMovieDetail}) (Movie);