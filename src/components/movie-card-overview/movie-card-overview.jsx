import React from 'react';
import PropTypes from 'prop-types';
import {convertScoreToGrade} from '../../utils';

const MovieCardOverview = ({film}) => (
  <React.Fragment>
    <div className="movie-rating">
      <div className="movie-rating__score">{film.rating.score}</div>
      <p className="movie-rating__meta">
        <span className="movie-rating__level">{convertScoreToGrade(film.rating.score)}</span>
        <span className="movie-rating__count">{film.rating.count} ratings</span>
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
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    rating: PropTypes.exact({
      score: PropTypes.number,
      count: PropTypes.number
    })
  })
};

export default MovieCardOverview;
