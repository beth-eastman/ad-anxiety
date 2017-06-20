/* eslint-disable */
import React from 'react';
// import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { shallow, mount, render } from 'enzyme';
import Menu from '../index';

it('renders Menu', () => {
  const tree = renderer.create(
    <MuiThemeProvider>
      <Menu setPageTitle={function () {}} changeIcon={function () {}} />
    </MuiThemeProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

// it('opens and closes', () => {
//   let tree = renderer.create(
//     <MuiThemeProvider>
//       <Menu setPageTitle={function () {}} changeIcon={function () {}} />
//     </MuiThemeProvider>
//   );
//   // checkbox.find('IconButton').simulate('change');
//   // checkbox.find('IconButton').simulate('change');
//   // tree = tree.toJSON();
//
//   expect(tree.state('open')).to.equal('close');
//   // expect(tree).toMatchSnapshot();
// });

// it('opens and closes', () => {
//   const wrapper = mount(
//     <MuiThemeProvider>
//       <Menu setPageTitle={function () {}} changeIcon={function () {}} />
//     </MuiThemeProvider>
//   );
//   expect(wrapper.state().open).to.equal(false);
// });
