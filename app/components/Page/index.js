/**
 * Contains content for the homepage of the application.
 */

import React from 'react';
// import { Card } from 'material-ui';
import { Card, CardText } from 'material-ui';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

const styles = {
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default class Page extends React.Component {

  componentWillMount() {
    this.props.setPageTitle("Assessment"); // eslint-disable-line
  }

  render() {
    return (
      <div className="assessment">
        <Card style={styles}>
          <CardText>
            <h1> { this.props.params.assessmentId } </h1>
          </CardText>
        </Card>
      </div>
    );
  }
}

Page.propTypes = {
  assessmentId: React.PropTypes.string,
  params: React.PropTypes.any,
};


// <CardHeader
//   title={<FormattedMessage {...messages.title} />}
//   subtitle={<FormattedMessage {...messages.subtitle} />}
// />
// <CardText>
//   <FormattedMessage {...messages.header} />
//   <br />
//   <br />
//   <FormattedMessage {...messages.footer} />
// </CardText>
