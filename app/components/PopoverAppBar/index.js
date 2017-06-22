 /*
   * index.js - PopoverAppBar
   * Contains the App Bar component as well as menu items. The app bar controls
   * a navication icon and a title.
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
import * as Colors from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Back from 'components/Back';
import Menu from 'components/Menu';

injectTapEventPlugin();

export default class PopoverAppBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
      title: 'Anxiety',
      leftIcon: <Menu />,
    };
  }

  /* When page changes, set the appropriate title for the page */
  handlePageChange = (newTitle) => {
    this.setState({
      title: newTitle,
    });
  }

  handleChangeIcon = (newIcon, newPathName) => {
    let iconChange = null;
    if (newIcon === 'Home') {
      iconChange = <Menu router={this.props.router} />; // eslint-disable-line
    } else {
      iconChange = <Back newPathName={newPathName} router={this.props.router} />; // eslint-disable-line
    }
    this.setState({
      leftIcon: iconChange,
      pathName: newPathName,
    });
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children, // eslint-disable-line
      (child) => React.cloneElement(child, {
        setPageTitle: this.handlePageChange,
        changeIcon: this.handleChangeIcon,
        router: this.props.router, // eslint-disable-line
      })
    );

    return (
      <div className="application-containers">
        <AppBar
          onTouchTap={this.handleTouchTap}
          titleStyle={{ textAlign: 'center' }}
          title={this.state.title}
          style={{ backgroundColor: Colors.blueGrey500 }}
          iconElementLeft={this.state.leftIcon}
        />
        {childrenWithProps}
      </div>
    );
  }
}
