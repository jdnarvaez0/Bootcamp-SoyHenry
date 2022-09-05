import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import removeFromFavorite from "../../actions/removeFromFavorite";
import "./Favorites.css";

export class ConnectedList extends Component {
  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {this.props.favorite.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
              <button
                onClick={() => {
                  this.props.removeFromFavorite(movie.id);
                }}
              >
                {" "}
                X{" "}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    favorite: state.moviesFavourites,
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     remove: (id) => dispatch(removeFromFavorite(id)),
//   };
// }

export default connect(mapStateToProps, { removeFromFavorite })(ConnectedList);
