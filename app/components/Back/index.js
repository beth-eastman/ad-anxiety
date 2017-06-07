/* eslint-disable */

import React from 'react';
import IconButton from 'material-ui/IconButton';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';

export default class Back extends React.Component {

  render() {
    return (
      <IconButton iconStyle={{fill: 'white'}}>
        <ArrowBack
          onTouchTap={() => {
            this.props.router.push(this.props.newPathName);
          }}
        />
      </IconButton>
    );
  }

}
