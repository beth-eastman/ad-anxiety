import React from 'react';

const videos = [
  {
    id: 'understand-anxiety',
    title: 'Understanding Anxiety',
    poster: 'https://brightcove04pmdo-a.akamaihd.net/923136676001/923136676001_3297197100001_vs-531747cde4b0fb3691140a61-767904719001.jpg?pubId=923136676001&videoId=3297056808001',
    src: 'https://udso-a.akamaihd.net/923136676001/923136676001_3297209168001_1041122098001-2059462568001-anxiety-1.mp4?pubId=923136676001&videoId=3297056808001',
  },
  {
    id: 'types-of-anxiety',
    title: 'Types of Anxiety',
    poster: 'https://brightcove04pmdo-a.akamaihd.net/923136676001/923136676001_3297202400001_vs-53174860e4b0281dbc2a4f45-1592194011001.jpg?pubId=923136676001&videoId=3297124750001',
    src: 'https://udso-a.akamaihd.net/923136676001/923136676001_3297215483001_1041122098001-2059458454001-anxiety-2.mp4?pubId=923136676001&videoId=3297124750001',
  },
  {
    id: 'recognizing-triggers',
    title: 'Recognizing Triggers',
    poster: 'https://brightcove04pmdo-a.akamaihd.net/923136676001/923136676001_3297209190001_vs-531748ede4b0281dbc2a4f57-1592194024001.jpg?pubId=923136676001&videoId=3297124752001',
    src: 'https://udso-a.akamaihd.net/923136676001/923136676001_3297233081001_1041122098001-2059455904001-anxiety-3.mp4?pubId=923136676001&videoId=3297124752001',
  },
  {
    id: 'treatment-options',
    title: 'Treatment Options',
    poster: 'https://brightcove04pmdo-a.akamaihd.net/923136676001/923136676001_3297215449001_vs-53174985e4b0fb3691140ae5-1592194025001.jpg?pubId=923136676001&videoId=3297056825001',
    src: 'https://udso-a.akamaihd.net/923136676001/923136676001_3297271312001_1041122098001-2059454949001-anxiety-4.mp4?pubId=923136676001&videoId=3297056825001',
  },
  {
    id: 'back-in-control',
    title: 'Back In Control',
    poster: 'https://brightcove04pmdo-a.akamaihd.net/923136676001/923136676001_3297225446001_vs-531749f2e4b0fb3691140af9-1592194020001.jpg?pubId=923136676001&videoId=3297214893001',
    src: 'https://udso-a.akamaihd.net/923136676001/923136676001_3297271524001_1041122098001-2059453454001-anxiety-5.mp4?pubId=923136676001&videoId=3297214893001',
  },
  {
    id: 'reduce-stress',
    title: 'Reduce Stress',
    poster: 'https://brightcove04pmdo-a.akamaihd.net/923136676001/923136676001_3682877795001_vs-53c95f12e4b0afffb80dc10d-782203291001.jpg?pubId=923136676001&videoId=3682799653001',
    src: 'https://udso-a.akamaihd.net/923136676001/923136676001_3682877804001_Reduce-Stress.mp4?pubId=923136676001&videoId=3682799653001',
  },
];

// TODO: Fix Video to use correct video

// function filterById(jsonObject, id) {return jsonObject.filter(function(jsonObject) {return (jsonObject['id'] == id);})[0];}

export default class Video extends React.Component { // eslint-disable-line

  render() {
    // const video = filterById(videos, { this.props.params.videoId });

    return (
      <div>
        <h1> { this.props.params.videoId } </h1>
        <video
          width="400px"
          controls
          poster={videos[5].poster}
        >
          <source src={videos[5].src} type="video/mp4" />
          <p>Your browser does not support this video.</p>
        </video>
      </div>

    );
  }
}

Video.propTypes = {
  params: React.PropTypes.any,
  videoId: React.PropTypes.string,
};
