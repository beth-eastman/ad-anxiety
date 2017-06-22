 /* eslint-disable */
 /*
  * index.js - Video
  * Video component is a component containing a single video.
  *
  * Created by Bethany Eastman on 06/21/17.
  *
  * AD Anxiety
  *
  * Copyright © 2009-2017 United States Government as represented by
  * the Chief Information Officer of the National Center for Telehealth
  * and Technology. All Rights Reserved.
  *
  * Copyright © 2009-2017 Contributors. All Rights Reserved.
  *
  * THIS OPEN SOURCE AGREEMENT ("AGREEMENT") DEFINES THE RIGHTS OF USE,
  * REPRODUCTION, DISTRIBUTION, MODIFICATION AND REDISTRIBUTION OF CERTAIN
  * COMPUTER SOFTWARE ORIGINALLY RELEASED BY THE UNITED STATES GOVERNMENT
  * AS REPRESENTED BY THE GOVERNMENT AGENCY LISTED BELOW ("GOVERNMENT AGENCY").
  * THE UNITED STATES GOVERNMENT, AS REPRESENTED BY GOVERNMENT AGENCY, IS AN
  * INTENDED THIRD-PARTY BENEFICIARY OF ALL SUBSEQUENT DISTRIBUTIONS OR
  * REDISTRIBUTIONS OF THE SUBJECT SOFTWARE. ANYONE WHO USES, REPRODUCES,
  * DISTRIBUTES, MODIFIES OR REDISTRIBUTES THE SUBJECT SOFTWARE, AS DEFINED
  * HEREIN, OR ANY PART THEREOF, IS, BY THAT ACTION, ACCEPTING IN FULL THE
  * RESPONSIBILITIES AND OBLIGATIONS CONTAINED IN THIS AGREEMENT.
  *
  * Government Agency: The National Center for Telehealth and Technology
  * Government Agency Original Software Designation: ProductName001
  * Government Agency Original Software Title: ProductName
  * User Registration Requested. Please send email
  * with your contact information to: robert.a.kayl.civ@mail.mil
  * Government Agency Point of Contact for Original Software: robert.a.kayl.civ@mail.mil
  *
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
