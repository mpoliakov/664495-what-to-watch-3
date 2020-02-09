import React from "react";
import renderer from "react-test-renderer";
import MoviesList from "./movies-list.jsx";

it(`MoviesList is rendered correctly`, () => {
  const films = [{
    id: `2fc32fa3-e5d4-4e7d-8f58-397cc8c9bba7`,
    title: `Alien`
  },
  {
    id: `7c8b88b2-091b-4cd1-9589-3c88b77a9104`,
    title: `Home alone`
  }];

  const component = renderer.create(<MoviesList films={films} />).toJSON();

  expect(component).toMatchSnapshot();
});
