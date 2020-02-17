import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from './movie-card.jsx';

it(`<MovieCard/> is rendered correctly`, () => {
  const film = {
    title: `The Saw`,
    imageUrl: `img/saw.jpg`,
    posterUrl: `img/saw-poster.jpg`,
    meta: {
      genre: `Horror`,
      releaseYear: 2010
    }
  };

  const component = renderer.create(<MovieCard film={film} />).toJSON();
  expect(component).toMatchSnapshot();
});
