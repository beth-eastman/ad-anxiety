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
            primaryText="Links"
            onTouchTap={() => {
              browserHistory.push('/resources/links');
            }}
          />
          <ListItem
            primaryText="Books"
            onTouchTap={() => {
              browserHistory.push('/resources/books');
            }}
          />
          <ListItem
            primaryText="Forum"
            onTouchTap={() => {
              browserHistory.push('/resources/forum');
            }}
          />
          <ListItem
            primaryText="Articles"
            onTouchTap={() => {
              browserHistory.push('/resources/articles');
            }}
          />
          <ListItem
            primaryText="Facts"
            nestedItems={[
              <ListItem
                key={0}
                primaryText="Understanding Anxiety"
                onTouchTap={() => {
                  browserHistory.push('/resources/facts/0');
                }}
              />,
              <ListItem
                key={1}
                primaryText="Managing Anxiety and Worry"
                onTouchTap={() => {
                  browserHistory.push('/resources/facts/1');
                }}
              />,
              <ListItem
                key={2}
                primaryText="Causes of Anxiety"
                onTouchTap={() => {
                  browserHistory.push('/resources/facts/2');
                }}
              />,
            ]}
          />
        </List>
      </Card>
    );
  }
}
