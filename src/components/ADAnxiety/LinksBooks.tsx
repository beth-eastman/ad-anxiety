/*
* LinksBooks.tsx
* This component is a simple page containing text content about the appropriate
* Links and Books related to the After Deployment topic.
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
import { links, books } from '../../res/data/resources';

const styles = {
  title: {
    textDecoration: 'underline',
  },
};

const LinksBooks: React.SFC<{}> = (props) => {

  const Link = links.map((link, id) => {
      return (<div key={'link-' + id}>
          <h4 style={styles.title}>{ link.title }</h4>
          <a href={link.link}>{link.link}</a>
          <br />
          { link.text }
        <br />
      </div>);
  });

  const Book =  books.map((book, id) => {
        return(<div key={'book-' + id}>
          <h4 style={styles.title}>{ book.title }</h4>
          { book.text }
          <br />
          { book.description }
          <br />
        </div>
        );
    });

  return (
    <Card>
      <CardText>
        <h2>Links</h2>
        { Link }
        <h2>Books</h2>
        { Book }
      </CardText>
    </Card>
  );

}

export default LinksBooks;
