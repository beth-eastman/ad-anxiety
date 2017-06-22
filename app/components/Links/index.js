/**
 * A Link component is a resource page containing text information and links to external websites
 *
 * Bethany Eastman
 */
import React from 'react';
import { Card, CardText } from 'material-ui';
import { links } from 'data/resources';

export default class Links extends React.Component { // eslint-disable-line

  /* Change the AppBar title */
  componentWillMount() {
    this.props.setPageTitle("Links"); // eslint-disable-line
    this.props.changeIcon('Back', '/resources/'); // eslint-disable-line
  }

  /* Iterate over every link and display the title, the link, and descriptive text */
  render() {
    return (
      <Card>
        <CardText>
          {links.map((link) => (
            <div id="link" key={link.title}>
              <h2>{ link.title }</h2>
              <a href={link.link}>{link.link}</a>
              <br />
              { link.text }
              <br />
            </div>
          ))}
        </CardText>
      </Card>
    );
  }
}
