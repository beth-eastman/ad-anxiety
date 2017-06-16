/* eslint-disable */
import React from 'react';
import renderer from 'react-test-renderer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import PopoverAppBar from '../index';

it('renders PopoverAppBar', () => {
  const tree = renderer.create(
    <MuiThemeProvider>
      <PopoverAppBar params={{ factId: 0 }} setPageTitle={function () {}} changeIcon={function () {}} />
    </MuiThemeProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
