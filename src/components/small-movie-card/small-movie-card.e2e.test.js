import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SmallMovieCard from './small-movie-card.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

it(`<SmallMovieCard/> should have onMouseEnter(), onMouseLeave(), onClick() handlers`, () => {
  const film = {
    id: `018a1a1e-8755-4c4f-87fd-08df55da6771`,
    title: `Alien`,
    imageUrl: `img/alien.jpg`,
    videoUrl: `https://movies.com/alien.ogv.360p.webm`
  };

  const onMovieCardClick = jest.fn();
  const onMouseEnter = jest.fn();
  const onMouseLeave = jest.fn();

  const component = shallow(<SmallMovieCard film={film} renderVideoPlayer={() => {}} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onMovieCardClick={onMovieCardClick} />);

  const movieCardEl = component.find(`.small-movie-card`);

  movieCardEl.props().onClick();
  expect(onMovieCardClick.mock.calls.length).toBe(1);

  movieCardEl.simulate(`MouseEnter`);
  expect(onMouseEnter.mock.calls.length).toBe(1);
});
