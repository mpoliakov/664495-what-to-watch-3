import React from 'react';
import renderer from 'react-test-renderer';
import MovieCardDetails from './movie-card-details.jsx';

it(`<MovieCardDetails/> is rendered correctly`, () => {
  const film = {
    name: `Aviator`,
    posterImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/Aviator.jpg`,
    previewImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/aviator.jpg`,
    backgroundImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/Aviator.jpg`,
    backgroundColor: `#D6CDAF`,
    description: `A biopic depicting the early years of legendary Director and aviator Howard Hughes' career from the late 1920s to the mid 1940s.`,
    rating: 9.8,
    scoresCount: 307174,
    director: `Martin Scorsese`,
    starring: [
      `Leonardo DiCaprio`,
      `Cate Blanchett`,
      `Kate Beckinsale`
    ],
    runTime: 170,
    genre: `Drama`,
    released: 2014,
    id: 1,
    isFavorite: false,
    videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
    previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  };

  const component = renderer.create(<MovieCardDetails film={film} />).toJSON();
  expect(component).toMatchSnapshot();
});
