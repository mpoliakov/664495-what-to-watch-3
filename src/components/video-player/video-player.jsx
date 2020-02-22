import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();
    this._sourceRef = createRef();
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

    const source = this._sourceRef.current;
    if (film.videoUrl) {
      source.src = film.videoUrl;
      const type = film.videoUrl.split(`.`)[film.videoUrl.split(`.`).length - 1];
      source.type = `video/${type}`;
    }
  }

  render() {
    const {isPlaying} = this.props;

    const video = this._videoRef.current;

    if (video) {
      if (isPlaying) {
        video.play();
      } else {
        video.pause();
        video.load(); // reset and show poster
      }
    }

    return <video ref={this._videoRef}>
      <source ref={this._sourceRef}/>
    </video>;
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
