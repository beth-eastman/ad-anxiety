/**
 * @file containers/Eula.tsx
 * Container for EULA component.
 *
 * Created by Jack LightFoot on 08/22/2017
 *
 * T2 PWA Starter
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
 * User Registration Requested. Please send email
 * with your contact information to: robert.a.kayl.civ@mail.mil
 * Government Agency Point of Contact for
 * Original Software: robert.a.kayl.civ@mail.mil
 */
import {connect} from 'react-redux';
import EulaComponent from '../components/Eula';
import {eulaAccepted,eulaRejected} from '../actions';

const getPlatform = () =>{
  let platform = 'browser';
  if(typeof (window as any).device !== 'undefined'){ //should be set in the case of cordova
    platform = (window as any).device.platform;
  }
  return platform.toLowerCase();
}

const shouldHideRejectButton = () => {
  return getPlatform() !== 'android';
}

const stateToProps = (state) => {
  return {
    eulaAccepted: state.settings.eulaAccepted,
    hideRejectButton: shouldHideRejectButton()
  }
}
const dispatchToProps = (dispatch) => {
  return {
    accept: () => dispatch(eulaAccepted()),
    reject: () => dispatch(eulaRejected())
  }

}

export default connect(
  stateToProps,
  dispatchToProps)
(EulaComponent);
