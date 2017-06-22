/* eslint-disable */
/*
 * index.test.js - Menu
 * Tests for the Menu components
 *
 * Created by Bethany Eastman on 06/21/17.
 *
 * AD Anxiety
 *
 * Copyright © 2009-2017 United States Government as represented by
 * the Chief Information Officer of the National Center for Telehealth
 * and Technology. All Rights Reserved.
 *
 * Copyright © 2009-2017 Contributors. All Rights Reserved.
 *
 * THIS OPEN SOURCE AGREEMENT ("AGREEMENT") DEFINES THE RIGHTS OF USE,
 * REPRODUCTION, DISTRIBUTION, MODIFICATION AND REDISTRIBUTION OF CERTAIN
 * COMPUTER SOFTWARE ORIGINALLY RELEASED BY THE UNITED STATES GOVERNMENT
 * AS REPRESENTED BY THE GOVERNMENT AGENCY LISTED BELOW ("GOVERNMENT AGENCY").
 * THE UNITED STATES GOVERNMENT, AS REPRESENTED BY GOVERNMENT AGENCY, IS AN
 * INTENDED THIRD-PARTY BENEFICIARY OF ALL SUBSEQUENT DISTRIBUTIONS OR
 * REDISTRIBUTIONS OF THE SUBJECT SOFTWARE. ANYONE WHO USES, REPRODUCES,
 * DISTRIBUTES, MODIFIES OR REDISTRIBUTES THE SUBJECT SOFTWARE, AS DEFINED
 * HEREIN, OR ANY PART THEREOF, IS, BY THAT ACTION, ACCEPTING IN FULL THE
 * RESPONSIBILITIES AND OBLIGATIONS CONTAINED IN THIS AGREEMENT.
 *
 * Government Agency: The National Center for Telehealth and Technology
 * Government Agency Original Software Designation: ProductName001
 * Government Agency Original Software Title: ProductName
 * User Registration Requested. Please send email
 * with your contact information to: robert.a.kayl.civ@mail.mil
 * Government Agency Point of Contact for Original Software: robert.a.kayl.civ@mail.mil
 *
*/
import React from 'react';
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
