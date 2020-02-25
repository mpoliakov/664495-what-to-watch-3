import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();

    this.state = {
      isPlaying: props.isPlaying
    };

    this._handleLoadStart = this._handleLoadStart.bind(this);
    this._handlePlay = this._handlePlay.bind(this);
  }

  componentDidMount() {
    const {
      film,
      muted = true,
      width = 280,
      height = 175
    } = this.props;

    const video = this._videoRef.current;
    video.poster = film.imageUrl;
    video.muted = muted;
    video.width = width;
    video.height = height;

    if (film.videoUrl) {
      video.src = film.videoUrl;
    }
  }

  componentDidUpdate() {
    const {isPlaying} = this.props;
    const video = this._videoRef.current;

    if (video) {
      if (isPlaying) {
        video.play();
      } else {
        video.load(); // reset and show poster
      }
    }
  }

  _handleLoadStart() {
    this.setState({
      isPlaying: false
    });
  }

  _handlePlay() {
    this.setState({
      isPlaying: true
    });
  }

  render() {
    return <video ref={this._videoRef} onLoadStart={this._handleLoadStart} onPlay={this._handleOnPlay}/>;
  }
}

VideoPlayer.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    videoUrl: PropTypes.string
  }),
  isPlaying: PropTypes.bool,
  muted: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number
};

export default VideoPlayer;
