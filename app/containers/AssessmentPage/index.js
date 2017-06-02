/**
 * AssessmentPage contains a list of assessments where each list item directs to
 * a specific page containing that assessment.
 *
 * Bethany Eastman
 */
import React from 'react';
import { GridList, GridTile } from 'material-ui';
import { browserHistory } from 'react-router';
import { assessments } from 'data/assessments';


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
export default class AssessmentPage extends React.Component {     //eslint-disable-line

  /* Change AppBar title */
  componentWillMount() {
    this.props.setPageTitle("Assessments"); // eslint-disable-line
    this.props.changeIcon('Home'); // eslint-disable-line
  }

  /* Create a list for each assessment, where each list item contains a link
   * to the corresponding assessment page  */
  render() {
    return (
      <div style={styles.root}>
        <GridList
          style={styles.gridList}
          cols={1}
        >
          {assessments.map((tile) => (
            <GridTile
              key={tile.title}
              title={tile.title}
              onTouchTap={() => {
                browserHistory.push('/assessment/'.concat(tile.id).concat('-assessment'));
              }}
            >
              <img src={tile.img} alt={tile.title} />
            </GridTile>
          ))}
        </GridList>
      </div>
    );
  }
}
