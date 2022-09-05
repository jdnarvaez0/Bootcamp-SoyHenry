import {
  GET_MOVIES,
  ADD_MOVIE_FAVORITE,
  REMOVE_MOVIE_FAVORITE,
  GET_MOVIE_DETAIL,
} from "../actions";

const initialState = {
  moviesFavourites: [],
  moviesLoaded: [],
  movieDatail: {},
};

function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_MOVIE_FAVORITE:
      return {
        ...state,
        moviesFavourites: [...state.moviesFavourites, payload],
      };

    case GET_MOVIES:
      return {
        ...state,
        moviesLoaded: payload.Search,
      };

    case GET_MOVIE_DETAIL:
      return {
        ...state,
        movieDatail: payload,
      };

    case REMOVE_MOVIE_FAVORITE:
      return {
        ...state,
        moviesFavourites: state.moviesFavourites.filter(
          (movie) => movie.id !== payload
        ),
      };

    default:
      return state;
  }
}
export default rootReducer;
