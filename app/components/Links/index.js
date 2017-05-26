import React from 'react';
import { Card, CardText } from 'material-ui';
import { links } from 'data';

export default class Links extends React.Component { // eslint-disable-line

  componentWillMount() {
    this.props.setPageTitle("Links"); // eslint-disable-line
  }

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
