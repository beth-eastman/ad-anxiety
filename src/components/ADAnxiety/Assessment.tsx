import * as React from 'react';
import { assessments } from 'local-t2-assessment-suite';
// import AssessmentsList from 'local'
const { Anxiety, Panic, Worry, Depression, Sleep, PostTraumaticStress, Stress, Stigma } = assessments;

interface Props {
  match: any;
  history: any;
  basePath: any;
}

const Assessment: React.SFC<Props> = (props) => {

  const handleCancel = () => {
    return (err, assessment) => {
      props.history.push(props.basePath);
    }
  }

  const getAssessment = () => {
    let assessment = null;
    switch(props.match.params.id) {
      case '1':
        assessment = (<Anxiety onCancel={() => {handleCancel()}} />);
        // assessment = (<h4>Depression Module Coming Soon</h4>);
        break;
      case '2':
        assessment = (<Panic onCancel={() => {handleCancel()}} />);
        // assessment = (<h4>Physical Injury Resiliance Module Coming Soon</h4>);
        break;
      case '3':
        assessment = (<Worry onCancel={() => {handleCancel()}} />);
        // assessment = (<h4>Alcohol and Drugs Module Coming Soon</h4>);
        break;
      case '4':
        assessment = (<Depression onCancel={() => {handleCancel()}} />);
        break;
      case '5':
        assessment = (<Sleep onCancel={() => {handleCancel()}} />);
        break;
      case '6':
        assessment = (<PostTraumaticStress onCancel={() => {handleCancel()}} />);
      case '7':
        assessment = (<Stress onCancel={() => {handleCancel()}} />);
      case '8':
        assessment = (<Stigma onCancel={() => {handleCancel()}} />);
      default:
        assessment = (<h4>Assessment not found</h4>);
        break;
    }
    return assessment;
  };

  return (
    <div>{ getAssessment() }</div>
  );

}

export default Assessment;
