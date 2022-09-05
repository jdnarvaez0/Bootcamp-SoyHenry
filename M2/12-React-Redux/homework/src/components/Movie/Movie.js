import React from "react";
import { connect } from "react-redux";
import getMovieDetail from "../../actions/getMovieDetail";

import "./Movie.css";

class Movie extends React.Component {
  componentDidMount() {
    this.props.getMovieDetail(this.props.match.params.id);
  }

  render() {
    return (
      <div className="movie-detail">
        {this.props.detail ? (
          <div>
            <div>
              <span>Title:</span>
              <span>{this.props.detail.Title}</span>
              <img src={this.props.detail.Poster} alt={"img"} />
            </div>
          </div>
        ) : (
          <h1>Cargando...</h1>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    detail: state.movieDatail,
  };
}
export default connect(mapStateToProps, { getMovieDetail })(Movie);
