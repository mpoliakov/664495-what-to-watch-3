import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieCardSmall from './movie-card-small.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

it(`<SmallMovieCard/> should have onMouseEnter(), onMouseLeave(), onClick() handlers`, () => {
  const film = {
    id: 1,
    name: `Alien`,
    previewImage: `img/alien.jpg`,
    previewVideoLink: `https://movies.com/alien.ogv.360p.webm`
  };

  const onMouseEnter = jest.fn();
  const onMouseLeave = jest.fn();

  const component = shallow(<MovieCardSmall film={film} renderVideoPlayer={() => {}} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}/>);

  const movieCardEl = component.find(`.small-movie-card`);
  movieCardEl.simulate(`MouseEnter`);
  expect(onMouseEnter.mock.calls.length).toBe(1);
});
