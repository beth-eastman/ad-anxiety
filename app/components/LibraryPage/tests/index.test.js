/* eslint-disable */
import React from 'react';
import renderer from 'react-test-renderer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import LibraryPage from '../index';

it('renders LibraryPage', () => {
  const tree = renderer.create(
    <MuiThemeProvider>
      <LibraryPage params={{ factId: 0 }} setPageTitle={function () {}} changeIcon={function () {}} />
    </MuiThemeProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
