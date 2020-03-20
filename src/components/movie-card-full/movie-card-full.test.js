import React from 'react';
import renderer from 'react-test-renderer';
import MovieCardFull from './movie-card-full.jsx';

it(`<MovieCardFull/> is rendered correctly`, () => {
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

  const reviews = [
    {
      id: 1,
      user: {
        id: 12,
        name: `Isaac`
      },
      rating: 2.6,
      comment: `Poised to be an instant classic, almost everything about this film is phenomenal - the acting, the cinematography, the discography, etc.`,
      date: `2020-03-06T05:40:57.360Z`
    },
    {
      id: 2,
      user: {
        id: 16,
        name: `Mollie`
      },
      rating: 5.9,
      comment: `This movie is just plain bad. There must be some big payola going round this awards season. Badly written, average acting at best, all the characters are unrelatable and inlikeable. 2 hours of my life wasted.`,
      date: `2020-03-17T05:40:57.360Z`
    }
  ];

  const component = renderer.create(<MovieCardFull film={film} reviews={reviews} />).toJSON();
  expect(component).toMatchSnapshot();
});
