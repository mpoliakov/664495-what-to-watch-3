import React from 'react';
import PropTypes from 'prop-types';
import PageHeader from '../page-header/page-header.jsx';

const MovieCard = (props) => {
  const {film} = props;

  return <section className="movie-card">
    <div className="movie-card__bg">
      <img src={film.imageUrl} alt={film.title} />
    </div>
    <PageHeader mix={`movie-card__head`}/>
    <div className="movie-card__wrap">
      <div className="movie-card__info">
        <div className="movie-card__poster">
          <img src={film.posterUrl} alt={film.title + ` poster`} width="218" height="327" />
        </div>
        <div className="movie-card__desc">
          <h2 className="movie-card__title">{film.title}</h2>
          <p className="movie-card__meta">
            <span className="movie-card__genre">{film.meta.genre}</span>
            <span className="movie-card__year">{film.meta.releaseYear}</span>
          </p>
          <div className="movie-card__buttons">
            <button className="btn btn--play movie-card__button" type="button">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            <button className="btn btn--list movie-card__button" type="button">
              <svg viewBox="0 0 19 20" width="19" height="20">
                <use xlinkHref="#add"></use>
              </svg>
              <span>My list</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>;
};

MovieCard.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    posterUrl: PropTypes.string,
    meta: PropTypes.exact({
      genre: PropTypes.string.isRequired,
      releaseYear: PropTypes.number.isRequired
    })
  })
};

export default MovieCard;
