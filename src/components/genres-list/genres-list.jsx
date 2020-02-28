import React from 'react';
import PropTypes from 'prop-types';

const GenresList = (props) => {
  const {
    genres,
    activeGenre,
    onGenreClick
  } = props;

  return <ul className="catalog__genres-list">
    <li className={!activeGenre ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`}>
      <a href="#" className="catalog__genres-link" onClick={() => onGenreClick(``)}>All genres</a>
    </li>
    {genres.map((genre, i) => <li key={`genre-id-${i}`} className={genre === activeGenre ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`}>
      <a href="#" className="catalog__genres-link" onClick={() => onGenreClick(genre)}>{genre}</a>
    </li>)}
  </ul>;
};

GenresList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string),
  activeGenre: PropTypes.string,
  onGenreClick: PropTypes.func.isRequired
};

export default GenresList;
