import React from 'react';
import VideoPlayer from '../../components/video-player/video-player.jsx';

const withVideoPlayer = (Component) => {
  return class WithVideoPlayer extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        timerId: null,
        active: false
      };

      this._handleMouseEnter = this._handleMouseEnter.bind(this);
      this._handleMouseLeave = this._handleMouseLeave.bind(this);
    }

    _handleMouseEnter() {
      const timerId = setTimeout(() => {
        this.setState({
          active: true
        });
      }, 1000);

      this.setState({
        timerId
      });
    }

    _handleMouseLeave() {
      clearTimeout(this.state.timerId);

      this.setState({
        timerId: null,
        active: false
      });
    }

    render() {
      const {active} = this.state;

      return <Component
        {...this.props}
        renderVideoPlayer={(film) => <VideoPlayer film={film} isPlaying={active} witdth={280} height={175} muted={true}/>}
        onMouseEnter={this._handleMouseEnter}
        onMouseLeave={this._handleMouseLeave}
      />;
    }
  };
};

export default withVideoPlayer;
