import React from 'react';
import PropTypes from 'prop-types';

const GenresList = (props) => {
  const {
    items,
    activeItem,
    onActivate,
    onGenreChange
  } = props;

  const handleClick = (genre = null) => {
    onActivate(genre);
    onGenreChange(genre);
  };

  return <ul className="catalog__genres-list">
    <li className={!activeItem ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`}>
      <a href="#" className="catalog__genres-link" onClick={() => handleClick()}>All genres</a>
    </li>
    {items.map((genre, i) => <li key={`genre-id-${i}`} className={genre === activeItem ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`}>
      <a href="#" className="catalog__genres-link" onClick={() => handleClick(genre)}>{genre}</a>
    </li>)}
  </ul>;
};

GenresList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  activeItem: PropTypes.string,
  onActivate: PropTypes.func.isRequired,
  onGenreChange: PropTypes.func.isRequired,
};

export default GenresList;
