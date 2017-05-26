import React from 'react';
import { Card, CardText } from 'material-ui';
import { facts } from 'data';

export default class Facts extends React.Component { // eslint-disable-line

  componentWillMount() {
    this.props.setPageTitle("Facts"); // eslint-disable-line
  }

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

// TODO: check proptype validation for all components
Facts.propTypes = {
  params: React.PropTypes.any,
  factId: React.PropTypes.number,
};
