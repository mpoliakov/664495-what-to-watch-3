import React from 'react';
import PropTypes from 'prop-types';

const MovieReview = ({review}) => (
  <div className="review">
    <blockquote className="review__quote">
      <p className="review__text">{review.comment}</p>
      <footer className="review__details">
        <cite className="review__author">{review.user.name}</cite>
        <time className="review__date" dateTime={review.date}>{new Date(review.date).toLocaleDateString(`en-US`, {year: `numeric`, month: `long`, day: `numeric`})}</time>
      </footer>
    </blockquote>
    <div className="review__rating">{review.rating}</div>
  </div>
);

MovieReview.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.number.isRequired,
    user: PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
    rating: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  })
};

export default MovieReview;
