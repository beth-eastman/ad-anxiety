/**
 * A resource page containing text about books.
 *
 * Bethany Eastman
 */
import React from 'react';
import { Card, CardText } from 'material-ui';
import { books } from 'data/resources';

const styles = {
  title: {
    textDecoration: 'underline',
  },
};

export default class Links extends React.Component { // eslint-disable-line

  /* Change the AppBar title */
  componentWillMount() {
    this.props.setPageTitle("Books"); // eslint-disable-line
    this.props.changeIcon('Back', '/resources/'); // eslint-disable-line
  }

  /* For each book, cite its title and description */
  render() {
    return (
      <Card>
        <CardText>
          {books.map((book) => (
            <div id="link" key={book.title}>
              <h4 style={styles.title}>{ book.title }</h4>
              { book.text }
              <br />
              { book.description }
              <br />
            </div>
          ))}
        </CardText>
      </Card>
    );
  }
}
