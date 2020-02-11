import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import promoFilm from './mocks/promo-film';
import genres from './mocks/genres';
import films from './mocks/films';

ReactDOM.render(<App promoFilm={promoFilm} genres={genres} films={films} />, document.getElementById(`root`));

