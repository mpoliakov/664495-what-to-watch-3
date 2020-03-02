import React from 'react';
import PropTypes from 'prop-types';
import PageHeader from '../page-header/page-header.jsx';
import {MovieCardTabs} from '../../utils';
import withActiveTab from '../../hocs/with-active-tab/with-active-tab.jsx';
import MovieCardDesc from '../movie-card-desc/movie-card-desc.jsx';

const MovieCardDescWrapped = withActiveTab(MovieCardDesc, MovieCardTabs.OVERVIEW);

const MovieCardFull = ({film}) => (
  <section className="movie-card movie-card--full">
    <div className="movie-card__hero">
      <div className="movie-card__bg">
        <img src={film.imageUrl} alt={film.title}/>
      </div>
      <PageHeader mix={`movie-card__head`}/>
      <div className="movie-card__wrap">
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
            <a href="add-review.html" className="btn movie-card__button">Add review</a>
          </div>
        </div>
      </div>
    </div>
    <div className="movie-card__wrap movie-card__translate-top">
      <div className="movie-card__info">
        <div className="movie-card__poster movie-card__poster--big">
          <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218"
            height="327"/>
        </div>
        <div className="movie-card__desc">
          <MovieCardDescWrapped film={film}/>
        </div>
      </div>
    </div>
  </section>
);

MovieCardFull.propTypes = {
  film: PropTypes.exact({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    posterUrl: PropTypes.string,
    videoUrl: PropTypes.string,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    runTime: PropTypes.string,
    meta: PropTypes.exact({
      genre: PropTypes.string.isRequired,
      releaseYear: PropTypes.number.isRequired
    }),
    rating: PropTypes.exact({
      score: PropTypes.number,
      count: PropTypes.number
    }),
    reviews: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired
    }))
  })
};

export default MovieCardFull;
