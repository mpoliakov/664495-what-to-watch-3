import React from 'react';
import PropTypes from 'prop-types';
import PageHeader from '../page-header/page-header.jsx';
import {MovieCardTabs} from '../../utils';
import withActiveState from '../../hocs/with-active-state/with-active-state.jsx';
import MovieCardDesc from '../movie-card-desc/movie-card-desc.jsx';

const MovieCardDescWrapped = withActiveState(MovieCardDesc, MovieCardTabs.OVERVIEW);

const MovieCardFull = (props) => {
  const {
    film,
    reviews
  } = props;

  if (!film) {
    return null;
  }

  return <section className="movie-card movie-card--full">
    <div className="movie-card__hero">
      <div className="movie-card__bg">
        <img src={film.backgroundImage} alt={film.name}/>
      </div>
      <PageHeader mix={`movie-card__head`}/>
      <div className="movie-card__wrap">
        <div className="movie-card__desc">
          <h2 className="movie-card__title">{film.name}</h2>
          <p className="movie-card__meta">
            <span className="movie-card__genre">{film.genre}</span>
            <span className="movie-card__year">{film.released}</span>
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
            <a href="add-review.html" className="btn movie-card__button">Add review</a>
          </div>
        </div>
      </div>
    </div>
    <div className="movie-card__wrap movie-card__translate-top">
      <div className="movie-card__info">
        <div className="movie-card__poster movie-card__poster--big">
          <img src={film.posterImage} alt="The Grand Budapest Hotel poster" width="218" height="327"/>
        </div>
        <div className="movie-card__desc">
          <MovieCardDescWrapped film={film} reviews={reviews}/>
        </div>
      </div>
    </div>
  </section>;
};

MovieCardFull.propTypes = {
  film: PropTypes.shape({
    name: PropTypes.string.isRequired,
    posterImage: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number,
    scoresCount: PropTypes.number,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string),
    runTime: PropTypes.number,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool,
    videoLink: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string.isRequired,
  }),
  reviews: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    user: PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
    rating: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  })),
};

export default MovieCardFull;
