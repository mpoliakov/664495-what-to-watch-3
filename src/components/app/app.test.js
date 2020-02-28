import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

it(`<App/> is rendered correctly`, () => {
  const genres = [`Dramas`, `Horror`, `Kids & Family`];

  const films = [
    {
      id: `7c8b88b2-091b-4cd1-9589-3c88b77a9104`,
      title: `Raining Man`,
      imageUrl: `img/raining-man.jpg`,
      videoUrl: `https://movies.com/raining-man.ogv.360p.webm`,
      meta: {
        genre: `Drama`
      }
    },
    {
      id: `018a1a1e-8755-4c4f-87fd-08df55da6771`,
      title: `Predator`,
      imageUrl: `img/predator.jpg`,
      videoUrl: `https://movies.com/predator.ogv.360p.webm`,
      meta: {
        genre: `Sci-Fi`
      }
    },
    {
      id: `2fc32fa3-e5d4-4e7d-8f58-397cc8c9bba7`,
      title: `Harry Potter`,
      imageUrl: `img/harry-potter.jpg`,
      videoUrl: `https://movies.com/harry-potter.ogv.360p.webm`,
      meta: {
        genre: `Fantasy`
      }
    }
  ];

  const promoFilm = {
    id: `b47f3158-76c2-4f9b-b511-35419259ce63`,
    title: `Interstellar`,
    imageUrl: `img/interstellar.jpg`,
    posterUrl: `img/interstellar-poster.jpg`,
    director: `Christopher Nolan`,
    starring: [`Matthew McConaughey`, `Anne Hathaway`, `Jessica Chastain`],
    description: `<p>A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.</p>`,
    runTime: `2h 15m`,
    meta: {
      genre: `Sci-Fi`,
      releaseYear: 2014
    },
    rating: {
      score: 9.5,
      count: 345
    }
  };

  const options = {
    createNodeMock: () => {
      return {};
    }
  };

  const component = renderer.create(<App promoFilm={promoFilm} genres={genres} films={films} />, options).toJSON();
  expect(component).toMatchSnapshot();
});
