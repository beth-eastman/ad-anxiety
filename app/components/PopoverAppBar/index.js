/**
 * Contains the App Bar component as well as menu items.
 *
 * Bethany Eastman
 */

import React from 'react';
import * as Colors from 'material-ui/styles/colors';
// Material UI Components
import AppBar from 'material-ui/AppBar';
// import Popover from 'material-ui/Popover';
// // import Menu from 'material-ui/Menu';
// import MenuItem from 'material-ui/MenuItem';
// import Divider from 'material-ui/Divider';
// // Icons
// import HomeIcon from 'material-ui/svg-icons/action/home';
// import VideoCam from 'material-ui/svg-icons/av/videocam';
// import Assessment from 'material-ui/svg-icons/action/assessment';
// import IconButton from 'material-ui/IconButton';
// import LibraryBooks from 'material-ui/svg-icons/av/library-books';
// import Resources from 'material-ui/svg-icons/action/info';
// import AppHub from 'material-ui/svg-icons/action/exit-to-app';
// Needed to Handle onTouchTap
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
      iconChange = <Menu />;
    } else {
      iconChange = <Back newPathName={newPathName} />;
    }

    console.log('handle change icons to'.concat(newIcon.concat(' ').concat(newPathName))); // eslint-disable-line

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
      })
    );

    return (
      <div className="application-containers">
        <AppBar
          onTouchTap={this.handleTouchTap}
          titleStyle={{ textAlign: 'center' }}
          title={this.state.title}
          style={{ backgroundColor: Colors.teal500 }}
          iconElementLeft={this.state.leftIcon}
        />
        {childrenWithProps}
      </div>
    );
  }
}
