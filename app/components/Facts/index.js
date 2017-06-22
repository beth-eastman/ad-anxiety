 /*
  * index.js - Fact
  * A Fact component represents a resource page containing text about a fact of anxiety.
  *
  * Created by Bethany Eastman on 06/21/17.
  *
  * AD Anxiety
  *
  * Copyright © 2009-2017 United States Government as represented by
  * the Chief Information Officer of the National Center for Telehealth
  * and Technology. All Rights Reserved.
  *
  * Copyright © 2009-2017 Contributors. All Rights Reserved.
  *
  * THIS OPEN SOURCE AGREEMENT ("AGREEMENT") DEFINES THE RIGHTS OF USE,
  * REPRODUCTION, DISTRIBUTION, MODIFICATION AND REDISTRIBUTION OF CERTAIN
  * COMPUTER SOFTWARE ORIGINALLY RELEASED BY THE UNITED STATES GOVERNMENT
  * AS REPRESENTED BY THE GOVERNMENT AGENCY LISTED BELOW ("GOVERNMENT AGENCY").
  * THE UNITED STATES GOVERNMENT, AS REPRESENTED BY GOVERNMENT AGENCY, IS AN
  * INTENDED THIRD-PARTY BENEFICIARY OF ALL SUBSEQUENT DISTRIBUTIONS OR
  * REDISTRIBUTIONS OF THE SUBJECT SOFTWARE. ANYONE WHO USES, REPRODUCES,
  * DISTRIBUTES, MODIFIES OR REDISTRIBUTES THE SUBJECT SOFTWARE, AS DEFINED
  * HEREIN, OR ANY PART THEREOF, IS, BY THAT ACTION, ACCEPTING IN FULL THE
  * RESPONSIBILITIES AND OBLIGATIONS CONTAINED IN THIS AGREEMENT.
  *
  * Government Agency: The National Center for Telehealth and Technology
  * Government Agency Original Software Designation: ProductName001
  * Government Agency Original Software Title: ProductName
  * User Registration Requested. Please send email
  * with your contact information to: robert.a.kayl.civ@mail.mil
  * Government Agency Point of Contact for Original Software: robert.a.kayl.civ@mail.mil
  *
 */
import React, { PropTypes } from 'react';
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
  params: PropTypes.any,
  factId: PropTypes.number,
};
