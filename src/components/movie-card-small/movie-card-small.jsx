import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class MovieCardSmall extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      film,
      renderVideoPlayer,
      onMouseEnter,
      onMouseLeave,
    } = this.props;

    return <article className="small-movie-card catalog__movies-card" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className="small-movie-card__image">
        {renderVideoPlayer(film)}
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${film.id}`}>{film.name}</Link>
      </h3>
    </article>;
  }
}

MovieCardSmall.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string.isRequired,
  }),
  renderVideoPlayer: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

export default MovieCardSmall;
