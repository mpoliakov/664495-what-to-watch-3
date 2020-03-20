import React from 'react';
import PropTypes from 'prop-types';
import MovieReview from '../movie-review/movie-review.jsx';

const MovieCardReviews = ({reviews}) => {
  if (!reviews || !reviews.length) {
    return null;
  }

  return <div className="movie-card__reviews movie-card__row">
    <div className="movie-card__reviews-col">
      {reviews.slice(0, 3).map((review) => (<MovieReview key={review.id} review={review}/>))}
    </div>
    {reviews.length > 3 && <div className="movie-card__reviews-col">
      {reviews.slice(3, 6).map((review) => (<MovieReview key={review.id} review={review}/>))}
    </div>}
  </div>;
};

MovieCardReviews.propTypes = {
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

export default MovieCardReviews;
