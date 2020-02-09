import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from "prop-types";

const App = (props) => {
  const {data} = props;

  return <Main data={data} />;
};

App.propTypes = {
  data: PropTypes.shape({
    genres: PropTypes.arrayOf(PropTypes.string),
    films: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })),
    promoFilm: PropTypes.exact({
      title: PropTypes.string.isRequired,
      meta: PropTypes.exact({
        genre: PropTypes.string.isRequired,
        releaseYear: PropTypes.number.isRequired
      })
    })
  })
};

export default App;
