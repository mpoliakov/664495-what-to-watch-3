import React from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../../components/video-player/video-player.jsx';

const withVideoPlayer = (Component) => {
  class WithVideoPlayer extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        timerId: null
      };

      this._handleMouseEnter = this._handleMouseEnter.bind(this);
      this._handleMouseLeave = this._handleMouseLeave.bind(this);
    }

    _handleMouseEnter() {
      const {
        film,
        onActivate
      } = this.props;

      const timerId = setTimeout(() => {
        onActivate(film.id);
      }, 1000);

      this.setState({
        timerId
      });
    }

    _handleMouseLeave() {
      const {onDeactivate} = this.props;

      onDeactivate();

      clearTimeout(this.state.timerId);

      this.setState({
        timerId: null,
      });
    }

    render() {
      const {activeItem} = this.props;

      return <Component
        {...this.props}
        renderVideoPlayer={(film) => <VideoPlayer film={film} isPlaying={activeItem === film.id} witdth={280} height={175} muted={true}/>}
        onMouseEnter={this._handleMouseEnter}
        onMouseLeave={this._handleMouseLeave}
      />;
    }
  }

  WithVideoPlayer.propTypes = {
    film: PropTypes.shape({
      id: PropTypes.string.isRequired
    }),
    activeItem: PropTypes.any,
    onActivate: PropTypes.func.isRequired,
    onDeactivate: PropTypes.func.isRequired
  };

  return WithVideoPlayer;
};

export default withVideoPlayer;
