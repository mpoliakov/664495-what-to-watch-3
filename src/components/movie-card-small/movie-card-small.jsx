import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {ActionCreator} from '../../reducer/film/reducer';

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
      handleLinkClick,
    } = this.props;

    return <article className="small-movie-card catalog__movies-card" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className="small-movie-card__image">
        {renderVideoPlayer(film)}
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${film.id}`} onClick={() => handleLinkClick(film)}>{film.name}</Link>
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
  handleLinkClick: PropTypes.func
};

const mapDispatchToProps = (dispatch) => ({
  handleLinkClick: (film) => {
    dispatch(ActionCreator.loadFilm(film));
  }
});

export {MovieCardSmall};
export default connect(null, mapDispatchToProps)(MovieCardSmall);
