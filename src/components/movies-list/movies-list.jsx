import React from 'react';
import PropTypes from 'prop-types';
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";

const MoviesList = (props) => {
  const {films} = props;

  return <div className="catalog__movies-list">
    {films.map((film) => <SmallMovieCard key={film.id} film={film}/>)}
  </div>;
};

MoviesList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }))
};

export default MoviesList;
