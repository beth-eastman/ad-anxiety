/*
 * index.js - Books
 * A Book is a resource page containing text about books.
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
