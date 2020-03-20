import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import MovieCardSmall from './movie-card-small.jsx';

const mockStore = configureStore([]);

it(`<SmallMovieCard/> is rendered correctly`, () => {
  const film = {
    id: 1,
    name: `Alien`,
    previewImage: `img/alien.jpg`,
    previewVideoLink: `https://movies.com/alien.ogv.360p.webm`,
  };

  const store = mockStore({});

  const onMouseEnter = jest.fn();
  const onMouseLeave = jest.fn();

  const component = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <MovieCardSmall film={film} renderVideoPlayer={() => {
          }} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}/>
        </BrowserRouter>
      </Provider>
  ).toJSON();

  expect(component).toMatchSnapshot();
});
