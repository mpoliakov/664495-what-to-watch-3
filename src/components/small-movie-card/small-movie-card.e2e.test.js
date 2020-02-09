import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SmallMovieCard from "./small-movie-card.jsx";

Enzyme.configure({
  adapter: new Adapter()
});

it(`SmallMovieCard should have onClick handler`, () => {
  const onMovieCardClick = jest.fn();

  const film = {
    title: `Alien`
  };

  const component = shallow(<SmallMovieCard film={film} onMovieCardClick={onMovieCardClick} />);
  component.find(`.small-movie-card`).props().onClick();

  expect(onMovieCardClick.mock.calls.length).toBe(1);
});
