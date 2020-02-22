import React from 'react';
import renderer from 'react-test-renderer';
import MoviesList from './movies-list.jsx';

it(`<MoviesList/> is rendered correctly`, () => {
  const films = [{
    id: `2fc32fa3-e5d4-4e7d-8f58-397cc8c9bba7`,
    title: `Alien`,
    imageUrl: `img/alien.jpg`,
    videoUrl: `https://movies.com/alien.ogv.360p.webm`
  },
  {
    id: `7c8b88b2-091b-4cd1-9589-3c88b77a9104`,
    title: `Home alone`,
    imageUrl: `img/home-alone.jpg`,
    videoUrl: `https://movies.com/home-alone.ogv.360p.webm`
  }];

  const onMovieCardClick = jest.fn();

  const options = {
    createNodeMock: () => {
      return {};
    }
  };

  const component = renderer.create(<MoviesList films={films} onMovieCardClick={onMovieCardClick}/>, options).toJSON();
  expect(component).toMatchSnapshot();
});
