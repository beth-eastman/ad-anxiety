/**
 * VideoPage contains a list of thumbnails & titles to videos the user can view.
 * Selecting a video in the list will direct the user to the page containg
 * that video.
 */
import React from 'react';
import { GridList, GridTile } from 'material-ui';
import { browserHistory } from 'react-router';
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
    this.props.setPageTitle("Videos"); // eslint-disable-line
    this.props.changeIcon('Home'); // eslint-disable-line

    // Add event listener for number of columns when window resizes
    const that = this;
    window.addEventListener('resize', function () {               // eslint-disable-line
      that.setState({ cols: getCols(window.innerWidth) });
    });
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
                browserHistory.push('/videos/'.concat(video.id));
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
