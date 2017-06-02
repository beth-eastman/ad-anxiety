/**
 * A component containing a single video.
 *
 * Bethany Eastman
 */
import React from 'react';
import { videos } from 'data/videos';

export default class Video extends React.Component { // eslint-disable-line

  componentWillMount() {
    this.props.changeIcon('Back', '/videos/'); // eslint-disable-line
  }

  /* Create a video component with the thumbnail and source video */
  render() {
    return (
      <div>
        <video
          width="100%"
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
