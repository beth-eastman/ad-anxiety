 /*
  * index.js - HomePage
  * The HomePage component contains for the homepage of the application.
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
import { Card, CardHeader, CardText } from 'material-ui';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const styles = {
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default class HomePage extends React.Component {

  /* Change the AppBar title */
  componentWillMount() {
    this.props.setPageTitle("Home"); // eslint-disable-line
    this.props.changeIcon('Home'); // eslint-disable-line
  }

  render() {
    return (
      <div className="homepage">
        <Card style={styles}>
          <CardHeader
            title={<FormattedMessage {...messages.title} />}
            subtitle={<FormattedMessage {...messages.subtitle} />}
          />
          <CardText>
            <FormattedMessage {...messages.header} />
            <br />
            <br />
            <FormattedMessage {...messages.footer} />
          </CardText>
        </Card>
      </div>
    );
  }
}
