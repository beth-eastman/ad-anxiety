/* eslint-disable */
import React from 'react';
import renderer from 'react-test-renderer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Books from '../index';

it('renders Books', () => {
  const tree = renderer.create(
    <MuiThemeProvider>
      <Books setPageTitle={function () {}} changeIcon={function () {}} />
    </MuiThemeProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
