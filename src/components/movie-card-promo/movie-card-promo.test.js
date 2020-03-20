import React from 'react';
import renderer from 'react-test-renderer';
import MovieCardPromo from './movie-card-promo.jsx';

it(`<MovieCard/> is rendered correctly`, () => {
  const film = {
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
  };

  const component = renderer.create(<MovieCardPromo film={film} />).toJSON();
  expect(component).toMatchSnapshot();
});
