import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Namespace from '../../reducer/namespace';
import MovieCatalog from './movie-catalog.jsx';

const mockStore = configureStore([]);

const films = [
  {
    id: 1,
    name: `The Grand Budapest Hotel`,
    posterImage: ``,
    previewImage: `img/bg-the-grand-budapest-hotel.jpg`,
    backgroundImage: `img/the-grand-budapest-hotel-poster.jpg`,
    backgroundColor: `PropTypes.string.isRequired`,
    description: `<p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge
              Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.</p>
            <p>Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the
              sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously,
              Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>`,
    rating: 8.5,
    scoresCount: 120,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    runTime: 99,
    genre: `Drama`,
    released: 2015,
    isFavorite: false,
    videoLink: ``,
    previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
  {
    id: 2,
    name: `Fantastic Beasts: The Crimes of Grindelwald`,
    previewImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    genre: `Fantasy`,
  },
  {
    id: 3,
    name: `Bohemian Rhapsody`,
    previewImage: `img/bohemian-rhapsody.jpg`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    genre: `Drama`,
  },
  {
    id: 4,
    name: `Macbeth`,
    previewImage: `img/macbeth.jpg`,
    previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    genre: `Drama`,
  }
];

it(`<MovieCatalog/> is rendered correctly`, () => {
  const store = mockStore({
    [Namespace.CATALOG]: {
      promoFilm: films[0],
      films,
      genreFilter: ``,
    },
    [Namespace.FILM]: {
      film: null
    }
  });

  const onGenreChange = jest.fn();

  const options = {
    createNodeMock: () => {
      return {};
    }
  };

  const component = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <MovieCatalog onGenreChange={onGenreChange}/>
        </BrowserRouter>
      </Provider>,
      options).toJSON();

  expect(component).toMatchSnapshot();
});
