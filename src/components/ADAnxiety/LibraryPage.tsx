/*
* LibraryPage.tsx
* A single page of library content. Each library page contains HTML content
* for a specific section of library content.
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
import { Card, CardText } from 'material-ui/Card';
import {AppPageInterface} from '../Main';
import library from '../../res/data/library';

interface Props{
  appPage: AppPageInterface;
  match: any;
  basePath: string;
}

const LibraryPage: React.SFC<Props> = (props) => {

  return (
    <Card>
      <CardText>
        <div className="library-content" dangerouslySetInnerHTML={{ __html: library[props.match.params.id - 1].text }}></div>
      </CardText>
    </Card>
  );

}

export default LibraryPage;
