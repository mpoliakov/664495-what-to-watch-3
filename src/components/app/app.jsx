import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';

const App = (props) => {
  const {
    promoFilm,
    genres,
    films
  } = props;

  return <Main promoFilm={promoFilm} genres={genres} films={films} />;
};

App.propTypes = {
  promoFilm: PropTypes.exact({
    title: PropTypes.string.isRequired,
    meta: PropTypes.exact({
      genre: PropTypes.string.isRequired,
      releaseYear: PropTypes.number.isRequired
    })
  }),
  genres: PropTypes.arrayOf(PropTypes.string),
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }))
};

export default App;
