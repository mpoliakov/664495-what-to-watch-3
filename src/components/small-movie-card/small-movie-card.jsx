import React from 'react';
import PropTypes from 'prop-types';

class SmallMovieCard extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      film,
      renderVideoPlayer,
      onMovieCardClick,
      onMouseEnter,
      onMouseLeave
    } = this.props;

    return <article className="small-movie-card catalog__movies-card" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={() => onMovieCardClick(film)}>
      <div className="small-movie-card__image">
        {renderVideoPlayer(film)}
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{film.title}</a>
      </h3>
    </article>;
  }
}

SmallMovieCard.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    videoUl: PropTypes.string
  }),
  renderVideoPlayer: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onMovieCardClick: PropTypes.func
};

export default SmallMovieCard;
