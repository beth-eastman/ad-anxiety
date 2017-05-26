/**
 * Contains library content of the application.
 */

import React from 'react';
import { Card, CardHeader, List, ListItem } from 'material-ui';
import { FormattedMessage } from 'react-intl';
import { browserHistory } from 'react-router';
import messages from './messages';

export default class LibraryPage extends React.Component {      // eslint-disable-line

  componentWillMount() {
    this.props.setPageTitle("Library"); // eslint-disable-line
  }

  render() {
    return (
      <div className="librarypage">
        <Card>
          <CardHeader
            title="Library"
          />
          <List>
            <ListItem
              primaryText={<FormattedMessage {...messages.sectionOne} />}
              onTouchTap={() => {
                browserHistory.push('/library/page1');
              }}
            />
            <ListItem
              primaryText={<FormattedMessage {...messages.sectionTwo} />}
              onTouchTap={() => {
                browserHistory.push('/library/page2');
              }}
            />
            <ListItem
              primaryText={<FormattedMessage {...messages.sectionThree} />}
              onTouchTap={() => {
                browserHistory.push('/library/page3');
              }}
            />
            <ListItem
              primaryText={<FormattedMessage {...messages.sectionFour} />}
              onTouchTap={() => {
                browserHistory.push('/library/page4');
              }}
            />
            <ListItem
              primaryText={<FormattedMessage {...messages.sectionFive} />}
              onTouchTap={() => {
                browserHistory.push('/library/page5');
              }}
            />
            <ListItem
              primaryText={<FormattedMessage {...messages.sectionSix} />}
              onTouchTap={() => {
                browserHistory.push('/library/page6');
              }}
            />
            <ListItem
              primaryText={<FormattedMessage {...messages.sectionSeven} />}
              onTouchTap={() => {
                browserHistory.push('/library/page7');
              }}
            />
            <ListItem
              primaryText={<FormattedMessage {...messages.sectionEight} />}
              onTouchTap={() => {
                browserHistory.push('/library/page8');
              }}
            />
            <ListItem
              primaryText={<FormattedMessage {...messages.sectionNine} />}
              onTouchTap={() => {
                browserHistory.push('/library/page9');
              }}
            />
            <ListItem
              primaryText={<FormattedMessage {...messages.sectionTen} />}
              onTouchTap={() => {
                browserHistory.push('/library/page10');
              }}
            />
          </List>
        </Card>
      </div>
    );
  }
}
