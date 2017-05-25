/**
 * Contains video contents of the application.
 */

import React from 'react';
import { Card, CardHeader, List, ListItem } from 'material-ui';
import { browserHistory } from 'react-router';

export default class ResourcePage extends React.Component {

  componentWillMount() {
    this.props.setPageTitle("Resources"); // eslint-disable-line
  }

  render() {
    return (
      <Card>
        <CardHeader
          title="Resources"
        />
        <List>
          <ListItem
            primaryText="Links & Resources"
            onTouchTap={() => {
              browserHistory.push('/resources/page1');
            }}
          />
          <ListItem
            primaryText="Forum"
            onTouchTap={() => {
              browserHistory.push('/resources/page2');
            }}
          />
          <ListItem
            primaryText="Facts"
            onTouchTap={() => {
              browserHistory.push('/resources/page3');
            }}
          />
          <ListItem
            primaryText="Articles"
            onTouchTap={() => {
              browserHistory.push('/resources/page4');
            }}
          />
        </List>
      </Card>
    );
  }
}
