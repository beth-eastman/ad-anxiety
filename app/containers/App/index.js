/**
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */
import React from 'react';
import PopoverAppBar from 'components/PopoverAppBar';

export default class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  /* Check the prop types are valid */
  static propTypes = {
    children: React.PropTypes.node,
  };

  /* Render the AppBar and it's children (the component beneath the AppBar) */
  render() {
    return (
      <div>
        <PopoverAppBar>
          {this.props.children}
        </PopoverAppBar>
      </div>
    );
  }
}
