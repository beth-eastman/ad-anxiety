/**
 * The HomePage component contains for the homepage of the application.
 *
 * Bethany Eastman
 */
import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const styles = {
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default class HomePage extends React.Component {

  /* Change the AppBar title */
  componentWillMount() {
    this.props.setPageTitle("Home"); // eslint-disable-line
    this.props.changeIcon('Home'); // eslint-disable-line
  }

  render() {
    return (
      <div className="homepage">
        <Card style={styles}>
          <CardHeader
            title={<FormattedMessage {...messages.title} />}
            subtitle={<FormattedMessage {...messages.subtitle} />}
          />
          <CardText>
            <FormattedMessage {...messages.header} />
            <br />
            <br />
            <FormattedMessage {...messages.footer} />
          </CardText>
        </Card>
      </div>
    );
  }
}
