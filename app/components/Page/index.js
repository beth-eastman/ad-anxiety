/**
 * Contains content for the homepage of the application.
 */

import React from 'react';
import { Card, CardText } from 'material-ui';

const styles = {
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default class Page extends React.Component {

  /* Change the AppBar title */
  componentWillMount() {
    this.props.setPageTitle("Assessment"); // eslint-disable-line
    this.props.changeIcon('Back', '/assessment'); // eslint-disable-line
  }

  render() {
    return (
      <div className="assessment">
        <Card style={styles}>
          <CardText>
            { this.props.params.assessmentId } to be added
          </CardText>
        </Card>
      </div>
    );
  }
}

/* What proptypes to expect */
Page.propTypes = {
  assessmentId: React.PropTypes.string,
  params: React.PropTypes.any,
};
