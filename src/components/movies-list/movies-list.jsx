import React from 'react';
import PropTypes from 'prop-types';
import MovieCardSmall from '../movie-card-small/movie-card-small.jsx';
import withActiveState from '../../hocs/with-active-state/with-active-state.jsx';
import withVideoPlayer from '../../hocs/with-video-player/with-video-player.jsx';

const MovieCardWithPlayer = withActiveState(withVideoPlayer(MovieCardSmall));

const MoviesList = (props) => {
  const {
    films,
  } = props;

  if (!films || !films.length) {
    return null;
  }

  return <div className="catalog__movies-list">
    {films.map((film) => <MovieCardWithPlayer key={film.id} film={film}/>)}
  </div>;
};

MoviesList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired
  }))
};

export default MoviesList;
