import React from 'react';
import PropTypes from 'prop-types';
import MovieReview from '../movie-review/movie-review.jsx';

const MovieCardReviews = ({film}) => (
  <div className="movie-card__reviews movie-card__row">
    <div className="movie-card__reviews-col">
      {film.reviews.slice(0, 3).map((review) => (<MovieReview key={review.id} review={review}/>))}
    </div>
    {film.reviews.length > 3 && <div className="movie-card__reviews-col">
      {film.reviews.slice(3, 6).map((review) => (<MovieReview key={review.id} review={review}/>))}
    </div>}
  </div>
);

MovieCardReviews.propTypes = {
  film: PropTypes.shape({
    reviews: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired
    }))
  })
};

export default MovieCardReviews;
