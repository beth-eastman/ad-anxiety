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

// TODO: make list responsive
export default class VideosPage extends React.Component {

  /* Change the AppBar title */
  componentWillMount() {
    this.props.setPageTitle("Videos"); // eslint-disable-line
    this.props.changeIcon('Home'); // eslint-disable-line
  }

  /* Render a list of all videos contaning an image and video title */
  render() {
    return (
      <div style={styles.root}>
        <GridList
          cols={1}
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
