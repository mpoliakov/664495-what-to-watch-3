import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SmallMovieCard from './small-movie-card.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

it(`<SmallMovieCard/> should have onClick() handler`, () => {
  const film = {
    id: `018a1a1e-8755-4c4f-87fd-08df55da6771`,
    title: `Alien`
  };

  const onMovieCardClick = jest.fn();

  const component = shallow(<SmallMovieCard film={film} onMovieCardClick={onMovieCardClick} />);
  component.find(`.small-movie-card`).props().onClick();

  expect(onMovieCardClick.mock.calls.length).toBe(1);
});
