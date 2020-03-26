import React from 'react';
import renderer from 'react-test-renderer';
import MovieCardReviews from './movie-card-reviews.jsx';

it(`<MovieCardReviews/> is rendered correctly`, () => {
  const reviews = [
    {
      id: 1,
      user: {
        id: 12,
        name: `Isaac`
      },
      rating: 2.6,
      comment: `Poised to be an instant classic, almost everything about this film is phenomenal - the acting, the cinematography, the discography, etc.`,
      date: `2020-03-06T05:40:57.360Z`
    },
    {
      id: 2,
      user: {
        id: 16,
        name: `Mollie`
      },
      rating: 5.9,
      comment: `This movie is just plain bad. There must be some big payola going round this awards season. Badly written, average acting at best, all the characters are unrelatable and inlikeable. 2 hours of my life wasted.`,
      date: `2020-03-17T05:40:57.360Z`
    }
  ];

  const component = renderer.create(<MovieCardReviews reviews={reviews} />).toJSON();
  expect(component).toMatchSnapshot();
});
