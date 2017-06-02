/**
 * A collection of videos and their title, thumbnail poster, and video source file.
 *
 * Bethany Eastman
 */

// Images
import UnderstandingAnxiety from 'components/img/anxiety-understanding-anxiety.jpg';
import AnxietyTreatment from 'components/img/anxiety-types-of-anxiety.jpg';
import TreatmentOptions from 'components/img/anxiety-treatment-options.jpg';
import RecognizingTrigers from 'components/img/anxiety-recognizing-triggers.jpg';
import BackInControl from 'components/img/anxiety-back-in-control.jpg';

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
