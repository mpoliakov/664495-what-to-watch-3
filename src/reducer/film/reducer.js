import {extend} from '../../utils';
import {getFilms} from '../catalog/selectors';
import {convertFilm} from '../../utils';

const initialState = {
  film: null,
  reviews: [],
  filmsLikeThat: [],
};

const ActionType = {
  LOAD_FILM: `LOAD_FILM`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
};

const ActionCreator = {
  loadFilm: (film) => ({
    type: ActionType.LOAD_FILM,
    payload: film,
  }),
  loadReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILM:
      return extend(state, {
        film: action.payload,
      });
    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: action.payload,
      });
  }

  return state;
};

const Operation = {
  loadFilm: (filmId) => (dispatch, getState, api) => {
    const films = getFilms(getState());

    if (!films.length) {
      api.get(`/films`)
        .then((response) => {
          const responseFilms = response.data.map(convertFilm);
          const filteredFilm = responseFilms.find((film) => film.id === filmId);
          dispatch(ActionCreator.loadFilm(filteredFilm));
        });
    } else {
      const filteredFilm = films.find((film) => film.id === filmId);
      dispatch(ActionCreator.loadFilm(filteredFilm));
    }
  },
  loadReviews: (filmId) => (dispatch, getState, api) => {
    return api.get(`/comments/${filmId}`)
      .then((response) => {
        const reviews = response.data;
        dispatch(ActionCreator.loadReviews(reviews));
      });
  },
};

export {
  ActionType,
  ActionCreator,
  reducer,
  Operation,
};
