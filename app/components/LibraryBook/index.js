/* eslint-disable */
/*
 * index.js - LibraryBook
 * A LibraryBook component is page for a specific library section.
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
  params: PropTypes.any,
  libraryPageId: PropTypes.number,
};
