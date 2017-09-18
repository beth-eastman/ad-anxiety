/*
* Home.tsx
* This component displays the Home content. Home displays an image and
* text introducing the app.
*
* Created by Bethany Eastman on 08/22/2017.
*
* AD Physical Injury
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
import * as React from 'react';
import { Card, CardText, CardTitle } from 'material-ui';

const Home: React.SFC<{}> = (props) => {

  return (
    <Card>
      <CardTitle title="Anxiety" subtitle="Overview" />
      <CardText>
      Anxiety comes in many forms. Some people experience anxiety only in specific situations, like when they are asked to speak in public or when they need to fly on an airplane. Others worry a lot, and find themselves feeling anxious on and off throughout the day – and some suffer panic attacks, sudden feelings of anxiety that come on unpredictably. Anxiety is the most common behavioral health problem in the United States, affecting 40 million adults (18.1% of the population aged 18 and older).<br /><br />

      The Anxiety Assessment, and each of the related assessments, takes about five minutes to complete; recommendations follow based on your results.
      </CardText>
    </Card>
  );

}

export default Home;
