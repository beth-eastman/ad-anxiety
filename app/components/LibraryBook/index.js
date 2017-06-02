/**
 * A page for a section of library content.
 *
 * Bethany Eastman
 */
import React from 'react';
import { Card, CardText } from 'material-ui';
import { library } from 'data/library';

export default class LibraryBook extends React.Component { // eslint-disable-line

  /* Change AppBar title */
  componentWillMount() {
    this.props.setPageTitle("Library"); // eslint-disable-line
    this.props.changeIcon('Back', '/library/'); // eslint-disable-line
  }

  /* The library content is stored in a static html string by getting the corresponding
   * content for the current page, then renders the html onto the page.
   *
   * Since React avoids innerHTML for safety concerns, dangerouslySetInnerHTML
   * must be used to insert the HTML into the application.
   * See: https://facebook.github.io/react/docs/dom-elements.html#dangerouslysetinnerhtml
   */
  render() {
    return (
      <Card>
        <CardText>
          <div className="library-content" dangerouslySetInnerHTML={{ __html: library[this.props.params.libraryPageId - 1].content }}></div>
        </CardText>
      </Card>
    );
  }
}

/* Check for valid prop types */
LibraryBook.propTypes = {
  params: React.PropTypes.any,
  libraryPageId: React.PropTypes.number,
};
