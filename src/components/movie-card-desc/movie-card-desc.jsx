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
    activeTab,
    onTabClick
  } = props;

  const _renderTab = () => {
    switch (activeTab) {
      case MovieCardTabs.OVERVIEW:
        return <MovieCardOverview film={film}/>;
      case MovieCardTabs.DETAILS:
        return <MovieCardDetails film={film}/>;
      case MovieCardTabs.REVIEWS:
        return <MovieCardReviews film={film}/>;
      default:
        return null;
    }
  };

  return <React.Fragment>
    <MovieNav mix={`movie-card__nav`} activeTab={activeTab} onTabClick={onTabClick}/>
    {_renderTab()}
  </React.Fragment>;
};

MovieCardDesc.propTypes = {
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
  }),
  activeTab: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired
};

export default MovieCardDesc;
