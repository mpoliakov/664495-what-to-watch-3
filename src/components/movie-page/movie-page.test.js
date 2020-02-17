import React from 'react';
import renderer from 'react-test-renderer';
import MoviePage from './movie-page.jsx';

it(`<MoviePage/> is rendered correctly`, () => {
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

  const filmsLikeThat = [
    {id: `7c8b88b2-091b-4cd1-9589-3c88b77a9104`, title: `Raining Man`},
    {id: `018a1a1e-8755-4c4f-87fd-08df55da6771`, title: `Predator`},
    {id: `2fc32fa3-e5d4-4e7d-8f58-397cc8c9bba7`, title: `Harry Potter`}
  ];

  const onMovieCardClick = jest.fn();

  const component = renderer.create(<MoviePage film={film} filmsLikeThat={filmsLikeThat} onMovieCardClick={onMovieCardClick}/>).toJSON();
  expect(component).toMatchSnapshot();
});
