import React from 'react';
import PropTypes from 'prop-types';
import SmallMovieCard from '../small-movie-card/small-movie-card.jsx';
import withVideoPlayer from '../../hocs/with-video-player/with-video-player.jsx';

const MovieCardWithPlayer = withVideoPlayer(SmallMovieCard);

const MoviesList = (props) => {
  const {
    films,
    onMovieCardClick
  } = props;

  return <div className="catalog__movies-list">
    {films.map((film) => <MovieCardWithPlayer key={film.id} film={film} onMovieCardClick={onMovieCardClick}/>)}
  </div>;
};

MoviesList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string
  })),
  onMovieCardClick: PropTypes.func.isRequired
};

export default MoviesList;
