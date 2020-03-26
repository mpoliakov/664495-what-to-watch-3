import {ActionType, ActionCreator, reducer} from './reducer';

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    promoFilm: null,
    films: [],
    genreFilter: ``,
  });
});

it(`Reducer should change genre to selected filter`, () => {
  expect(reducer({
    genreFilter: ``
  }, {
    type: ActionType.CHANGE_GENRE_FILTER,
    payload: `Sci-Fi`
  })).toEqual({
    genreFilter: `Sci-Fi`
  });

  expect(reducer({
    genreFilter: `Sci-Fi`
  }, {
    type: ActionType.CHANGE_GENRE_FILTER,
    payload: `Drama`
  })).toEqual({
    genreFilter: `Drama`
  });

  expect(reducer({
    genreFilter: `Drama`
  }, {
    type: ActionType.CHANGE_GENRE_FILTER,
    payload: ``
  })).toEqual({
    genreFilter: ``
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for genre filter change returns correct action`, () => {
    expect(ActionCreator.changeGenreFilter(`Horror`)).toEqual({
      type: ActionType.CHANGE_GENRE_FILTER,
      payload: `Horror`,
    });
  });
});
