import {extend, convertFilm} from '../../utils';

const initialState = {
  promoFilm: null,
  films: [],
  genreFilter: ``,
};

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  CHANGE_GENRE_FILTER: `CHANGE_GENRE_FILTER`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
};

const ActionCreator = {
  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films,
  }),
  changeGenreFilter: (genre) => ({
    type: ActionType.CHANGE_GENRE_FILTER,
    payload: genre,
  }),
  loadPromoFilm: (film) => ({
    type: ActionType.LOAD_PROMO_FILM,
    payload: film,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: action.payload,
      });
    case ActionType.CHANGE_GENRE_FILTER:
      return extend(state, {
        genreFilter: action.payload,
      });
    case ActionType.LOAD_PROMO_FILM:
      return extend(state, {
        promoFilm: action.payload,
      });
  }

  return state;
};

const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        const films = response.data.map(convertFilm);
        dispatch(ActionCreator.loadFilms(films));
      });
  },
  loadPromoFilm: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        const promoFilm = convertFilm(response.data);
        dispatch(ActionCreator.loadPromoFilm(promoFilm));
      });
  },
};

export {
  ActionType,
  ActionCreator,
  reducer,
  Operation,
};
