import React from 'react';
import renderer from 'react-test-renderer';
import MovieReview from './movie-review.jsx';

it(`<MovieReview/> is rendered correctly`, () => {
  const review = {
    id: 1,
    user: {
      id: 12,
      name: `Isaac`
    },
    rating: 2.6,
    comment: `Poised to be an instant classic, almost everything about this film is phenomenal - the acting, the cinematography, the discography, etc.`,
    date: `2020-03-06T05:40:57.360Z`
  };

  const component = renderer.create(<MovieReview review={review}/>).toJSON();
  expect(component).toMatchSnapshot();
});
