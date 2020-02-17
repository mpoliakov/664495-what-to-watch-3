import React from 'react';
import renderer from 'react-test-renderer';
import MovieCardFull from './movie-card-full.jsx';

it(`<MovieCardFull/> is rendered correctly`, () => {
  const film = {
    title: `Interstellar`,
    imageUrl: `img/interstellar.jpg`,
    posterUrl: `img/interstellar-poster.jpg`,
    director: `Christopher Nolan`,
    starring: [`Matthew McConaughey`, `Anne Hathaway`, `Jessica Chastain`],
    description: `<p>A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.</p>`,
    meta: {
      genre: `Sci-Fi`,
      releaseYear: 2014
    },
    rating: {
      score: 9.5,
      count: 345
    }
  };

  const component = renderer.create(<MovieCardFull film={film} />).toJSON();
  expect(component).toMatchSnapshot();
});
