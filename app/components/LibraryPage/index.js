/**
 * LibraryPage contains the list of sections for library content. The List
 * will provide links for the user to view content on that secition.
 *
 * Bethany Eastman
 */

import React from 'react';
import { Card, List, ListItem } from 'material-ui';
import { browserHistory } from 'react-router';
import { library } from 'data/library';

export default class LibraryPage extends React.Component {      // eslint-disable-line

  /* Change the title */
  componentWillMount() {
    this.props.setPageTitle("Library"); // eslint-disable-line
    this.props.changeIcon('Home'); // eslint-disable-line
  }

  /*
   * Iterate over the list of sections and render a clickable list item
   * linking to the related content
   */
  render() {
    return (
      <div className="librarypage">
        <Card>
          <List>
            {library.map((section) => (
              <ListItem
                key={section.key}
                primaryText={section.title}
                onTouchTap={() => {
                  browserHistory.push('/library/'.concat(section.key));
                }}
              />
            ))}
          </List>
        </Card>
      </div>
    );
  }
}
