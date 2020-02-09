import React from "react";
import renderer from "react-test-renderer";
import GenresList from "./genres-list.jsx";

it(`GenresList is rendered correctly`, () => {
  const genres = [`Comedies`, `Dramas`, `Sci-Fi`];

  const component = renderer.create(<GenresList genres={genres} />).toJSON();

  expect(component).toMatchSnapshot();
});
