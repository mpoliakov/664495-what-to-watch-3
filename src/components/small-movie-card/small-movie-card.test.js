import React from 'react';
import renderer from 'react-test-renderer';
import SmallMovieCard from './small-movie-card.jsx';

it(`<SmallMovieCard/> is rendered correctly`, () => {
  const film = {
    id: `018a1a1e-8755-4c4f-87fd-08df55da6771`,
    title: `Alien`
  };
  const onMovieCardClick = jest.fn();

  const component = renderer.create(<SmallMovieCard film={film} onMovieCardClick={onMovieCardClick}/>).toJSON();
  expect(component).toMatchSnapshot();
});
