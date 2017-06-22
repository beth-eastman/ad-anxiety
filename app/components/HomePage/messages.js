 /*
  * messages.js - HomePage
  * Messages for Homepage component
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
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'app.components.HomePage.title',
    defaultMessage: 'Anxiety',
  },
  subtitle: {
    id: 'app.components.HomePage.subtitle',
    defaultMessage: 'Overview',
  },
  header: {
    id: 'app.components.HomePage.page',
    defaultMessage: 'Anxiety comes in many forms. Some people experience anxiety only in specific situations, like when they are asked to speak in public or when they need to fly on an airplane. Others worry a lot, and find themselves feeling anxious on and off throughout the day – and some suffer panic attacks, sudden feelings of anxiety that come on unpredictably. Anxiety is the most common behavioral health problem in the United States, affecting 40 million adults (18.1% of the population aged 18 and older).',
  },
  footer: {
    id: 'app.components.HomePage.bottomPage',
    defaultMessage: 'The Anxiety Assessment, and each of the related assessments, takes about five minutes to complete; recommendations follow based on your results.',
  },
});
