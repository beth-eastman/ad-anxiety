/**
 * A resource page containing the text about a fact of anxiety.
 *
 * Bethany Eastman
 */
import React from 'react';
import { Card, CardText } from 'material-ui';
import { facts } from 'data/resources';

export default class Facts extends React.Component { // eslint-disable-line

  /* Change the AppBar title */
  componentWillMount() {
    this.props.setPageTitle("Facts"); // eslint-disable-line
    this.props.changeIcon('Back', '/resources/'); // eslint-disable-line
  }

  /* Get the corresponding fact depending on what page the user is on then for all
   * the sections in that fact, print the title and corresponding text
   */
  render() {
    return (
      <Card>
        <CardText>
          {(facts[this.props.params.factId].sections).map((fact) => (
            <div id="fact" key={fact.title}>
              <h2>{ fact.title }</h2>
              { fact.text }
            </div>
          ))}
        </CardText>
      </Card>
    );
  }
}

/* Check for valid prop types */
Facts.propTypes = {
  params: React.PropTypes.any,
  factId: React.PropTypes.number,
};
