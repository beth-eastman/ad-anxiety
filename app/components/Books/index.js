import React from 'react';
import { Card, CardText } from 'material-ui';
import { books } from 'data';

const styles = {
  title: {
    textDecoration: 'underline',
  },
};

export default class Links extends React.Component { // eslint-disable-line

  componentWillMount() {
    this.props.setPageTitle("Books"); // eslint-disable-line
  }

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
