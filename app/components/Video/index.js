/* eslint-disable */
/**
 * Video component is a component containing a single video.
 *
 * Bethany Eastman
 */
import React, { PropTypes } from 'react';
import { videos } from 'data/videos';

const style = {
  textAlign: 'center',
};

const getVideoWidth = () => {
  if (window.innerWidth > 1300) {
    return '1200px';
  } else {
    return '100%';
  }
};

export default class Video extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      width: getVideoWidth(),
    };
  }

  /* When component mounts, change app bar to back icon and get the width
     for the video based on device width */
  componentWillMount() {
    this.props.changeIcon('Back', '/videos/');
  }

  componentDidMount() {
    // Add event listener for number of columns when window resizes
    const that = this;
    window.addEventListener(
      'resize',
      function () {
        setTimeout(
          function() {
            if (this.cols != getVideoWidth()) {
              that.setState({ cols: getVideoWidth() });
            }
          }
        , 250);
      }
    );
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
  params: PropTypes.any,
  videoId: PropTypes.string,
};
