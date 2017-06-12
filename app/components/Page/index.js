/* eslint-disable */
/**
 * Page of an assessment, uses Jack Lightfoot's npm module contatining
 * different T2 Assessments
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
            Placeholder assessments to demo T2 npm module
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
