/* eslint-disable */
/**
 * AssessmentPage contains a list of assessments where each list item directs to
 * a specific page containing that assessment.
 *
 * Bethany Eastman
 */
import React from 'react';
import { GridList, GridTile } from 'material-ui';
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

export default class AssessmentPage extends React.Component {

  /* Set number of columns */
  constructor(props) {
    super(props);

    this.state = {
      cols: getCols(window.innerWidth),
    };
  }

  /* Change AppBar title */
  componentWillMount() {
    this.props.setPageTitle("Assessments");
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

  componentWillUnmount() {}

  /* Create a list for each assessment, where each list item contains a link
   * to the corresponding assessment page  */
  render() {
    return (
      <div style={styles.root}>
        <GridList
          style={styles.gridList}
          cols={this.state.cols}
        >
          {assessments.map((tile) => (
            <GridTile
              key={tile.title}
              title={tile.title}
              onTouchTap={() => {
                this.props.router.push('/assessment/'.concat(tile.id));
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
