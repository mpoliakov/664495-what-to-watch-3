import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

it(`App is rendered correctly`, () => {
  const genres = [`Dramas`, `Horror`, `Kids & Family`];

  const films = [
    {id: `7c8b88b2-091b-4cd1-9589-3c88b77a9104`, title: `Raining Man`},
    {id: `018a1a1e-8755-4c4f-87fd-08df55da6771`, title: `Predator`},
    {id: `2fc32fa3-e5d4-4e7d-8f58-397cc8c9bba7`, title: `Harry Potter`}
  ];

  const promoFilm = {
    title: `Interstellar`,
    meta: {
      genre: `Sci-Fi`,
      releaseYear: 2015
    }
  };

  const component = renderer.create(<App promoFilm={promoFilm} genres={genres} films={films} />).toJSON();

  expect(component).toMatchSnapshot();
});
