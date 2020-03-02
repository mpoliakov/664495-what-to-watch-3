import React from 'react';
import renderer from 'react-test-renderer';
import GenresList from './genres-list.jsx';

it(`<GenresList/> is rendered correctly`, () => {
  const genres = [`Comedies`, `Dramas`, `Sci-Fi`];
  const activeGenre = `Drama`;
  const onGenreClick = jest.fn();

  const component = renderer.create(<GenresList genres={genres} activeGenre={activeGenre} onGenreClick={onGenreClick}/>).toJSON();
  expect(component).toMatchSnapshot();
});
