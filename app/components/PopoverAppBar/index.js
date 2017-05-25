/**
 * Contains App Bar and Menu Items for Navigation
 */

import React from 'react';
import { browserHistory } from 'react-router';
import * as Colors from 'material-ui/styles/colors';
// Material UI Components
import AppBar from 'material-ui/AppBar';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
// Icons
import HomeIcon from 'material-ui/svg-icons/action/home';
import VideoCam from 'material-ui/svg-icons/av/videocam';
import Assessment from 'material-ui/svg-icons/action/assessment';
import LibraryBooks from 'material-ui/svg-icons/av/library-books';
import Resources from 'material-ui/svg-icons/action/info';
import AppHub from 'material-ui/svg-icons/action/exit-to-app';
// Needed to Handle onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

export default class PopoverAppBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
      title: 'Anxiety',
    };
  }

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  handlePageChange = (newTitle) => {
    this.setState({
      title: newTitle,
    });
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children, // eslint-disable-line
      (child) => React.cloneElement(child, {
        setPageTitle: this.handlePageChange,
      })
    );

    return (
      <div className="Anxiety-App-Bar">
        <AppBar
          onTouchTap={this.handleTouchTap}
          titleStyle={{ textAlign: 'center' }}
          title={this.state.title}
          style={{ backgroundColor: Colors.green500 }}
        />
        {childrenWithProps}
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          targetOrigin={{ horizontal: 'left', vertical: 'top' }}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            <MenuItem
              key={'home'}
              primaryText="Home"
              leftIcon={<HomeIcon />}
              onTouchTap={() => {
                browserHistory.push('/');
                this.handleRequestClose();
              }}
            />
            <Divider />
            <MenuItem
              key={'videos'}
              primaryText="Videos"
              leftIcon={<VideoCam />}
              onTouchTap={() => {
                browserHistory.push('/videos');
                this.handleRequestClose();
              }}
            />
            <MenuItem
              key={'assessments'}
              primaryText="Assessments"
              leftIcon={<Assessment />}
              onTouchTap={() => {
                browserHistory.push('/assessment');
                this.handleRequestClose();
              }}
            />
            <MenuItem
              key={'library'}
              primaryText="Library"
              leftIcon={<LibraryBooks />}
              onTouchTap={() => {
                browserHistory.push('/library');
                this.handleRequestClose();
              }}
            />
            <MenuItem
              key={'resources'}
              primaryText="Resources"
              leftIcon={<Resources />}
              onTouchTap={() => {
                browserHistory.push('/resources');
                this.handleRequestClose();
              }}
            />
            <Divider />
            <MenuItem
              key={'hub'}
              primaryText="App Hub"
              leftIcon={<AppHub />}
              onTouchTap={() => {
                browserHistory.push('apphub');
                this.handleRequestClose();
              }}
            />
          </Menu>
        </Popover>
      </div>
    );
  }
}
