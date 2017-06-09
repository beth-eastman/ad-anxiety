/* eslint-disable */
/**
 * Contains content for the homepage of the application.
 */

import React from 'react';
import { Card, CardText } from 'material-ui';
import { assessments } from 'local-t2-assessment-suite';
const { FriendShip, SocialSupport } = assessments;
const styles = {
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

// TODO: Add correct assessments
// TODO: Fix cancel button
export default class Page extends React.Component {

  /* Change the AppBar title */
  componentWillMount() {
    this.props.setPageTitle("Assessment");
    this.props.changeIcon('Back', '/assessment');
  }

  render() {
    let assessment = null;

    switch (this.props.params.assessmentId) {
      case 'anxiety':
        assessment = <FriendShip />;
        break;
      case 'panic':
        assessment = <SocialSupport />;
        break;
      case 'worry':
        assessment = <FriendShip />;
        break;
      case 'depression':
        assessment = <FriendShip />;
        break;
      case 'sleep':
        assessment = <SocialSupport />;
        break;
      case 'pts':
        assessment = <FriendShip />;
        break;
      case 'stress':
        assessment = <SocialSupport />;
        break;
      case 'stigma':
        assessment = <FriendShip />;
        break;
      default:
        assessment = <h4>Assessment not available yet</h4>;
        break;
    }

    return (
      <div className="assessment">
        <Card style={styles}>
          <CardText>
            Demo of npm assessment local-t2-assessment-suite module. Correct
            assessments are currently being completed
            {assessment}
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
