import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Namespace from '../../reducer/namespace';
import MoviesList from './movies-list.jsx';

const mockStore = configureStore([]);

it(`<MoviesList/> is rendered correctly`, () => {
  const films = [
    {
      id: 1,
      name: `Alien`,
      previewImage: `img/alien.jpg`,
      previewVideoLink: `https://movies.com/alien.ogv.360p.webm`,
    },
    {
      id: 2,
      name: `Home alone`,
      previewImage: `img/home-alone.jpg`,
      previewVideoLink: `https://movies.com/home-alone.ogv.360p.webm`,
    }
  ];

  const store = mockStore({
    [Namespace.CATALOG]: {
      films,
    },
  });

  const options = {
    createNodeMock: () => {
      return {};
    },
  };

  const component = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <MoviesList films={films}/>
        </BrowserRouter>
      </Provider>
      , options).toJSON();

  expect(component).toMatchSnapshot();
});
