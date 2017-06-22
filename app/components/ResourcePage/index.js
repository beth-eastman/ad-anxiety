 /*
  * index.js - ResourcePage
  * Resource page component is a list of different resource pages (Links, Books, Articles, and Facts).
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

export default class ResourcePage extends React.Component {

  /* Change AppBar title */
  componentWillMount() {
    this.props.setPageTitle("Resources"); // eslint-disable-line
    this.props.changeIcon('Home'); // eslint-disable-line
  }

  /* Create a list of resources that directs the user to the corresponding content
   * page when selected */
  render() {
    return (
      <Card>
        <List>
          <ListItem
            primaryText="Links"
            onTouchTap={() => {
              this.props.router.push('/resources/links');
            }}
          />
          <ListItem
            primaryText="Books"
            onTouchTap={() => {
              this.props.router.push('/resources/books');
            }}
          />
          <ListItem
            primaryText="Articles"
            onTouchTap={() => {
              this.props.router.push('/resources/articles');
            }}
          />
          <ListItem
            primaryText="Facts"
            nestedItems={[
              <ListItem
                key={0}
                primaryText="Understanding Anxiety"
                onTouchTap={() => {
                  this.props.router.push('/resources/facts/0');
                }}
              />,
              <ListItem
                key={1}
                primaryText="Managing Anxiety and Worry"
                onTouchTap={() => {
                  this.props.router.push('/resources/facts/1');
                }}
              />,
              <ListItem
                key={2}
                primaryText="Causes of Anxiety"
                onTouchTap={() => {
                  this.props.router.push('/resources/facts/2');
                }}
              />,
            ]}
          />
        </List>
      </Card>
    );
  }
}

ResourcePage.propTypes = {
  router: PropTypes.any,
};
