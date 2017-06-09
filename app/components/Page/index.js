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

export default class Page extends React.Component {

  /* Change the AppBar title */
  componentWillMount() {
    this.props.setPageTitle("Assessment"); // eslint-disable-line
    this.props.changeIcon('Back', '/assessment'); // eslint-disable-line
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
        assessment = <h2>Coming Soon</h2>;
        break;
      case 'depression':
        assessment = <h2>Coming Soon</h2>;
        break;
      case 'sleep':
        assessment = <h2>Coming Soon</h2>;
        break;
      case 'pts':
        assessment = <h2>Coming Soon</h2>;
        break;
      case 'stress':
        assessment = <h2>Coming Soon</h2>;
        break;
      case 'stigma':
        assessment = <h2>Coming Soon</h2>;
        break;
      default:
        assessment = <h2>Coming Soon</h2>;
        break;
    }

    return (
      <div className="assessment">
        <Card style={styles}>
          <CardText>
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
