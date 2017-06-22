 /*
  * index.js - LibraryPage
  * LibraryPage contains the list of sections for library content. The List
  * will provide links for the user to view content on that secition.
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
import { Card, List, ListItem } from 'material-ui';
import { library } from 'data/library';

export default class LibraryPage extends React.Component {      // eslint-disable-line

  /* Change the title */
  componentWillMount() {
    this.props.setPageTitle("Library"); // eslint-disable-line
    this.props.changeIcon('Home'); // eslint-disable-line
  }

  /*
   * Iterate over the list of sections and render a clickable list item
   * linking to the related content
   */
  render() {
    return (
      <div className="librarypage">
        <Card>
          <List>
            {library.map((section) => (
              <ListItem
                key={section.key}
                primaryText={section.title}
                onTouchTap={() => {
                  this.props.router.push('/library/'.concat(section.key));
                }}
              />
            ))}
          </List>
        </Card>
      </div>
    );
  }
}

LibraryPage.propTypes = {
  router: PropTypes.any,
};
