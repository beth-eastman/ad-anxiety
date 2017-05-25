/* eslint-disable */

/**
 * Contains video contents of the application.
 */

import React from 'react';
import { GridList, GridTile } from 'material-ui';
import { browserHistory } from 'react-router';

// images and icons
import UnderstandingAnxiety from 'components/img/anxiety-understanding-anxiety.jpg';
import AnxietyTreatment from 'components/img/anxiety-types-of-anxiety.jpg';
import TreatmentOptions from 'components/img/anxiety-treatment-options.jpg';
import RecognizingTrigers from 'components/img/anxiety-recognizing-triggers.jpg';
import BackInControl from 'components/img/anxiety-back-in-control.jpg';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  gridList: {
    overflowY: 'auto',
  },
};

const videos = [
  {
    id: 'understand-anxiety',
    title: 'Understanding Anxiety',
    src: UnderstandingAnxiety,
  },
  {
    id: 'types-of-anxiety',
    title: 'Types of Anxiety',
    src: AnxietyTreatment,
  },
  {
    id: 'recognizing-triggers',
    title: 'Recognizing Triggers',
    src: RecognizingTrigers,
  },
  {
    id: 'treatment-options',
    title: 'Treatment Options',
    src: TreatmentOptions,
  },
  {
    id: 'back-in-control',
    title: 'Back In Control',
    src: BackInControl,
  },
  {
    id: 'reduce-stress',
    title: 'Reduce Stress',
    src: 'https://brightcove04pmdo-a.akamaihd.net/923136676001/923136676001_3682877795001_vs-53c95f12e4b0afffb80dc10d-782203291001.jpg?pubId=923136676001&videoId=3682799653001',
  },
];

export default class VideosPage extends React.Component {

  componentWillMount() {
    this.props.setPageTitle("Videos"); // eslint-disable-line
  }

  render() {
    return (
      <div style={styles.root}>
        <GridList
          cols={1}
          style={styles.gridList}
        >
          {videos.map((tile) => (
            <GridTile
              key={tile.title}
              title={tile.title}
              actionPosition="right"
              onTouchTap={() => {
                browserHistory.push('/videos/'.concat(tile.id));
              }}
            >
              <img src={tile.src} alt={tile.title} />
            </GridTile>
          ))}
        </GridList>
      </div>
    );
  }
}
