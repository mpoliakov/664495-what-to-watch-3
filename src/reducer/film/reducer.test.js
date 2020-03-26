import {reducer} from './reducer';

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    film: null,
    reviews: [],
    filmsLikeThat: [],
  });
});
