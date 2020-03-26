import React from 'react';
import PropTypes from 'prop-types';
import {convertScoreToGrade} from '../../utils';

const MovieCardOverview = ({film}) => (
  <React.Fragment>
    <div className="movie-rating">
      <div className="movie-rating__score">{film.rating}</div>
      <p className="movie-rating__meta">
        <span className="movie-rating__level">{convertScoreToGrade(film.rating)}</span>
        <span className="movie-rating__count">{film.scoresCount} ratings</span>
      </p>
    </div>
    <div className="movie-card__text">
      <div dangerouslySetInnerHTML={{__html: film.description}}></div>
      <p className="movie-card__director"><strong>Director: {film.director}</strong></p>
      <p className="movie-card__starring"><strong>Starring: {film.starring.join(`, `)} and
        other</strong></p>
    </div>
  </React.Fragment>
);

MovieCardOverview.propTypes = {
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
};

export default MovieCardOverview;
