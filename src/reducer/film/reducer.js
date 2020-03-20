import {extend} from '../../utils';

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
