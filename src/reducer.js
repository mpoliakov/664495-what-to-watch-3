import {extend} from './utils';
import mockedFilms from './mocks/films';
import mockerReviews from './mocks/reviews';

const mockedPromoFilm = mockedFilms[0];

const initialState = {
  films: mockedFilms,
  reviews: mockerReviews,
  promoFilm: mockedPromoFilm,
  genreFilter: ``,
  filteredFilms: mockedFilms.filter((f) => f.id !== mockedPromoFilm.id)
};

const ActionType = {
  CHANGE_GENRE_FILTER: `CHANGE_GENRE_FILTER`,
  GET_FILTERED_FILMS: `GET_FILTERED_FILMS`
};

const ActionCreator = {
  changeGenreFilter: (genre) => ({
    type: ActionType.CHANGE_GENRE_FILTER,
    payload: genre
  }),
  getFilteredFilms: () => (dispatch, getState) => {
    const {
      genreFilter,
      promoFilm,
      films
    } = getState();

    const filteredFilms = films.filter((f) => (!genreFilter || f.meta.genre === genreFilter) && f.id !== promoFilm.id);

    dispatch({
      type: ActionType.GET_FILTERED_FILMS,
      payload: filteredFilms
    });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE_FILTER:
      return extend(state, {
        genreFilter: action.payload
      });
    case ActionType.GET_FILTERED_FILMS:
      return extend(state, {
        filteredFilms: action.payload
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
