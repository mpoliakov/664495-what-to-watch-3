import React from "react";
import renderer from "react-test-renderer";
import SmallMovieCard from "./small-movie-card.jsx";

it(`SmallMovieCard is rendered correctly`, () => {
  const film = {
    title: `Alien`
  };

  const component = renderer.create(<SmallMovieCard film={film} />).toJSON();

  expect(component).toMatchSnapshot();
});
