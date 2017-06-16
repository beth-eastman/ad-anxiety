/* eslint-disable */
import React from 'react';
import renderer from 'react-test-renderer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Links from '../index';

it('renders Links', () => {
  const tree = renderer.create(
    <MuiThemeProvider>
      <Links params={{ factId: 0 }} setPageTitle={function () {}} changeIcon={function () {}} />
    </MuiThemeProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
