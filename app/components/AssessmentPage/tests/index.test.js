/* eslint-disable */
import React from 'react';
import renderer from 'react-test-renderer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AssessmentPage from '../index';

it('renders AssessmentPage', () => {
  const tree = renderer.create(
    <MuiThemeProvider>
      <AssessmentPage setPageTitle={function () {}} changeIcon={function () {}} />
    </MuiThemeProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
