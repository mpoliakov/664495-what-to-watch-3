import React from 'react';
import renderer from 'react-test-renderer';
import GenresList from './genres-list.jsx';

it(`<GenresList/> is rendered correctly`, () => {
  const genres = [`Comedies`, `Dramas`, `Sci-Fi`];
  const activeItem = `Drama`;
  const onActivate = jest.fn();
  const onGenreChange = jest.fn();

  const component = renderer.create(<GenresList items={genres} activeItem={activeItem} onActivate={onActivate} onGenreChange={onGenreChange}/>).toJSON();
  expect(component).toMatchSnapshot();
});
