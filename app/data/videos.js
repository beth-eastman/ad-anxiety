 /*
  * videos.js
  * A collection of videos and their title, thumbnail poster, and video source file.
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

// Images
import UnderstandingAnxiety from 'components/img/anxiety-understanding-anxiety.jpg';
import AnxietyTreatment from 'components/img/anxiety-types-of-anxiety.jpg';
import TreatmentOptions from 'components/img/anxiety-treatment-options.jpg';
import RecognizingTrigers from 'components/img/anxiety-recognizing-triggers.jpg';
import BackInControl from 'components/img/anxiety-back-in-control.jpg';

// id: the unique identifier key of each video
// title: the title for a video
// poster: the thumnail image for each video
// src: the source file for the video
const videos = [
  {
    id: 0,
    title: 'Understanding Anxiety',
    poster: UnderstandingAnxiety,
    src: 'https://udso-a.akamaihd.net/923136676001/923136676001_3297209168001_1041122098001-2059462568001-anxiety-1.mp4?pubId=923136676001&videoId=3297056808001',
  },
  {
    id: 1,
    title: 'Types of Anxiety',
    poster: AnxietyTreatment,
    src: 'https://udso-a.akamaihd.net/923136676001/923136676001_3297215483001_1041122098001-2059458454001-anxiety-2.mp4?pubId=923136676001&videoId=3297124750001',
  },
  {
    id: 2,
    title: 'Recognizing Triggers',
    poster: RecognizingTrigers,
    src: 'https://udso-a.akamaihd.net/923136676001/923136676001_3297233081001_1041122098001-2059455904001-anxiety-3.mp4?pubId=923136676001&videoId=3297124752001',
  },
  {
    id: 3,
    title: 'Treatment Options',
    poster: TreatmentOptions,
    src: 'https://udso-a.akamaihd.net/923136676001/923136676001_3297271312001_1041122098001-2059454949001-anxiety-4.mp4?pubId=923136676001&videoId=3297056825001',
  },
  {
    id: 4,
    title: 'Back In Control',
    poster: BackInControl,
    src: 'https://udso-a.akamaihd.net/923136676001/923136676001_3297271524001_1041122098001-2059453454001-anxiety-5.mp4?pubId=923136676001&videoId=3297214893001',
  },
  {
    id: 5,
    title: 'Reduce Stress',
    poster: 'https://brightcove04pmdo-a.akamaihd.net/923136676001/923136676001_3682877795001_vs-53c95f12e4b0afffb80dc10d-782203291001.jpg?pubId=923136676001&videoId=3682799653001',
    src: 'https://udso-a.akamaihd.net/923136676001/923136676001_3682877804001_Reduce-Stress.mp4?pubId=923136676001&videoId=3682799653001',
  },
];

export { videos };
