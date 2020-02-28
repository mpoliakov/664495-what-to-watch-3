import React from 'react';
import renderer from 'react-test-renderer';
import MovieReview from './movie-review.jsx';

it(`<MovieReview/> is rendered correctly`, () => {
  const review = {
    id: `2fc32fa3-e5d4-4e7d-8f58-397cc8c9bba7`,
    text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    author: `Kate Muir`,
    date: `2016-12-24`,
    rating: 8.9
  };

  const component = renderer.create(<MovieReview review={review}/>).toJSON();
  expect(component).toMatchSnapshot();
});
