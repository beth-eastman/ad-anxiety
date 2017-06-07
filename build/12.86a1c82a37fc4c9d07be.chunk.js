webpackJsonp([12],{

/***/ "./app/components/Video/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_data_videos__ = __webpack_require__("./app/data/videos.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A component containing a single video.
 *
 * Bethany Eastman
 */



var style = {
  textAlign: 'center'
};

var getVideoWidth = function getVideoWidth() {
  if (window.innerWidth > 1300) {
    return '1200px';
  } else {
    // eslint-disable-line
    return '100%';
  }
};

var Video = function (_React$Component) {
  _inherits(Video, _React$Component);

  // eslint-disable-line

  function Video(props) {
    _classCallCheck(this, Video);

    var _this = _possibleConstructorReturn(this, (Video.__proto__ || Object.getPrototypeOf(Video)).call(this, props));

    _this.state = {
      width: getVideoWidth()
    };
    return _this;
  }

  /* When component mounts, change app bar to back icon and get the width
     for the video based on device width */


  _createClass(Video, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.changeIcon('Back', '/videos/'); // eslint-disable-line
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Add event listener for number of columns when window resizes
      var that = this;
      window.addEventListener('resize', function () {
        console.log('timeout');
        setTimeout(function () {
          that.setState({ cols: getVideoWidth() });
        }, 250);
      });
    }

    // componentWillUnmount () {
    //     this.loadInterval && clearInterval(this.loadInterval);
    //     this.loadInterval = false;
    // }
    //
    //
    // componentWillUnmount() {}

    // componentWillUnmount() {
    //   window.removeEventListener('resize', setVideoWidth(this));
    // }

    /* Create a video component with the thumbnail and source video */

  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: style },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'video',
          {
            width: this.state.width,
            controls: true,
            poster: __WEBPACK_IMPORTED_MODULE_1_data_videos__["a" /* videos */][this.props.params.videoId].poster
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('source', { src: __WEBPACK_IMPORTED_MODULE_1_data_videos__["a" /* videos */][this.props.params.videoId].src, type: 'video/mp4' })
        )
      );
    }
  }]);

  return Video;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* Check for valid prop types */


/* harmony default export */ exports["default"] = Video;
Video.propTypes = {
  params: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.any,
  videoId: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string
};

/***/ },

/***/ "./app/components/img/anxiety-back-in-control.jpg":
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dbc6cc20ff356d79f4105133fb116acc.jpg";

/***/ },

/***/ "./app/components/img/anxiety-recognizing-triggers.jpg":
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "88bbfc2ff7db9998d2a8abb2e787757b.jpg";

/***/ },

/***/ "./app/components/img/anxiety-treatment-options.jpg":
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1da67e2c6324401ea20a80e5614ab492.jpg";

/***/ },

/***/ "./app/components/img/anxiety-types-of-anxiety.jpg":
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "97e68432a63834dd19910f497e6eb151.jpg";

/***/ },

/***/ "./app/components/img/anxiety-understanding-anxiety.jpg":
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fbd2e16b14b0af52f4cc4ef135e0acd2.jpg";

/***/ },

/***/ "./app/data/videos.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_img_anxiety_understanding_anxiety_jpg__ = __webpack_require__("./app/components/img/anxiety-understanding-anxiety.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_img_anxiety_understanding_anxiety_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_components_img_anxiety_understanding_anxiety_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_img_anxiety_types_of_anxiety_jpg__ = __webpack_require__("./app/components/img/anxiety-types-of-anxiety.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_img_anxiety_types_of_anxiety_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_components_img_anxiety_types_of_anxiety_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_img_anxiety_treatment_options_jpg__ = __webpack_require__("./app/components/img/anxiety-treatment-options.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_img_anxiety_treatment_options_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_components_img_anxiety_treatment_options_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_img_anxiety_recognizing_triggers_jpg__ = __webpack_require__("./app/components/img/anxiety-recognizing-triggers.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_img_anxiety_recognizing_triggers_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_components_img_anxiety_recognizing_triggers_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_img_anxiety_back_in_control_jpg__ = __webpack_require__("./app/components/img/anxiety-back-in-control.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_img_anxiety_back_in_control_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_components_img_anxiety_back_in_control_jpg__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return videos; });
/**
 * A collection of videos and their title, thumbnail poster, and video source file.
 *
 * Bethany Eastman
 */

// Images






// id: the unique identifier key of each video
// title: the title for a video
// poster: the thumnail image for each video
// src: the source file for the video
var videos = [{
  id: 0,
  title: 'Understanding Anxiety',
  poster: __WEBPACK_IMPORTED_MODULE_0_components_img_anxiety_understanding_anxiety_jpg___default.a,
  src: 'https://udso-a.akamaihd.net/923136676001/923136676001_3297209168001_1041122098001-2059462568001-anxiety-1.mp4?pubId=923136676001&videoId=3297056808001'
}, {
  id: 1,
  title: 'Types of Anxiety',
  poster: __WEBPACK_IMPORTED_MODULE_1_components_img_anxiety_types_of_anxiety_jpg___default.a,
  src: 'https://udso-a.akamaihd.net/923136676001/923136676001_3297215483001_1041122098001-2059458454001-anxiety-2.mp4?pubId=923136676001&videoId=3297124750001'
}, {
  id: 2,
  title: 'Recognizing Triggers',
  poster: __WEBPACK_IMPORTED_MODULE_3_components_img_anxiety_recognizing_triggers_jpg___default.a,
  src: 'https://udso-a.akamaihd.net/923136676001/923136676001_3297233081001_1041122098001-2059455904001-anxiety-3.mp4?pubId=923136676001&videoId=3297124752001'
}, {
  id: 3,
  title: 'Treatment Options',
  poster: __WEBPACK_IMPORTED_MODULE_2_components_img_anxiety_treatment_options_jpg___default.a,
  src: 'https://udso-a.akamaihd.net/923136676001/923136676001_3297271312001_1041122098001-2059454949001-anxiety-4.mp4?pubId=923136676001&videoId=3297056825001'
}, {
  id: 4,
  title: 'Back In Control',
  poster: __WEBPACK_IMPORTED_MODULE_4_components_img_anxiety_back_in_control_jpg___default.a,
  src: 'https://udso-a.akamaihd.net/923136676001/923136676001_3297271524001_1041122098001-2059453454001-anxiety-5.mp4?pubId=923136676001&videoId=3297214893001'
}, {
  id: 5,
  title: 'Reduce Stress',
  poster: 'https://brightcove04pmdo-a.akamaihd.net/923136676001/923136676001_3682877795001_vs-53c95f12e4b0afffb80dc10d-782203291001.jpg?pubId=923136676001&videoId=3682799653001',
  src: 'https://udso-a.akamaihd.net/923136676001/923136676001_3682877804001_Reduce-Stress.mp4?pubId=923136676001&videoId=3682799653001'
}];



/***/ }

});