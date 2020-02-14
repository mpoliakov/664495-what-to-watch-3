import React from 'react';
import PropTypes from 'prop-types';

const SmallMovieCard = (props) => {
  const {
    film,
    onMovieCardHover
  } = props;

  return <article className="small-movie-card catalog__movies-card" onMouseOver={() => onMovieCardHover(film)}>
    <div className="small-movie-card__image">
      <img src={film.imageUrl} alt={film.title} width="280" height="175"/>
    </div>
    <h3 className="small-movie-card__title">
      <a className="small-movie-card__link" href="movie-page.html">{film.title}</a>
    </h3>
  </article>;
};

SmallMovieCard.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string
  }),
  onMovieCardHover: PropTypes.func
};

export default SmallMovieCard;
