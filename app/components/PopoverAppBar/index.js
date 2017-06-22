/**
 * Contains the App Bar component as well as menu items. The app bar controls
 * a navication icon and a title.
 *
 * Bethany Eastman
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
