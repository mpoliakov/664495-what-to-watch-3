import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SmallMovieCard from './small-movie-card.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

it(`SmallMovieCard should have onMouseOver handler`, () => {
  const onMovieCardHover = jest.fn();

  const film = {
    title: `Alien`
  };

  const component = shallow(<SmallMovieCard film={film} onMovieCardHover={onMovieCardHover} />);
  component.find(`.small-movie-card`).simulate(`mouseOver`);

  expect(onMovieCardHover.mock.calls.length).toBe(1);
});
