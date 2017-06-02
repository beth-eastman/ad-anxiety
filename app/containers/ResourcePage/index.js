/**
 * Contains a list of different resource pages (Links, Books, Articles, and Facts).
 *
 * Bethany Eastman
 */
import React from 'react';
import { Card, List, ListItem } from 'material-ui';
import { browserHistory } from 'react-router';

export default class ResourcePage extends React.Component {

  /* Change AppBar title */
  componentWillMount() {
    this.props.setPageTitle("Resources"); // eslint-disable-line
    this.props.changeIcon('Home'); // eslint-disable-line
  }

  /* Create a list of resources that directs the user to the corresponding content
   * page when selected */
  render() {
    return (
      <Card>
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
