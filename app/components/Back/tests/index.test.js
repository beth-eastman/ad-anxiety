/* eslint-disable */
import React from 'react';
import renderer from 'react-test-renderer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Back from '../index';

it('renders Back', () => {
  const tree = renderer.create(
    <MuiThemeProvider>
      <Back setPageTitle={function () {}} changeIcon={function () {}} />
    </MuiThemeProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
