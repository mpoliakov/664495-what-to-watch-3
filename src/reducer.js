import {extend} from './utils';
import films from './mocks/films';
import reviews from './mocks/reviews';

const initialState = {
  films,
  reviews,
  promoFilmId: `b47f3158-76c2-4f9b-b511-35419259ce63`,
  filmId: ``,
  genreFilter: ``
};

const ActionType = {
  CHANGE_GENRE_FILTER: `CHANGE_GENRE_FILTER`
};

const ActionCreator = {
  changeGenreFilter: (genre) => ({
    type: ActionType.CHANGE_GENRE_FILTER,
    payload: genre
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE_FILTER:
      return extend(state, {
        genreFilter: action.payload
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
