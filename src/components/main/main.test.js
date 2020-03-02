import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import Main from './main.jsx';

const mockStore = configureStore([]);

const films = [
  {
    id: `b47f3158-76c2-4f9b-b511-35419259ce63`,
    title: `The Grand Budapest Hotel`,
    imageUrl: `img/bg-the-grand-budapest-hotel.jpg`,
    posterUrl: `img/the-grand-budapest-hotel-poster.jpg`,
    videoUrl: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    description: `<p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge
              Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.</p>
            <p>Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the
              sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously,
              Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>`,
    runTime: `1h 39m`,
    meta: {
      genre: `Drama`,
      releaseYear: 2015,
    },
    rating: {
      score: 8.5,
      count: 120,
    },
  },
  {
    id: `fe2f95b4-22ba-4b5d-b3f5-7fb50bb230bb`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    imageUrl: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    videoUrl: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    meta: {
      genre: `Fantasy`,
    },
  },
  {
    id: `0bcb460d-4fa6-466d-8c60-42dd66ec5863`,
    title: `Bohemian Rhapsody`,
    imageUrl: `img/bohemian-rhapsody.jpg`,
    videoUrl: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    meta: {
      genre: `Drama`,
    },
  },
  {
    id: `28973f3e-e22d-43a3-8acc-ae8465becf49`,
    title: `Macbeth`,
    imageUrl: `img/macbeth.jpg`,
    videoUrl: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    meta: {
      genre: `Drama`,
    },
  }
];

it(`<Main/> is rendered correctly`, () => {
  const store = mockStore({
    films,
    promoFilm: films[0],
    genreFilter: ``,
    filteredFilms: films.slice(1)
  });

  const onMovieCardClick = jest.fn();

  const options = {
    createNodeMock: () => {
      return {};
    }
  };

  const component = renderer.create(
      <Provider store={store}>
        <Main onMovieCardClick={onMovieCardClick}/>
      </Provider>,
      options).toJSON();

  expect(component).toMatchSnapshot();
});
