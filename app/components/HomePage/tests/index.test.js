/* eslint-disable */
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LanguageProvider from 'containers/LanguageProvider';
import { FormattedMessage } from 'react-intl';
import toJson from 'enzyme-to-json';

import HomePage from '../index';
import messages from '../messages';



describe('<HomePage />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(
      <MuiThemeProvider>
        <HomePage changeIcon={function () {}} />
      </MuiThemeProvider>
    );

    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
