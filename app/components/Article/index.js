/**
 * A page containing an Article. The page contains different sections of content.
 *
 * Bethany Eastman
 */
import React from 'react';
import { Card, CardText } from 'material-ui';
import { articles } from 'data/resources';

export default class Article extends React.Component { // eslint-disable-line

  /* Change App Bar title */
  componentWillMount() {
    this.props.setPageTitle("Articles"); // eslint-disable-line
    this.props.changeIcon('Back', '/resources/'); // eslint-disable-line
  }

  /* Iterate through the article and print the header and relative content for
   * each article section */
  render() {
    return (
      <Card>
        <CardText>
          {articles.map((article) => (
            <div id="link" key={article.key}>
              <h2>{ article.title }</h2>
              { article.text }
              <br />
            </div>
          ))}
        </CardText>
      </Card>
    );
  }
}
