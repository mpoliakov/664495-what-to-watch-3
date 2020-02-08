import React from 'react';
import PropTypes from 'prop-types';

const GenresList = (props) => {
  const {genres} = props;

  return <ul className="catalog__genres-list">
    <li className="catalog__genres-item catalog__genres-item--active">
      <a href="#" className="catalog__genres-link">All genres</a>
    </li>
    {genres.map((genre, i) => <li key={`genre-id-${i}`} className="catalog__genres-item">
      <a href="#" className="catalog__genres-link">{genre}</a>
    </li>)}
  </ul>;
};

GenresList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string)
};

export default GenresList;
