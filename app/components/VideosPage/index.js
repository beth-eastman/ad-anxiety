 /* eslint-disable */
 /*
  * index.js - VideoPage
  * VideoPage contains a list of thumbnails & titles to videos the user can view.
  * Selecting a video in the list will direct the user to the page containg
  * that video.
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
import React from 'react';
import { GridList, GridTile } from 'material-ui';
import { videos } from 'data/videos';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  gridList: {
    overflowY: 'auto',
  },
};

// Get number of columns needed for responsive grid list
const getCols = (width) => {
  if (!width) {
    return 1;
  } else if (width > 1280) {
    return 4;
  } else if (width > 900) {
    return 3;
  } else if (width > 600) {
    return 2;
  }
  return 1;
};

export default class VideosPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      cols: getCols(window.innerWidth),
    };
  }

  /* Change the AppBar title */
  componentWillMount() {
    this.props.setPageTitle("Videos");
    this.props.changeIcon('Home');
  }

  componentDidMount() {
    // Add event listener for number of columns when window resizes
    const that = this;
    window.addEventListener(
      'resize',
      function () {
        setTimeout(
          function() {
            that.setState({ cols: getCols(window.innerWidth) });
          }
        , 250);
      }
    );
  }

  /* Render a list of all videos contaning an image and video title */
  render() {
    return (
      <div style={styles.root}>
        <GridList
          cols={this.state.cols}
          style={styles.gridList}
        >
          {videos.map((video) => (
            <GridTile
              key={video.id}
              title={video.title}
              actionPosition="right"
              onTouchTap={() => {
                this.props.router.push('/videos/'.concat(video.id));
              }}
            >
              <img src={video.poster} alt={video.title} />
            </GridTile>
          ))}
        </GridList>
      </div>
    );
  }
}
