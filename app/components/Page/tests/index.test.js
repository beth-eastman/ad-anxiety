/* eslint-disable */
import React from 'react';
import renderer from 'react-test-renderer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Page from '../index';

it('renders Page', () => {
  const tree = renderer.create(
    <MuiThemeProvider>
      <Page params={{ factId: 0 }} setPageTitle={function () {}} changeIcon={function () {}} />
    </MuiThemeProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
