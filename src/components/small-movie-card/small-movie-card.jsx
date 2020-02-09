import React from 'react';
import PropTypes from 'prop-types';

const SmallMovieCard = (props) => {
  const {
    film,
    onMovieCardClick
  } = props;

  return <article className="small-movie-card catalog__movies-card" onClick={(() => onMovieCardClick(film))}>
    <div className="small-movie-card__image">
      <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt={film.title} width="280" height="175"/>
    </div>
    <h3 className="small-movie-card__title">
      <a className="small-movie-card__link" href="movie-page.html">{film.title}</a>
    </h3>
  </article>;
};

SmallMovieCard.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired
  }),
  onMovieCardClick: PropTypes.func
};

export default SmallMovieCard;
