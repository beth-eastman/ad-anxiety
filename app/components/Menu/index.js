 /* eslint-disable */
 /*
  * index.js - Menu
  * The Menu component is the navigation drop down menu containing
  * links to Home, Library, Resources, etc.
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
import MaterialMenu from 'material-ui/Menu';
import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';
import Popover from 'material-ui/Popover';
import VideoCam from 'material-ui/svg-icons/av/videocam';
import HomeIcon from 'material-ui/svg-icons/action/home';
import Assessment from 'material-ui/svg-icons/action/assessment';
import IconButton from 'material-ui/IconButton';
import LibraryBooks from 'material-ui/svg-icons/av/library-books';
import Resources from 'material-ui/svg-icons/action/info';
import AppHub from 'material-ui/svg-icons/action/exit-to-app';
import Hamburger from 'material-ui/svg-icons/navigation/menu';

export default class Menu extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  /* Open Menu when user selects menu icon*/
  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  /* Close the menu */
  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div className="menu-popovers">
        <IconButton
          onTouchTap={this.handleTouchTap}
          iconStyle={{ fill: 'white' }}
        >
          <Hamburger />
        </IconButton>

        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          targetOrigin={{ horizontal: 'left', vertical: 'top' }}
          onRequestClose={this.handleRequestClose}
        >
          <MaterialMenu>
            <MenuItem
              key={'home'}
              primaryText="Home"
              leftIcon={<HomeIcon />}
              onTouchTap={() => {
                this.props.router.push('/');
                this.handleRequestClose();
              }}
            />
            <Divider />
            <MenuItem
              key={'videos'}
              primaryText="Videos"
              leftIcon={<VideoCam />}
              onTouchTap={() => {
                this.props.router.push('/videos');
                this.handleRequestClose();
              }}
            />
            <MenuItem
              key={'assessments'}
              primaryText="Assessments"
              leftIcon={<Assessment />}
              onTouchTap={() => {
                this.props.router.push('/assessments');
                this.handleRequestClose();
              }}
            />
            <MenuItem
              key={'library'}
              primaryText="Library"
              leftIcon={<LibraryBooks />}
              onTouchTap={() => {
                this.props.router.push('/library');
                this.handleRequestClose();
              }}
            />
            <MenuItem
              key={'resources'}
              primaryText="Resources"
              leftIcon={<Resources />}
              onTouchTap={() => {
                this.props.router.push('/resources');
                this.handleRequestClose();
              }}
            />
            <Divider />
            <a
              href="https://apphub.tee2.org/#/"
              style={{ textDecoration: 'none' }}
            >
              <MenuItem
                key={'hub'}
                primaryText="App Hub"
                leftIcon={<AppHub />}
                onTouchTap={() => {
                  this.handleRequestClose();
                }}
              />
            </a>
          </MaterialMenu>
        </Popover>
      </div>
    );
  }
}
