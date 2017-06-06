/**
 * A component containing a single video.
 *
 * Bethany Eastman
 */
import React from 'react';
import { videos } from 'data/videos';

const style = {
  textAlign: 'center',
};

const getVideoWidth = () => {
  if (window.innerWidth > 1300) {
    return '1200px';
  } else {                    // eslint-disable-line
    return '100%';
  }
};

export default class Video extends React.Component { // eslint-disable-line

  constructor(props) {
    super(props);

    this.state = {
      width: getVideoWidth(),
    };
  }

  /* When component mounts, change app bar to back icon and get the width
     for the video based on device width */
  componentWillMount() {
    this.props.changeIcon('Back', '/videos/');        // eslint-disable-line
    const that = this;
    window.addEventListener('resize', function () {  // eslint-disable-line
      that.setState({ width: getVideoWidth() });
    });
  }

  /* Create a video component with the thumbnail and source video */
  render() {
    return (
      <div style={style}>
        <video
          width={this.state.width}
          controls
          poster={videos[this.props.params.videoId].poster}
        >
          <source src={videos[this.props.params.videoId].src} type="video/mp4" />
        </video>
      </div>

    );
  }
}

/* Check for valid prop types */
Video.propTypes = {
  params: React.PropTypes.any,
  videoId: React.PropTypes.string,
};
