/* eslint-disable */
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
                this.props.router.push('/assessment');
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
