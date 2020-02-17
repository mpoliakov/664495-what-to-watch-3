import React from 'react';
import PropTypes from 'prop-types';
import SmallMovieCard from '../small-movie-card/small-movie-card.jsx';

const MoviesList = (props) => {
  const {
    films,
    onMovieCardClick
  } = props;

  return <div className="catalog__movies-list">
    {films.map((film) => <SmallMovieCard key={film.id} film={film} onMovieCardClick={onMovieCardClick}/>)}
  </div>;
};

MoviesList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string
  })),
  onMovieCardClick: PropTypes.func.isRequired
};

export default MoviesList;
