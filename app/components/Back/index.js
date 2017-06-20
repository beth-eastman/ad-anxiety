/* Back Button takes a path and when a user selected the button,
the user will be directed to the specific page. IE - if the user
is on the Links page, the Back button should be passed '/resources/' so
that the user can go back to the Resource page */
import React, { PropTypes } from 'react';
import IconButton from 'material-ui/IconButton';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';

export default class Back extends React.Component { // eslint-disable-line

  render() {
    return (
      <IconButton iconStyle={{ fill: 'white' }}>
        <ArrowBack
          onTouchTap={() => {
            this.props.router.push(this.props.newPathName);
          }}
        />
      </IconButton>
    );
  }
}

Back.propTypes = {
  router: PropTypes.any,
  newPathName: PropTypes.any,
};
