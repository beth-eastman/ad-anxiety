/* eslint-disable */
import React from 'react';
import renderer from 'react-test-renderer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import VideosPage from '../index';

it('renders VideosPage', () => {
  const tree = renderer.create(
    <MuiThemeProvider>
      <VideosPage setPageTitle={function () {}} changeIcon={function () {}} />
    </MuiThemeProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
