import React from 'react';
import PropTypes from 'prop-types';
import {MovieCardTabs} from '../../utils';
import MovieNav from '../movie-nav/movie-nav.jsx';
import MovieCardOverview from '../movie-card-overview/movie-card-overview.jsx';
import MovieCardDetails from '../movie-card-details/movie-card-details.jsx';
import MovieCardReviews from '../movie-card-reviews/movie-card-reviews.jsx';

const MovieCardDesc = (props) => {
  const {
    film,
    reviews,
    activeItem,
    onActivate
  } = props;

  if (!film) {
    return null;
  }

  const _renderTab = () => {
    switch (activeItem) {
      case MovieCardTabs.OVERVIEW:
        return <MovieCardOverview film={film}/>;
      case MovieCardTabs.DETAILS:
        return <MovieCardDetails film={film}/>;
      case MovieCardTabs.REVIEWS:
        return <MovieCardReviews reviews={reviews}/>;
      default:
        return null;
    }
  };

  return <React.Fragment>
    <MovieNav mix={`movie-card__nav`} activeTab={activeItem} onTabClick={onActivate}/>
    {_renderTab()}
  </React.Fragment>;
};

MovieCardDesc.propTypes = {
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
  activeItem: PropTypes.string.isRequired,
  onActivate: PropTypes.func.isRequired
};

export default MovieCardDesc;
