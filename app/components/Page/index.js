/* eslint-disable */
/**
 * Page of an assessment, uses Jack Lightfoot's npm module contatining
 * different T2 Assessments
 */

import React from 'react';
import { Card, CardText } from 'material-ui';
import { assessments } from 'local-t2-assessment-suite';
const { Anxiety, Sleep, Panic, Worry, Stress, Stigma, Depression, PostTraumaticStress } = assessments;

const styles = {
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default class Page extends React.Component {

  /* Change the AppBar title */
  componentWillMount() {
    this.props.setPageTitle("Assessment");
    this.props.changeIcon('Back', '/assessments');
  }

  handleCancel = (error, assessment) => {
      this.props.router.push('/assessments/');
  }

  render() {
    let assessment = null;

    switch (this.props.params.assessmentId) {
      case 'anxiety':
        assessment = <Anxiety setPageTitle={this.props.setPageTitle} onCancel={this.handleCancel} />;
        break;
      case 'panic':
        assessment = <Panic setPageTitle={this.props.setPageTitle} onCancel={this.handleCancel} />;
        break;
      case 'worry':
        assessment = <Worry setPageTitle={this.props.setPageTitle} onCancel={this.handleCancel} />;
        break;
      case 'depression':
        assessment = <Depression setPageTitle={this.props.setPageTitle} onCancel={this.handleCancel} />;
        break;
      case 'sleep':
        assessment = <Sleep setPageTitle={this.props.setPageTitle} onCancel={this.handleCancel} />;
        break;
      case 'pts':
        assessment = <PostTraumaticStress setPageTitle={this.props.setPageTitle} onCancel={this.handleCancel} />;
        break;
      case 'stress':
        assessment = <Stress setPageTitle={this.props.setPageTitle} onCancel={this.handleCancel} />;
        break;
      case 'stigma':
        assessment = <Stigma setPageTitle={this.props.setPageTitle} onCancel={this.handleCancel} />;
        break;
      default:
        assessment = <h4>Assessment not available yet</h4>;
        break;
    }

    return (
      <div className="assessment">
        <Card style={styles}>
          <CardText>
            {assessment}
          </CardText>
        </Card>
      </div>
    );
  }
}

/* What proptypes to expect */
Page.propTypes = {
  assessmentId: React.PropTypes.string,
  params: React.PropTypes.any,
};
