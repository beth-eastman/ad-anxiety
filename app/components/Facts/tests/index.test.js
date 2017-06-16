/* eslint-disable */
import React from 'react';
import renderer from 'react-test-renderer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Facts from '../index';

it('renders Facts', () => {
  const tree = renderer.create(
    <MuiThemeProvider>
      <Facts params={{ factId: 0 }} setPageTitle={function () {}} changeIcon={function () {}} />
    </MuiThemeProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
