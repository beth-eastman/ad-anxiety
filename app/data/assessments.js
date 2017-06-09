// images // TODO: get correct images for assessment page
import UnderstandingAnxiety from 'components/img/anxiety-understanding-anxiety.jpg';
import AnxietyTreatment from 'components/img/anxiety-types-of-anxiety.jpg';
import TreatmentOptions from 'components/img/anxiety-treatment-options.jpg';
import RecognizingTrigers from 'components/img/anxiety-recognizing-triggers.jpg';
import BackInControl from 'components/img/anxiety-back-in-control.jpg';
import Worry from 'components/img/worry.jpg';
import Stress from 'components/img/stress.jpg';
import Deployment from 'components/img/original.jpg';

// id: a unique identifier to be used as a key
// img: the thumbnail image
// title: the title of each assessment
const assessments = [
  {
    id: 'anxiety',
    img: UnderstandingAnxiety,
    title: 'Anxiety',
  },
  {
    id: 'panic',
    img: AnxietyTreatment,
    title: 'Panic',
  },
  {
    id: 'worry',
    img: Worry,
    title: 'Worry',
  },
  {
    id: 'depression',
    img: BackInControl,
    title: 'Depression',
  },
  {
    id: 'sleep',
    img: RecognizingTrigers,
    title: 'Sleep',
  },
  {
    id: 'pts',
    img: Deployment,
    title: 'Post-Traumatic Stress',
  },
  {
    id: 'stress',
    img: Stress,
    title: 'Stress',
  },
  {
    id: 'stigma',
    img: RecognizingTrigers,
    title: 'Stigma',
  },
];

export { assessments };
