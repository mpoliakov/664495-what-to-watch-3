import React from 'react';
import renderer from 'react-test-renderer';
import MovieCardOverview from './movie-card-overview.jsx';

it(`<MovieCardOverview/> is rendered correctly`, () => {
  const film = {
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
    },
    reviews: [
      {
        id: `2fc32fa3-e5d4-4e7d-8f58-397cc8c9bba7`,
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: `2016-12-24`,
        rating: 8.9
      },
      {
        id: `2db47f90-d1a9-4253-be7a-8acf6d4fa3ea`,
        text: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
        author: `Bill Goodykoontz`,
        date: `2015-11-18`,
        rating: 8.0
      }
    ]
  };

  const component = renderer.create(<MovieCardOverview film={film} />).toJSON();
  expect(component).toMatchSnapshot();
});
