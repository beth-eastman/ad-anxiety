webpackJsonp([1],{

/***/ "./app/components/VideosPage/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui__ = __webpack_require__("./node_modules/material-ui/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router__ = __webpack_require__("./node_modules/react-router/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_data_videos__ = __webpack_require__("./app/data/videos.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * VideoPage contains a list of thumbnails & titles to videos the user can view.
 * Selecting a video in the list will direct the user to the page containg
 * that video.
 */





var styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  gridList: {
    overflowY: 'auto'
  }
};

// Get number of columns needed for responsive grid list
var getCols = function getCols(width) {
  if (!width) {
    return 1;
  } else if (width > 1280) {
    return 4;
  } else if (width > 900) {
    return 3;
  } else if (width > 600) {
    return 2;
  }
  return 1;
};

var VideosPage = function (_React$Component) {
  _inherits(VideosPage, _React$Component);

  function VideosPage(props) {
    _classCallCheck(this, VideosPage);

    var _this = _possibleConstructorReturn(this, (VideosPage.__proto__ || Object.getPrototypeOf(VideosPage)).call(this, props));

    _this.state = {
      cols: getCols(window.innerWidth)
    };
    return _this;
  }

  /* Change the AppBar title */


  _createClass(VideosPage, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.setPageTitle("Videos"); // eslint-disable-line
      this.props.changeIcon('Home'); // eslint-disable-line
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Add event listener for number of columns when window resizes
      var that = this;
      window.addEventListener('resize', function () {
        console.log('timeout');
        setTimeout(function () {
          that.setState({ cols: getCols(window.innerWidth) });
        }, 250);
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}

    /* Render a list of all videos contaning an image and video title */

  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: styles.root },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_material_ui__["e" /* GridList */],
          {
            cols: this.state.cols,
            style: styles.gridList
          },
          __WEBPACK_IMPORTED_MODULE_3_data_videos__["a" /* videos */].map(function (video) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_material_ui__["f" /* GridTile */],
              {
                key: video.id,
                title: video.title,
                actionPosition: 'right',
                onTouchTap: function onTouchTap() {
                  __WEBPACK_IMPORTED_MODULE_2_react_router__["a" /* browserHistory */].push('/videos/'.concat(video.id));
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: video.poster, alt: video.title })
            );
          })
        )
      );
    }
  }]);

  return VideosPage;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ exports["default"] = VideosPage;

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



/***/ },

/***/ "./node_modules/babel-runtime/core-js/get-iterator.js":
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/get-iterator.js"), __esModule: true };

/***/ },

/***/ "./node_modules/babel-runtime/core-js/is-iterable.js":
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/is-iterable.js"), __esModule: true };

/***/ },

/***/ "./node_modules/babel-runtime/helpers/defineProperty.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ },

/***/ "./node_modules/babel-runtime/helpers/slicedToArray.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__("./node_modules/babel-runtime/core-js/is-iterable.js");

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__("./node_modules/babel-runtime/core-js/get-iterator.js");

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ },

/***/ "./node_modules/core-js/library/fn/get-iterator.js":
/***/ function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__("./node_modules/core-js/library/modules/es6.string.iterator.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/core.get-iterator.js");

/***/ },

/***/ "./node_modules/core-js/library/fn/is-iterable.js":
/***/ function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__("./node_modules/core-js/library/modules/es6.string.iterator.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/core.is-iterable.js");

/***/ },

/***/ "./node_modules/core-js/library/modules/core.get-iterator.js":
/***/ function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("./node_modules/core-js/library/modules/_an-object.js")
  , get      = __webpack_require__("./node_modules/core-js/library/modules/core.get-iterator-method.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};

/***/ },

/***/ "./node_modules/core-js/library/modules/core.is-iterable.js":
/***/ function(module, exports, __webpack_require__) {

var classof   = __webpack_require__("./node_modules/core-js/library/modules/_classof.js")
  , ITERATOR  = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('iterator')
  , Iterators = __webpack_require__("./node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").isIterable = function(it){
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    || Iterators.hasOwnProperty(classof(O));
};

/***/ },

/***/ "./node_modules/material-ui/AutoComplete/AutoComplete.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__("./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _keycode = __webpack_require__("./node_modules/keycode/index.js");

var _keycode2 = _interopRequireDefault(_keycode);

var _TextField = __webpack_require__("./node_modules/material-ui/TextField/index.js");

var _TextField2 = _interopRequireDefault(_TextField);

var _Menu = __webpack_require__("./node_modules/material-ui/Menu/index.js");

var _Menu2 = _interopRequireDefault(_Menu);

var _MenuItem = __webpack_require__("./node_modules/material-ui/MenuItem/index.js");

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Divider = __webpack_require__("./node_modules/material-ui/Divider/index.js");

var _Divider2 = _interopRequireDefault(_Divider);

var _Popover = __webpack_require__("./node_modules/material-ui/Popover/Popover.js");

var _Popover2 = _interopRequireDefault(_Popover);

var _propTypes3 = __webpack_require__("./node_modules/material-ui/utils/propTypes.js");

var _propTypes4 = _interopRequireDefault(_propTypes3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context, state) {
  var anchorEl = state.anchorEl;
  var fullWidth = props.fullWidth;


  var styles = {
    root: {
      display: 'inline-block',
      position: 'relative',
      width: fullWidth ? '100%' : 256
    },
    menu: {
      width: '100%'
    },
    list: {
      display: 'block',
      width: fullWidth ? '100%' : 256
    },
    innerDiv: {
      overflow: 'hidden'
    }
  };

  if (anchorEl && fullWidth) {
    styles.popover = {
      width: anchorEl.clientWidth
    };
  }

  return styles;
}

var AutoComplete = function (_Component) {
  (0, _inherits3.default)(AutoComplete, _Component);

  function AutoComplete() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, AutoComplete);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = AutoComplete.__proto__ || (0, _getPrototypeOf2.default)(AutoComplete)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      anchorEl: null,
      focusTextField: true,
      open: false,
      searchText: undefined
    }, _this.handleRequestClose = function () {
      // Only take into account the Popover clickAway when we are
      // not focusing the TextField.
      if (!_this.state.focusTextField) {
        _this.close();
      }
    }, _this.handleMouseDown = function (event) {
      // Keep the TextField focused
      event.preventDefault();
    }, _this.handleItemTouchTap = function (event, child) {
      var dataSource = _this.props.dataSource;
      var index = parseInt(child.key, 10);
      var chosenRequest = dataSource[index];
      var searchText = _this.chosenRequestText(chosenRequest);

      var updateInput = function updateInput() {
        return _this.props.onUpdateInput(searchText, _this.props.dataSource, {
          source: 'touchTap'
        });
      };
      _this.timerTouchTapCloseId = function () {
        return setTimeout(function () {
          _this.timerTouchTapCloseId = null;
          _this.close();
          _this.props.onNewRequest(chosenRequest, index);
        }, _this.props.menuCloseDelay);
      };

      if (typeof _this.props.searchText !== 'undefined') {
        updateInput();
        _this.timerTouchTapCloseId();
      } else {
        _this.setState({
          searchText: searchText
        }, function () {
          updateInput();
          _this.timerTouchTapCloseId();
        });
      }
    }, _this.chosenRequestText = function (chosenRequest) {
      if (typeof chosenRequest === 'string') {
        return chosenRequest;
      } else {
        return chosenRequest[_this.props.dataSourceConfig.text];
      }
    }, _this.handleEscKeyDown = function () {
      _this.close();
    }, _this.handleKeyDown = function (event) {
      if (_this.props.onKeyDown) _this.props.onKeyDown(event);

      switch ((0, _keycode2.default)(event)) {
        case 'enter':
          _this.close();
          var searchText = _this.state.searchText;
          if (searchText !== '') {
            _this.props.onNewRequest(searchText, -1);
          }
          break;

        case 'esc':
          _this.close();
          break;

        case 'down':
          event.preventDefault();
          _this.setState({
            open: true,
            focusTextField: false,
            anchorEl: _reactDom2.default.findDOMNode(_this.refs.searchTextField)
          });
          break;

        default:
          break;
      }
    }, _this.handleChange = function (event) {
      var searchText = event.target.value;

      // Make sure that we have a new searchText.
      // Fix an issue with a Cordova Webview
      if (searchText === _this.state.searchText) {
        return;
      }

      _this.setState({
        searchText: searchText,
        open: true,
        anchorEl: _reactDom2.default.findDOMNode(_this.refs.searchTextField)
      }, function () {
        _this.props.onUpdateInput(searchText, _this.props.dataSource, {
          source: 'change'
        });
      });
    }, _this.handleBlur = function (event) {
      if (_this.state.focusTextField && _this.timerTouchTapCloseId === null) {
        _this.timerBlurClose = setTimeout(function () {
          _this.close();
        }, 0);
      }

      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }
    }, _this.handleFocus = function (event) {
      if (!_this.state.open && _this.props.openOnFocus) {
        _this.setState({
          open: true,
          anchorEl: _reactDom2.default.findDOMNode(_this.refs.searchTextField)
        });
      }

      _this.setState({
        focusTextField: true
      });

      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(AutoComplete, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.requestsList = [];
      this.setState({
        open: this.props.open,
        searchText: this.props.searchText || ''
      });
      this.timerTouchTapCloseId = null;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.searchText !== nextProps.searchText) {
        this.setState({
          searchText: nextProps.searchText
        });
      }
      if (this.props.open !== nextProps.open) {
        this.setState({
          open: nextProps.open,
          anchorEl: _reactDom2.default.findDOMNode(this.refs.searchTextField)
        });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.timerTouchTapCloseId);
      clearTimeout(this.timerBlurClose);
    }
  }, {
    key: 'close',
    value: function close() {
      this.setState({
        open: false,
        anchorEl: null
      });

      if (this.props.onClose) {
        this.props.onClose();
      }
    }
  }, {
    key: 'blur',
    value: function blur() {
      this.refs.searchTextField.blur();
    }
  }, {
    key: 'focus',
    value: function focus() {
      this.refs.searchTextField.focus();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          anchorOrigin = _props.anchorOrigin,
          animated = _props.animated,
          animation = _props.animation,
          dataSource = _props.dataSource,
          dataSourceConfig = _props.dataSourceConfig,
          disableFocusRipple = _props.disableFocusRipple,
          errorStyle = _props.errorStyle,
          floatingLabelText = _props.floatingLabelText,
          filter = _props.filter,
          fullWidth = _props.fullWidth,
          style = _props.style,
          hintText = _props.hintText,
          maxSearchResults = _props.maxSearchResults,
          menuCloseDelay = _props.menuCloseDelay,
          textFieldStyle = _props.textFieldStyle,
          menuStyle = _props.menuStyle,
          menuProps = _props.menuProps,
          listStyle = _props.listStyle,
          targetOrigin = _props.targetOrigin,
          onBlur = _props.onBlur,
          onClose = _props.onClose,
          onFocus = _props.onFocus,
          onKeyDown = _props.onKeyDown,
          onNewRequest = _props.onNewRequest,
          onUpdateInput = _props.onUpdateInput,
          openOnFocus = _props.openOnFocus,
          popoverProps = _props.popoverProps,
          searchTextProp = _props.searchText,
          other = (0, _objectWithoutProperties3.default)(_props, ['anchorOrigin', 'animated', 'animation', 'dataSource', 'dataSourceConfig', 'disableFocusRipple', 'errorStyle', 'floatingLabelText', 'filter', 'fullWidth', 'style', 'hintText', 'maxSearchResults', 'menuCloseDelay', 'textFieldStyle', 'menuStyle', 'menuProps', 'listStyle', 'targetOrigin', 'onBlur', 'onClose', 'onFocus', 'onKeyDown', 'onNewRequest', 'onUpdateInput', 'openOnFocus', 'popoverProps', 'searchText']);

      var _ref2 = popoverProps || {},
          popoverStyle = _ref2.style,
          popoverOther = (0, _objectWithoutProperties3.default)(_ref2, ['style']);

      var _state = this.state,
          open = _state.open,
          anchorEl = _state.anchorEl,
          searchText = _state.searchText,
          focusTextField = _state.focusTextField;
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context, this.state);

      var requestsList = [];

      dataSource.every(function (item, index) {
        switch (typeof item === 'undefined' ? 'undefined' : (0, _typeof3.default)(item)) {
          case 'string':
            if (filter(searchText, item, item)) {
              requestsList.push({
                text: item,
                value: _react2.default.createElement(_MenuItem2.default, {
                  innerDivStyle: styles.innerDiv,
                  value: item,
                  primaryText: item,
                  disableFocusRipple: disableFocusRipple,
                  key: index
                })
              });
            }
            break;

          case 'object':
            if (item && typeof item[_this2.props.dataSourceConfig.text] === 'string') {
              var itemText = item[_this2.props.dataSourceConfig.text];
              if (!_this2.props.filter(searchText, itemText, item)) break;

              var itemValue = item[_this2.props.dataSourceConfig.value];
              if (itemValue.type && (itemValue.type.muiName === _MenuItem2.default.muiName || itemValue.type.muiName === _Divider2.default.muiName)) {
                requestsList.push({
                  text: itemText,
                  value: _react2.default.cloneElement(itemValue, {
                    key: index,
                    disableFocusRipple: disableFocusRipple
                  })
                });
              } else {
                requestsList.push({
                  text: itemText,
                  value: _react2.default.createElement(_MenuItem2.default, {
                    innerDivStyle: styles.innerDiv,
                    primaryText: itemText,
                    disableFocusRipple: disableFocusRipple,
                    key: index
                  })
                });
              }
            }
            break;

          default:
          // Do nothing
        }

        return !(maxSearchResults && maxSearchResults > 0 && requestsList.length === maxSearchResults);
      });

      this.requestsList = requestsList;

      var menu = open && requestsList.length > 0 && _react2.default.createElement(
        _Menu2.default,
        (0, _extends3.default)({
          ref: 'menu',
          autoWidth: false,
          disableAutoFocus: focusTextField,
          onEscKeyDown: this.handleEscKeyDown,
          initiallyKeyboardFocused: true,
          onItemTouchTap: this.handleItemTouchTap,
          onMouseDown: this.handleMouseDown,
          style: (0, _simpleAssign2.default)(styles.menu, menuStyle),
          listStyle: (0, _simpleAssign2.default)(styles.list, listStyle)
        }, menuProps),
        requestsList.map(function (i) {
          return i.value;
        })
      );

      return _react2.default.createElement(
        'div',
        { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) },
        _react2.default.createElement(_TextField2.default, (0, _extends3.default)({
          ref: 'searchTextField',
          autoComplete: 'off',
          onBlur: this.handleBlur,
          onFocus: this.handleFocus,
          onKeyDown: this.handleKeyDown,
          floatingLabelText: floatingLabelText,
          hintText: hintText,
          fullWidth: fullWidth,
          multiLine: false,
          errorStyle: errorStyle,
          style: textFieldStyle
        }, other, {
          // value and onChange are idiomatic properties often leaked.
          // We prevent their overrides in order to reduce potential bugs.
          value: searchText,
          onChange: this.handleChange
        })),
        _react2.default.createElement(
          _Popover2.default,
          (0, _extends3.default)({
            style: (0, _simpleAssign2.default)({}, styles.popover, popoverStyle),
            canAutoPosition: false,
            anchorOrigin: anchorOrigin,
            targetOrigin: targetOrigin,
            open: open,
            anchorEl: anchorEl,
            useLayerForClickAway: false,
            onRequestClose: this.handleRequestClose,
            animated: animated,
            animation: animation
          }, popoverOther),
          menu
        )
      );
    }
  }]);
  return AutoComplete;
}(_react.Component);

AutoComplete.defaultProps = {
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left'
  },
  animated: true,
  dataSourceConfig: {
    text: 'text',
    value: 'value'
  },
  disableFocusRipple: true,
  filter: function filter(searchText, key) {
    return searchText !== '' && key.indexOf(searchText) !== -1;
  },
  fullWidth: false,
  open: false,
  openOnFocus: false,
  onUpdateInput: function onUpdateInput() {},
  onNewRequest: function onNewRequest() {},
  menuCloseDelay: 300,
  targetOrigin: {
    vertical: 'top',
    horizontal: 'left'
  }
};
AutoComplete.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? AutoComplete.propTypes = {
  /**
   * Location of the anchor for the auto complete.
   */
  anchorOrigin: _propTypes4.default.origin,
  /**
   * If true, the auto complete is animated as it is toggled.
   */
  animated: _propTypes2.default.bool,
  /**
   * Override the default animation component used.
   */
  animation: _propTypes2.default.func,
  /**
   * Array of strings or nodes used to populate the list.
   */
  dataSource: _propTypes2.default.array.isRequired,
  /**
   * Config for objects list dataSource.
   *
   * @typedef {Object} dataSourceConfig
   *
   * @property {string} text `dataSource` element key used to find a string to be matched for search
   * and shown as a `TextField` input value after choosing the result.
   * @property {string} value `dataSource` element key used to find a string to be shown in search results.
   */
  dataSourceConfig: _propTypes2.default.object,
  /**
   * Disables focus ripple when true.
   */
  disableFocusRipple: _propTypes2.default.bool,
  /**
   * Override style prop for error.
   */
  errorStyle: _propTypes2.default.object,
  /**
   * The error content to display.
   */
  errorText: _propTypes2.default.node,
  /**
   * Callback function used to filter the auto complete.
   *
   * @param {string} searchText The text to search for within `dataSource`.
   * @param {string} key `dataSource` element, or `text` property on that element if it's not a string.
   * @returns {boolean} `true` indicates the auto complete list will include `key` when the input is `searchText`.
   */
  filter: _propTypes2.default.func,
  /**
   * The content to use for adding floating label element.
   */
  floatingLabelText: _propTypes2.default.node,
  /**
   * If true, the field receives the property `width: 100%`.
   */
  fullWidth: _propTypes2.default.bool,
  /**
   * The hint content to display.
   */
  hintText: _propTypes2.default.node,
  /**
   * Override style for list.
   */
  listStyle: _propTypes2.default.object,
  /**
   * The max number of search results to be shown.
   * By default it shows all the items which matches filter.
   */
  maxSearchResults: _propTypes2.default.number,
  /**
   * Delay for closing time of the menu.
   */
  menuCloseDelay: _propTypes2.default.number,
  /**
   * Props to be passed to menu.
   */
  menuProps: _propTypes2.default.object,
  /**
   * Override style for menu.
   */
  menuStyle: _propTypes2.default.object,
  /** @ignore */
  onBlur: _propTypes2.default.func,
  /**
   * Callback function fired when the menu is closed.
   */
  onClose: _propTypes2.default.func,
  /** @ignore */
  onFocus: _propTypes2.default.func,
  /** @ignore */
  onKeyDown: _propTypes2.default.func,
  /**
   * Callback function that is fired when a list item is selected, or enter is pressed in the `TextField`.
   *
   * @param {string} chosenRequest Either the `TextField` input value, if enter is pressed in the `TextField`,
   * or the text value of the corresponding list item that was selected.
   * @param {number} index The index in `dataSource` of the list item selected, or `-1` if enter is pressed in the
   * `TextField`.
   */
  onNewRequest: _propTypes2.default.func,
  /**
   * Callback function that is fired when the user updates the `TextField`.
   *
   * @param {string} searchText The auto-complete's `searchText` value.
   * @param {array} dataSource The auto-complete's `dataSource` array.
   * @param {object} params Additional information linked the update.
   */
  onUpdateInput: _propTypes2.default.func,
  /**
   * Auto complete menu is open if true.
   */
  open: _propTypes2.default.bool,
  /**
   * If true, the list item is showed when a focus event triggers.
   */
  openOnFocus: _propTypes2.default.bool,
  /**
   * Props to be passed to popover.
   */
  popoverProps: _propTypes2.default.object,
  /**
   * Text being input to auto complete.
   */
  searchText: _propTypes2.default.string,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * Origin for location of target.
   */
  targetOrigin: _propTypes4.default.origin,
  /**
   * Override the inline-styles of AutoComplete's TextField element.
   */
  textFieldStyle: _propTypes2.default.object
} : void 0;


AutoComplete.levenshteinDistance = function (searchText, key) {
  var current = [];
  var prev = void 0;
  var value = void 0;

  for (var i = 0; i <= key.length; i++) {
    for (var j = 0; j <= searchText.length; j++) {
      if (i && j) {
        if (searchText.charAt(j - 1) === key.charAt(i - 1)) value = prev;else value = Math.min(current[j], current[j - 1], prev) + 1;
      } else {
        value = i + j;
      }
      prev = current[j];
      current[j] = value;
    }
  }
  return current.pop();
};

AutoComplete.noFilter = function () {
  return true;
};

AutoComplete.defaultFilter = AutoComplete.caseSensitiveFilter = function (searchText, key) {
  return searchText !== '' && key.indexOf(searchText) !== -1;
};

AutoComplete.caseInsensitiveFilter = function (searchText, key) {
  return key.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
};

AutoComplete.levenshteinDistanceFilter = function (distanceLessThan) {
  if (distanceLessThan === undefined) {
    return AutoComplete.levenshteinDistance;
  } else if (typeof distanceLessThan !== 'number') {
    throw 'Error: AutoComplete.levenshteinDistanceFilter is a filter generator, not a filter!';
  }

  return function (s, k) {
    return AutoComplete.levenshteinDistance(s, k) < distanceLessThan;
  };
};

AutoComplete.fuzzyFilter = function (searchText, key) {
  var compareString = key.toLowerCase();
  searchText = searchText.toLowerCase();

  var searchTextIndex = 0;
  for (var index = 0; index < key.length; index++) {
    if (compareString[index] === searchText[searchTextIndex]) {
      searchTextIndex += 1;
    }
  }

  return searchTextIndex === searchText.length;
};

AutoComplete.Item = _MenuItem2.default;
AutoComplete.Divider = _Divider2.default;

exports.default = AutoComplete;

/***/ },

/***/ "./node_modules/material-ui/AutoComplete/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _AutoComplete = __webpack_require__("./node_modules/material-ui/AutoComplete/AutoComplete.js");

var _AutoComplete2 = _interopRequireDefault(_AutoComplete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _AutoComplete2.default;

/***/ },

/***/ "./node_modules/material-ui/Avatar/Avatar.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var backgroundColor = props.backgroundColor,
      color = props.color,
      size = props.size;
  var avatar = context.muiTheme.avatar;


  var styles = {
    root: {
      color: color || avatar.color,
      backgroundColor: backgroundColor || avatar.backgroundColor,
      userSelect: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: size / 2,
      borderRadius: '50%',
      height: size,
      width: size
    },
    icon: {
      color: color || avatar.color,
      width: size * 0.6,
      height: size * 0.6,
      fontSize: size * 0.6,
      margin: size * 0.2
    }
  };

  return styles;
}

var Avatar = function (_Component) {
  (0, _inherits3.default)(Avatar, _Component);

  function Avatar() {
    (0, _classCallCheck3.default)(this, Avatar);
    return (0, _possibleConstructorReturn3.default)(this, (Avatar.__proto__ || (0, _getPrototypeOf2.default)(Avatar)).apply(this, arguments));
  }

  (0, _createClass3.default)(Avatar, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          backgroundColor = _props.backgroundColor,
          icon = _props.icon,
          src = _props.src,
          style = _props.style,
          className = _props.className,
          other = (0, _objectWithoutProperties3.default)(_props, ['backgroundColor', 'icon', 'src', 'style', 'className']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      if (src) {
        return _react2.default.createElement('img', (0, _extends3.default)({
          style: prepareStyles((0, _simpleAssign2.default)(styles.root, style))
        }, other, {
          src: src,
          className: className
        }));
      } else {
        return _react2.default.createElement(
          'div',
          (0, _extends3.default)({}, other, {
            style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)),
            className: className
          }),
          icon && _react2.default.cloneElement(icon, {
            color: styles.icon.color,
            style: (0, _simpleAssign2.default)(styles.icon, icon.props.style)
          }),
          this.props.children
        );
      }
    }
  }]);
  return Avatar;
}(_react.Component);

Avatar.muiName = 'Avatar';
Avatar.defaultProps = {
  size: 40
};
Avatar.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? Avatar.propTypes = {
  /**
   * The backgroundColor of the avatar. Does not apply to image avatars.
   */
  backgroundColor: _propTypes2.default.string,
  /**
   * Can be used, for instance, to render a letter inside the avatar.
   */
  children: _propTypes2.default.node,
  /**
   * The css class name of the root `div` or `img` element.
   */
  className: _propTypes2.default.string,
  /**
   * The icon or letter's color.
   */
  color: _propTypes2.default.string,
  /**
   * This is the SvgIcon or FontIcon to be used inside the avatar.
   */
  icon: _propTypes2.default.element,
  /**
   * This is the size of the avatar in pixels.
   */
  size: _propTypes2.default.number,
  /**
   * If passed in, this component will render an img element. Otherwise, a div will be rendered.
   */
  src: _propTypes2.default.string,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : void 0;
exports.default = Avatar;

/***/ },

/***/ "./node_modules/material-ui/Avatar/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Avatar = __webpack_require__("./node_modules/material-ui/Avatar/Avatar.js");

var _Avatar2 = _interopRequireDefault(_Avatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Avatar2.default;

/***/ },

/***/ "./node_modules/material-ui/Badge/Badge.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var primary = props.primary,
      secondary = props.secondary;
  var badge = context.muiTheme.badge;


  var badgeBackgroundColor = void 0;
  var badgeTextColor = void 0;

  if (primary) {
    badgeBackgroundColor = badge.primaryColor;
    badgeTextColor = badge.primaryTextColor;
  } else if (secondary) {
    badgeBackgroundColor = badge.secondaryColor;
    badgeTextColor = badge.secondaryTextColor;
  } else {
    badgeBackgroundColor = badge.color;
    badgeTextColor = badge.textColor;
  }

  var radius = 12;
  var radius2x = Math.floor(2 * radius);

  return {
    root: {
      position: 'relative',
      display: 'inline-block',
      padding: radius2x + 'px ' + radius2x + 'px ' + radius + 'px ' + radius + 'px'
    },
    badge: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: 0,
      right: 0,
      fontWeight: badge.fontWeight,
      fontSize: radius,
      width: radius2x,
      height: radius2x,
      borderRadius: '50%',
      backgroundColor: badgeBackgroundColor,
      color: badgeTextColor
    }
  };
}

var Badge = function (_Component) {
  (0, _inherits3.default)(Badge, _Component);

  function Badge() {
    (0, _classCallCheck3.default)(this, Badge);
    return (0, _possibleConstructorReturn3.default)(this, (Badge.__proto__ || (0, _getPrototypeOf2.default)(Badge)).apply(this, arguments));
  }

  (0, _createClass3.default)(Badge, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          badgeContent = _props.badgeContent,
          badgeStyle = _props.badgeStyle,
          children = _props.children,
          primary = _props.primary,
          secondary = _props.secondary,
          style = _props.style,
          other = (0, _objectWithoutProperties3.default)(_props, ['badgeContent', 'badgeStyle', 'children', 'primary', 'secondary', 'style']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, other, { style: prepareStyles((0, _simpleAssign2.default)({}, styles.root, style)) }),
        children,
        _react2.default.createElement(
          'span',
          { style: prepareStyles((0, _simpleAssign2.default)({}, styles.badge, badgeStyle)) },
          badgeContent
        )
      );
    }
  }]);
  return Badge;
}(_react.Component);

Badge.defaultProps = {
  primary: false,
  secondary: false
};
Badge.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? Badge.propTypes = {
  /**
   * This is the content rendered within the badge.
   */
  badgeContent: _propTypes2.default.node.isRequired,
  /**
   * Override the inline-styles of the badge element.
   */
  badgeStyle: _propTypes2.default.object,
  /**
   * The badge will be added relativelty to this node.
   */
  children: _propTypes2.default.node,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * If true, the badge will use the primary badge colors.
   */
  primary: _propTypes2.default.bool,
  /**
   * If true, the badge will use the secondary badge colors.
   */
  secondary: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : void 0;
exports.default = Badge;

/***/ },

/***/ "./node_modules/material-ui/Badge/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Badge = __webpack_require__("./node_modules/material-ui/Badge/Badge.js");

var _Badge2 = _interopRequireDefault(_Badge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Badge2.default;

/***/ },

/***/ "./node_modules/material-ui/BottomNavigation/BottomNavigation.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var bottomNavigation = context.muiTheme.bottomNavigation;


  var styles = {
    root: {
      position: 'relative',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: bottomNavigation.backgroundColor,
      height: bottomNavigation.height
    },
    item: {
      flex: '1'
    }
  };

  return styles;
}

var BottomNavigation = function BottomNavigation(props, context) {
  var children = props.children,
      style = props.style,
      selectedIndex = props.selectedIndex,
      other = (0, _objectWithoutProperties3.default)(props, ['children', 'style', 'selectedIndex']);
  var prepareStyles = context.muiTheme.prepareStyles;

  var styles = getStyles(props, context);

  var preparedChildren = _react.Children.map(children, function (child, index) {
    return (0, _react.cloneElement)(child, {
      style: (0, _simpleAssign2.default)({}, styles.item, child.props.style),
      selected: index === selectedIndex
    });
  });

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({}, other, { style: prepareStyles((0, _simpleAssign2.default)({}, styles.root, style)) }),
    preparedChildren
  );
};

undefined !== "production" ? BottomNavigation.propTypes = {
  /**
   * The `BottomNavigationItem`s to populate the element with.
   */
  children: _propTypes2.default.node,
  /**
   * The index of the currently selected navigation item.
   */
  selectedIndex: _propTypes2.default.number,
  /**
   * @ignore
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : void 0;

BottomNavigation.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};

exports.default = BottomNavigation;

/***/ },

/***/ "./node_modules/material-ui/BottomNavigation/BottomNavigationItem.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _EnhancedButton = __webpack_require__("./node_modules/material-ui/internal/EnhancedButton.js");

var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var selected = props.selected;
  var bottomNavigation = context.muiTheme.bottomNavigation;


  var color = selected ? bottomNavigation.selectedColor : bottomNavigation.unselectedColor;

  var styles = {
    root: {
      transition: 'padding-top 0.3s',
      paddingTop: selected ? 6 : 8,
      paddingBottom: 10,
      paddingLeft: 12,
      paddingRight: 12,
      minWidth: 80,
      maxWidth: 168
    },
    label: {
      fontSize: selected ? bottomNavigation.selectedFontSize : bottomNavigation.unselectedFontSize,
      transition: 'color 0.3s, font-size 0.3s',
      color: color
    },
    icon: {
      display: 'block',
      /**
       * Used to ensure SVG icons are centered
       */
      width: '100%'
    },
    iconColor: color
  };

  return styles;
}

var BottomNavigationItem = function BottomNavigationItem(props, context) {
  var label = props.label,
      icon = props.icon,
      style = props.style,
      other = (0, _objectWithoutProperties3.default)(props, ['label', 'icon', 'style']);
  var prepareStyles = context.muiTheme.prepareStyles;

  var styles = getStyles(props, context);

  var styledIcon = (0, _react.cloneElement)(icon, {
    style: (0, _simpleAssign2.default)({}, styles.icon, icon.props.style),
    color: icon.props.color || styles.iconColor
  });

  return _react2.default.createElement(
    _EnhancedButton2.default,
    (0, _extends3.default)({}, other, { style: (0, _simpleAssign2.default)({}, styles.root, style) }),
    styledIcon,
    _react2.default.createElement(
      'div',
      { style: prepareStyles(styles.label) },
      label
    )
  );
};

undefined !== "production" ? BottomNavigationItem.propTypes = {
  /**
   * Set the icon representing the view for this item.
   */
  icon: _propTypes2.default.node,
  /**
   * Set the label describing the view for this item.
   */
  label: _propTypes2.default.node,
  /**
   * @ignore
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : void 0;

BottomNavigationItem.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};

exports.default = BottomNavigationItem;

/***/ },

/***/ "./node_modules/material-ui/BottomNavigation/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.BottomNavigationItem = exports.BottomNavigation = undefined;

var _BottomNavigation2 = __webpack_require__("./node_modules/material-ui/BottomNavigation/BottomNavigation.js");

var _BottomNavigation3 = _interopRequireDefault(_BottomNavigation2);

var _BottomNavigationItem2 = __webpack_require__("./node_modules/material-ui/BottomNavigation/BottomNavigationItem.js");

var _BottomNavigationItem3 = _interopRequireDefault(_BottomNavigationItem2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.BottomNavigation = _BottomNavigation3.default;
exports.BottomNavigationItem = _BottomNavigationItem3.default;
exports.default = _BottomNavigation3.default;

/***/ },

/***/ "./node_modules/material-ui/Card/Card.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Paper = __webpack_require__("./node_modules/material-ui/Paper/index.js");

var _Paper2 = _interopRequireDefault(_Paper);

var _CardExpandable = __webpack_require__("./node_modules/material-ui/Card/CardExpandable.js");

var _CardExpandable2 = _interopRequireDefault(_CardExpandable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Card = function (_Component) {
  (0, _inherits3.default)(Card, _Component);

  function Card() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Card);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Card.__proto__ || (0, _getPrototypeOf2.default)(Card)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      expanded: null
    }, _this.handleExpanding = function (event) {
      event.preventDefault();
      var newExpandedState = !_this.state.expanded;
      // no automatic state update when the component is controlled
      if (_this.props.expanded === null) {
        _this.setState({ expanded: newExpandedState });
      }
      if (_this.props.onExpandChange) {
        _this.props.onExpandChange(newExpandedState);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Card, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({
        expanded: this.props.expanded === null ? this.props.initiallyExpanded === true : this.props.expanded
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      // update the state when the component is controlled.
      if (nextProps.expanded !== null) this.setState({ expanded: nextProps.expanded });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          style = _props.style,
          containerStyle = _props.containerStyle,
          children = _props.children,
          expandable = _props.expandable,
          expandedProp = _props.expanded,
          initiallyExpanded = _props.initiallyExpanded,
          onExpandChange = _props.onExpandChange,
          other = (0, _objectWithoutProperties3.default)(_props, ['style', 'containerStyle', 'children', 'expandable', 'expanded', 'initiallyExpanded', 'onExpandChange']);


      var lastElement = void 0;
      var expanded = this.state.expanded;
      var newChildren = _react2.default.Children.map(children, function (currentChild) {
        var doClone = false;
        var newChild = undefined;
        var newProps = {};
        var element = currentChild;
        if (!currentChild || !currentChild.props) {
          return null;
        }
        if (expanded === false && currentChild.props.expandable === true) return;
        if (currentChild.props.actAsExpander === true) {
          doClone = true;
          newProps.onTouchTap = _this2.handleExpanding;
          newProps.style = (0, _simpleAssign2.default)({ cursor: 'pointer' }, currentChild.props.style);
        }
        if (currentChild.props.showExpandableButton === true) {
          doClone = true;
          newChild = _react2.default.createElement(_CardExpandable2.default, {
            closeIcon: currentChild.props.closeIcon,
            expanded: expanded,
            onExpanding: _this2.handleExpanding,
            openIcon: currentChild.props.openIcon
          });
        }
        if (doClone) {
          element = _react2.default.cloneElement(currentChild, newProps, currentChild.props.children, newChild);
        }
        lastElement = element;
        return element;
      }, this);

      // If the last element is text or a title we should add
      // 8px padding to the bottom of the card
      var addBottomPadding = lastElement && (lastElement.type.muiName === 'CardText' || lastElement.type.muiName === 'CardTitle');

      var mergedStyles = (0, _simpleAssign2.default)({
        zIndex: 1
      }, style);
      var containerMergedStyles = (0, _simpleAssign2.default)({
        paddingBottom: addBottomPadding ? 8 : 0
      }, containerStyle);

      return _react2.default.createElement(
        _Paper2.default,
        (0, _extends3.default)({}, other, { style: mergedStyles }),
        _react2.default.createElement(
          'div',
          { style: containerMergedStyles },
          newChildren
        )
      );
    }
  }]);
  return Card;
}(_react.Component);

Card.defaultProps = {
  expandable: false,
  expanded: null,
  initiallyExpanded: false
};
undefined !== "production" ? Card.propTypes = {
  /**
   * Can be used to render elements inside the Card.
   */
  children: _propTypes2.default.node,
  /**
   * Override the inline-styles of the container element.
   */
  containerStyle: _propTypes2.default.object,
  /**
   * If true, this card component is expandable. Can be set on any child of the `Card` component.
   */
  expandable: _propTypes2.default.bool,
  /**
   * Whether this card is expanded.
   * If `true` or `false` the component is controlled.
   * if `null` the component is uncontrolled.
   */
  expanded: _propTypes2.default.bool,
  /**
   * Whether this card is initially expanded.
   */
  initiallyExpanded: _propTypes2.default.bool,
  /**
   * Callback function fired when the `expandable` state of the card has changed.
   *
   * @param {boolean} newExpandedState Represents the new `expanded` state of the card.
   */
  onExpandChange: _propTypes2.default.func,
  /**
   * If true, this card component will include a button to expand the card. `CardTitle`,
   * `CardHeader` and `CardActions` implement `showExpandableButton`. Any child component
   * of `Card` can implements `showExpandableButton` or forwards the property to a child
   * component supporting it.
   */
  showExpandableButton: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : void 0;
exports.default = Card;

/***/ },

/***/ "./node_modules/material-ui/Card/CardActions.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles() {
  return {
    root: {
      padding: 8,
      position: 'relative'
    },
    action: {
      marginRight: 8
    }
  };
}

var CardActions = function (_Component) {
  (0, _inherits3.default)(CardActions, _Component);

  function CardActions() {
    (0, _classCallCheck3.default)(this, CardActions);
    return (0, _possibleConstructorReturn3.default)(this, (CardActions.__proto__ || (0, _getPrototypeOf2.default)(CardActions)).apply(this, arguments));
  }

  (0, _createClass3.default)(CardActions, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          actAsExpander = _props.actAsExpander,
          children = _props.children,
          expandable = _props.expandable,
          showExpandableButton = _props.showExpandableButton,
          style = _props.style,
          other = (0, _objectWithoutProperties3.default)(_props, ['actAsExpander', 'children', 'expandable', 'showExpandableButton', 'style']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      var styledChildren = _react2.default.Children.map(children, function (child) {
        if (_react2.default.isValidElement(child)) {
          return _react2.default.cloneElement(child, {
            style: (0, _simpleAssign2.default)({}, styles.action, child.props.style)
          });
        }
      });

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, other, { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) }),
        styledChildren
      );
    }
  }]);
  return CardActions;
}(_react.Component);

CardActions.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? CardActions.propTypes = {
  /**
   * If true, a click on this card component expands the card.
   */
  actAsExpander: _propTypes2.default.bool,
  /**
   * Can be used to render elements inside the Card Action.
   */
  children: _propTypes2.default.node,
  /**
   * If true, this card component is expandable.
   */
  expandable: _propTypes2.default.bool,
  /**
   * If true, this card component will include a button to expand the card.
   */
  showExpandableButton: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : void 0;
exports.default = CardActions;

/***/ },

/***/ "./node_modules/material-ui/Card/CardExpandable.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _keyboardArrowUp = __webpack_require__("./node_modules/material-ui/svg-icons/hardware/keyboard-arrow-up.js");

var _keyboardArrowUp2 = _interopRequireDefault(_keyboardArrowUp);

var _keyboardArrowDown = __webpack_require__("./node_modules/material-ui/svg-icons/hardware/keyboard-arrow-down.js");

var _keyboardArrowDown2 = _interopRequireDefault(_keyboardArrowDown);

var _IconButton = __webpack_require__("./node_modules/material-ui/IconButton/index.js");

var _IconButton2 = _interopRequireDefault(_IconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles() {
  return {
    root: {
      top: 0,
      bottom: 0,
      right: 4,
      margin: 'auto',
      position: 'absolute'
    }
  };
}

var CardExpandable = function (_Component) {
  (0, _inherits3.default)(CardExpandable, _Component);

  function CardExpandable() {
    (0, _classCallCheck3.default)(this, CardExpandable);
    return (0, _possibleConstructorReturn3.default)(this, (CardExpandable.__proto__ || (0, _getPrototypeOf2.default)(CardExpandable)).apply(this, arguments));
  }

  (0, _createClass3.default)(CardExpandable, [{
    key: 'render',
    value: function render() {
      var styles = getStyles(this.props, this.context);

      return _react2.default.createElement(
        _IconButton2.default,
        {
          style: (0, _simpleAssign2.default)(styles.root, this.props.style),
          onTouchTap: this.props.onExpanding
        },
        this.props.expanded ? this.props.openIcon : this.props.closeIcon
      );
    }
  }]);
  return CardExpandable;
}(_react.Component);

CardExpandable.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
CardExpandable.defaultProps = {
  closeIcon: _react2.default.createElement(_keyboardArrowDown2.default, null),
  openIcon: _react2.default.createElement(_keyboardArrowUp2.default, null)
};
undefined !== "production" ? CardExpandable.propTypes = {
  closeIcon: _propTypes2.default.node,
  expanded: _propTypes2.default.bool,
  onExpanding: _propTypes2.default.func.isRequired,
  openIcon: _propTypes2.default.node,
  style: _propTypes2.default.object
} : void 0;
exports.default = CardExpandable;

/***/ },

/***/ "./node_modules/material-ui/Card/CardHeader.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Avatar = __webpack_require__("./node_modules/material-ui/Avatar/index.js");

var _Avatar2 = _interopRequireDefault(_Avatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var card = context.muiTheme.card;


  return {
    root: {
      padding: 16,
      fontWeight: card.fontWeight,
      boxSizing: 'border-box',
      position: 'relative',
      whiteSpace: 'nowrap'
    },
    text: {
      display: 'inline-block',
      verticalAlign: 'top',
      whiteSpace: 'normal',
      paddingRight: '90px'
    },
    avatar: {
      marginRight: 16
    },
    title: {
      color: props.titleColor || card.titleColor,
      display: 'block',
      fontSize: 15
    },
    subtitle: {
      color: props.subtitleColor || card.subtitleColor,
      display: 'block',
      fontSize: 14
    }
  };
}

var CardHeader = function (_Component) {
  (0, _inherits3.default)(CardHeader, _Component);

  function CardHeader() {
    (0, _classCallCheck3.default)(this, CardHeader);
    return (0, _possibleConstructorReturn3.default)(this, (CardHeader.__proto__ || (0, _getPrototypeOf2.default)(CardHeader)).apply(this, arguments));
  }

  (0, _createClass3.default)(CardHeader, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          actAsExpander = _props.actAsExpander,
          avatarProp = _props.avatar,
          children = _props.children,
          closeIcon = _props.closeIcon,
          expandable = _props.expandable,
          openIcon = _props.openIcon,
          showExpandableButton = _props.showExpandableButton,
          style = _props.style,
          subtitle = _props.subtitle,
          subtitleColor = _props.subtitleColor,
          subtitleStyle = _props.subtitleStyle,
          textStyle = _props.textStyle,
          title = _props.title,
          titleColor = _props.titleColor,
          titleStyle = _props.titleStyle,
          other = (0, _objectWithoutProperties3.default)(_props, ['actAsExpander', 'avatar', 'children', 'closeIcon', 'expandable', 'openIcon', 'showExpandableButton', 'style', 'subtitle', 'subtitleColor', 'subtitleStyle', 'textStyle', 'title', 'titleColor', 'titleStyle']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      var avatar = avatarProp;

      if ((0, _react.isValidElement)(avatarProp)) {
        avatar = _react2.default.cloneElement(avatar, {
          style: (0, _simpleAssign2.default)(styles.avatar, avatar.props.style)
        });
      } else if (avatar !== null) {
        avatar = _react2.default.createElement(_Avatar2.default, { src: avatarProp, style: styles.avatar });
      }

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, other, { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) }),
        avatar,
        _react2.default.createElement(
          'div',
          { style: prepareStyles((0, _simpleAssign2.default)(styles.text, textStyle)) },
          _react2.default.createElement(
            'span',
            { style: prepareStyles((0, _simpleAssign2.default)(styles.title, titleStyle)) },
            title
          ),
          _react2.default.createElement(
            'span',
            { style: prepareStyles((0, _simpleAssign2.default)(styles.subtitle, subtitleStyle)) },
            subtitle
          )
        ),
        children
      );
    }
  }]);
  return CardHeader;
}(_react.Component);

CardHeader.muiName = 'CardHeader';
CardHeader.defaultProps = {
  avatar: null
};
CardHeader.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? CardHeader.propTypes = {
  /**
   * If true, a click on this card component expands the card.
   */
  actAsExpander: _propTypes2.default.bool,
  /**
   * This is the [Avatar](/#/components/avatar) element to be displayed on the Card Header.
   * If `avatar` is an `Avatar` or other element, it will be rendered.
   * If `avatar` is a string, it will be used as the image `src` for an `Avatar`.
   */
  avatar: _propTypes2.default.node,
  /**
   * Can be used to render elements inside the Card Header.
   */
  children: _propTypes2.default.node,
  /**
   * Can be used to pass a closeIcon if you don't like the default expandable close Icon.
   */
  closeIcon: _propTypes2.default.node,
  /**
   * If true, this card component is expandable.
   */
  expandable: _propTypes2.default.bool,
  /**
   * Can be used to pass a openIcon if you don't like the default expandable open Icon.
   */
  openIcon: _propTypes2.default.node,
  /**
   * If true, this card component will include a button to expand the card.
   */
  showExpandableButton: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * Can be used to render a subtitle in Card Header.
   */
  subtitle: _propTypes2.default.node,
  /**
   * Override the subtitle color.
   */
  subtitleColor: _propTypes2.default.string,
  /**
   * Override the inline-styles of the subtitle.
   */
  subtitleStyle: _propTypes2.default.object,
  /**
   * Override the inline-styles of the text.
   */
  textStyle: _propTypes2.default.object,
  /**
   * Can be used to render a title in Card Header.
   */
  title: _propTypes2.default.node,
  /**
   * Override the title color.
   */
  titleColor: _propTypes2.default.string,
  /**
   * Override the inline-styles of the title.
   */
  titleStyle: _propTypes2.default.object
} : void 0;
exports.default = CardHeader;

/***/ },

/***/ "./node_modules/material-ui/Card/CardMedia.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var cardMedia = context.muiTheme.cardMedia;


  return {
    root: {
      position: 'relative'
    },
    overlayContainer: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0
    },
    overlay: {
      height: '100%',
      position: 'relative'
    },
    overlayContent: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: 0,
      paddingTop: 8,
      background: cardMedia.overlayContentBackground
    },
    media: {},
    mediaChild: {
      verticalAlign: 'top',
      maxWidth: '100%',
      minWidth: '100%',
      width: '100%'
    }
  };
}

var CardMedia = function (_Component) {
  (0, _inherits3.default)(CardMedia, _Component);

  function CardMedia() {
    (0, _classCallCheck3.default)(this, CardMedia);
    return (0, _possibleConstructorReturn3.default)(this, (CardMedia.__proto__ || (0, _getPrototypeOf2.default)(CardMedia)).apply(this, arguments));
  }

  (0, _createClass3.default)(CardMedia, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          actAsExpander = _props.actAsExpander,
          children = _props.children,
          expandable = _props.expandable,
          mediaStyle = _props.mediaStyle,
          overlay = _props.overlay,
          overlayContainerStyle = _props.overlayContainerStyle,
          overlayContentStyle = _props.overlayContentStyle,
          overlayStyle = _props.overlayStyle,
          style = _props.style,
          other = (0, _objectWithoutProperties3.default)(_props, ['actAsExpander', 'children', 'expandable', 'mediaStyle', 'overlay', 'overlayContainerStyle', 'overlayContentStyle', 'overlayStyle', 'style']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);
      var rootStyle = (0, _simpleAssign2.default)(styles.root, style);
      var extendedMediaStyle = (0, _simpleAssign2.default)(styles.media, mediaStyle);
      var extendedOverlayContainerStyle = (0, _simpleAssign2.default)(styles.overlayContainer, overlayContainerStyle);
      var extendedOverlayContentStyle = (0, _simpleAssign2.default)(styles.overlayContent, overlayContentStyle);
      var extendedOverlayStyle = (0, _simpleAssign2.default)(styles.overlay, overlayStyle);
      var titleColor = this.context.muiTheme.cardMedia.titleColor;
      var subtitleColor = this.context.muiTheme.cardMedia.subtitleColor;
      var color = this.context.muiTheme.cardMedia.color;

      var styledChildren = _react2.default.Children.map(children, function (child) {
        return _react2.default.cloneElement(child, {
          style: prepareStyles((0, _simpleAssign2.default)({}, styles.mediaChild, child.props.style))
        });
      });

      var overlayChildren = _react2.default.Children.map(overlay, function (child) {
        if (child.type.muiName === 'CardHeader' || child.type.muiName === 'CardTitle') {
          return _react2.default.cloneElement(child, {
            titleColor: titleColor,
            subtitleColor: subtitleColor
          });
        } else if (child.type.muiName === 'CardText') {
          return _react2.default.cloneElement(child, {
            color: color
          });
        } else {
          return child;
        }
      });

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, other, { style: prepareStyles(rootStyle) }),
        _react2.default.createElement(
          'div',
          { style: prepareStyles(extendedMediaStyle) },
          styledChildren
        ),
        overlay ? _react2.default.createElement(
          'div',
          { style: prepareStyles(extendedOverlayContainerStyle) },
          _react2.default.createElement(
            'div',
            { style: prepareStyles(extendedOverlayStyle) },
            _react2.default.createElement(
              'div',
              { style: prepareStyles(extendedOverlayContentStyle) },
              overlayChildren
            )
          )
        ) : ''
      );
    }
  }]);
  return CardMedia;
}(_react.Component);

CardMedia.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? CardMedia.propTypes = {
  /**
   * If true, a click on this card component expands the card.
   */
  actAsExpander: _propTypes2.default.bool,
  /**
   * Can be used to render elements inside the Card Media.
   */
  children: _propTypes2.default.node,
  /**
   * If true, this card component is expandable.
   */
  expandable: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the Card Media.
   */
  mediaStyle: _propTypes2.default.object,
  /**
   * Can be used to render overlay element in Card Media.
   */
  overlay: _propTypes2.default.node,
  /**
   * Override the inline-styles of the overlay container.
   */
  overlayContainerStyle: _propTypes2.default.object,
  /**
   * Override the inline-styles of the overlay content.
   */
  overlayContentStyle: _propTypes2.default.object,
  /**
   * Override the inline-styles of the overlay element.
   */
  overlayStyle: _propTypes2.default.object,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : void 0;
exports.default = CardMedia;

/***/ },

/***/ "./node_modules/material-ui/Card/CardText.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var cardText = context.muiTheme.cardText;


  return {
    root: {
      padding: 16,
      fontSize: 14,
      color: props.color || cardText.textColor
    }
  };
}

var CardText = function (_Component) {
  (0, _inherits3.default)(CardText, _Component);

  function CardText() {
    (0, _classCallCheck3.default)(this, CardText);
    return (0, _possibleConstructorReturn3.default)(this, (CardText.__proto__ || (0, _getPrototypeOf2.default)(CardText)).apply(this, arguments));
  }

  (0, _createClass3.default)(CardText, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          actAsExpander = _props.actAsExpander,
          children = _props.children,
          color = _props.color,
          expandable = _props.expandable,
          style = _props.style,
          other = (0, _objectWithoutProperties3.default)(_props, ['actAsExpander', 'children', 'color', 'expandable', 'style']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);
      var rootStyle = (0, _simpleAssign2.default)(styles.root, style);

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, other, { style: prepareStyles(rootStyle) }),
        children
      );
    }
  }]);
  return CardText;
}(_react.Component);

CardText.muiName = 'CardText';
CardText.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? CardText.propTypes = {
  /**
   * If true, a click on this card component expands the card.
   */
  actAsExpander: _propTypes2.default.bool,
  /**
   * Can be used to render elements inside the Card Text.
   */
  children: _propTypes2.default.node,
  /**
   * Override the CardText color.
   */
  color: _propTypes2.default.string,
  /**
   * If true, this card component is expandable.
   */
  expandable: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : void 0;
exports.default = CardText;

/***/ },

/***/ "./node_modules/material-ui/Card/CardTitle.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var card = context.muiTheme.card;


  return {
    root: {
      padding: 16,
      position: 'relative'
    },
    title: {
      fontSize: 24,
      color: props.titleColor || card.titleColor,
      display: 'block',
      lineHeight: '36px'
    },
    subtitle: {
      fontSize: 14,
      color: props.subtitleColor || card.subtitleColor,
      display: 'block'
    }
  };
}

var CardTitle = function (_Component) {
  (0, _inherits3.default)(CardTitle, _Component);

  function CardTitle() {
    (0, _classCallCheck3.default)(this, CardTitle);
    return (0, _possibleConstructorReturn3.default)(this, (CardTitle.__proto__ || (0, _getPrototypeOf2.default)(CardTitle)).apply(this, arguments));
  }

  (0, _createClass3.default)(CardTitle, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          actAsExpander = _props.actAsExpander,
          children = _props.children,
          expandable = _props.expandable,
          showExpandableButton = _props.showExpandableButton,
          style = _props.style,
          subtitle = _props.subtitle,
          subtitleColor = _props.subtitleColor,
          subtitleStyle = _props.subtitleStyle,
          title = _props.title,
          titleColor = _props.titleColor,
          titleStyle = _props.titleStyle,
          other = (0, _objectWithoutProperties3.default)(_props, ['actAsExpander', 'children', 'expandable', 'showExpandableButton', 'style', 'subtitle', 'subtitleColor', 'subtitleStyle', 'title', 'titleColor', 'titleStyle']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);
      var rootStyle = (0, _simpleAssign2.default)({}, styles.root, style);
      var extendedTitleStyle = (0, _simpleAssign2.default)({}, styles.title, titleStyle);
      var extendedSubtitleStyle = (0, _simpleAssign2.default)({}, styles.subtitle, subtitleStyle);

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, other, { style: prepareStyles(rootStyle) }),
        _react2.default.createElement(
          'span',
          { style: prepareStyles(extendedTitleStyle) },
          title
        ),
        _react2.default.createElement(
          'span',
          { style: prepareStyles(extendedSubtitleStyle) },
          subtitle
        ),
        children
      );
    }
  }]);
  return CardTitle;
}(_react.Component);

CardTitle.muiName = 'CardTitle';
CardTitle.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? CardTitle.propTypes = {
  /**
   * If true, a click on this card component expands the card.
   */
  actAsExpander: _propTypes2.default.bool,
  /**
   * Can be used to render elements inside the Card Title.
   */
  children: _propTypes2.default.node,
  /**
   * If true, this card component is expandable.
   */
  expandable: _propTypes2.default.bool,
  /**
   * If true, this card component will include a button to expand the card.
   */
  showExpandableButton: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * Can be used to render a subtitle in the Card Title.
   */
  subtitle: _propTypes2.default.node,
  /**
   * Override the subtitle color.
   */
  subtitleColor: _propTypes2.default.string,
  /**
   * Override the inline-styles of the subtitle.
   */
  subtitleStyle: _propTypes2.default.object,
  /**
   * Can be used to render a title in the Card Title.
   */
  title: _propTypes2.default.node,
  /**
   * Override the title color.
   */
  titleColor: _propTypes2.default.string,
  /**
   * Override the inline-styles of the title.
   */
  titleStyle: _propTypes2.default.object
} : void 0;
exports.default = CardTitle;

/***/ },

/***/ "./node_modules/material-ui/Card/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CardExpandable = exports.CardActions = exports.CardText = exports.CardMedia = exports.CardTitle = exports.CardHeader = exports.Card = undefined;

var _Card2 = __webpack_require__("./node_modules/material-ui/Card/Card.js");

var _Card3 = _interopRequireDefault(_Card2);

var _CardHeader2 = __webpack_require__("./node_modules/material-ui/Card/CardHeader.js");

var _CardHeader3 = _interopRequireDefault(_CardHeader2);

var _CardTitle2 = __webpack_require__("./node_modules/material-ui/Card/CardTitle.js");

var _CardTitle3 = _interopRequireDefault(_CardTitle2);

var _CardMedia2 = __webpack_require__("./node_modules/material-ui/Card/CardMedia.js");

var _CardMedia3 = _interopRequireDefault(_CardMedia2);

var _CardText2 = __webpack_require__("./node_modules/material-ui/Card/CardText.js");

var _CardText3 = _interopRequireDefault(_CardText2);

var _CardActions2 = __webpack_require__("./node_modules/material-ui/Card/CardActions.js");

var _CardActions3 = _interopRequireDefault(_CardActions2);

var _CardExpandable2 = __webpack_require__("./node_modules/material-ui/Card/CardExpandable.js");

var _CardExpandable3 = _interopRequireDefault(_CardExpandable2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Card = _Card3.default;
exports.CardHeader = _CardHeader3.default;
exports.CardTitle = _CardTitle3.default;
exports.CardMedia = _CardMedia3.default;
exports.CardText = _CardText3.default;
exports.CardActions = _CardActions3.default;
exports.CardExpandable = _CardExpandable3.default;
exports.default = _Card3.default;

/***/ },

/***/ "./node_modules/material-ui/Checkbox/Checkbox.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _EnhancedSwitch = __webpack_require__("./node_modules/material-ui/internal/EnhancedSwitch.js");

var _EnhancedSwitch2 = _interopRequireDefault(_EnhancedSwitch);

var _transitions = __webpack_require__("./node_modules/material-ui/styles/transitions.js");

var _transitions2 = _interopRequireDefault(_transitions);

var _checkBoxOutlineBlank = __webpack_require__("./node_modules/material-ui/svg-icons/toggle/check-box-outline-blank.js");

var _checkBoxOutlineBlank2 = _interopRequireDefault(_checkBoxOutlineBlank);

var _checkBox = __webpack_require__("./node_modules/material-ui/svg-icons/toggle/check-box.js");

var _checkBox2 = _interopRequireDefault(_checkBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var checkbox = context.muiTheme.checkbox;

  var checkboxSize = 24;

  return {
    icon: {
      height: checkboxSize,
      width: checkboxSize
    },
    check: {
      position: 'absolute',
      opacity: 0,
      transform: 'scale(0)',
      transitionOrigin: '50% 50%',
      transition: _transitions2.default.easeOut('450ms', 'opacity', '0ms') + ', ' + _transitions2.default.easeOut('0ms', 'transform', '450ms'),
      fill: checkbox.checkedColor
    },
    checkWhenSwitched: {
      opacity: 1,
      transform: 'scale(1)',
      transition: _transitions2.default.easeOut('0ms', 'opacity', '0ms') + ', ' + _transitions2.default.easeOut('800ms', 'transform', '0ms')
    },
    checkWhenDisabled: {
      fill: checkbox.disabledColor
    },
    box: {
      position: 'absolute',
      opacity: 1,
      fill: checkbox.boxColor,
      transition: _transitions2.default.easeOut('1000ms', 'opacity', '200ms')
    },
    boxWhenSwitched: {
      opacity: 0,
      transition: _transitions2.default.easeOut('650ms', 'opacity', '150ms'),
      fill: checkbox.checkedColor
    },
    boxWhenDisabled: {
      fill: props.checked ? 'transparent' : checkbox.disabledColor
    },
    label: {
      color: props.disabled ? checkbox.labelDisabledColor : checkbox.labelColor
    }
  };
}

var Checkbox = function (_Component) {
  (0, _inherits3.default)(Checkbox, _Component);

  function Checkbox() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Checkbox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Checkbox.__proto__ || (0, _getPrototypeOf2.default)(Checkbox)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      switched: false
    }, _this.handleStateChange = function (newSwitched) {
      _this.setState({
        switched: newSwitched
      });
    }, _this.handleCheck = function (event, isInputChecked) {
      if (_this.props.onCheck) {
        _this.props.onCheck(event, isInputChecked);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Checkbox, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          checked = _props.checked,
          defaultChecked = _props.defaultChecked,
          valueLink = _props.valueLink;


      if (checked || defaultChecked || valueLink && valueLink.value) {
        this.setState({
          switched: true
        });
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.checked !== nextProps.checked) {
        this.setState({
          switched: nextProps.checked
        });
      }
    }
  }, {
    key: 'isChecked',
    value: function isChecked() {
      return this.refs.enhancedSwitch.isSwitched();
    }
  }, {
    key: 'setChecked',
    value: function setChecked(newCheckedValue) {
      this.refs.enhancedSwitch.setSwitched(newCheckedValue);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          iconStyle = _props2.iconStyle,
          onCheck = _props2.onCheck,
          checkedIcon = _props2.checkedIcon,
          uncheckedIcon = _props2.uncheckedIcon,
          other = (0, _objectWithoutProperties3.default)(_props2, ['iconStyle', 'onCheck', 'checkedIcon', 'uncheckedIcon']);

      var styles = getStyles(this.props, this.context);
      var boxStyles = (0, _simpleAssign2.default)(styles.box, this.state.switched && styles.boxWhenSwitched, iconStyle, this.props.disabled && styles.boxWhenDisabled);
      var checkStyles = (0, _simpleAssign2.default)(styles.check, this.state.switched && styles.checkWhenSwitched, iconStyle, this.props.disabled && styles.checkWhenDisabled);

      var checkedElement = checkedIcon ? _react2.default.cloneElement(checkedIcon, {
        style: (0, _simpleAssign2.default)(checkStyles, checkedIcon.props.style)
      }) : _react2.default.createElement(_checkBox2.default, {
        style: checkStyles
      });

      var unCheckedElement = uncheckedIcon ? _react2.default.cloneElement(uncheckedIcon, {
        style: (0, _simpleAssign2.default)(boxStyles, uncheckedIcon.props.style)
      }) : _react2.default.createElement(_checkBoxOutlineBlank2.default, {
        style: boxStyles
      });

      var checkboxElement = _react2.default.createElement(
        'div',
        null,
        unCheckedElement,
        checkedElement
      );

      var rippleColor = this.state.switched ? checkStyles.fill : boxStyles.fill;
      var mergedIconStyle = (0, _simpleAssign2.default)(styles.icon, iconStyle);

      var labelStyle = (0, _simpleAssign2.default)(styles.label, this.props.labelStyle);

      var enhancedSwitchProps = {
        ref: 'enhancedSwitch',
        inputType: 'checkbox',
        switched: this.state.switched,
        switchElement: checkboxElement,
        rippleColor: rippleColor,
        iconStyle: mergedIconStyle,
        onSwitch: this.handleCheck,
        labelStyle: labelStyle,
        onParentShouldUpdate: this.handleStateChange,
        labelPosition: this.props.labelPosition
      };

      return _react2.default.createElement(_EnhancedSwitch2.default, (0, _extends3.default)({}, other, enhancedSwitchProps));
    }
  }]);
  return Checkbox;
}(_react.Component);

Checkbox.defaultProps = {
  labelPosition: 'right',
  disabled: false
};
Checkbox.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? Checkbox.propTypes = {
  /**
   * Checkbox is checked if true.
   */
  checked: _propTypes2.default.bool,
  /**
   * The SvgIcon to use for the checked state.
   * This is useful to create icon toggles.
   */
  checkedIcon: _propTypes2.default.element,
  /**
   * The default state of our checkbox component.
   * **Warning:** This cannot be used in conjunction with `checked`.
   * Decide between using a controlled or uncontrolled input element and remove one of these props.
   * More info: https://fb.me/react-controlled-components
   */
  defaultChecked: _propTypes2.default.bool,
  /**
   * Disabled if true.
   */
  disabled: _propTypes2.default.bool,
  /**
   * Overrides the inline-styles of the icon element.
   */
  iconStyle: _propTypes2.default.object,
  /**
   * Overrides the inline-styles of the input element.
   */
  inputStyle: _propTypes2.default.object,
  /**
   * Where the label will be placed next to the checkbox.
   */
  labelPosition: _propTypes2.default.oneOf(['left', 'right']),
  /**
   * Overrides the inline-styles of the Checkbox element label.
   */
  labelStyle: _propTypes2.default.object,
  /**
   * Callback function that is fired when the checkbox is checked.
   *
   * @param {object} event `change` event targeting the underlying checkbox `input`.
   * @param {boolean} isInputChecked The `checked` value of the underlying checkbox `input`.
   */
  onCheck: _propTypes2.default.func,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * The SvgIcon to use for the unchecked state.
   * This is useful to create icon toggles.
   */
  uncheckedIcon: _propTypes2.default.element,
  /**
   * ValueLink for when using controlled checkbox.
   */
  valueLink: _propTypes2.default.object
} : void 0;
exports.default = Checkbox;

/***/ },

/***/ "./node_modules/material-ui/Checkbox/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Checkbox = __webpack_require__("./node_modules/material-ui/Checkbox/Checkbox.js");

var _Checkbox2 = _interopRequireDefault(_Checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Checkbox2.default;

/***/ },

/***/ "./node_modules/material-ui/Chip/Chip.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _keycode = __webpack_require__("./node_modules/keycode/index.js");

var _keycode2 = _interopRequireDefault(_keycode);

var _colorManipulator = __webpack_require__("./node_modules/material-ui/utils/colorManipulator.js");

var _EnhancedButton = __webpack_require__("./node_modules/material-ui/internal/EnhancedButton.js");

var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);

var _cancel = __webpack_require__("./node_modules/material-ui/svg-icons/navigation/cancel.js");

var _cancel2 = _interopRequireDefault(_cancel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context, state) {
  var chip = context.muiTheme.chip;


  var backgroundColor = props.backgroundColor || chip.backgroundColor;
  var focusColor = (0, _colorManipulator.emphasize)(backgroundColor, 0.08);
  var pressedColor = (0, _colorManipulator.emphasize)(backgroundColor, 0.12);

  return {
    avatar: {
      marginRight: -4
    },
    deleteIcon: {
      color: state.deleteHovered ? (0, _colorManipulator.fade)(chip.deleteIconColor, 0.4) : chip.deleteIconColor,
      cursor: 'pointer',
      margin: '4px 4px 0px -8px'
    },
    label: {
      color: props.labelColor || chip.textColor,
      fontSize: chip.fontSize,
      fontWeight: chip.fontWeight,
      lineHeight: '32px',
      paddingLeft: 12,
      paddingRight: 12,
      userSelect: 'none',
      whiteSpace: 'nowrap'
    },
    root: {
      backgroundColor: state.clicked ? pressedColor : state.focused || state.hovered ? focusColor : backgroundColor,
      borderRadius: 16,
      boxShadow: state.clicked ? chip.shadow : null,
      cursor: props.onTouchTap ? 'pointer' : 'default',
      display: 'flex',
      whiteSpace: 'nowrap',
      width: 'fit-content'
    }
  };
}

var Chip = function (_Component) {
  (0, _inherits3.default)(Chip, _Component);

  function Chip() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Chip);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Chip.__proto__ || (0, _getPrototypeOf2.default)(Chip)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      clicked: false,
      deleteHovered: false,
      focused: false,
      hovered: false
    }, _this.handleBlur = function (event) {
      _this.setState({ clicked: false, focused: false });
      _this.props.onBlur(event);
    }, _this.handleFocus = function (event) {
      if (_this.props.onTouchTap || _this.props.onRequestDelete) {
        _this.setState({ focused: true });
      }
      _this.props.onFocus(event);
    }, _this.handleKeyboardFocus = function (event, keyboardFocused) {
      if (keyboardFocused) {
        _this.handleFocus();
        _this.props.onFocus(event);
      } else {
        _this.handleBlur();
      }

      _this.props.onKeyboardFocus(event, keyboardFocused);
    }, _this.handleKeyDown = function (event) {
      if ((0, _keycode2.default)(event) === 'backspace') {
        event.preventDefault();
        if (_this.props.onRequestDelete) {
          _this.props.onRequestDelete(event);
        }
      }
      _this.props.onKeyDown(event);
    }, _this.handleMouseDown = function (event) {
      // Only listen to left clicks
      if (event.button === 0) {
        event.stopPropagation();
        if (_this.props.onTouchTap) {
          _this.setState({ clicked: true });
        }
      }
      _this.props.onMouseDown(event);
    }, _this.handleMouseEnter = function (event) {
      if (_this.props.onTouchTap) {
        _this.setState({ hovered: true });
      }
      _this.props.onMouseEnter(event);
    }, _this.handleMouseEnterDeleteIcon = function () {
      _this.setState({ deleteHovered: true });
    }, _this.handleMouseLeave = function (event) {
      _this.setState({
        clicked: false,
        hovered: false
      });
      _this.props.onMouseLeave(event);
    }, _this.handleMouseLeaveDeleteIcon = function () {
      _this.setState({ deleteHovered: false });
    }, _this.handleMouseUp = function (event) {
      _this.setState({ clicked: false });
      _this.props.onMouseUp(event);
    }, _this.handleTouchTapDeleteIcon = function (event) {
      // Stop the event from bubbling up to the `Chip`
      event.stopPropagation();
      _this.props.onRequestDelete(event);
    }, _this.handleTouchEnd = function (event) {
      _this.setState({ clicked: false });
      _this.props.onTouchEnd(event);
    }, _this.handleTouchStart = function (event) {
      event.stopPropagation();
      if (_this.props.onTouchTap) {
        _this.setState({ clicked: true });
      }
      _this.props.onTouchStart(event);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Chip, [{
    key: 'render',
    value: function render() {
      var buttonEventHandlers = {
        onBlur: this.handleBlur,
        onFocus: this.handleFocus,
        onKeyDown: this.handleKeyDown,
        onMouseDown: this.handleMouseDown,
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        onMouseUp: this.handleMouseUp,
        onTouchEnd: this.handleTouchEnd,
        onTouchStart: this.handleTouchStart,
        onKeyboardFocus: this.handleKeyboardFocus
      };

      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context, this.state);

      var _props = this.props,
          childrenProp = _props.children,
          containerElement = _props.containerElement,
          style = _props.style,
          className = _props.className,
          labelStyle = _props.labelStyle,
          labelColor = _props.labelColor,
          backgroundColor = _props.backgroundColor,
          onRequestDelete = _props.onRequestDelete,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'containerElement', 'style', 'className', 'labelStyle', 'labelColor', 'backgroundColor', 'onRequestDelete']);


      var deletable = this.props.onRequestDelete;
      var avatar = null;

      var deleteIcon = deletable ? _react2.default.createElement(_cancel2.default, {
        color: styles.deleteIcon.color,
        style: styles.deleteIcon,
        onTouchTap: this.handleTouchTapDeleteIcon,
        onMouseEnter: this.handleMouseEnterDeleteIcon,
        onMouseLeave: this.handleMouseLeaveDeleteIcon
      }) : null;

      var children = childrenProp;
      var childCount = _react2.default.Children.count(children);

      // If the first child is an avatar, extract it and style it
      if (childCount > 1) {
        children = _react2.default.Children.toArray(children);

        if (_react2.default.isValidElement(children[0]) && children[0].type.muiName === 'Avatar') {
          avatar = children.shift();

          avatar = _react2.default.cloneElement(avatar, {
            style: (0, _simpleAssign2.default)(styles.avatar, avatar.props.style),
            size: 32
          });
        }
      }

      return _react2.default.createElement(
        _EnhancedButton2.default,
        (0, _extends3.default)({}, other, buttonEventHandlers, {
          className: className,
          containerElement: containerElement,
          disableTouchRipple: true,
          disableFocusRipple: true,
          style: (0, _simpleAssign2.default)(styles.root, style)
        }),
        avatar,
        _react2.default.createElement(
          'span',
          { style: prepareStyles((0, _simpleAssign2.default)(styles.label, labelStyle)) },
          children
        ),
        deleteIcon
      );
    }
  }]);
  return Chip;
}(_react.Component);

Chip.defaultProps = {
  containerElement: 'div', // Firefox doesn't support nested buttons
  onBlur: function onBlur() {},
  onFocus: function onFocus() {},
  onKeyDown: function onKeyDown() {},
  onKeyboardFocus: function onKeyboardFocus() {},
  onMouseDown: function onMouseDown() {},
  onMouseEnter: function onMouseEnter() {},
  onMouseLeave: function onMouseLeave() {},
  onMouseUp: function onMouseUp() {},
  onTouchEnd: function onTouchEnd() {},
  onTouchStart: function onTouchStart() {}
};
Chip.contextTypes = { muiTheme: _propTypes2.default.object.isRequired };
undefined !== "production" ? Chip.propTypes = {
  /**
   * Override the background color of the chip.
   */
  backgroundColor: _propTypes2.default.string,
  /**
   * Used to render elements inside the Chip.
   */
  children: _propTypes2.default.node,
  /**
   * CSS `className` of the root element.
   */
  className: _propTypes2.default.node,
  /**
   * The element to use as the container for the Chip. Either a string to
   * use a DOM element or a ReactElement.
   */
  containerElement: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  /**
   * Override the label color.
   */
  labelColor: _propTypes2.default.string,
  /**
   * Override the inline-styles of the label.
   */
  labelStyle: _propTypes2.default.object,
  /** @ignore */
  onBlur: _propTypes2.default.func,
  /** @ignore */
  onFocus: _propTypes2.default.func,
  /** @ignore */
  onKeyDown: _propTypes2.default.func,
  /** @ignore */
  onKeyboardFocus: _propTypes2.default.func,
  /** @ignore */
  onMouseDown: _propTypes2.default.func,
  /** @ignore */
  onMouseEnter: _propTypes2.default.func,
  /** @ignore */
  onMouseLeave: _propTypes2.default.func,
  /** @ignore */
  onMouseUp: _propTypes2.default.func,
  /**
   * Callback function fired when the delete icon is clicked. If set, the delete icon will be shown.
   * @param {object} event `touchTap` event targeting the element.
   */
  onRequestDelete: _propTypes2.default.func,
  /** @ignore */
  onTouchEnd: _propTypes2.default.func,
  /** @ignore */
  onTouchStart: _propTypes2.default.func,
  /**
   * Callback function fired when the `Chip` element is touch-tapped.
   *
   * @param {object} event TouchTap event targeting the element.
   */
  onTouchTap: _propTypes2.default.func,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : void 0;
exports.default = Chip;

/***/ },

/***/ "./node_modules/material-ui/Chip/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Chip = __webpack_require__("./node_modules/material-ui/Chip/Chip.js");

var _Chip2 = _interopRequireDefault(_Chip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Chip2.default;

/***/ },

/***/ "./node_modules/material-ui/CircularProgress/CircularProgress.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _autoPrefix = __webpack_require__("./node_modules/material-ui/utils/autoPrefix.js");

var _autoPrefix2 = _interopRequireDefault(_autoPrefix);

var _transitions = __webpack_require__("./node_modules/material-ui/styles/transitions.js");

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getRelativeValue(value, min, max) {
  var clampedValue = Math.min(Math.max(min, value), max);
  return clampedValue / (max - min);
}

function getArcLength(fraction, props) {
  return fraction * Math.PI * (props.size - props.thickness);
}

function getStyles(props, context) {
  var max = props.max,
      min = props.min,
      size = props.size,
      value = props.value;
  var palette = context.muiTheme.baseTheme.palette;


  var styles = {
    root: {
      position: 'relative',
      display: 'inline-block',
      width: size,
      height: size
    },
    wrapper: {
      width: size,
      height: size,
      display: 'inline-block',
      transition: _transitions2.default.create('transform', '20s', null, 'linear'),
      transitionTimingFunction: 'linear'
    },
    svg: {
      width: size,
      height: size,
      position: 'relative'
    },
    path: {
      stroke: props.color || palette.primary1Color,
      strokeLinecap: 'round',
      transition: _transitions2.default.create('all', '1.5s', null, 'ease-in-out')
    }
  };

  if (props.mode === 'determinate') {
    var relVal = getRelativeValue(value, min, max);
    styles.path.transition = _transitions2.default.create('all', '0.3s', null, 'linear');
    styles.path.strokeDasharray = getArcLength(relVal, props) + ', ' + getArcLength(1, props);
  }

  return styles;
}

var CircularProgress = function (_Component) {
  (0, _inherits3.default)(CircularProgress, _Component);

  function CircularProgress() {
    (0, _classCallCheck3.default)(this, CircularProgress);
    return (0, _possibleConstructorReturn3.default)(this, (CircularProgress.__proto__ || (0, _getPrototypeOf2.default)(CircularProgress)).apply(this, arguments));
  }

  (0, _createClass3.default)(CircularProgress, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.scalePath(this.refs.path);
      this.rotateWrapper(this.refs.wrapper);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.scalePathTimer);
      clearTimeout(this.rotateWrapperTimer);
    }
  }, {
    key: 'scalePath',
    value: function scalePath(path) {
      var _this2 = this;

      var step = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (this.props.mode !== 'indeterminate') return;

      step %= 3;

      if (step === 0) {
        path.style.strokeDasharray = getArcLength(0, this.props) + ', ' + getArcLength(1, this.props);
        path.style.strokeDashoffset = 0;
        path.style.transitionDuration = '0ms';
      } else if (step === 1) {
        path.style.strokeDasharray = getArcLength(0.7, this.props) + ', ' + getArcLength(1, this.props);
        path.style.strokeDashoffset = getArcLength(-0.3, this.props);
        path.style.transitionDuration = '750ms';
      } else {
        path.style.strokeDasharray = getArcLength(0.7, this.props) + ', ' + getArcLength(1, this.props);
        path.style.strokeDashoffset = getArcLength(-1, this.props);
        path.style.transitionDuration = '850ms';
      }

      this.scalePathTimer = setTimeout(function () {
        return _this2.scalePath(path, step + 1);
      }, step ? 750 : 250);
    }
  }, {
    key: 'rotateWrapper',
    value: function rotateWrapper(wrapper) {
      var _this3 = this;

      if (this.props.mode !== 'indeterminate') return;

      _autoPrefix2.default.set(wrapper.style, 'transform', 'rotate(0deg)');
      _autoPrefix2.default.set(wrapper.style, 'transitionDuration', '0ms');

      setTimeout(function () {
        _autoPrefix2.default.set(wrapper.style, 'transform', 'rotate(1800deg)');
        _autoPrefix2.default.set(wrapper.style, 'transitionDuration', '10s');
        _autoPrefix2.default.set(wrapper.style, 'transitionTimingFunction', 'linear');
      }, 50);

      this.rotateWrapperTimer = setTimeout(function () {
        return _this3.rotateWrapper(wrapper);
      }, 10050);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          innerStyle = _props.innerStyle,
          size = _props.size,
          thickness = _props.thickness,
          other = (0, _objectWithoutProperties3.default)(_props, ['style', 'innerStyle', 'size', 'thickness']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, other, { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) }),
        _react2.default.createElement(
          'div',
          { ref: 'wrapper', style: prepareStyles((0, _simpleAssign2.default)(styles.wrapper, innerStyle)) },
          _react2.default.createElement(
            'svg',
            {
              viewBox: '0 0 ' + size + ' ' + size,
              style: prepareStyles(styles.svg)
            },
            _react2.default.createElement('circle', {
              ref: 'path',
              style: prepareStyles(styles.path),
              cx: size / 2,
              cy: size / 2,
              r: (size - thickness) / 2,
              fill: 'none',
              strokeWidth: thickness,
              strokeMiterlimit: '20'
            })
          )
        )
      );
    }
  }]);
  return CircularProgress;
}(_react.Component);

CircularProgress.defaultProps = {
  mode: 'indeterminate',
  value: 0,
  min: 0,
  max: 100,
  size: 40,
  thickness: 3.5
};
CircularProgress.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? CircularProgress.propTypes = {
  /**
   * Override the progress's color.
   */
  color: _propTypes2.default.string,
  /**
   * Style for inner wrapper div.
   */
  innerStyle: _propTypes2.default.object,
  /**
   * The max value of progress, only works in determinate mode.
   */
  max: _propTypes2.default.number,
  /**
   * The min value of progress, only works in determinate mode.
   */
  min: _propTypes2.default.number,
  /**
   * The mode of show your progress, indeterminate
   * for when there is no value for progress.
   */
  mode: _propTypes2.default.oneOf(['determinate', 'indeterminate']),
  /**
   * The diameter of the progress in pixels.
   */
  size: _propTypes2.default.number,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * Stroke width in pixels.
   */
  thickness: _propTypes2.default.number,
  /**
   * The value of progress, only works in determinate mode.
   */
  value: _propTypes2.default.number
} : void 0;
exports.default = CircularProgress;

/***/ },

/***/ "./node_modules/material-ui/CircularProgress/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _CircularProgress = __webpack_require__("./node_modules/material-ui/CircularProgress/CircularProgress.js");

var _CircularProgress2 = _interopRequireDefault(_CircularProgress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _CircularProgress2.default;

/***/ },

/***/ "./node_modules/material-ui/DatePicker/Calendar.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _toConsumableArray2 = __webpack_require__("./node_modules/babel-runtime/helpers/toConsumableArray.js");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactEventListener = __webpack_require__("./node_modules/react-event-listener/lib/index.js");

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _keycode = __webpack_require__("./node_modules/keycode/index.js");

var _keycode2 = _interopRequireDefault(_keycode);

var _transitions = __webpack_require__("./node_modules/material-ui/styles/transitions.js");

var _transitions2 = _interopRequireDefault(_transitions);

var _CalendarActionButtons = __webpack_require__("./node_modules/material-ui/DatePicker/CalendarActionButtons.js");

var _CalendarActionButtons2 = _interopRequireDefault(_CalendarActionButtons);

var _CalendarMonth = __webpack_require__("./node_modules/material-ui/DatePicker/CalendarMonth.js");

var _CalendarMonth2 = _interopRequireDefault(_CalendarMonth);

var _CalendarYear = __webpack_require__("./node_modules/material-ui/DatePicker/CalendarYear.js");

var _CalendarYear2 = _interopRequireDefault(_CalendarYear);

var _CalendarToolbar = __webpack_require__("./node_modules/material-ui/DatePicker/CalendarToolbar.js");

var _CalendarToolbar2 = _interopRequireDefault(_CalendarToolbar);

var _DateDisplay = __webpack_require__("./node_modules/material-ui/DatePicker/DateDisplay.js");

var _DateDisplay2 = _interopRequireDefault(_DateDisplay);

var _SlideIn = __webpack_require__("./node_modules/material-ui/internal/SlideIn.js");

var _SlideIn2 = _interopRequireDefault(_SlideIn);

var _dateUtils = __webpack_require__("./node_modules/material-ui/DatePicker/dateUtils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var daysArray = [].concat((0, _toConsumableArray3.default)(Array(7)));

var Calendar = function (_Component) {
  (0, _inherits3.default)(Calendar, _Component);

  function Calendar() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Calendar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Calendar.__proto__ || (0, _getPrototypeOf2.default)(Calendar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      displayDate: undefined,
      displayMonthDay: true,
      selectedDate: undefined,
      transitionDirection: 'left',
      transitionEnter: true
    }, _this.handleTouchTapDay = function (event, date) {
      _this.setSelectedDate(date);
      if (_this.props.onTouchTapDay) _this.props.onTouchTapDay(event, date);
    }, _this.handleMonthChange = function (months) {
      _this.setState({
        transitionDirection: months >= 0 ? 'left' : 'right',
        displayDate: _this.props.utils.addMonths(_this.state.displayDate, months)
      });
    }, _this.handleTouchTapYear = function (event, year) {
      _this.setSelectedDate(_this.props.utils.setYear(_this.state.selectedDate, year), event);
      _this.handleTouchTapDateDisplayMonthDay();
    }, _this.handleTouchTapDateDisplayMonthDay = function () {
      _this.setState({
        displayMonthDay: true
      });
    }, _this.handleTouchTapDateDisplayYear = function () {
      _this.setState({
        displayMonthDay: false
      });
    }, _this.handleWindowKeyDown = function (event) {
      if (_this.props.open) {
        switch ((0, _keycode2.default)(event)) {
          case 'up':
            if (event.altKey && event.shiftKey) {
              _this.addSelectedYears(-1);
            } else if (event.shiftKey) {
              _this.addSelectedMonths(-1);
            } else {
              _this.addSelectedDays(-7);
            }
            break;

          case 'down':
            if (event.altKey && event.shiftKey) {
              _this.addSelectedYears(1);
            } else if (event.shiftKey) {
              _this.addSelectedMonths(1);
            } else {
              _this.addSelectedDays(7);
            }
            break;

          case 'right':
            if (event.altKey && event.shiftKey) {
              _this.addSelectedYears(1);
            } else if (event.shiftKey) {
              _this.addSelectedMonths(1);
            } else {
              _this.addSelectedDays(1);
            }
            break;

          case 'left':
            if (event.altKey && event.shiftKey) {
              _this.addSelectedYears(-1);
            } else if (event.shiftKey) {
              _this.addSelectedMonths(-1);
            } else {
              _this.addSelectedDays(-1);
            }
            break;
        }
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Calendar, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({
        displayDate: this.props.utils.getFirstDayOfMonth(this.props.initialDate),
        selectedDate: this.props.initialDate
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.initialDate !== this.props.initialDate) {
        var date = nextProps.initialDate || new Date();
        this.setState({
          displayDate: this.props.utils.getFirstDayOfMonth(date),
          selectedDate: date
        });
      }
    }
  }, {
    key: 'getMinDate',
    value: function getMinDate() {
      return this.props.minDate || this.props.utils.addYears(new Date(), -100);
    }
  }, {
    key: 'getMaxDate',
    value: function getMaxDate() {
      return this.props.maxDate || this.props.utils.addYears(new Date(), 100);
    }
  }, {
    key: 'getSelectedDate',
    value: function getSelectedDate() {
      return this.state.selectedDate;
    }
  }, {
    key: 'isSelectedDateDisabled',
    value: function isSelectedDateDisabled() {
      if (!this.state.displayMonthDay) {
        return false;
      }

      return this.refs.calendar.isSelectedDateDisabled();
    }
  }, {
    key: 'addSelectedDays',
    value: function addSelectedDays(days) {
      this.setSelectedDate(this.props.utils.addDays(this.state.selectedDate, days));
    }
  }, {
    key: 'addSelectedMonths',
    value: function addSelectedMonths(months) {
      this.setSelectedDate(this.props.utils.addMonths(this.state.selectedDate, months));
    }
  }, {
    key: 'addSelectedYears',
    value: function addSelectedYears(years) {
      this.setSelectedDate(this.props.utils.addYears(this.state.selectedDate, years));
    }
  }, {
    key: 'setDisplayDate',
    value: function setDisplayDate(date, newSelectedDate) {
      var newDisplayDate = this.props.utils.getFirstDayOfMonth(date);
      var direction = newDisplayDate > this.state.displayDate ? 'left' : 'right';

      if (newDisplayDate !== this.state.displayDate) {
        this.setState({
          displayDate: newDisplayDate,
          transitionDirection: direction,
          selectedDate: newSelectedDate || this.state.selectedDate
        });
      }
    }
  }, {
    key: 'setSelectedDate',
    value: function setSelectedDate(date) {
      var adjustedDate = date;
      var minDate = this.getMinDate();
      var maxDate = this.getMaxDate();
      if ((0, _dateUtils.isBeforeDate)(date, minDate)) {
        adjustedDate = minDate;
      } else if ((0, _dateUtils.isAfterDate)(date, maxDate)) {
        adjustedDate = maxDate;
      }

      var newDisplayDate = this.props.utils.getFirstDayOfMonth(adjustedDate);
      if (newDisplayDate !== this.state.displayDate) {
        this.setDisplayDate(newDisplayDate, adjustedDate);
      } else {
        this.setState({
          selectedDate: adjustedDate
        });
      }
    }
  }, {
    key: 'getToolbarInteractions',
    value: function getToolbarInteractions() {
      return {
        prevMonth: this.props.utils.monthDiff(this.state.displayDate, this.getMinDate()) > 0,
        nextMonth: this.props.utils.monthDiff(this.state.displayDate, this.getMaxDate()) < 0
      };
    }
  }, {
    key: 'yearSelector',
    value: function yearSelector() {
      if (!this.props.disableYearSelection) {
        return _react2.default.createElement(_CalendarYear2.default, {
          key: 'years',
          DateTimeFormat: this.props.DateTimeFormat,
          locale: this.props.locale,
          onTouchTapYear: this.handleTouchTapYear,
          selectedDate: this.state.selectedDate,
          minDate: this.getMinDate(),
          maxDate: this.getMaxDate(),
          utils: this.props.utils
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var prepareStyles = this.context.muiTheme.prepareStyles;
      var hideCalendarDate = this.props.hideCalendarDate;

      var toolbarInteractions = this.getToolbarInteractions();
      var isLandscape = this.props.mode === 'landscape';
      var calendarTextColor = this.context.muiTheme.datePicker.calendarTextColor;


      var styles = {
        root: {
          color: calendarTextColor,
          userSelect: 'none',
          width: !hideCalendarDate && isLandscape ? 479 : 310
        },
        calendar: {
          display: 'flex',
          flexDirection: 'column'
        },
        calendarContainer: {
          display: 'flex',
          alignContent: 'space-between',
          justifyContent: 'space-between',
          flexDirection: 'column',
          fontSize: 12,
          fontWeight: 400,
          padding: '0px 8px',
          transition: _transitions2.default.easeOut()
        },
        yearContainer: {
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
          height: 272,
          marginTop: 10,
          overflow: 'hidden',
          width: 310
        },
        weekTitle: {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          fontWeight: '500',
          height: 20,
          lineHeight: '15px',
          opacity: '0.5',
          textAlign: 'center'
        },
        weekTitleDay: {
          width: 42
        },
        transitionSlide: {
          height: 214
        }
      };

      var weekTitleDayStyle = prepareStyles(styles.weekTitleDay);

      var _props = this.props,
          cancelLabel = _props.cancelLabel,
          DateTimeFormat = _props.DateTimeFormat,
          firstDayOfWeek = _props.firstDayOfWeek,
          locale = _props.locale,
          okLabel = _props.okLabel,
          onTouchTapCancel = _props.onTouchTapCancel,
          onTouchTapOk = _props.onTouchTapOk,
          utils = _props.utils;


      return _react2.default.createElement(
        'div',
        { style: prepareStyles(styles.root) },
        _react2.default.createElement(_reactEventListener2.default, {
          target: 'window',
          onKeyDown: this.handleWindowKeyDown
        }),
        !hideCalendarDate && _react2.default.createElement(_DateDisplay2.default, {
          DateTimeFormat: DateTimeFormat,
          disableYearSelection: this.props.disableYearSelection,
          onTouchTapMonthDay: this.handleTouchTapDateDisplayMonthDay,
          onTouchTapYear: this.handleTouchTapDateDisplayYear,
          locale: locale,
          monthDaySelected: this.state.displayMonthDay,
          mode: this.props.mode,
          selectedDate: this.state.selectedDate
        }),
        _react2.default.createElement(
          'div',
          { style: prepareStyles(styles.calendar) },
          this.state.displayMonthDay && _react2.default.createElement(
            'div',
            { style: prepareStyles(styles.calendarContainer) },
            _react2.default.createElement(_CalendarToolbar2.default, {
              DateTimeFormat: DateTimeFormat,
              locale: locale,
              displayDate: this.state.displayDate,
              onMonthChange: this.handleMonthChange,
              prevMonth: toolbarInteractions.prevMonth,
              nextMonth: toolbarInteractions.nextMonth
            }),
            _react2.default.createElement(
              'div',
              { style: prepareStyles(styles.weekTitle) },
              daysArray.map(function (event, i) {
                return _react2.default.createElement(
                  'span',
                  { key: i, style: weekTitleDayStyle },
                  (0, _dateUtils.localizedWeekday)(DateTimeFormat, locale, i, firstDayOfWeek)
                );
              })
            ),
            _react2.default.createElement(
              _SlideIn2.default,
              { direction: this.state.transitionDirection, style: styles.transitionSlide },
              _react2.default.createElement(_CalendarMonth2.default, {
                DateTimeFormat: DateTimeFormat,
                locale: locale,
                displayDate: this.state.displayDate,
                firstDayOfWeek: this.props.firstDayOfWeek,
                key: this.state.displayDate.toDateString(),
                minDate: this.getMinDate(),
                maxDate: this.getMaxDate(),
                onTouchTapDay: this.handleTouchTapDay,
                ref: 'calendar',
                selectedDate: this.state.selectedDate,
                shouldDisableDate: this.props.shouldDisableDate,
                utils: utils
              })
            )
          ),
          !this.state.displayMonthDay && _react2.default.createElement(
            'div',
            { style: prepareStyles(styles.yearContainer) },
            this.yearSelector()
          ),
          okLabel && _react2.default.createElement(_CalendarActionButtons2.default, {
            autoOk: this.props.autoOk,
            cancelLabel: cancelLabel,
            okLabel: okLabel,
            onTouchTapCancel: onTouchTapCancel,
            onTouchTapOk: onTouchTapOk
          })
        )
      );
    }
  }]);
  return Calendar;
}(_react.Component);

Calendar.defaultProps = {
  DateTimeFormat: _dateUtils.dateTimeFormat,
  disableYearSelection: false,
  initialDate: new Date(),
  locale: 'en-US',
  utils: _dateUtils.defaultUtils
};
Calendar.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? Calendar.propTypes = {
  DateTimeFormat: _propTypes2.default.func.isRequired,
  autoOk: _propTypes2.default.bool,
  cancelLabel: _propTypes2.default.node,
  disableYearSelection: _propTypes2.default.bool,
  firstDayOfWeek: _propTypes2.default.number,
  hideCalendarDate: _propTypes2.default.bool,
  initialDate: _propTypes2.default.object,
  locale: _propTypes2.default.string.isRequired,
  maxDate: _propTypes2.default.object,
  minDate: _propTypes2.default.object,
  mode: _propTypes2.default.oneOf(['portrait', 'landscape']),
  okLabel: _propTypes2.default.node,
  onTouchTapCancel: _propTypes2.default.func,
  onTouchTapDay: _propTypes2.default.func,
  onTouchTapOk: _propTypes2.default.func,
  open: _propTypes2.default.bool,
  shouldDisableDate: _propTypes2.default.func,
  utils: _propTypes2.default.object
} : void 0;
exports.default = Calendar;

/***/ },

/***/ "./node_modules/material-ui/DatePicker/CalendarActionButtons.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FlatButton = __webpack_require__("./node_modules/material-ui/FlatButton/index.js");

var _FlatButton2 = _interopRequireDefault(_FlatButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CalendarActionButton = function (_Component) {
  (0, _inherits3.default)(CalendarActionButton, _Component);

  function CalendarActionButton() {
    (0, _classCallCheck3.default)(this, CalendarActionButton);
    return (0, _possibleConstructorReturn3.default)(this, (CalendarActionButton.__proto__ || (0, _getPrototypeOf2.default)(CalendarActionButton)).apply(this, arguments));
  }

  (0, _createClass3.default)(CalendarActionButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          cancelLabel = _props.cancelLabel,
          okLabel = _props.okLabel;


      var styles = {
        root: {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          margin: 0,
          maxHeight: 48,
          padding: 0
        },
        flatButtons: {
          fontsize: 14,
          margin: '4px 8px 8px 0px',
          maxHeight: 36,
          minWidth: 64,
          padding: 0
        }
      };

      return _react2.default.createElement(
        'div',
        { style: styles.root },
        _react2.default.createElement(_FlatButton2.default, {
          label: cancelLabel,
          onTouchTap: this.props.onTouchTapCancel,
          primary: true,
          style: styles.flatButtons
        }),
        !this.props.autoOk && _react2.default.createElement(_FlatButton2.default, {
          disabled: this.refs.calendar !== undefined && this.refs.calendar.isSelectedDateDisabled(),
          label: okLabel,
          onTouchTap: this.props.onTouchTapOk,
          primary: true,
          style: styles.flatButtons
        })
      );
    }
  }]);
  return CalendarActionButton;
}(_react.Component);

undefined !== "production" ? CalendarActionButton.propTypes = {
  autoOk: _propTypes2.default.bool,
  cancelLabel: _propTypes2.default.node,
  okLabel: _propTypes2.default.node,
  onTouchTapCancel: _propTypes2.default.func,
  onTouchTapOk: _propTypes2.default.func
} : void 0;
exports.default = CalendarActionButton;

/***/ },

/***/ "./node_modules/material-ui/DatePicker/CalendarMonth.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _dateUtils = __webpack_require__("./node_modules/material-ui/DatePicker/dateUtils.js");

var _DayButton = __webpack_require__("./node_modules/material-ui/DatePicker/DayButton.js");

var _DayButton2 = _interopRequireDefault(_DayButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    fontWeight: 400,
    height: 228,
    lineHeight: 2,
    position: 'relative',
    textAlign: 'center',
    MozPaddingStart: 0
  },
  week: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 34,
    marginBottom: 2
  }
};

var CalendarMonth = function (_Component) {
  (0, _inherits3.default)(CalendarMonth, _Component);

  function CalendarMonth() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CalendarMonth);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CalendarMonth.__proto__ || (0, _getPrototypeOf2.default)(CalendarMonth)).call.apply(_ref, [this].concat(args))), _this), _this.handleTouchTapDay = function (event, date) {
      if (_this.props.onTouchTapDay) {
        _this.props.onTouchTapDay(event, date);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(CalendarMonth, [{
    key: 'isSelectedDateDisabled',
    value: function isSelectedDateDisabled() {
      return this.selectedDateDisabled;
    }
  }, {
    key: 'shouldDisableDate',
    value: function shouldDisableDate(day) {
      if (day === null) return false;
      var disabled = !(0, _dateUtils.isBetweenDates)(day, this.props.minDate, this.props.maxDate);
      if (!disabled && this.props.shouldDisableDate) disabled = this.props.shouldDisableDate(day);

      return disabled;
    }
  }, {
    key: 'getWeekElements',
    value: function getWeekElements() {
      var _this2 = this;

      var weekArray = this.props.utils.getWeekArray(this.props.displayDate, this.props.firstDayOfWeek);

      return weekArray.map(function (week, i) {
        return _react2.default.createElement(
          'div',
          { key: i, style: styles.week },
          _this2.getDayElements(week, i)
        );
      }, this);
    }
  }, {
    key: 'getDayElements',
    value: function getDayElements(week, i) {
      var _this3 = this;

      var _props = this.props,
          DateTimeFormat = _props.DateTimeFormat,
          locale = _props.locale,
          selectedDate = _props.selectedDate;


      return week.map(function (day, j) {
        var isSameDate = (0, _dateUtils.isEqualDate)(selectedDate, day);
        var disabled = _this3.shouldDisableDate(day);
        var selected = !disabled && isSameDate;

        if (isSameDate) {
          _this3.selectedDateDisabled = disabled;
        }

        return _react2.default.createElement(_DayButton2.default, {
          DateTimeFormat: DateTimeFormat,
          locale: locale,
          date: day,
          disabled: disabled,
          key: 'db' + (i + j),
          onTouchTap: _this3.handleTouchTapDay,
          selected: selected
        });
      }, this);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: styles.root },
        this.getWeekElements()
      );
    }
  }]);
  return CalendarMonth;
}(_react.Component);

undefined !== "production" ? CalendarMonth.propTypes = {
  DateTimeFormat: _propTypes2.default.func.isRequired,
  autoOk: _propTypes2.default.bool,
  displayDate: _propTypes2.default.object.isRequired,
  firstDayOfWeek: _propTypes2.default.number,
  locale: _propTypes2.default.string.isRequired,
  maxDate: _propTypes2.default.object,
  minDate: _propTypes2.default.object,
  onTouchTapDay: _propTypes2.default.func,
  selectedDate: _propTypes2.default.object.isRequired,
  shouldDisableDate: _propTypes2.default.func,
  utils: _propTypes2.default.object.isRequired
} : void 0;
exports.default = CalendarMonth;

/***/ },

/***/ "./node_modules/material-ui/DatePicker/CalendarToolbar.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IconButton = __webpack_require__("./node_modules/material-ui/IconButton/index.js");

var _IconButton2 = _interopRequireDefault(_IconButton);

var _chevronLeft = __webpack_require__("./node_modules/material-ui/svg-icons/navigation/chevron-left.js");

var _chevronLeft2 = _interopRequireDefault(_chevronLeft);

var _chevronRight = __webpack_require__("./node_modules/material-ui/svg-icons/navigation/chevron-right.js");

var _chevronRight2 = _interopRequireDefault(_chevronRight);

var _SlideIn = __webpack_require__("./node_modules/material-ui/internal/SlideIn.js");

var _SlideIn2 = _interopRequireDefault(_SlideIn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'inherit',
    height: 48
  },
  titleDiv: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    width: '100%'
  },
  titleText: {
    height: 'inherit',
    paddingTop: 12
  }
};

var CalendarToolbar = function (_Component) {
  (0, _inherits3.default)(CalendarToolbar, _Component);

  function CalendarToolbar() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CalendarToolbar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CalendarToolbar.__proto__ || (0, _getPrototypeOf2.default)(CalendarToolbar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      transitionDirection: 'up'
    }, _this.handleTouchTapPrevMonth = function () {
      if (_this.props.onMonthChange) {
        _this.props.onMonthChange(-1);
      }
    }, _this.handleTouchTapNextMonth = function () {
      if (_this.props.onMonthChange) {
        _this.props.onMonthChange(1);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(CalendarToolbar, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.displayDate !== this.props.displayDate) {
        var direction = nextProps.displayDate > this.props.displayDate ? 'left' : 'right';
        this.setState({
          transitionDirection: direction
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          DateTimeFormat = _props.DateTimeFormat,
          locale = _props.locale,
          displayDate = _props.displayDate;


      var dateTimeFormatted = new DateTimeFormat(locale, {
        month: 'long',
        year: 'numeric'
      }).format(displayDate);

      return _react2.default.createElement(
        'div',
        { style: styles.root },
        _react2.default.createElement(
          _IconButton2.default,
          {
            disabled: !this.props.prevMonth,
            onTouchTap: this.handleTouchTapPrevMonth
          },
          _react2.default.createElement(_chevronLeft2.default, null)
        ),
        _react2.default.createElement(
          _SlideIn2.default,
          {
            direction: this.state.transitionDirection,
            style: styles.titleDiv
          },
          _react2.default.createElement(
            'div',
            { key: dateTimeFormatted, style: styles.titleText },
            dateTimeFormatted
          )
        ),
        _react2.default.createElement(
          _IconButton2.default,
          {
            disabled: !this.props.nextMonth,
            onTouchTap: this.handleTouchTapNextMonth
          },
          _react2.default.createElement(_chevronRight2.default, null)
        )
      );
    }
  }]);
  return CalendarToolbar;
}(_react.Component);

CalendarToolbar.defaultProps = {
  nextMonth: true,
  prevMonth: true
};
undefined !== "production" ? CalendarToolbar.propTypes = {
  DateTimeFormat: _propTypes2.default.func.isRequired,
  displayDate: _propTypes2.default.object.isRequired,
  locale: _propTypes2.default.string.isRequired,
  nextMonth: _propTypes2.default.bool,
  onMonthChange: _propTypes2.default.func,
  prevMonth: _propTypes2.default.bool
} : void 0;
exports.default = CalendarToolbar;

/***/ },

/***/ "./node_modules/material-ui/DatePicker/CalendarYear.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__("./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _YearButton = __webpack_require__("./node_modules/material-ui/DatePicker/YearButton.js");

var _YearButton2 = _interopRequireDefault(_YearButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CalendarYear = function (_Component) {
  (0, _inherits3.default)(CalendarYear, _Component);

  function CalendarYear() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CalendarYear);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CalendarYear.__proto__ || (0, _getPrototypeOf2.default)(CalendarYear)).call.apply(_ref, [this].concat(args))), _this), _this.handleTouchTapYear = function (event, year) {
      if (_this.props.onTouchTapYear) {
        _this.props.onTouchTapYear(event, year);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(CalendarYear, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.scrollToSelectedYear();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.scrollToSelectedYear();
    }
  }, {
    key: 'getYears',
    value: function getYears() {
      var _props = this.props,
          DateTimeFormat = _props.DateTimeFormat,
          locale = _props.locale,
          minDate = _props.minDate,
          maxDate = _props.maxDate,
          selectedDate = _props.selectedDate,
          utils = _props.utils;


      var minYear = utils.getYear(minDate);
      var maxYear = utils.getYear(maxDate);
      var years = [];

      for (var year = minYear; year <= maxYear; year++) {
        var selected = utils.getYear(selectedDate) === year;
        var selectedProps = {};
        if (selected) {
          selectedProps.ref = 'selectedYearButton';
        }

        var yearFormated = new DateTimeFormat(locale, {
          year: 'numeric'
        }).format(utils.setYear(selectedDate, year));

        var yearButton = _react2.default.createElement(
          _YearButton2.default,
          (0, _extends3.default)({
            key: 'yb' + year,
            onTouchTap: this.handleTouchTapYear,
            selected: selected,
            year: year,
            utils: utils
          }, selectedProps),
          yearFormated
        );

        years.push(yearButton);
      }

      return years;
    }
  }, {
    key: 'scrollToSelectedYear',
    value: function scrollToSelectedYear() {
      if (this.refs.selectedYearButton === undefined) {
        return;
      }

      var container = _reactDom2.default.findDOMNode(this);
      var yearButtonNode = _reactDom2.default.findDOMNode(this.refs.selectedYearButton);

      var containerHeight = container.clientHeight;
      var yearButtonNodeHeight = yearButtonNode.clientHeight || 32;

      var scrollYOffset = yearButtonNode.offsetTop + yearButtonNodeHeight / 2 - containerHeight / 2;
      container.scrollTop = scrollYOffset;
    }
  }, {
    key: 'render',
    value: function render() {
      var _context$muiTheme = this.context.muiTheme,
          prepareStyles = _context$muiTheme.prepareStyles,
          calendarYearBackgroundColor = _context$muiTheme.datePicker.calendarYearBackgroundColor;


      var styles = {
        root: {
          backgroundColor: calendarYearBackgroundColor,
          height: 'inherit',
          lineHeight: '35px',
          overflowX: 'hidden',
          overflowY: 'scroll',
          position: 'relative'
        },
        child: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minHeight: '100%'
        }
      };

      return _react2.default.createElement(
        'div',
        { style: prepareStyles(styles.root) },
        _react2.default.createElement(
          'div',
          { style: prepareStyles(styles.child) },
          this.getYears()
        )
      );
    }
  }]);
  return CalendarYear;
}(_react.Component);

CalendarYear.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? CalendarYear.propTypes = {
  DateTimeFormat: _propTypes2.default.func.isRequired,
  locale: _propTypes2.default.string.isRequired,
  maxDate: _propTypes2.default.object.isRequired,
  minDate: _propTypes2.default.object.isRequired,
  onTouchTapYear: _propTypes2.default.func,
  selectedDate: _propTypes2.default.object.isRequired,
  utils: _propTypes2.default.object.isRequired,
  wordings: _propTypes2.default.object
} : void 0;
exports.default = CalendarYear;

/***/ },

/***/ "./node_modules/material-ui/DatePicker/DateDisplay.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__("./node_modules/material-ui/styles/transitions.js");

var _transitions2 = _interopRequireDefault(_transitions);

var _SlideIn = __webpack_require__("./node_modules/material-ui/internal/SlideIn.js");

var _SlideIn2 = _interopRequireDefault(_SlideIn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context, state) {
  var datePicker = context.muiTheme.datePicker;
  var selectedYear = state.selectedYear;

  var isLandscape = props.mode === 'landscape';

  var styles = {
    root: {
      width: isLandscape ? 165 : '100%',
      height: isLandscape ? 330 : 'auto',
      float: isLandscape ? 'left' : 'none',
      fontWeight: 700,
      display: 'inline-block',
      backgroundColor: datePicker.selectColor,
      borderTopLeftRadius: 2,
      borderTopRightRadius: isLandscape ? 0 : 2,
      borderBottomLeftRadius: isLandscape ? 2 : 0,
      color: datePicker.textColor,
      padding: 20,
      boxSizing: 'border-box'
    },
    monthDay: {
      display: 'block',
      fontSize: 36,
      lineHeight: '36px',
      height: props.mode === 'landscape' ? '100%' : 38,
      opacity: selectedYear ? 0.7 : 1,
      transition: _transitions2.default.easeOut(),
      width: '100%',
      fontWeight: '500'
    },
    monthDayTitle: {
      cursor: !selectedYear ? 'default' : 'pointer',
      width: '100%',
      display: 'block'
    },
    year: {
      margin: 0,
      fontSize: 16,
      fontWeight: '500',
      lineHeight: '16px',
      height: 16,
      opacity: selectedYear ? 1 : 0.7,
      transition: _transitions2.default.easeOut(),
      marginBottom: 10
    },
    yearTitle: {
      cursor: props.disableYearSelection || selectedYear ? 'default' : 'pointer'
    }
  };

  return styles;
}

var DateDisplay = function (_Component) {
  (0, _inherits3.default)(DateDisplay, _Component);

  function DateDisplay() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, DateDisplay);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DateDisplay.__proto__ || (0, _getPrototypeOf2.default)(DateDisplay)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      selectedYear: false,
      transitionDirection: 'up'
    }, _this.handleTouchTapMonthDay = function () {
      if (_this.props.onTouchTapMonthDay && _this.state.selectedYear) {
        _this.props.onTouchTapMonthDay();
      }

      _this.setState({ selectedYear: false });
    }, _this.handleTouchTapYear = function () {
      if (_this.props.onTouchTapYear && !_this.props.disableYearSelection && !_this.state.selectedYear) {
        _this.props.onTouchTapYear();
      }

      if (!_this.props.disableYearSelection) {
        _this.setState({ selectedYear: true });
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(DateDisplay, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (!this.props.monthDaySelected) {
        this.setState({ selectedYear: true });
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.selectedDate !== this.props.selectedDate) {
        var direction = nextProps.selectedDate > this.props.selectedDate ? 'up' : 'down';
        this.setState({
          transitionDirection: direction
        });
      }

      if (nextProps.monthDaySelected !== undefined) {
        this.setState({
          selectedYear: !nextProps.monthDaySelected
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          DateTimeFormat = _props.DateTimeFormat,
          disableYearSelection = _props.disableYearSelection,
          locale = _props.locale,
          mode = _props.mode,
          monthDaySelected = _props.monthDaySelected,
          onTouchTapMonthDay = _props.onTouchTapMonthDay,
          onTouchTapYear = _props.onTouchTapYear,
          selectedDate = _props.selectedDate,
          style = _props.style,
          other = (0, _objectWithoutProperties3.default)(_props, ['DateTimeFormat', 'disableYearSelection', 'locale', 'mode', 'monthDaySelected', 'onTouchTapMonthDay', 'onTouchTapYear', 'selectedDate', 'style']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context, this.state);

      var year = new DateTimeFormat(locale, {
        year: 'numeric'
      }).format(selectedDate);

      var dateTime = new DateTimeFormat(locale, {
        month: 'short',
        weekday: 'short',
        day: '2-digit'
      }).format(selectedDate);

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, other, { style: prepareStyles(styles.root, style) }),
        _react2.default.createElement(
          _SlideIn2.default,
          { style: styles.year, direction: this.state.transitionDirection },
          _react2.default.createElement(
            'div',
            { key: year, style: styles.yearTitle, onTouchTap: this.handleTouchTapYear },
            year
          )
        ),
        _react2.default.createElement(
          _SlideIn2.default,
          { style: styles.monthDay, direction: this.state.transitionDirection },
          _react2.default.createElement(
            'div',
            {
              key: dateTime,
              onTouchTap: this.handleTouchTapMonthDay,
              style: styles.monthDayTitle
            },
            dateTime
          )
        )
      );
    }
  }]);
  return DateDisplay;
}(_react.Component);

DateDisplay.defaultProps = {
  disableYearSelection: false,
  monthDaySelected: true
};
DateDisplay.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? DateDisplay.propTypes = {
  DateTimeFormat: _propTypes2.default.func.isRequired,
  disableYearSelection: _propTypes2.default.bool,
  locale: _propTypes2.default.string.isRequired,
  mode: _propTypes2.default.oneOf(['portrait', 'landscape']),
  monthDaySelected: _propTypes2.default.bool,
  onTouchTapMonthDay: _propTypes2.default.func,
  onTouchTapYear: _propTypes2.default.func,
  selectedDate: _propTypes2.default.object.isRequired,
  style: _propTypes2.default.object
} : void 0;
exports.default = DateDisplay;

/***/ },

/***/ "./node_modules/material-ui/DatePicker/DatePicker.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _dateUtils = __webpack_require__("./node_modules/material-ui/DatePicker/dateUtils.js");

var _DatePickerDialog = __webpack_require__("./node_modules/material-ui/DatePicker/DatePickerDialog.js");

var _DatePickerDialog2 = _interopRequireDefault(_DatePickerDialog);

var _TextField = __webpack_require__("./node_modules/material-ui/TextField/index.js");

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DatePicker = function (_Component) {
  (0, _inherits3.default)(DatePicker, _Component);

  function DatePicker() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, DatePicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DatePicker.__proto__ || (0, _getPrototypeOf2.default)(DatePicker)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      date: undefined
    }, _this.handleAccept = function (date) {
      if (!_this.isControlled()) {
        _this.setState({
          date: date
        });
      }
      if (_this.props.onChange) {
        _this.props.onChange(null, date);
      }
    }, _this.handleFocus = function (event) {
      event.target.blur();
      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }
    }, _this.handleTouchTap = function (event) {
      if (_this.props.onTouchTap) {
        _this.props.onTouchTap(event);
      }

      if (!_this.props.disabled) {
        setTimeout(function () {
          _this.openDialog();
        }, 0);
      }
    }, _this.formatDate = function (date) {
      if (_this.props.locale) {
        var DateTimeFormat = _this.props.DateTimeFormat || _dateUtils.dateTimeFormat;
        return new DateTimeFormat(_this.props.locale, {
          day: 'numeric',
          month: 'numeric',
          year: 'numeric'
        }).format(date);
      } else {
        return (0, _dateUtils.formatIso)(date);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(DatePicker, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({
        date: this.isControlled() ? this.getControlledDate() : this.props.defaultDate
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.isControlled()) {
        var newDate = this.getControlledDate(nextProps);
        if (!(0, _dateUtils.isEqualDate)(this.state.date, newDate)) {
          this.setState({
            date: newDate
          });
        }
      }
    }
  }, {
    key: 'getDate',
    value: function getDate() {
      return this.state.date;
    }

    /**
     * Open the date-picker dialog programmatically from a parent.
     */

  }, {
    key: 'openDialog',
    value: function openDialog() {
      /**
       * if the date is not selected then set it to new date
       * (get the current system date while doing so)
       * else set it to the currently selected date
       */
      if (this.state.date !== undefined) {
        this.setState({
          dialogDate: this.getDate()
        }, this.refs.dialogWindow.show);
      } else {
        this.setState({
          dialogDate: new Date()
        }, this.refs.dialogWindow.show);
      }
    }

    /**
     * Alias for `openDialog()` for an api consistent with TextField.
     */

  }, {
    key: 'focus',
    value: function focus() {
      this.openDialog();
    }
  }, {
    key: 'isControlled',
    value: function isControlled() {
      return this.props.hasOwnProperty('value');
    }
  }, {
    key: 'getControlledDate',
    value: function getControlledDate() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

      if (props.value instanceof Date) {
        return props.value;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          DateTimeFormat = _props.DateTimeFormat,
          autoOk = _props.autoOk,
          cancelLabel = _props.cancelLabel,
          className = _props.className,
          container = _props.container,
          defaultDate = _props.defaultDate,
          dialogContainerStyle = _props.dialogContainerStyle,
          disableYearSelection = _props.disableYearSelection,
          firstDayOfWeek = _props.firstDayOfWeek,
          formatDateProp = _props.formatDate,
          locale = _props.locale,
          maxDate = _props.maxDate,
          minDate = _props.minDate,
          mode = _props.mode,
          okLabel = _props.okLabel,
          onDismiss = _props.onDismiss,
          onFocus = _props.onFocus,
          onShow = _props.onShow,
          onTouchTap = _props.onTouchTap,
          shouldDisableDate = _props.shouldDisableDate,
          hideCalendarDate = _props.hideCalendarDate,
          style = _props.style,
          textFieldStyle = _props.textFieldStyle,
          utils = _props.utils,
          other = (0, _objectWithoutProperties3.default)(_props, ['DateTimeFormat', 'autoOk', 'cancelLabel', 'className', 'container', 'defaultDate', 'dialogContainerStyle', 'disableYearSelection', 'firstDayOfWeek', 'formatDate', 'locale', 'maxDate', 'minDate', 'mode', 'okLabel', 'onDismiss', 'onFocus', 'onShow', 'onTouchTap', 'shouldDisableDate', 'hideCalendarDate', 'style', 'textFieldStyle', 'utils']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var formatDate = formatDateProp || this.formatDate;

      return _react2.default.createElement(
        'div',
        { className: className, style: prepareStyles((0, _simpleAssign2.default)({}, style)) },
        _react2.default.createElement(_TextField2.default, (0, _extends3.default)({}, other, {
          onFocus: this.handleFocus,
          onTouchTap: this.handleTouchTap,
          ref: 'input',
          style: textFieldStyle,
          value: this.state.date ? formatDate(this.state.date) : ''
        })),
        _react2.default.createElement(_DatePickerDialog2.default, {
          DateTimeFormat: DateTimeFormat,
          autoOk: autoOk,
          cancelLabel: cancelLabel,
          container: container,
          containerStyle: dialogContainerStyle,
          disableYearSelection: disableYearSelection,
          firstDayOfWeek: firstDayOfWeek,
          initialDate: this.state.dialogDate,
          locale: locale,
          maxDate: maxDate,
          minDate: minDate,
          mode: mode,
          okLabel: okLabel,
          onAccept: this.handleAccept,
          onShow: onShow,
          onDismiss: onDismiss,
          ref: 'dialogWindow',
          shouldDisableDate: shouldDisableDate,
          hideCalendarDate: hideCalendarDate,
          utils: utils
        })
      );
    }
  }]);
  return DatePicker;
}(_react.Component);

DatePicker.defaultProps = {
  autoOk: false,
  container: 'dialog',
  disabled: false,
  disableYearSelection: false,
  firstDayOfWeek: 1,
  hideCalendarDate: false,
  style: {}
};
DatePicker.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? DatePicker.propTypes = {
  /**
   * Constructor for date formatting for the specified `locale`.
   * The constructor must follow this specification: ECMAScript Internationalization API 1.0 (ECMA-402).
   * `Intl.DateTimeFormat` is supported by most modern browsers, see http://caniuse.com/#search=intl,
   * otherwise https://github.com/andyearnshaw/Intl.js is a good polyfill.
   *
   * By default, a built-in `DateTimeFormat` is used which supports the 'en-US' `locale`.
   */
  DateTimeFormat: _propTypes2.default.func,
  /**
   * If true, automatically accept and close the picker on select a date.
   */
  autoOk: _propTypes2.default.bool,
  /**
   * Override the default text of the 'Cancel' button.
   */
  cancelLabel: _propTypes2.default.node,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * Used to control how the Date Picker will be displayed when the input field is focused.
   * `dialog` (default) displays the DatePicker as a dialog with a modal.
   * `inline` displays the DatePicker below the input field (similar to auto complete).
   */
  container: _propTypes2.default.oneOf(['dialog', 'inline']),
  /**
   * This is the initial date value of the component.
   * If either `value` or `valueLink` is provided they will override this
   * prop with `value` taking precedence.
   */
  defaultDate: _propTypes2.default.object,
  /**
   * Override the inline-styles of DatePickerDialog's Container element.
   */
  dialogContainerStyle: _propTypes2.default.object,
  /**
   * Disables the year selection in the date picker.
   */
  disableYearSelection: _propTypes2.default.bool,
  /**
   * Disables the DatePicker.
   */
  disabled: _propTypes2.default.bool,
  /**
   * Used to change the first day of week. It varies from
   * Saturday to Monday between different locales.
   * The allowed range is 0 (Sunday) to 6 (Saturday).
   * The default is `1`, Monday, as per ISO 8601.
   */
  firstDayOfWeek: _propTypes2.default.number,
  /**
   * This function is called to format the date displayed in the input field, and should return a string.
   * By default if no `locale` and `DateTimeFormat` is provided date objects are formatted to ISO 8601 YYYY-MM-DD.
   *
   * @param {object} date Date object to be formatted.
   * @returns {any} The formatted date.
   */
  formatDate: _propTypes2.default.func,
  /**
   * Hide date display
   */
  hideCalendarDate: _propTypes2.default.bool,
  /**
   * Locale used for formatting the `DatePicker` date strings. Other than for 'en-US', you
   * must provide a `DateTimeFormat` that supports the chosen `locale`.
   */
  locale: _propTypes2.default.string,
  /**
   * The ending of a range of valid dates. The range includes the endDate.
   * The default value is current date + 100 years.
   */
  maxDate: _propTypes2.default.object,
  /**
   * The beginning of a range of valid dates. The range includes the startDate.
   * The default value is current date - 100 years.
   */
  minDate: _propTypes2.default.object,
  /**
   * Tells the component to display the picker in portrait or landscape mode.
   */
  mode: _propTypes2.default.oneOf(['portrait', 'landscape']),
  /**
   * Override the default text of the 'OK' button.
   */
  okLabel: _propTypes2.default.node,
  /**
   * Callback function that is fired when the date value changes.
   *
   * @param {null} null Since there is no particular event associated with the change,
   * the first argument will always be null.
   * @param {object} date The new date.
   */
  onChange: _propTypes2.default.func,
  /**
   * Callback function that is fired when the Date Picker's dialog is dismissed.
   */
  onDismiss: _propTypes2.default.func,
  /**
   * Callback function that is fired when the Date Picker's `TextField` gains focus.
   */
  onFocus: _propTypes2.default.func,
  /**
   * Callback function that is fired when the Date Picker's dialog is shown.
   */
  onShow: _propTypes2.default.func,
  /**
   * Callback function that is fired when a touch tap event occurs on the Date Picker's `TextField`.
   *
   * @param {object} event TouchTap event targeting the `TextField`.
   */
  onTouchTap: _propTypes2.default.func,
  /**
   * Callback function used to determine if a day's entry should be disabled on the calendar.
   *
   * @param {object} day Date object of a day.
   * @returns {boolean} Indicates whether the day should be disabled.
   */
  shouldDisableDate: _propTypes2.default.func,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * Override the inline-styles of DatePicker's TextField element.
   */
  textFieldStyle: _propTypes2.default.object,
  /**
   * This object should contain methods needed to build the calendar system.
   *
   * Useful for building a custom calendar system. Refer to the
   * [source code](https://github.com/callemall/material-ui/blob/master/src/DatePicker/dateUtils.js)
   * and an [example implementation](https://github.com/alitaheri/material-ui-persian-date-picker-utils)
   * for more information.
   */
  utils: _propTypes2.default.object,
  /**
   * Sets the date for the Date Picker programmatically.
   */
  value: _propTypes2.default.object
} : void 0;
exports.default = DatePicker;

/***/ },

/***/ "./node_modules/material-ui/DatePicker/DatePickerDialog.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactEventListener = __webpack_require__("./node_modules/react-event-listener/lib/index.js");

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _keycode = __webpack_require__("./node_modules/keycode/index.js");

var _keycode2 = _interopRequireDefault(_keycode);

var _Calendar = __webpack_require__("./node_modules/material-ui/DatePicker/Calendar.js");

var _Calendar2 = _interopRequireDefault(_Calendar);

var _Dialog = __webpack_require__("./node_modules/material-ui/Dialog/index.js");

var _Dialog2 = _interopRequireDefault(_Dialog);

var _Popover = __webpack_require__("./node_modules/material-ui/Popover/Popover.js");

var _Popover2 = _interopRequireDefault(_Popover);

var _PopoverAnimationVertical = __webpack_require__("./node_modules/material-ui/Popover/PopoverAnimationVertical.js");

var _PopoverAnimationVertical2 = _interopRequireDefault(_PopoverAnimationVertical);

var _dateUtils = __webpack_require__("./node_modules/material-ui/DatePicker/dateUtils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DatePickerDialog = function (_Component) {
  (0, _inherits3.default)(DatePickerDialog, _Component);

  function DatePickerDialog() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, DatePickerDialog);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DatePickerDialog.__proto__ || (0, _getPrototypeOf2.default)(DatePickerDialog)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      open: false
    }, _this.show = function () {
      if (_this.props.onShow && !_this.state.open) {
        _this.props.onShow();
      }

      _this.setState({
        open: true
      });
    }, _this.dismiss = function () {
      if (_this.props.onDismiss && _this.state.open) {
        _this.props.onDismiss();
      }

      _this.setState({
        open: false
      });
    }, _this.handleTouchTapDay = function () {
      if (_this.props.autoOk) {
        setTimeout(_this.handleTouchTapOk, 300);
      }
    }, _this.handleTouchTapCancel = function () {
      _this.dismiss();
    }, _this.handleRequestClose = function () {
      _this.dismiss();
    }, _this.handleTouchTapOk = function () {
      if (_this.props.onAccept && !_this.refs.calendar.isSelectedDateDisabled()) {
        _this.props.onAccept(_this.refs.calendar.getSelectedDate());
      }

      _this.dismiss();
    }, _this.handleWindowKeyUp = function (event) {
      switch ((0, _keycode2.default)(event)) {
        case 'enter':
          _this.handleTouchTapOk();
          break;
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(DatePickerDialog, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          DateTimeFormat = _props.DateTimeFormat,
          autoOk = _props.autoOk,
          cancelLabel = _props.cancelLabel,
          container = _props.container,
          containerStyle = _props.containerStyle,
          disableYearSelection = _props.disableYearSelection,
          initialDate = _props.initialDate,
          firstDayOfWeek = _props.firstDayOfWeek,
          locale = _props.locale,
          maxDate = _props.maxDate,
          minDate = _props.minDate,
          mode = _props.mode,
          okLabel = _props.okLabel,
          onAccept = _props.onAccept,
          onDismiss = _props.onDismiss,
          onShow = _props.onShow,
          shouldDisableDate = _props.shouldDisableDate,
          hideCalendarDate = _props.hideCalendarDate,
          style = _props.style,
          animation = _props.animation,
          utils = _props.utils,
          other = (0, _objectWithoutProperties3.default)(_props, ['DateTimeFormat', 'autoOk', 'cancelLabel', 'container', 'containerStyle', 'disableYearSelection', 'initialDate', 'firstDayOfWeek', 'locale', 'maxDate', 'minDate', 'mode', 'okLabel', 'onAccept', 'onDismiss', 'onShow', 'shouldDisableDate', 'hideCalendarDate', 'style', 'animation', 'utils']);
      var open = this.state.open;


      var styles = {
        dialogContent: {
          width: !hideCalendarDate && mode === 'landscape' ? 479 : 310
        },
        dialogBodyContent: {
          padding: 0,
          minHeight: hideCalendarDate || mode === 'landscape' ? 330 : 434,
          minWidth: hideCalendarDate || mode !== 'landscape' ? 310 : 479
        }
      };

      var Container = container === 'inline' ? _Popover2.default : _Dialog2.default;

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, other, { ref: 'root' }),
        _react2.default.createElement(
          Container,
          {
            anchorEl: this.refs.root // For Popover
            , animation: animation || _PopoverAnimationVertical2.default // For Popover
            , bodyStyle: styles.dialogBodyContent,
            contentStyle: styles.dialogContent,
            ref: 'dialog',
            repositionOnUpdate: true,
            open: open,
            onRequestClose: this.handleRequestClose,
            style: (0, _simpleAssign2.default)(styles.dialogBodyContent, containerStyle)
          },
          _react2.default.createElement(_reactEventListener2.default, {
            target: 'window',
            onKeyUp: this.handleWindowKeyUp
          }),
          _react2.default.createElement(_Calendar2.default, {
            autoOk: autoOk,
            DateTimeFormat: DateTimeFormat,
            cancelLabel: cancelLabel,
            disableYearSelection: disableYearSelection,
            firstDayOfWeek: firstDayOfWeek,
            initialDate: initialDate,
            locale: locale,
            onTouchTapDay: this.handleTouchTapDay,
            maxDate: maxDate,
            minDate: minDate,
            mode: mode,
            open: open,
            ref: 'calendar',
            onTouchTapCancel: this.handleTouchTapCancel,
            onTouchTapOk: this.handleTouchTapOk,
            okLabel: okLabel,
            shouldDisableDate: shouldDisableDate,
            hideCalendarDate: hideCalendarDate,
            utils: utils
          })
        )
      );
    }
  }]);
  return DatePickerDialog;
}(_react.Component);

DatePickerDialog.defaultProps = {
  DateTimeFormat: _dateUtils.dateTimeFormat,
  cancelLabel: 'Cancel',
  container: 'dialog',
  locale: 'en-US',
  okLabel: 'OK'
};
DatePickerDialog.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? DatePickerDialog.propTypes = {
  DateTimeFormat: _propTypes2.default.func,
  animation: _propTypes2.default.func,
  autoOk: _propTypes2.default.bool,
  cancelLabel: _propTypes2.default.node,
  container: _propTypes2.default.oneOf(['dialog', 'inline']),
  containerStyle: _propTypes2.default.object,
  disableYearSelection: _propTypes2.default.bool,
  firstDayOfWeek: _propTypes2.default.number,
  hideCalendarDate: _propTypes2.default.bool,
  initialDate: _propTypes2.default.object,
  locale: _propTypes2.default.string,
  maxDate: _propTypes2.default.object,
  minDate: _propTypes2.default.object,
  mode: _propTypes2.default.oneOf(['portrait', 'landscape']),
  okLabel: _propTypes2.default.node,
  onAccept: _propTypes2.default.func,
  onDismiss: _propTypes2.default.func,
  onShow: _propTypes2.default.func,
  open: _propTypes2.default.bool,
  shouldDisableDate: _propTypes2.default.func,
  style: _propTypes2.default.object,
  utils: _propTypes2.default.object
} : void 0;
exports.default = DatePickerDialog;

/***/ },

/***/ "./node_modules/material-ui/DatePicker/DayButton.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__("./node_modules/material-ui/styles/transitions.js");

var _transitions2 = _interopRequireDefault(_transitions);

var _dateUtils = __webpack_require__("./node_modules/material-ui/DatePicker/dateUtils.js");

var _EnhancedButton = __webpack_require__("./node_modules/material-ui/internal/EnhancedButton.js");

var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context, state) {
  var date = props.date,
      disabled = props.disabled,
      selected = props.selected;
  var hover = state.hover;
  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      datePicker = _context$muiTheme.datePicker;


  var labelColor = baseTheme.palette.textColor;
  var buttonStateOpacity = 0;
  var buttonStateTransform = 'scale(0)';

  if (hover || selected) {
    labelColor = datePicker.selectTextColor;
    buttonStateOpacity = selected ? 1 : 0.6;
    buttonStateTransform = 'scale(1)';
  } else if ((0, _dateUtils.isEqualDate)(date, new Date())) {
    labelColor = datePicker.color;
  }

  return {
    root: {
      boxSizing: 'border-box',
      fontWeight: '400',
      opacity: disabled && '0.4',
      padding: '4px 0px',
      position: 'relative',
      WebkitTapHighlightColor: 'rgba(0,0,0,0)', // Remove mobile color flashing (deprecated)
      width: 42
    },
    label: {
      color: labelColor,
      fontWeight: '400',
      position: 'relative'
    },
    buttonState: {
      backgroundColor: datePicker.selectColor,
      borderRadius: '50%',
      height: 34,
      left: 4,
      opacity: buttonStateOpacity,
      position: 'absolute',
      top: 0,
      transform: buttonStateTransform,
      transition: _transitions2.default.easeOut(),
      width: 34
    }
  };
}

var DayButton = function (_Component) {
  (0, _inherits3.default)(DayButton, _Component);

  function DayButton() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, DayButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DayButton.__proto__ || (0, _getPrototypeOf2.default)(DayButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hover: false
    }, _this.handleMouseEnter = function () {
      if (!_this.props.disabled) {
        _this.setState({ hover: true });
      }
    }, _this.handleMouseLeave = function () {
      if (!_this.props.disabled) {
        _this.setState({ hover: false });
      }
    }, _this.handleTouchTap = function (event) {
      if (!_this.props.disabled && _this.props.onTouchTap) {
        _this.props.onTouchTap(event, _this.props.date);
      }
    }, _this.handleKeyboardFocus = function (event, keyboardFocused) {
      if (!_this.props.disabled && _this.props.onKeyboardFocus) {
        _this.props.onKeyboardFocus(event, keyboardFocused, _this.props.date);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(DayButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          DateTimeFormat = _props.DateTimeFormat,
          date = _props.date,
          disabled = _props.disabled,
          locale = _props.locale,
          onTouchTap = _props.onTouchTap,
          selected = _props.selected,
          other = (0, _objectWithoutProperties3.default)(_props, ['DateTimeFormat', 'date', 'disabled', 'locale', 'onTouchTap', 'selected']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context, this.state);

      return date ? _react2.default.createElement(
        _EnhancedButton2.default,
        (0, _extends3.default)({}, other, {
          disabled: disabled,
          disableFocusRipple: true,
          disableTouchRipple: true,
          onKeyboardFocus: this.handleKeyboardFocus,
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave,
          onTouchTap: this.handleTouchTap,
          style: styles.root
        }),
        _react2.default.createElement('div', { style: prepareStyles(styles.buttonState) }),
        _react2.default.createElement(
          'span',
          { style: prepareStyles(styles.label) },
          new DateTimeFormat(locale, {
            day: 'numeric'
          }).format(date)
        )
      ) : _react2.default.createElement('span', { style: prepareStyles(styles.root) });
    }
  }]);
  return DayButton;
}(_react.Component);

DayButton.defaultProps = {
  selected: false,
  disabled: false
};
DayButton.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? DayButton.propTypes = {
  DateTimeFormat: _propTypes2.default.func.isRequired,
  date: _propTypes2.default.object,
  disabled: _propTypes2.default.bool,
  locale: _propTypes2.default.string.isRequired,
  onKeyboardFocus: _propTypes2.default.func,
  onTouchTap: _propTypes2.default.func,
  selected: _propTypes2.default.bool
} : void 0;
exports.default = DayButton;

/***/ },

/***/ "./node_modules/material-ui/DatePicker/YearButton.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _EnhancedButton = __webpack_require__("./node_modules/material-ui/internal/EnhancedButton.js");

var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context, state) {
  var selected = props.selected,
      year = props.year,
      utils = props.utils;
  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      datePicker = _context$muiTheme.datePicker;
  var hover = state.hover;


  return {
    root: {
      boxSizing: 'border-box',
      color: year === utils.getYear(new Date()) && datePicker.color,
      display: 'block',
      fontSize: 14,
      margin: '0 auto',
      position: 'relative',
      textAlign: 'center',
      lineHeight: 'inherit',
      WebkitTapHighlightColor: 'rgba(0,0,0,0)' },
    label: {
      alignSelf: 'center',
      color: hover || selected ? datePicker.color : baseTheme.palette.textColor,
      fontSize: selected ? 26 : 17,
      fontWeight: hover ? 450 : selected ? 500 : 400,
      position: 'relative',
      top: -1
    }
  };
}

var YearButton = function (_Component) {
  (0, _inherits3.default)(YearButton, _Component);

  function YearButton() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, YearButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = YearButton.__proto__ || (0, _getPrototypeOf2.default)(YearButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hover: false
    }, _this.handleMouseEnter = function () {
      _this.setState({ hover: true });
    }, _this.handleMouseLeave = function () {
      _this.setState({ hover: false });
    }, _this.handleTouchTap = function (event) {
      if (_this.props.onTouchTap) {
        _this.props.onTouchTap(event, _this.props.year);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(YearButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          onTouchTap = _props.onTouchTap,
          selected = _props.selected,
          year = _props.year,
          utils = _props.utils,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'className', 'onTouchTap', 'selected', 'year', 'utils']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context, this.state);

      return _react2.default.createElement(
        _EnhancedButton2.default,
        (0, _extends3.default)({}, other, {
          disableFocusRipple: true,
          disableTouchRipple: true,
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave,
          onTouchTap: this.handleTouchTap,
          style: styles.root
        }),
        _react2.default.createElement(
          'span',
          { style: prepareStyles(styles.label) },
          children
        )
      );
    }
  }]);
  return YearButton;
}(_react.Component);

YearButton.defaultProps = {
  selected: false
};
YearButton.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? YearButton.propTypes = {
  children: _propTypes2.default.node.isRequired,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  onTouchTap: _propTypes2.default.func,
  selected: _propTypes2.default.bool,
  utils: _propTypes2.default.object.isRequired,
  year: _propTypes2.default.number.isRequired
} : void 0;
exports.default = YearButton;

/***/ },

/***/ "./node_modules/material-ui/DatePicker/dateUtils.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultUtils = undefined;
exports.dateTimeFormat = dateTimeFormat;
exports.getYear = getYear;
exports.setYear = setYear;
exports.addDays = addDays;
exports.addMonths = addMonths;
exports.addYears = addYears;
exports.cloneDate = cloneDate;
exports.cloneAsDate = cloneAsDate;
exports.getDaysInMonth = getDaysInMonth;
exports.getFirstDayOfMonth = getFirstDayOfMonth;
exports.getFirstDayOfWeek = getFirstDayOfWeek;
exports.getWeekArray = getWeekArray;
exports.localizedWeekday = localizedWeekday;
exports.formatIso = formatIso;
exports.isEqualDate = isEqualDate;
exports.isBeforeDate = isBeforeDate;
exports.isAfterDate = isAfterDate;
exports.isBetweenDates = isBetweenDates;
exports.monthDiff = monthDiff;
exports.yearDiff = yearDiff;

var _warning = __webpack_require__("./node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dayAbbreviation = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
var dayList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var monthLongList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function dateTimeFormat(locale, options) {
  undefined !== "production" ? (0, _warning2.default)(locale === 'en-US', 'Material-UI: The ' + locale + ' locale is not supported by the built-in DateTimeFormat.\n  Use the `DateTimeFormat` prop to supply an alternative implementation.') : void 0;

  this.format = function (date) {
    if (options.month === 'short' && options.weekday === 'short' && options.day === '2-digit') {
      return dayList[date.getDay()] + ', ' + monthList[date.getMonth()] + ' ' + date.getDate();
    } else if (options.year === 'numeric' && options.month === 'numeric' && options.day === 'numeric') {
      return date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
    } else if (options.year === 'numeric' && options.month === 'long') {
      return monthLongList[date.getMonth()] + ' ' + date.getFullYear();
    } else if (options.weekday === 'narrow') {
      return dayAbbreviation[date.getDay()];
    } else if (options.year === 'numeric') {
      return date.getFullYear().toString();
    } else if (options.day === 'numeric') {
      return date.getDate();
    } else {
      undefined !== "production" ? (0, _warning2.default)(false, 'Material-UI: Wrong usage of DateTimeFormat') : void 0;
    }
  };
}

function getYear(d) {
  return d.getFullYear();
}

function setYear(d, year) {
  var newDate = cloneDate(d);
  newDate.setFullYear(year);
  return newDate;
}

function addDays(d, days) {
  var newDate = cloneDate(d);
  newDate.setDate(d.getDate() + days);
  return newDate;
}

function addMonths(d, months) {
  var newDate = cloneDate(d);
  newDate.setMonth(d.getMonth() + months);
  return newDate;
}

function addYears(d, years) {
  var newDate = cloneDate(d);
  newDate.setFullYear(d.getFullYear() + years);
  return newDate;
}

function cloneDate(d) {
  return new Date(d.getTime());
}

function cloneAsDate(d) {
  var clonedDate = cloneDate(d);
  clonedDate.setHours(0, 0, 0, 0);
  return clonedDate;
}

function getDaysInMonth(d) {
  var resultDate = getFirstDayOfMonth(d);

  resultDate.setMonth(resultDate.getMonth() + 1);
  resultDate.setDate(resultDate.getDate() - 1);

  return resultDate.getDate();
}

function getFirstDayOfMonth(d) {
  return new Date(d.getFullYear(), d.getMonth(), 1);
}

function getFirstDayOfWeek() {
  var now = new Date();
  return new Date(now.setDate(now.getDate() - now.getDay()));
}

function getWeekArray(d, firstDayOfWeek) {
  var dayArray = [];
  var daysInMonth = getDaysInMonth(d);
  var weekArray = [];
  var week = [];

  for (var i = 1; i <= daysInMonth; i++) {
    dayArray.push(new Date(d.getFullYear(), d.getMonth(), i));
  }

  var addWeek = function addWeek(week) {
    var emptyDays = 7 - week.length;
    for (var _i = 0; _i < emptyDays; ++_i) {
      week[weekArray.length ? 'push' : 'unshift'](null);
    }
    weekArray.push(week);
  };

  dayArray.forEach(function (day) {
    if (week.length > 0 && day.getDay() === firstDayOfWeek) {
      addWeek(week);
      week = [];
    }
    week.push(day);
    if (dayArray.indexOf(day) === dayArray.length - 1) {
      addWeek(week);
    }
  });

  return weekArray;
}

function localizedWeekday(DateTimeFormat, locale, day, firstDayOfWeek) {
  var weekdayFormatter = new DateTimeFormat(locale, { weekday: 'narrow' });
  var firstDayDate = getFirstDayOfWeek();

  return weekdayFormatter.format(addDays(firstDayDate, day + firstDayOfWeek));
}

// Convert date to ISO 8601 (YYYY-MM-DD) date string, accounting for current timezone
function formatIso(date) {
  return new Date(date.toDateString() + ' 12:00:00 +0000').toISOString().substring(0, 10);
}

function isEqualDate(d1, d2) {
  return d1 && d2 && d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();
}

function isBeforeDate(d1, d2) {
  var date1 = cloneAsDate(d1);
  var date2 = cloneAsDate(d2);

  return date1.getTime() < date2.getTime();
}

function isAfterDate(d1, d2) {
  var date1 = cloneAsDate(d1);
  var date2 = cloneAsDate(d2);

  return date1.getTime() > date2.getTime();
}

function isBetweenDates(dateToCheck, startDate, endDate) {
  return !isBeforeDate(dateToCheck, startDate) && !isAfterDate(dateToCheck, endDate);
}

function monthDiff(d1, d2) {
  var m = void 0;
  m = (d1.getFullYear() - d2.getFullYear()) * 12;
  m += d1.getMonth();
  m -= d2.getMonth();
  return m;
}

function yearDiff(d1, d2) {
  return ~~(monthDiff(d1, d2) / 12);
}

var defaultUtils = exports.defaultUtils = {
  getYear: getYear,
  setYear: setYear,
  addDays: addDays,
  addMonths: addMonths,
  addYears: addYears,
  getFirstDayOfMonth: getFirstDayOfMonth,
  getWeekArray: getWeekArray,
  monthDiff: monthDiff
};

/***/ },

/***/ "./node_modules/material-ui/DatePicker/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _DatePicker = __webpack_require__("./node_modules/material-ui/DatePicker/DatePicker.js");

var _DatePicker2 = _interopRequireDefault(_DatePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _DatePicker2.default;

/***/ },

/***/ "./node_modules/material-ui/Dialog/Dialog.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__("./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactEventListener = __webpack_require__("./node_modules/react-event-listener/lib/index.js");

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _keycode = __webpack_require__("./node_modules/keycode/index.js");

var _keycode2 = _interopRequireDefault(_keycode);

var _transitions = __webpack_require__("./node_modules/material-ui/styles/transitions.js");

var _transitions2 = _interopRequireDefault(_transitions);

var _Overlay = __webpack_require__("./node_modules/material-ui/internal/Overlay.js");

var _Overlay2 = _interopRequireDefault(_Overlay);

var _RenderToLayer = __webpack_require__("./node_modules/material-ui/internal/RenderToLayer.js");

var _RenderToLayer2 = _interopRequireDefault(_RenderToLayer);

var _Paper = __webpack_require__("./node_modules/material-ui/Paper/index.js");

var _Paper2 = _interopRequireDefault(_Paper);

var _TransitionGroup = __webpack_require__("./node_modules/react-transition-group/TransitionGroup.js");

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TransitionItem = function (_Component) {
  (0, _inherits3.default)(TransitionItem, _Component);

  function TransitionItem() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TransitionItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TransitionItem.__proto__ || (0, _getPrototypeOf2.default)(TransitionItem)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      style: {}
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(TransitionItem, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.enterTimeout);
      clearTimeout(this.leaveTimeout);
    }
  }, {
    key: 'componentWillEnter',
    value: function componentWillEnter(callback) {
      this.componentWillAppear(callback);
    }
  }, {
    key: 'componentWillAppear',
    value: function componentWillAppear(callback) {
      var spacing = this.context.muiTheme.baseTheme.spacing;

      this.setState({
        style: {
          opacity: 1,
          transform: 'translate(0, ' + spacing.desktopKeylineIncrement + 'px)'
        }
      });

      this.enterTimeout = setTimeout(callback, 450); // matches transition duration
    }
  }, {
    key: 'componentWillLeave',
    value: function componentWillLeave(callback) {
      this.setState({
        style: {
          opacity: 0,
          transform: 'translate(0, 0)'
        }
      });

      this.leaveTimeout = setTimeout(callback, 450); // matches transition duration
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          children = _props.children,
          other = (0, _objectWithoutProperties3.default)(_props, ['style', 'children']);
      var prepareStyles = this.context.muiTheme.prepareStyles;


      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, other, { style: prepareStyles((0, _simpleAssign2.default)({}, this.state.style, style)) }),
        children
      );
    }
  }]);
  return TransitionItem;
}(_react.Component);

TransitionItem.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? TransitionItem.propTypes = {
  children: _propTypes2.default.node,
  style: _propTypes2.default.object
} : void 0;


function getStyles(props, context) {
  var autoScrollBodyContent = props.autoScrollBodyContent,
      open = props.open;
  var _context$muiTheme = context.muiTheme,
      _context$muiTheme$bas = _context$muiTheme.baseTheme,
      spacing = _context$muiTheme$bas.spacing,
      palette = _context$muiTheme$bas.palette,
      dialog = _context$muiTheme.dialog,
      zIndex = _context$muiTheme.zIndex;


  var gutter = spacing.desktopGutter;
  var borderScroll = '1px solid ' + palette.borderColor;

  return {
    root: {
      position: 'fixed',
      boxSizing: 'border-box',
      WebkitTapHighlightColor: 'rgba(0,0,0,0)', // Remove mobile color flashing (deprecated)
      zIndex: zIndex.dialog,
      top: 0,
      left: open ? 0 : -10000,
      width: '100%',
      height: '100%',
      transition: open ? _transitions2.default.easeOut('0ms', 'left', '0ms') : _transitions2.default.easeOut('0ms', 'left', '450ms')
    },
    content: {
      boxSizing: 'border-box',
      WebkitTapHighlightColor: 'rgba(0,0,0,0)', // Remove mobile color flashing (deprecated)
      transition: _transitions2.default.easeOut(),
      position: 'relative',
      width: '75%',
      maxWidth: spacing.desktopKeylineIncrement * 12,
      margin: '0 auto',
      zIndex: zIndex.dialog
    },
    actionsContainer: {
      boxSizing: 'border-box',
      WebkitTapHighlightColor: 'rgba(0,0,0,0)', // Remove mobile color flashing (deprecated)
      padding: 8,
      width: '100%',
      textAlign: 'right',
      marginTop: autoScrollBodyContent ? -1 : 0
    },
    overlay: {
      zIndex: zIndex.dialogOverlay
    },
    title: {
      margin: 0,
      padding: gutter + 'px ' + gutter + 'px 20px ' + gutter + 'px',
      color: palette.textColor,
      fontSize: dialog.titleFontSize,
      lineHeight: '32px',
      fontWeight: 400,
      marginBottom: autoScrollBodyContent ? -1 : 0
    },
    body: {
      fontSize: dialog.bodyFontSize,
      color: dialog.bodyColor,
      padding: (props.title ? 0 : gutter) + 'px ' + gutter + 'px ' + gutter + 'px',
      boxSizing: 'border-box',
      overflowY: autoScrollBodyContent ? 'auto' : 'hidden',
      borderTop: autoScrollBodyContent ? borderScroll : 'none',
      borderBottom: autoScrollBodyContent ? borderScroll : 'none'
    }
  };
}

var DialogInline = function (_Component2) {
  (0, _inherits3.default)(DialogInline, _Component2);

  function DialogInline() {
    var _ref2;

    var _temp2, _this2, _ret2;

    (0, _classCallCheck3.default)(this, DialogInline);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this2 = (0, _possibleConstructorReturn3.default)(this, (_ref2 = DialogInline.__proto__ || (0, _getPrototypeOf2.default)(DialogInline)).call.apply(_ref2, [this].concat(args))), _this2), _this2.handleTouchTapOverlay = function () {
      _this2.requestClose(false);
    }, _this2.handleKeyUp = function (event) {
      if ((0, _keycode2.default)(event) === 'esc') {
        _this2.requestClose(false);
      }
    }, _this2.handleResize = function () {
      _this2.positionDialog();
    }, _temp2), (0, _possibleConstructorReturn3.default)(_this2, _ret2);
  }

  (0, _createClass3.default)(DialogInline, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.positionDialog();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.positionDialog();
    }
  }, {
    key: 'positionDialog',
    value: function positionDialog() {
      var _props2 = this.props,
          actions = _props2.actions,
          autoDetectWindowHeight = _props2.autoDetectWindowHeight,
          autoScrollBodyContent = _props2.autoScrollBodyContent,
          bodyStyle = _props2.bodyStyle,
          open = _props2.open,
          repositionOnUpdate = _props2.repositionOnUpdate,
          title = _props2.title;


      if (!open) {
        return;
      }

      var clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      var container = _reactDom2.default.findDOMNode(this);
      var dialogWindow = _reactDom2.default.findDOMNode(this.refs.dialogWindow);
      var dialogContent = _reactDom2.default.findDOMNode(this.refs.dialogContent);
      var minPaddingTop = 16;

      // Reset the height in case the window was resized.
      dialogWindow.style.height = '';
      dialogContent.style.height = '';

      var dialogWindowHeight = dialogWindow.offsetHeight;
      var paddingTop = (clientHeight - dialogWindowHeight) / 2 - 64;
      if (paddingTop < minPaddingTop) paddingTop = minPaddingTop;

      // Vertically center the dialog window, but make sure it doesn't
      // transition to that position.
      if (repositionOnUpdate || !container.style.paddingTop) {
        container.style.paddingTop = paddingTop + 'px';
      }

      // Force a height if the dialog is taller than clientHeight
      if (autoDetectWindowHeight || autoScrollBodyContent) {
        var styles = getStyles(this.props, this.context);
        styles.body = (0, _simpleAssign2.default)(styles.body, bodyStyle);
        var maxDialogContentHeight = clientHeight - 2 * 64;

        if (title) maxDialogContentHeight -= dialogContent.previousSibling.offsetHeight;

        if (_react2.default.Children.count(actions)) {
          maxDialogContentHeight -= dialogContent.nextSibling.offsetHeight;
        }

        dialogContent.style.maxHeight = maxDialogContentHeight + 'px';
        if (maxDialogContentHeight > dialogWindowHeight) {
          dialogContent.style.borderBottom = 'none';
          dialogContent.style.borderTop = 'none';
        }
      }
    }
  }, {
    key: 'requestClose',
    value: function requestClose(buttonClicked) {
      if (!buttonClicked && this.props.modal) {
        return;
      }

      if (this.props.onRequestClose) {
        this.props.onRequestClose(!!buttonClicked);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          actions = _props3.actions,
          actionsContainerClassName = _props3.actionsContainerClassName,
          actionsContainerStyle = _props3.actionsContainerStyle,
          bodyClassName = _props3.bodyClassName,
          bodyStyle = _props3.bodyStyle,
          children = _props3.children,
          className = _props3.className,
          contentClassName = _props3.contentClassName,
          contentStyle = _props3.contentStyle,
          overlayClassName = _props3.overlayClassName,
          overlayStyle = _props3.overlayStyle,
          open = _props3.open,
          titleClassName = _props3.titleClassName,
          titleStyle = _props3.titleStyle,
          title = _props3.title,
          style = _props3.style;
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      styles.root = (0, _simpleAssign2.default)(styles.root, style);
      styles.content = (0, _simpleAssign2.default)(styles.content, contentStyle);
      styles.body = (0, _simpleAssign2.default)(styles.body, bodyStyle);
      styles.actionsContainer = (0, _simpleAssign2.default)(styles.actionsContainer, actionsContainerStyle);
      styles.overlay = (0, _simpleAssign2.default)(styles.overlay, overlayStyle);
      styles.title = (0, _simpleAssign2.default)(styles.title, titleStyle);

      var actionsContainer = _react2.default.Children.count(actions) > 0 && _react2.default.createElement(
        'div',
        { className: actionsContainerClassName, style: prepareStyles(styles.actionsContainer) },
        _react2.default.Children.toArray(actions)
      );

      var titleElement = title;
      if (_react2.default.isValidElement(title)) {
        titleElement = _react2.default.cloneElement(title, {
          className: title.props.className || titleClassName,
          style: prepareStyles((0, _simpleAssign2.default)(styles.title, title.props.style))
        });
      } else if (typeof title === 'string') {
        titleElement = _react2.default.createElement(
          'h3',
          { className: titleClassName, style: prepareStyles(styles.title) },
          title
        );
      }

      return _react2.default.createElement(
        'div',
        { className: className, style: prepareStyles(styles.root) },
        open && _react2.default.createElement(_reactEventListener2.default, {
          target: 'window',
          onKeyUp: this.handleKeyUp,
          onResize: this.handleResize
        }),
        _react2.default.createElement(
          _TransitionGroup2.default,
          {
            component: 'div',
            ref: 'dialogWindow',
            transitionAppear: true,
            transitionAppearTimeout: 450,
            transitionEnter: true,
            transitionEnterTimeout: 450
          },
          open && _react2.default.createElement(
            TransitionItem,
            {
              className: contentClassName,
              style: styles.content
            },
            _react2.default.createElement(
              _Paper2.default,
              { zDepth: 4 },
              titleElement,
              _react2.default.createElement(
                'div',
                {
                  ref: 'dialogContent',
                  className: bodyClassName,
                  style: prepareStyles(styles.body)
                },
                children
              ),
              actionsContainer
            )
          )
        ),
        _react2.default.createElement(_Overlay2.default, {
          show: open,
          className: overlayClassName,
          style: styles.overlay,
          onTouchTap: this.handleTouchTapOverlay
        })
      );
    }
  }]);
  return DialogInline;
}(_react.Component);

DialogInline.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? DialogInline.propTypes = {
  actions: _propTypes2.default.node,
  actionsContainerClassName: _propTypes2.default.string,
  actionsContainerStyle: _propTypes2.default.object,
  autoDetectWindowHeight: _propTypes2.default.bool,
  autoScrollBodyContent: _propTypes2.default.bool,
  bodyClassName: _propTypes2.default.string,
  bodyStyle: _propTypes2.default.object,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  contentClassName: _propTypes2.default.string,
  contentStyle: _propTypes2.default.object,
  modal: _propTypes2.default.bool,
  onRequestClose: _propTypes2.default.func,
  open: _propTypes2.default.bool.isRequired,
  overlayClassName: _propTypes2.default.string,
  overlayStyle: _propTypes2.default.object,
  repositionOnUpdate: _propTypes2.default.bool,
  style: _propTypes2.default.object,
  title: _propTypes2.default.node,
  titleClassName: _propTypes2.default.string,
  titleStyle: _propTypes2.default.object
} : void 0;

var Dialog = function (_Component3) {
  (0, _inherits3.default)(Dialog, _Component3);

  function Dialog() {
    var _ref3;

    var _temp3, _this3, _ret3;

    (0, _classCallCheck3.default)(this, Dialog);

    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return _ret3 = (_temp3 = (_this3 = (0, _possibleConstructorReturn3.default)(this, (_ref3 = Dialog.__proto__ || (0, _getPrototypeOf2.default)(Dialog)).call.apply(_ref3, [this].concat(args))), _this3), _this3.renderLayer = function () {
      return _react2.default.createElement(DialogInline, _this3.props);
    }, _temp3), (0, _possibleConstructorReturn3.default)(_this3, _ret3);
  }

  (0, _createClass3.default)(Dialog, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_RenderToLayer2.default, { render: this.renderLayer, open: true, useLayerForClickAway: false });
    }
  }]);
  return Dialog;
}(_react.Component);

Dialog.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
Dialog.defaultProps = {
  autoDetectWindowHeight: true,
  autoScrollBodyContent: false,
  modal: false,
  repositionOnUpdate: true
};
undefined !== "production" ? Dialog.propTypes = {
  /**
   * Action buttons to display below the Dialog content (`children`).
   * This property accepts either a React element, or an array of React elements.
   */
  actions: _propTypes2.default.node,
  /**
   * The `className` to add to the actions container's root element.
   */
  actionsContainerClassName: _propTypes2.default.string,
  /**
   * Overrides the inline-styles of the actions container's root element.
   */
  actionsContainerStyle: _propTypes2.default.object,
  /**
   * If set to true, the height of the `Dialog` will be auto detected. A max height
   * will be enforced so that the content does not extend beyond the viewport.
   */
  autoDetectWindowHeight: _propTypes2.default.bool,
  /**
   * If set to true, the body content of the `Dialog` will be scrollable.
   */
  autoScrollBodyContent: _propTypes2.default.bool,
  /**
   * The `className` to add to the content's root element under the title.
   */
  bodyClassName: _propTypes2.default.string,
  /**
   * Overrides the inline-styles of the content's root element under the title.
   */
  bodyStyle: _propTypes2.default.object,
  /**
   * The contents of the `Dialog`.
   */
  children: _propTypes2.default.node,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * The `className` to add to the content container.
   */
  contentClassName: _propTypes2.default.string,
  /**
   * Overrides the inline-styles of the content container.
   */
  contentStyle: _propTypes2.default.object,
  /**
   * Force the user to use one of the actions in the `Dialog`.
   * Clicking outside the `Dialog` will not trigger the `onRequestClose`.
   */
  modal: _propTypes2.default.bool,
  /**
   * Fired when the `Dialog` is requested to be closed by a click outside the `Dialog` or on the buttons.
   *
   * @param {bool} buttonClicked Determines whether a button click triggered this request.
   */
  onRequestClose: _propTypes2.default.func,
  /**
   * Controls whether the Dialog is opened or not.
   */
  open: _propTypes2.default.bool.isRequired,
  /**
   * The `className` to add to the `Overlay` component that is rendered behind the `Dialog`.
   */
  overlayClassName: _propTypes2.default.string,
  /**
   * Overrides the inline-styles of the `Overlay` component that is rendered behind the `Dialog`.
   */
  overlayStyle: _propTypes2.default.object,
  /**
   * Determines whether the `Dialog` should be repositioned when it's contents are updated.
   */
  repositionOnUpdate: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * The title to display on the `Dialog`. Could be number, string, element or an array containing these types.
   */
  title: _propTypes2.default.node,
  /**
   * The `className` to add to the title's root container element.
   */
  titleClassName: _propTypes2.default.string,
  /**
   * Overrides the inline-styles of the title's root container element.
   */
  titleStyle: _propTypes2.default.object
} : void 0;
exports.default = Dialog;

/***/ },

/***/ "./node_modules/material-ui/Dialog/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Dialog = __webpack_require__("./node_modules/material-ui/Dialog/Dialog.js");

var _Dialog2 = _interopRequireDefault(_Dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Dialog2.default;

/***/ },

/***/ "./node_modules/material-ui/Drawer/Drawer.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__("./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactEventListener = __webpack_require__("./node_modules/react-event-listener/lib/index.js");

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _keycode = __webpack_require__("./node_modules/keycode/index.js");

var _keycode2 = _interopRequireDefault(_keycode);

var _autoPrefix = __webpack_require__("./node_modules/material-ui/utils/autoPrefix.js");

var _autoPrefix2 = _interopRequireDefault(_autoPrefix);

var _transitions = __webpack_require__("./node_modules/material-ui/styles/transitions.js");

var _transitions2 = _interopRequireDefault(_transitions);

var _Overlay = __webpack_require__("./node_modules/material-ui/internal/Overlay.js");

var _Overlay2 = _interopRequireDefault(_Overlay);

var _Paper = __webpack_require__("./node_modules/material-ui/Paper/index.js");

var _Paper2 = _interopRequireDefault(_Paper);

var _propTypes3 = __webpack_require__("./node_modules/material-ui/utils/propTypes.js");

var _propTypes4 = _interopRequireDefault(_propTypes3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var openNavEventHandler = null;

var Drawer = function (_Component) {
  (0, _inherits3.default)(Drawer, _Component);

  function Drawer() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Drawer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Drawer.__proto__ || (0, _getPrototypeOf2.default)(Drawer)).call.apply(_ref, [this].concat(args))), _this), _this.handleTouchTapOverlay = function (event) {
      event.preventDefault();
      _this.close('clickaway');
    }, _this.handleKeyUp = function (event) {
      if (_this.state.open && !_this.props.docked && (0, _keycode2.default)(event) === 'esc') {
        _this.close('escape');
      }
    }, _this.onBodyTouchStart = function (event) {
      var swipeAreaWidth = _this.props.swipeAreaWidth;

      var touchStartX = event.touches[0].pageX;
      var touchStartY = event.touches[0].pageY;

      // Open only if swiping from far left (or right) while closed
      if (swipeAreaWidth !== null && !_this.state.open) {
        if (_this.props.openSecondary) {
          // If openSecondary is true calculate from the far right
          if (touchStartX < document.body.offsetWidth - swipeAreaWidth) return;
        } else {
          // If openSecondary is false calculate from the far left
          if (touchStartX > swipeAreaWidth) return;
        }
      }

      if (!_this.state.open && (openNavEventHandler !== _this.onBodyTouchStart || _this.props.disableSwipeToOpen)) {
        return;
      }

      _this.maybeSwiping = true;
      _this.touchStartX = touchStartX;
      _this.touchStartY = touchStartY;

      document.body.addEventListener('touchmove', _this.onBodyTouchMove);
      document.body.addEventListener('touchend', _this.onBodyTouchEnd);
      document.body.addEventListener('touchcancel', _this.onBodyTouchEnd);
    }, _this.onBodyTouchMove = function (event) {
      var currentX = event.touches[0].pageX;
      var currentY = event.touches[0].pageY;

      if (_this.state.swiping) {
        event.preventDefault();
        _this.setPosition(_this.getTranslateX(currentX));
      } else if (_this.maybeSwiping) {
        var dXAbs = Math.abs(currentX - _this.touchStartX);
        var dYAbs = Math.abs(currentY - _this.touchStartY);
        // If the user has moved his thumb ten pixels in either direction,
        // we can safely make an assumption about whether he was intending
        // to swipe or scroll.
        var threshold = 10;

        if (dXAbs > threshold && dYAbs <= threshold) {
          _this.swipeStartX = currentX;
          _this.setState({
            swiping: _this.state.open ? 'closing' : 'opening'
          });
          _this.setPosition(_this.getTranslateX(currentX));
        } else if (dXAbs <= threshold && dYAbs > threshold) {
          _this.onBodyTouchEnd();
        }
      }
    }, _this.onBodyTouchEnd = function (event) {
      if (_this.state.swiping) {
        var currentX = event.changedTouches[0].pageX;
        var translateRatio = _this.getTranslateX(currentX) / _this.getMaxTranslateX();

        _this.maybeSwiping = false;
        var swiping = _this.state.swiping;
        _this.setState({
          swiping: null
        });

        // We have to open or close after setting swiping to null,
        // because only then CSS transition is enabled.
        if (translateRatio > 0.5) {
          if (swiping === 'opening') {
            _this.setPosition(_this.getMaxTranslateX());
          } else {
            _this.close('swipe');
          }
        } else {
          if (swiping === 'opening') {
            _this.open('swipe');
          } else {
            _this.setPosition(0);
          }
        }
      } else {
        _this.maybeSwiping = false;
      }

      document.body.removeEventListener('touchmove', _this.onBodyTouchMove);
      document.body.removeEventListener('touchend', _this.onBodyTouchEnd);
      document.body.removeEventListener('touchcancel', _this.onBodyTouchEnd);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Drawer, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.maybeSwiping = false;
      this.touchStartX = null;
      this.touchStartY = null;
      this.swipeStartX = null;

      this.setState({
        open: this.props.open !== null ? this.props.open : this.props.docked,
        swiping: null
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.enableSwipeHandling();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      // If controlled then the open prop takes precedence.
      if (nextProps.open !== null) {
        this.setState({
          open: nextProps.open
        });
        // Otherwise, if docked is changed, change the open state for when uncontrolled.
      } else if (this.props.docked !== nextProps.docked) {
        this.setState({
          open: nextProps.docked
        });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.enableSwipeHandling();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.disableSwipeHandling();
    }
  }, {
    key: 'getStyles',
    value: function getStyles() {
      var muiTheme = this.context.muiTheme;
      var theme = muiTheme.drawer;

      var x = this.getTranslateMultiplier() * (this.state.open ? 0 : this.getMaxTranslateX());

      var styles = {
        root: {
          height: '100%',
          width: this.getTranslatedWidth() || theme.width,
          position: 'fixed',
          zIndex: muiTheme.zIndex.drawer,
          left: 0,
          top: 0,
          transform: 'translate(' + x + 'px, 0)',
          transition: !this.state.swiping && _transitions2.default.easeOut(null, 'transform', null),
          backgroundColor: theme.color,
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch' },
        overlay: {
          zIndex: muiTheme.zIndex.drawerOverlay,
          pointerEvents: this.state.open ? 'auto' : 'none' },
        rootWhenOpenRight: {
          left: 'auto',
          right: 0
        }
      };

      return styles;
    }
  }, {
    key: 'shouldShow',
    value: function shouldShow() {
      return this.state.open || !!this.state.swiping; // component is swiping
    }
  }, {
    key: 'close',
    value: function close(reason) {
      if (this.props.open === null) this.setState({ open: false });
      if (this.props.onRequestChange) this.props.onRequestChange(false, reason);
      return this;
    }
  }, {
    key: 'open',
    value: function open(reason) {
      if (this.props.open === null) this.setState({ open: true });
      if (this.props.onRequestChange) this.props.onRequestChange(true, reason);
      return this;
    }
  }, {
    key: 'getTranslatedWidth',
    value: function getTranslatedWidth() {
      if (typeof this.props.width === 'string') {
        if (!/^\d+(\.\d+)?%$/.test(this.props.width)) {
          throw new Error('Not a valid percentage format.');
        }
        var width = parseFloat(this.props.width) / 100.0;
        // We are doing our best on the Server to render a consistent UI, hence the
        // default value of 10000
        return window ? width * window.innerWidth : 10000;
      } else {
        return this.props.width;
      }
    }
  }, {
    key: 'getMaxTranslateX',
    value: function getMaxTranslateX() {
      var width = this.getTranslatedWidth() || this.context.muiTheme.drawer.width;
      return width + 10;
    }
  }, {
    key: 'getTranslateMultiplier',
    value: function getTranslateMultiplier() {
      return this.props.openSecondary ? 1 : -1;
    }
  }, {
    key: 'enableSwipeHandling',
    value: function enableSwipeHandling() {
      if (!this.props.docked) {
        document.body.addEventListener('touchstart', this.onBodyTouchStart);
        if (!openNavEventHandler) {
          openNavEventHandler = this.onBodyTouchStart;
        }
      } else {
        this.disableSwipeHandling();
      }
    }
  }, {
    key: 'disableSwipeHandling',
    value: function disableSwipeHandling() {
      document.body.removeEventListener('touchstart', this.onBodyTouchStart);
      if (openNavEventHandler === this.onBodyTouchStart) {
        openNavEventHandler = null;
      }
    }
  }, {
    key: 'setPosition',
    value: function setPosition(translateX) {
      var drawer = _reactDom2.default.findDOMNode(this.refs.clickAwayableElement);
      var transformCSS = 'translate(' + this.getTranslateMultiplier() * translateX + 'px, 0)';
      this.refs.overlay.setOpacity(1 - translateX / this.getMaxTranslateX());
      _autoPrefix2.default.set(drawer.style, 'transform', transformCSS);
    }
  }, {
    key: 'getTranslateX',
    value: function getTranslateX(currentX) {
      return Math.min(Math.max(this.state.swiping === 'closing' ? this.getTranslateMultiplier() * (currentX - this.swipeStartX) : this.getMaxTranslateX() - this.getTranslateMultiplier() * (this.swipeStartX - currentX), 0), this.getMaxTranslateX());
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          containerClassName = _props.containerClassName,
          containerStyle = _props.containerStyle,
          docked = _props.docked,
          openSecondary = _props.openSecondary,
          overlayClassName = _props.overlayClassName,
          overlayStyle = _props.overlayStyle,
          style = _props.style,
          zDepth = _props.zDepth;


      var styles = this.getStyles();

      var overlay = void 0;
      if (!docked) {
        overlay = _react2.default.createElement(_Overlay2.default, {
          ref: 'overlay',
          show: this.shouldShow(),
          className: overlayClassName,
          style: (0, _simpleAssign2.default)(styles.overlay, overlayStyle),
          transitionEnabled: !this.state.swiping,
          onTouchTap: this.handleTouchTapOverlay
        });
      }

      return _react2.default.createElement(
        'div',
        {
          className: className,
          style: style
        },
        _react2.default.createElement(_reactEventListener2.default, { target: 'window', onKeyUp: this.handleKeyUp }),
        overlay,
        _react2.default.createElement(
          _Paper2.default,
          {
            ref: 'clickAwayableElement',
            zDepth: zDepth,
            rounded: false,
            transitionEnabled: !this.state.swiping,
            className: containerClassName,
            style: (0, _simpleAssign2.default)(styles.root, openSecondary && styles.rootWhenOpenRight, containerStyle)
          },
          children
        )
      );
    }
  }]);
  return Drawer;
}(_react.Component);

Drawer.defaultProps = {
  disableSwipeToOpen: false,
  docked: true,
  open: null,
  openSecondary: false,
  swipeAreaWidth: 30,
  width: null,
  zDepth: 2
};
Drawer.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? Drawer.propTypes = {
  /**
   * The contents of the `Drawer`
   */
  children: _propTypes2.default.node,
  /**
   * The CSS class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * The CSS class name of the container element.
   */
  containerClassName: _propTypes2.default.string,
  /**
   * Override the inline-styles of the container element.
   */
  containerStyle: _propTypes2.default.object,
  /**
   * If true, swiping sideways when the `Drawer` is closed will not open it.
   */
  disableSwipeToOpen: _propTypes2.default.bool,
  /**
   * If true, the `Drawer` will be docked. In this state, the overlay won't show and
   * clicking on a menu item will not close the `Drawer`.
   */
  docked: _propTypes2.default.bool,
  /**
   * Callback function fired when the `open` state of the `Drawer` is requested to be changed.
   *
   * @param {boolean} open If true, the `Drawer` was requested to be opened.
   * @param {string} reason The reason for the open or close request. Possible values are
   * 'swipe' for open requests; 'clickaway' (on overlay clicks),
   * 'escape' (on escape key press), and 'swipe' for close requests.
   */
  onRequestChange: _propTypes2.default.func,
  /**
   * If true, the `Drawer` is opened.  Providing a value will turn the `Drawer`
   * into a controlled component.
   */
  open: _propTypes2.default.bool,
  /**
   * If true, the `Drawer` is positioned to open from the opposite side.
   */
  openSecondary: _propTypes2.default.bool,
  /**
   * The CSS class name to add to the `Overlay` component that is rendered behind the `Drawer`.
   */
  overlayClassName: _propTypes2.default.string,
  /**
   * Override the inline-styles of the `Overlay` component that is rendered behind the `Drawer`.
   */
  overlayStyle: _propTypes2.default.object,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * The width of the left most (or right most) area in pixels where the `Drawer` can be
   * swiped open from. Setting this to `null` spans that area to the entire page
   * (**CAUTION!** Setting this property to `null` might cause issues with sliders and
   * swipeable `Tabs`: use at your own risk).
   */
  swipeAreaWidth: _propTypes2.default.number,
  /**
   * The width of the `Drawer` in pixels or percentage in string format ex. `50%` to fill
   * half of the window or `100%` and so on. Defaults to using the values from theme.
   */
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  /**
   * The zDepth of the `Drawer`.
   */
  zDepth: _propTypes4.default.zDepth

} : void 0;
exports.default = Drawer;

/***/ },

/***/ "./node_modules/material-ui/Drawer/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Drawer = __webpack_require__("./node_modules/material-ui/Drawer/Drawer.js");

var _Drawer2 = _interopRequireDefault(_Drawer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Drawer2.default;

/***/ },

/***/ "./node_modules/material-ui/DropDownMenu/DropDownMenu.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__("./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _transitions = __webpack_require__("./node_modules/material-ui/styles/transitions.js");

var _transitions2 = _interopRequireDefault(_transitions);

var _arrowDropDown = __webpack_require__("./node_modules/material-ui/svg-icons/navigation/arrow-drop-down.js");

var _arrowDropDown2 = _interopRequireDefault(_arrowDropDown);

var _Menu = __webpack_require__("./node_modules/material-ui/Menu/Menu.js");

var _Menu2 = _interopRequireDefault(_Menu);

var _ClearFix = __webpack_require__("./node_modules/material-ui/internal/ClearFix.js");

var _ClearFix2 = _interopRequireDefault(_ClearFix);

var _Popover = __webpack_require__("./node_modules/material-ui/Popover/Popover.js");

var _Popover2 = _interopRequireDefault(_Popover);

var _PopoverAnimationVertical = __webpack_require__("./node_modules/material-ui/Popover/PopoverAnimationVertical.js");

var _PopoverAnimationVertical2 = _interopRequireDefault(_PopoverAnimationVertical);

var _keycode = __webpack_require__("./node_modules/keycode/index.js");

var _keycode2 = _interopRequireDefault(_keycode);

var _events = __webpack_require__("./node_modules/material-ui/utils/events.js");

var _events2 = _interopRequireDefault(_events);

var _IconButton = __webpack_require__("./node_modules/material-ui/IconButton/index.js");

var _IconButton2 = _interopRequireDefault(_IconButton);

var _propTypes3 = __webpack_require__("./node_modules/material-ui/utils/propTypes.js");

var _propTypes4 = _interopRequireDefault(_propTypes3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var disabled = props.disabled;

  var spacing = context.muiTheme.baseTheme.spacing;
  var palette = context.muiTheme.baseTheme.palette;
  var accentColor = context.muiTheme.dropDownMenu.accentColor;
  return {
    control: {
      cursor: disabled ? 'not-allowed' : 'pointer',
      height: '100%',
      position: 'relative',
      width: '100%'
    },
    icon: {
      fill: accentColor,
      position: 'absolute',
      right: spacing.desktopGutterLess,
      top: (spacing.iconSize - 24) / 2 + spacing.desktopGutterMini / 2
    },
    iconChildren: {
      fill: 'inherit'
    },
    label: {
      color: disabled ? palette.disabledColor : palette.textColor,
      height: spacing.desktopToolbarHeight + 'px',
      lineHeight: spacing.desktopToolbarHeight + 'px',
      overflow: 'hidden',
      opacity: 1,
      position: 'relative',
      paddingLeft: spacing.desktopGutter,
      paddingRight: spacing.iconSize * 2 + spacing.desktopGutterMini,
      textOverflow: 'ellipsis',
      top: 0,
      whiteSpace: 'nowrap'
    },
    labelWhenOpen: {
      opacity: 0,
      top: spacing.desktopToolbarHeight / 8
    },
    root: {
      display: 'inline-block',
      fontSize: spacing.desktopDropDownMenuFontSize,
      height: spacing.desktopSubheaderHeight,
      fontFamily: context.muiTheme.baseTheme.fontFamily,
      outline: 'none',
      position: 'relative',
      transition: _transitions2.default.easeOut()
    },
    rootWhenOpen: {
      opacity: 1
    },
    underline: {
      borderTop: 'solid 1px ' + accentColor,
      bottom: 1,
      left: 0,
      margin: '-1px ' + spacing.desktopGutter + 'px',
      right: 0,
      position: 'absolute'
    }
  };
}

var DropDownMenu = function (_Component) {
  (0, _inherits3.default)(DropDownMenu, _Component);

  function DropDownMenu() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, DropDownMenu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DropDownMenu.__proto__ || (0, _getPrototypeOf2.default)(DropDownMenu)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      open: false
    }, _this.rootNode = undefined, _this.arrowNode = undefined, _this.handleTouchTapControl = function (event) {
      event.preventDefault();
      if (!_this.props.disabled) {
        _this.setState({
          open: !_this.state.open,
          anchorEl: _this.rootNode
        });
      }
    }, _this.handleRequestCloseMenu = function () {
      _this.close(false);
    }, _this.handleEscKeyDownMenu = function () {
      _this.close(true);
    }, _this.handleKeyDown = function (event) {
      switch ((0, _keycode2.default)(event)) {
        case 'up':
        case 'down':
        case 'space':
        case 'enter':
          event.preventDefault();
          _this.setState({
            open: true,
            anchorEl: _this.rootNode
          });
          break;
      }
    }, _this.handleItemTouchTap = function (event, child, index) {
      if (_this.props.multiple) {
        if (!_this.state.open) {
          _this.setState({ open: true });
        }
      } else {
        event.persist();
        _this.setState({
          open: false
        }, function () {
          if (_this.props.onChange) {
            _this.props.onChange(event, index, child.props.value);
          }

          _this.close(_events2.default.isKeyboard(event));
        });
      }
    }, _this.handleChange = function (event, value) {
      if (_this.props.multiple && _this.props.onChange) {
        _this.props.onChange(event, undefined, value);
      }
    }, _this.close = function (isKeyboard) {
      _this.setState({
        open: false
      }, function () {
        if (_this.props.onClose) {
          _this.props.onClose();
        }

        if (isKeyboard) {
          var dropArrow = _this.arrowNode;
          var dropNode = _reactDom2.default.findDOMNode(dropArrow);
          dropNode.focus();
          dropArrow.setKeyboardFocus(true);
        }
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  // The nested styles for drop-down-menu are modified by toolbar and possibly
  // other user components, so it will give full access to its js styles rather
  // than just the parent.


  (0, _createClass3.default)(DropDownMenu, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.autoWidth) {
        this.setWidth();
      }
      if (this.props.openImmediately) {
        // TODO: Temporary fix to make openImmediately work with popover.
        /* eslint-disable react/no-did-mount-set-state */
        setTimeout(function () {
          return _this2.setState({
            open: true,
            anchorEl: _this2.rootNode
          });
        }, 0);
        /* eslint-enable react/no-did-mount-set-state */
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      if (this.props.autoWidth) {
        this.setWidth();
      }
    }
  }, {
    key: 'getInputNode',


    /**
     * This method is deprecated but still here because the TextField
     * need it in order to work. TODO: That will be addressed later.
     */
    value: function getInputNode() {
      var _this3 = this;

      var rootNode = this.rootNode;

      rootNode.focus = function () {
        if (!_this3.props.disabled) {
          _this3.setState({
            open: !_this3.state.open,
            anchorEl: _this3.rootNode
          });
        }
      };

      return rootNode;
    }
  }, {
    key: 'setWidth',
    value: function setWidth() {
      var el = this.rootNode;
      if (!this.props.style || !this.props.style.hasOwnProperty('width')) {
        el.style.width = 'auto';
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props = this.props,
          animated = _props.animated,
          animation = _props.animation,
          autoWidth = _props.autoWidth,
          multiple = _props.multiple,
          children = _props.children,
          className = _props.className,
          disabled = _props.disabled,
          iconStyle = _props.iconStyle,
          labelStyle = _props.labelStyle,
          listStyle = _props.listStyle,
          maxHeight = _props.maxHeight,
          menuStyleProp = _props.menuStyle,
          selectionRenderer = _props.selectionRenderer,
          onClose = _props.onClose,
          openImmediately = _props.openImmediately,
          menuItemStyle = _props.menuItemStyle,
          selectedMenuItemStyle = _props.selectedMenuItemStyle,
          style = _props.style,
          underlineStyle = _props.underlineStyle,
          value = _props.value,
          iconButton = _props.iconButton,
          anchorOrigin = _props.anchorOrigin,
          targetOrigin = _props.targetOrigin,
          other = (0, _objectWithoutProperties3.default)(_props, ['animated', 'animation', 'autoWidth', 'multiple', 'children', 'className', 'disabled', 'iconStyle', 'labelStyle', 'listStyle', 'maxHeight', 'menuStyle', 'selectionRenderer', 'onClose', 'openImmediately', 'menuItemStyle', 'selectedMenuItemStyle', 'style', 'underlineStyle', 'value', 'iconButton', 'anchorOrigin', 'targetOrigin']);
      var _state = this.state,
          anchorEl = _state.anchorEl,
          open = _state.open;
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      var displayValue = '';
      if (!multiple) {
        _react2.default.Children.forEach(children, function (child) {
          if (child && value === child.props.value) {
            if (selectionRenderer) {
              displayValue = selectionRenderer(value);
            } else {
              // This will need to be improved (in case primaryText is a node)
              displayValue = child.props.label || child.props.primaryText;
            }
          }
        });
      } else {
        var values = [];
        _react2.default.Children.forEach(children, function (child) {
          if (child && value && value.indexOf(child.props.value) > -1) {
            if (selectionRenderer) {
              values.push(child.props.value);
            } else {
              values.push(child.props.label || child.props.primaryText);
            }
          }
        });

        displayValue = [];
        if (selectionRenderer) {
          displayValue = selectionRenderer(values);
        } else {
          displayValue = values.join(', ');
        }
      }

      var menuStyle = void 0;
      if (anchorEl && !autoWidth) {
        menuStyle = (0, _simpleAssign2.default)({
          width: anchorEl.clientWidth
        }, menuStyleProp);
      } else {
        menuStyle = menuStyleProp;
      }

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, other, {
          ref: function ref(node) {
            _this4.rootNode = node;
          },
          className: className,
          style: prepareStyles((0, _simpleAssign2.default)({}, styles.root, open && styles.rootWhenOpen, style))
        }),
        _react2.default.createElement(
          _ClearFix2.default,
          { style: styles.control, onTouchTap: this.handleTouchTapControl },
          _react2.default.createElement(
            'div',
            { style: prepareStyles((0, _simpleAssign2.default)({}, styles.label, open && styles.labelWhenOpen, labelStyle)) },
            displayValue
          ),
          _react2.default.createElement(
            _IconButton2.default,
            {
              disabled: disabled,
              onKeyDown: this.handleKeyDown,
              ref: function ref(node) {
                _this4.arrowNode = node;
              },
              style: (0, _simpleAssign2.default)({}, styles.icon, iconStyle),
              iconStyle: styles.iconChildren
            },
            iconButton
          ),
          _react2.default.createElement('div', { style: prepareStyles((0, _simpleAssign2.default)({}, styles.underline, underlineStyle)) })
        ),
        _react2.default.createElement(
          _Popover2.default,
          {
            anchorOrigin: anchorOrigin,
            targetOrigin: targetOrigin,
            anchorEl: anchorEl,
            animation: animation || _PopoverAnimationVertical2.default,
            open: open,
            animated: animated,
            onRequestClose: this.handleRequestCloseMenu
          },
          _react2.default.createElement(
            _Menu2.default,
            {
              multiple: multiple,
              maxHeight: maxHeight,
              desktop: true,
              value: value,
              onEscKeyDown: this.handleEscKeyDownMenu,
              style: menuStyle,
              listStyle: listStyle,
              onItemTouchTap: this.handleItemTouchTap,
              onChange: this.handleChange,
              menuItemStyle: menuItemStyle,
              selectedMenuItemStyle: selectedMenuItemStyle,
              autoWidth: autoWidth,
              width: !autoWidth && menuStyle ? menuStyle.width : null
            },
            children
          )
        )
      );
    }
  }]);
  return DropDownMenu;
}(_react.Component);

DropDownMenu.muiName = 'DropDownMenu';
DropDownMenu.defaultProps = {
  animated: true,
  autoWidth: true,
  disabled: false,
  iconButton: _react2.default.createElement(_arrowDropDown2.default, null),
  openImmediately: false,
  maxHeight: 500,
  multiple: false,
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'left'
  }
};
DropDownMenu.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? DropDownMenu.propTypes = {
  /**
   * This is the point on the anchor that the popover's
   * `targetOrigin` will attach to.
   * Options:
   * vertical: [top, center, bottom]
   * horizontal: [left, middle, right].
   */
  anchorOrigin: _propTypes4.default.origin,
  /**
   * If true, the popover will apply transitions when
   * it gets added to the DOM.
   */
  animated: _propTypes2.default.bool,
  /**
   * Override the default animation component used.
   */
  animation: _propTypes2.default.func,
  /**
   * The width will automatically be set according to the items inside the menu.
   * To control this width in css instead, set this prop to `false`.
   */
  autoWidth: _propTypes2.default.bool,
  /**
   * The `MenuItem`s to populate the `Menu` with. If the `MenuItems` have the
   * prop `label` that value will be used to render the representation of that
   * item within the field.
   */
  children: _propTypes2.default.node,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * Disables the menu.
   */
  disabled: _propTypes2.default.bool,
  /**
   * Overrides default `SvgIcon` dropdown arrow component.
   */
  iconButton: _propTypes2.default.node,
  /**
   * Overrides the styles of icon element.
   */
  iconStyle: _propTypes2.default.object,
  /**
   * Overrides the styles of label when the `DropDownMenu` is inactive.
   */
  labelStyle: _propTypes2.default.object,
  /**
   * The style object to use to override underlying list style.
   */
  listStyle: _propTypes2.default.object,
  /**
   * The maximum height of the `Menu` when it is displayed.
   */
  maxHeight: _propTypes2.default.number,
  /**
   * Override the inline-styles of menu items.
   */
  menuItemStyle: _propTypes2.default.object,
  /**
   * Overrides the styles of `Menu` when the `DropDownMenu` is displayed.
   */
  menuStyle: _propTypes2.default.object,
  /**
   * If true, `value` must be an array and the menu will support
   * multiple selections.
   */
  multiple: _propTypes2.default.bool,
  /**
   * Callback function fired when a menu item is clicked, other than the one currently selected.
   *
   * @param {object} event TouchTap event targeting the menu item that was clicked.
   * @param {number} key The index of the clicked menu item in the `children` collection.
   * @param {any} value If `multiple` is true, the menu's `value`
   * array with either the menu item's `value` added (if
   * it wasn't already selected) or omitted (if it was already selected).
   * Otherwise, the `value` of the menu item.
   */
  onChange: _propTypes2.default.func,
  /**
   * Callback function fired when the menu is closed.
   */
  onClose: _propTypes2.default.func,
  /**
   * Set to true to have the `DropDownMenu` automatically open on mount.
   */
  openImmediately: _propTypes2.default.bool,
  /**
   * Override the inline-styles of selected menu items.
   */
  selectedMenuItemStyle: _propTypes2.default.object,
  /**
   * Callback function fired when a menu item is clicked, other than the one currently selected.
   *
   * @param {any} value If `multiple` is true, the menu's `value`
   * array with either the menu item's `value` added (if
   * it wasn't already selected) or omitted (if it was already selected).
   * Otherwise, the `value` of the menu item.
   */
  selectionRenderer: _propTypes2.default.func,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * This is the point on the popover which will attach to
   * the anchor's origin.
   * Options:
   * vertical: [top, center, bottom]
   * horizontal: [left, middle, right].
   */
  targetOrigin: _propTypes4.default.origin,
  /**
   * Overrides the inline-styles of the underline.
   */
  underlineStyle: _propTypes2.default.object,
  /**
   * If `multiple` is true, an array of the `value`s of the selected
   * menu items. Otherwise, the `value` of the selected menu item.
   * If provided, the menu will be a controlled component.
   */
  value: _propTypes2.default.any
} : void 0;
exports.default = DropDownMenu;

/***/ },

/***/ "./node_modules/material-ui/DropDownMenu/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MenuItem = exports.DropDownMenu = undefined;

var _DropDownMenu2 = __webpack_require__("./node_modules/material-ui/DropDownMenu/DropDownMenu.js");

var _DropDownMenu3 = _interopRequireDefault(_DropDownMenu2);

var _MenuItem2 = __webpack_require__("./node_modules/material-ui/MenuItem/MenuItem.js");

var _MenuItem3 = _interopRequireDefault(_MenuItem2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.DropDownMenu = _DropDownMenu3.default;
exports.MenuItem = _MenuItem3.default;
exports.default = _DropDownMenu3.default;

/***/ },

/***/ "./node_modules/material-ui/FlatButton/FlatButton.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__("./node_modules/material-ui/styles/transitions.js");

var _transitions2 = _interopRequireDefault(_transitions);

var _childUtils = __webpack_require__("./node_modules/material-ui/utils/childUtils.js");

var _colorManipulator = __webpack_require__("./node_modules/material-ui/utils/colorManipulator.js");

var _EnhancedButton = __webpack_require__("./node_modules/material-ui/internal/EnhancedButton.js");

var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);

var _FlatButtonLabel = __webpack_require__("./node_modules/material-ui/FlatButton/FlatButtonLabel.js");

var _FlatButtonLabel2 = _interopRequireDefault(_FlatButtonLabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validateLabel(props, propName, componentName) {
  if (undefined !== 'production') {
    if (!props.children && props.label !== 0 && !props.label && !props.icon) {
      return new Error('Required prop label or children or icon was not specified in ' + componentName + '.');
    }
  }
}

var FlatButton = function (_Component) {
  (0, _inherits3.default)(FlatButton, _Component);

  function FlatButton() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, FlatButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = FlatButton.__proto__ || (0, _getPrototypeOf2.default)(FlatButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hovered: false,
      isKeyboardFocused: false,
      touch: false
    }, _this.handleKeyboardFocus = function (event, isKeyboardFocused) {
      _this.setState({ isKeyboardFocused: isKeyboardFocused });
      _this.props.onKeyboardFocus(event, isKeyboardFocused);
    }, _this.handleMouseEnter = function (event) {
      // Cancel hover styles for touch devices
      if (!_this.state.touch) _this.setState({ hovered: true });
      _this.props.onMouseEnter(event);
    }, _this.handleMouseLeave = function (event) {
      _this.setState({ hovered: false });
      _this.props.onMouseLeave(event);
    }, _this.handleTouchStart = function (event) {
      _this.setState({ touch: true });
      _this.props.onTouchStart(event);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(FlatButton, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.disabled) {
        this.setState({
          hovered: false
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          backgroundColor = _props.backgroundColor,
          children = _props.children,
          disabled = _props.disabled,
          fullWidth = _props.fullWidth,
          hoverColor = _props.hoverColor,
          icon = _props.icon,
          label = _props.label,
          labelStyle = _props.labelStyle,
          labelPosition = _props.labelPosition,
          primary = _props.primary,
          rippleColor = _props.rippleColor,
          secondary = _props.secondary,
          style = _props.style,
          other = (0, _objectWithoutProperties3.default)(_props, ['backgroundColor', 'children', 'disabled', 'fullWidth', 'hoverColor', 'icon', 'label', 'labelStyle', 'labelPosition', 'primary', 'rippleColor', 'secondary', 'style']);
      var _context$muiTheme = this.context.muiTheme,
          borderRadius = _context$muiTheme.borderRadius,
          _context$muiTheme$but = _context$muiTheme.button,
          buttonHeight = _context$muiTheme$but.height,
          buttonMinWidth = _context$muiTheme$but.minWidth,
          buttonTextTransform = _context$muiTheme$but.textTransform,
          _context$muiTheme$fla = _context$muiTheme.flatButton,
          buttonFilterColor = _context$muiTheme$fla.buttonFilterColor,
          buttonColor = _context$muiTheme$fla.color,
          disabledTextColor = _context$muiTheme$fla.disabledTextColor,
          fontSize = _context$muiTheme$fla.fontSize,
          fontWeight = _context$muiTheme$fla.fontWeight,
          primaryTextColor = _context$muiTheme$fla.primaryTextColor,
          secondaryTextColor = _context$muiTheme$fla.secondaryTextColor,
          textColor = _context$muiTheme$fla.textColor,
          _context$muiTheme$fla2 = _context$muiTheme$fla.textTransform,
          textTransform = _context$muiTheme$fla2 === undefined ? buttonTextTransform || 'uppercase' : _context$muiTheme$fla2;

      var defaultTextColor = disabled ? disabledTextColor : primary ? primaryTextColor : secondary ? secondaryTextColor : textColor;

      var defaultHoverColor = (0, _colorManipulator.fade)(buttonFilterColor, 0.2);
      var defaultRippleColor = buttonFilterColor;
      var buttonHoverColor = hoverColor || defaultHoverColor;
      var buttonRippleColor = rippleColor || defaultRippleColor;
      var buttonBackgroundColor = backgroundColor || buttonColor;
      var hovered = (this.state.hovered || this.state.isKeyboardFocused) && !disabled;

      var mergedRootStyles = (0, _simpleAssign2.default)({}, {
        height: buttonHeight,
        lineHeight: buttonHeight + 'px',
        minWidth: fullWidth ? '100%' : buttonMinWidth,
        color: defaultTextColor,
        transition: _transitions2.default.easeOut(),
        borderRadius: borderRadius,
        userSelect: 'none',
        overflow: 'hidden',
        backgroundColor: hovered ? buttonHoverColor : buttonBackgroundColor,
        padding: 0,
        margin: 0,
        textAlign: 'center'
      }, style);

      var iconCloned = void 0;
      var labelStyleIcon = {};

      if (icon) {
        var iconStyles = (0, _simpleAssign2.default)({
          verticalAlign: 'middle',
          marginLeft: label && labelPosition !== 'before' ? 12 : 0,
          marginRight: label && labelPosition === 'before' ? 12 : 0
        }, icon.props.style);
        iconCloned = _react2.default.cloneElement(icon, {
          color: icon.props.color || mergedRootStyles.color,
          style: iconStyles
        });

        if (labelPosition === 'before') {
          labelStyleIcon.paddingRight = 8;
        } else {
          labelStyleIcon.paddingLeft = 8;
        }
      }

      var mergedLabelStyles = (0, _simpleAssign2.default)({
        letterSpacing: 0,
        textTransform: textTransform,
        fontWeight: fontWeight,
        fontSize: fontSize
      }, labelStyleIcon, labelStyle);

      var labelElement = label ? _react2.default.createElement(_FlatButtonLabel2.default, { label: label, style: mergedLabelStyles }) : undefined;

      // Place label before or after children.
      var childrenFragment = labelPosition === 'before' ? {
        labelElement: labelElement,
        iconCloned: iconCloned,
        children: children
      } : {
        children: children,
        iconCloned: iconCloned,
        labelElement: labelElement
      };

      var enhancedButtonChildren = (0, _childUtils.createChildFragment)(childrenFragment);

      return _react2.default.createElement(
        _EnhancedButton2.default,
        (0, _extends3.default)({}, other, {
          disabled: disabled,
          focusRippleColor: buttonRippleColor,
          focusRippleOpacity: 0.3,
          onKeyboardFocus: this.handleKeyboardFocus,
          onMouseLeave: this.handleMouseLeave,
          onMouseEnter: this.handleMouseEnter,
          onTouchStart: this.handleTouchStart,
          style: mergedRootStyles,
          touchRippleColor: buttonRippleColor,
          touchRippleOpacity: 0.3
        }),
        enhancedButtonChildren
      );
    }
  }]);
  return FlatButton;
}(_react.Component);

FlatButton.muiName = 'FlatButton';
FlatButton.defaultProps = {
  disabled: false,
  fullWidth: false,
  labelStyle: {},
  labelPosition: 'after',
  onKeyboardFocus: function onKeyboardFocus() {},
  onMouseEnter: function onMouseEnter() {},
  onMouseLeave: function onMouseLeave() {},
  onTouchStart: function onTouchStart() {},
  primary: false,
  secondary: false
};
FlatButton.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? FlatButton.propTypes = {
  /**
   * Color of button when mouse is not hovering over it.
   */
  backgroundColor: _propTypes2.default.string,
  /**
   * This is what will be displayed inside the button.
   * If a label is specified, the text within the label prop will
   * be displayed. Otherwise, the component will expect children
   * which will then be displayed. (In our example,
   * we are nesting an `<input type="file" />` and a `span`
   * that acts as our label to be displayed.) This only
   * applies to flat and raised buttons.
   */
  children: _propTypes2.default.node,
  /**
   * The CSS class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * The element to use as the container for the FlatButton. Either a string to
   * use a DOM element or a ReactElement. This is useful for wrapping the
   * FlatButton in a custom Link component. If a ReactElement is given, ensure
   * that it passes all of its given props through to the underlying DOM
   * element and renders its children prop for proper integration.
   */
  containerElement: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  /**
   * If true, the element's ripple effect will be disabled.
   */
  disableTouchRipple: _propTypes2.default.bool,
  /**
   * Disables the button if set to true.
   */
  disabled: _propTypes2.default.bool,
  /**
   * If true, the button will take up the full width of its container.
   */
  fullWidth: _propTypes2.default.bool,
  /**
   * Color of button when mouse hovers over.
   */
  hoverColor: _propTypes2.default.string,
  /**
   * The URL to link to when the button is clicked.
   */
  href: _propTypes2.default.string,
  /**
   * Use this property to display an icon.
   */
  icon: _propTypes2.default.node,
  /**
   * Label for the button.
   */
  label: validateLabel,
  /**
   * Place label before or after the passed children.
   */
  labelPosition: _propTypes2.default.oneOf(['before', 'after']),
  /**
   * Override the inline-styles of the button's label element.
   */
  labelStyle: _propTypes2.default.object,
  /**
   * Callback function fired when the element is focused or blurred by the keyboard.
   *
   * @param {object} event `focus` or `blur` event targeting the element.
   * @param {boolean} isKeyboardFocused Indicates whether the element is focused.
   */
  onKeyboardFocus: _propTypes2.default.func,
  /** @ignore */
  onMouseEnter: _propTypes2.default.func,
  /** @ignore */
  onMouseLeave: _propTypes2.default.func,
  /** @ignore */
  onTouchStart: _propTypes2.default.func,
  /**
   * Callback function fired when the button is touch-tapped.
   *
   * @param {object} event TouchTap event targeting the button.
   */
  onTouchTap: _propTypes2.default.func,
  /**
   * If true, colors button according to
   * primaryTextColor from the Theme.
   */
  primary: _propTypes2.default.bool,
  /**
   * Color for the ripple after button is clicked.
   */
  rippleColor: _propTypes2.default.string,
  /**
   * If true, colors button according to secondaryTextColor from the theme.
   * The primary prop has precendent if set to true.
   */
  secondary: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : void 0;
exports.default = FlatButton;

/***/ },

/***/ "./node_modules/material-ui/FlatButton/FlatButtonLabel.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var baseTheme = context.muiTheme.baseTheme;


  return {
    root: {
      position: 'relative',
      paddingLeft: baseTheme.spacing.desktopGutterLess,
      paddingRight: baseTheme.spacing.desktopGutterLess,
      verticalAlign: 'middle'
    }
  };
}

var FlatButtonLabel = function (_Component) {
  (0, _inherits3.default)(FlatButtonLabel, _Component);

  function FlatButtonLabel() {
    (0, _classCallCheck3.default)(this, FlatButtonLabel);
    return (0, _possibleConstructorReturn3.default)(this, (FlatButtonLabel.__proto__ || (0, _getPrototypeOf2.default)(FlatButtonLabel)).apply(this, arguments));
  }

  (0, _createClass3.default)(FlatButtonLabel, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          label = _props.label,
          style = _props.style;
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      return _react2.default.createElement(
        'span',
        { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) },
        label
      );
    }
  }]);
  return FlatButtonLabel;
}(_react.Component);

FlatButtonLabel.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? FlatButtonLabel.propTypes = {
  label: _propTypes2.default.node,
  style: _propTypes2.default.object
} : void 0;
exports.default = FlatButtonLabel;

/***/ },

/***/ "./node_modules/material-ui/FlatButton/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _FlatButton = __webpack_require__("./node_modules/material-ui/FlatButton/FlatButton.js");

var _FlatButton2 = _interopRequireDefault(_FlatButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _FlatButton2.default;

/***/ },

/***/ "./node_modules/material-ui/FloatingActionButton/FloatingActionButton.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__("./node_modules/material-ui/styles/transitions.js");

var _transitions2 = _interopRequireDefault(_transitions);

var _colorManipulator = __webpack_require__("./node_modules/material-ui/utils/colorManipulator.js");

var _EnhancedButton = __webpack_require__("./node_modules/material-ui/internal/EnhancedButton.js");

var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);

var _FontIcon = __webpack_require__("./node_modules/material-ui/FontIcon/index.js");

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _Paper = __webpack_require__("./node_modules/material-ui/Paper/index.js");

var _Paper2 = _interopRequireDefault(_Paper);

var _childUtils = __webpack_require__("./node_modules/material-ui/utils/childUtils.js");

var _warning = __webpack_require__("./node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

var _propTypes3 = __webpack_require__("./node_modules/material-ui/utils/propTypes.js");

var _propTypes4 = _interopRequireDefault(_propTypes3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var floatingActionButton = context.muiTheme.floatingActionButton;


  var backgroundColor = props.backgroundColor || floatingActionButton.color;
  var iconColor = floatingActionButton.iconColor;

  if (props.disabled) {
    backgroundColor = props.disabledColor || floatingActionButton.disabledColor;
    iconColor = floatingActionButton.disabledTextColor;
  } else if (props.secondary) {
    backgroundColor = floatingActionButton.secondaryColor;
    iconColor = floatingActionButton.secondaryIconColor;
  }

  return {
    root: {
      transition: _transitions2.default.easeOut(),
      display: 'inline-block',
      backgroundColor: 'transparent'
    },
    container: {
      backgroundColor: backgroundColor,
      transition: _transitions2.default.easeOut(),
      height: floatingActionButton.buttonSize,
      width: floatingActionButton.buttonSize,
      padding: 0,
      overflow: 'hidden',
      borderRadius: '50%',
      textAlign: 'center',
      verticalAlign: 'bottom'
    },
    containerWhenMini: {
      height: floatingActionButton.miniSize,
      width: floatingActionButton.miniSize
    },
    overlay: {
      transition: _transitions2.default.easeOut(),
      top: 0
    },
    overlayWhenHovered: {
      backgroundColor: (0, _colorManipulator.fade)(iconColor, 0.4)
    },
    icon: {
      height: floatingActionButton.buttonSize,
      lineHeight: floatingActionButton.buttonSize + 'px',
      fill: iconColor,
      color: iconColor
    },
    iconWhenMini: {
      height: floatingActionButton.miniSize,
      lineHeight: floatingActionButton.miniSize + 'px'
    }
  };
}

var FloatingActionButton = function (_Component) {
  (0, _inherits3.default)(FloatingActionButton, _Component);

  function FloatingActionButton() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, FloatingActionButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = FloatingActionButton.__proto__ || (0, _getPrototypeOf2.default)(FloatingActionButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hovered: false,
      touch: false,
      zDepth: undefined
    }, _this.handleMouseDown = function (event) {
      // only listen to left clicks
      if (event.button === 0) {
        _this.setState({ zDepth: _this.props.zDepth + 1 });
      }
      if (_this.props.onMouseDown) _this.props.onMouseDown(event);
    }, _this.handleMouseUp = function (event) {
      _this.setState({ zDepth: _this.props.zDepth });
      if (_this.props.onMouseUp) {
        _this.props.onMouseUp(event);
      }
    }, _this.handleMouseLeave = function (event) {
      if (!_this.refs.container.isKeyboardFocused()) {
        _this.setState({ zDepth: _this.props.zDepth, hovered: false });
      }
      if (_this.props.onMouseLeave) {
        _this.props.onMouseLeave(event);
      }
    }, _this.handleMouseEnter = function (event) {
      if (!_this.refs.container.isKeyboardFocused() && !_this.state.touch) {
        _this.setState({ hovered: true });
      }
      if (_this.props.onMouseEnter) {
        _this.props.onMouseEnter(event);
      }
    }, _this.handleTouchStart = function (event) {
      _this.setState({
        touch: true,
        zDepth: _this.props.zDepth + 1
      });
      if (_this.props.onTouchStart) {
        _this.props.onTouchStart(event);
      }
    }, _this.handleTouchEnd = function (event) {
      _this.setState({
        touch: true,
        zDepth: _this.props.zDepth
      });
      if (_this.props.onTouchEnd) {
        _this.props.onTouchEnd(event);
      }
    }, _this.handleKeyboardFocus = function (event, keyboardFocused) {
      if (keyboardFocused && !_this.props.disabled) {
        _this.setState({ zDepth: _this.props.zDepth + 1 });
        _this.refs.overlay.style.backgroundColor = (0, _colorManipulator.fade)(getStyles(_this.props, _this.context).icon.color, 0.4);
      } else if (!_this.state.hovered) {
        _this.setState({ zDepth: _this.props.zDepth });
        _this.refs.overlay.style.backgroundColor = 'transparent';
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(FloatingActionButton, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({
        zDepth: this.props.disabled ? 0 : this.props.zDepth
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      undefined !== "production" ? (0, _warning2.default)(!this.props.iconClassName || !this.props.children, 'Material-UI: You have set both an iconClassName and a child icon. ' + 'It is recommended you use only one method when adding ' + 'icons to FloatingActionButtons.') : void 0;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var nextState = {};

      if (nextProps.disabled !== this.props.disabled) {
        nextState.zDepth = nextProps.disabled ? 0 : this.props.zDepth;
      }
      if (nextProps.disabled) {
        nextState.hovered = false;
      }

      this.setState(nextState);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          backgroundColor = _props.backgroundColor,
          className = _props.className,
          childrenProp = _props.children,
          disabled = _props.disabled,
          disabledColor = _props.disabledColor,
          mini = _props.mini,
          secondary = _props.secondary,
          iconStyle = _props.iconStyle,
          iconClassName = _props.iconClassName,
          zDepth = _props.zDepth,
          other = (0, _objectWithoutProperties3.default)(_props, ['backgroundColor', 'className', 'children', 'disabled', 'disabledColor', 'mini', 'secondary', 'iconStyle', 'iconClassName', 'zDepth']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      var iconElement = void 0;
      if (iconClassName) {
        iconElement = _react2.default.createElement(_FontIcon2.default, {
          className: iconClassName,
          style: (0, _simpleAssign2.default)({}, styles.icon, mini && styles.iconWhenMini, iconStyle)
        });
      }

      var children = void 0;

      if (childrenProp) {
        children = (0, _childUtils.extendChildren)(childrenProp, function (child) {
          return {
            style: (0, _simpleAssign2.default)({}, styles.icon, mini && styles.iconWhenMini, iconStyle, child.props.style)
          };
        });
      }

      var buttonEventHandlers = disabled ? null : {
        onMouseDown: this.handleMouseDown,
        onMouseUp: this.handleMouseUp,
        onMouseLeave: this.handleMouseLeave,
        onMouseEnter: this.handleMouseEnter,
        onTouchStart: this.handleTouchStart,
        onTouchEnd: this.handleTouchEnd,
        onKeyboardFocus: this.handleKeyboardFocus
      };

      return _react2.default.createElement(
        _Paper2.default,
        {
          className: className,
          style: (0, _simpleAssign2.default)(styles.root, this.props.style),
          zDepth: this.state.zDepth,
          circle: true
        },
        _react2.default.createElement(
          _EnhancedButton2.default,
          (0, _extends3.default)({}, other, buttonEventHandlers, {
            ref: 'container',
            disabled: disabled,
            style: (0, _simpleAssign2.default)(styles.container, this.props.mini && styles.containerWhenMini, iconStyle),
            focusRippleColor: styles.icon.color,
            touchRippleColor: styles.icon.color
          }),
          _react2.default.createElement(
            'div',
            {
              ref: 'overlay',
              style: prepareStyles((0, _simpleAssign2.default)(styles.overlay, this.state.hovered && !this.props.disabled && styles.overlayWhenHovered))
            },
            iconElement,
            children
          )
        )
      );
    }
  }]);
  return FloatingActionButton;
}(_react.Component);

FloatingActionButton.defaultProps = {
  disabled: false,
  mini: false,
  secondary: false,
  zDepth: 2
};
FloatingActionButton.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? FloatingActionButton.propTypes = {
  /**
   * This value will override the default background color for the button.
   * However it will not override the default disabled background color.
   * This has to be set separately using the disabledColor attribute.
   */
  backgroundColor: _propTypes2.default.string,
  /**
   * This is what displayed inside the floating action button; for example, a SVG Icon.
   */
  children: _propTypes2.default.node,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * Disables the button if set to true.
   */
  disabled: _propTypes2.default.bool,
  /**
   * This value will override the default background color for the button when it is disabled.
   */
  disabledColor: _propTypes2.default.string,
  /**
   * The URL to link to when the button is clicked.
   */
  href: _propTypes2.default.string,
  /**
   * The icon within the FloatingActionButton is a FontIcon component.
   * This property is the classname of the icon to be displayed inside the button.
   * An alternative to adding an iconClassName would be to manually insert a
   * FontIcon component or custom SvgIcon component or as a child of FloatingActionButton.
   */
  iconClassName: _propTypes2.default.string,
  /**
   * This is the equivalent to iconClassName except that it is used for
   * overriding the inline-styles of the FontIcon component.
   */
  iconStyle: _propTypes2.default.object,
  /**
   * If true, the button will be a small floating action button.
   */
  mini: _propTypes2.default.bool,
  /** @ignore */
  onMouseDown: _propTypes2.default.func,
  /** @ignore */
  onMouseEnter: _propTypes2.default.func,
  /** @ignore */
  onMouseLeave: _propTypes2.default.func,
  /** @ignore */
  onMouseUp: _propTypes2.default.func,
  /** @ignore */
  onTouchEnd: _propTypes2.default.func,
  /** @ignore */
  onTouchStart: _propTypes2.default.func,
  /**
   * Callback function fired when the button is touch-tapped.
   *
   * @param {object} event TouchTap event targeting the button.
   */
  onTouchTap: _propTypes2.default.func,
  /**
   * If true, the button will use the secondary button colors.
   */
  secondary: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * The zDepth of the underlying `Paper` component.
   */
  zDepth: _propTypes4.default.zDepth
} : void 0;
exports.default = FloatingActionButton;

/***/ },

/***/ "./node_modules/material-ui/FloatingActionButton/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _FloatingActionButton = __webpack_require__("./node_modules/material-ui/FloatingActionButton/FloatingActionButton.js");

var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _FloatingActionButton2.default;

/***/ },

/***/ "./node_modules/material-ui/GridList/GridList.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props) {
  return {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      margin: -props.padding / 2
    },
    item: {
      boxSizing: 'border-box',
      padding: props.padding / 2
    }
  };
}

var GridList = function (_Component) {
  (0, _inherits3.default)(GridList, _Component);

  function GridList() {
    (0, _classCallCheck3.default)(this, GridList);
    return (0, _possibleConstructorReturn3.default)(this, (GridList.__proto__ || (0, _getPrototypeOf2.default)(GridList)).apply(this, arguments));
  }

  (0, _createClass3.default)(GridList, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          cols = _props.cols,
          padding = _props.padding,
          cellHeight = _props.cellHeight,
          children = _props.children,
          style = _props.style,
          other = (0, _objectWithoutProperties3.default)(_props, ['cols', 'padding', 'cellHeight', 'children', 'style']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);
      var mergedRootStyles = (0, _simpleAssign2.default)(styles.root, style);

      var wrappedChildren = _react2.default.Children.map(children, function (currentChild) {
        if (_react2.default.isValidElement(currentChild) && currentChild.type.muiName === 'Subheader') {
          return currentChild;
        }
        var childCols = currentChild.props.cols || 1;
        var childRows = currentChild.props.rows || 1;
        var itemStyle = (0, _simpleAssign2.default)({}, styles.item, {
          width: 100 / cols * childCols + '%',
          height: cellHeight === 'auto' ? 'auto' : cellHeight * childRows + padding
        });

        return _react2.default.createElement(
          'div',
          { style: prepareStyles(itemStyle) },
          currentChild
        );
      });

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ style: prepareStyles(mergedRootStyles) }, other),
        wrappedChildren
      );
    }
  }]);
  return GridList;
}(_react.Component);

GridList.defaultProps = {
  cols: 2,
  padding: 4,
  cellHeight: 180
};
GridList.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? GridList.propTypes = {
  /**
   * Number of px for one cell height.
   * You can set `'auto'` if you want to let the children determine the height.
   */
  cellHeight: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.oneOf(['auto'])]),
  /**
   * Grid Tiles that will be in Grid List.
   */
  children: _propTypes2.default.node,
  /**
   * Number of columns.
   */
  cols: _propTypes2.default.number,
  /**
   * Number of px for the padding/spacing between items.
   */
  padding: _propTypes2.default.number,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : void 0;
exports.default = GridList;

/***/ },

/***/ "./node_modules/material-ui/GridList/GridTile.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var _titleBar;

  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      gridTile = _context$muiTheme.gridTile;


  var actionPos = props.actionIcon && props.actionPosition;

  var styles = {
    root: {
      position: 'relative',
      display: 'block',
      height: '100%',
      overflow: 'hidden'
    },
    titleBar: (_titleBar = {
      position: 'absolute',
      left: 0,
      right: 0
    }, (0, _defineProperty3.default)(_titleBar, props.titlePosition, 0), (0, _defineProperty3.default)(_titleBar, 'height', props.subtitle ? 68 : 48), (0, _defineProperty3.default)(_titleBar, 'background', props.titleBackground), (0, _defineProperty3.default)(_titleBar, 'display', 'flex'), (0, _defineProperty3.default)(_titleBar, 'alignItems', 'center'), _titleBar),
    titleWrap: {
      flexGrow: 1,
      marginLeft: actionPos !== 'left' ? baseTheme.spacing.desktopGutterLess : 0,
      marginRight: actionPos === 'left' ? baseTheme.spacing.desktopGutterLess : 0,
      color: gridTile.textColor,
      overflow: 'hidden'
    },
    title: {
      fontSize: '16px',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap'
    },
    subtitle: {
      fontSize: '12px',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap'
    },
    actionIcon: {
      order: actionPos === 'left' ? -1 : 1
    },
    childImg: {
      height: '100%',
      transform: 'translateX(-50%)',
      position: 'relative',
      left: '50%'
    }
  };
  return styles;
}

var GridTile = function (_Component) {
  (0, _inherits3.default)(GridTile, _Component);

  function GridTile() {
    (0, _classCallCheck3.default)(this, GridTile);
    return (0, _possibleConstructorReturn3.default)(this, (GridTile.__proto__ || (0, _getPrototypeOf2.default)(GridTile)).apply(this, arguments));
  }

  (0, _createClass3.default)(GridTile, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.ensureImageCover();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.ensureImageCover();
    }
  }, {
    key: 'ensureImageCover',
    value: function ensureImageCover() {
      var _this2 = this;

      var imgEl = this.refs.img;

      if (imgEl) {
        var fit = function fit() {
          if (imgEl.offsetWidth < imgEl.parentNode.offsetWidth) {
            var isRtl = _this2.context.muiTheme.isRtl;

            imgEl.style.height = 'auto';
            if (isRtl) {
              imgEl.style.right = '0';
            } else {
              imgEl.style.left = '0';
            }
            imgEl.style.width = '100%';
            imgEl.style.top = '50%';
            imgEl.style.transform = imgEl.style.WebkitTransform = 'translateY(-50%)';
          }
          imgEl.removeEventListener('load', fit);
          imgEl = null; // prevent closure memory leak
        };
        if (imgEl.complete) {
          fit();
        } else {
          imgEl.addEventListener('load', fit);
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          subtitle = _props.subtitle,
          titlePosition = _props.titlePosition,
          titleBackground = _props.titleBackground,
          titleStyle = _props.titleStyle,
          subtitleStyle = _props.subtitleStyle,
          actionIcon = _props.actionIcon,
          actionPosition = _props.actionPosition,
          style = _props.style,
          children = _props.children,
          containerElement = _props.containerElement,
          other = (0, _objectWithoutProperties3.default)(_props, ['title', 'subtitle', 'titlePosition', 'titleBackground', 'titleStyle', 'subtitleStyle', 'actionIcon', 'actionPosition', 'style', 'children', 'containerElement']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);
      var mergedRootStyles = (0, _simpleAssign2.default)(styles.root, style);

      var titleBar = null;

      if (title) {
        titleBar = _react2.default.createElement(
          'div',
          { key: 'titlebar', style: prepareStyles(styles.titleBar) },
          _react2.default.createElement(
            'div',
            { style: prepareStyles(styles.titleWrap) },
            _react2.default.createElement(
              'div',
              { style: prepareStyles((0, _simpleAssign2.default)(styles.title, titleStyle)) },
              title
            ),
            subtitle ? _react2.default.createElement(
              'div',
              { style: prepareStyles((0, _simpleAssign2.default)(styles.subtitle, subtitleStyle)) },
              subtitle
            ) : null
          ),
          actionIcon ? _react2.default.createElement(
            'div',
            { style: prepareStyles(styles.actionIcon) },
            actionIcon
          ) : null
        );
      }

      var newChildren = children;

      // if there is a single image passed as children
      // clone it and add our styles
      if (_react2.default.Children.count(children) === 1) {
        newChildren = _react2.default.Children.map(children, function (child) {
          if (child.type === 'img') {
            return _react2.default.cloneElement(child, {
              key: 'img',
              ref: 'img',
              style: prepareStyles((0, _simpleAssign2.default)({}, styles.childImg, child.props.style))
            });
          } else {
            return child;
          }
        });
      }

      var containerProps = (0, _extends3.default)({
        style: prepareStyles(mergedRootStyles)
      }, other);

      return _react2.default.isValidElement(containerElement) ? _react2.default.cloneElement(containerElement, containerProps, [newChildren, titleBar]) : _react2.default.createElement(containerElement, containerProps, [newChildren, titleBar]);
    }
  }]);
  return GridTile;
}(_react.Component);

GridTile.defaultProps = {
  titlePosition: 'bottom',
  titleBackground: 'rgba(0, 0, 0, 0.4)',
  actionPosition: 'right',
  cols: 1,
  rows: 1,
  containerElement: 'div'
};
GridTile.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? GridTile.propTypes = {
  /**
   * An IconButton element to be used as secondary action target
   * (primary action target is the tile itself).
   */
  actionIcon: _propTypes2.default.element,
  /**
   * Position of secondary action IconButton.
   */
  actionPosition: _propTypes2.default.oneOf(['left', 'right']),
  /**
   * Theoretically you can pass any node as children, but the main use case is to pass an img,
   * in whichcase GridTile takes care of making the image "cover" available space
   * (similar to background-size: cover or to object-fit:cover).
   */
  children: _propTypes2.default.node,
  /**
   * Width of the tile in number of grid cells.
   */
  cols: _propTypes2.default.number,
  /**
   * Either a string used as tag name for the tile root element, or a ReactElement.
   * This is useful when you have, for example, a custom implementation of
   * a navigation link (that knows about your routes) and you want to use it as the primary tile action.
   * In case you pass a ReactElement, please ensure that it passes all props,
   * accepts styles overrides and render it's children.
   */
  containerElement: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  /**
   * Height of the tile in number of grid cells.
   */
  rows: _propTypes2.default.number,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * String or element serving as subtitle (support text).
   */
  subtitle: _propTypes2.default.node,
  /**
   * Override the inline-styles of the subtitle element.
   */
  subtitleStyle: _propTypes2.default.object,
  /**
   * Title to be displayed on tile.
   */
  title: _propTypes2.default.node,
  /**
   * Style used for title bar background.
   * Useful for setting custom gradients for example
   */
  titleBackground: _propTypes2.default.string,
  /**
   * Position of the title bar (container of title, subtitle and action icon).
   */
  titlePosition: _propTypes2.default.oneOf(['top', 'bottom']),
  /**
   * Override the inline-styles of the title element.
   */
  titleStyle: _propTypes2.default.object
} : void 0;
exports.default = GridTile;

/***/ },

/***/ "./node_modules/material-ui/GridList/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.GridTile = exports.GridList = undefined;

var _GridList2 = __webpack_require__("./node_modules/material-ui/GridList/GridList.js");

var _GridList3 = _interopRequireDefault(_GridList2);

var _GridTile2 = __webpack_require__("./node_modules/material-ui/GridList/GridTile.js");

var _GridTile3 = _interopRequireDefault(_GridTile2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.GridList = _GridList3.default;
exports.GridTile = _GridTile3.default;
exports.default = _GridList3.default;

/***/ },

/***/ "./node_modules/material-ui/IconMenu/IconMenu.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__("./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _events = __webpack_require__("./node_modules/material-ui/utils/events.js");

var _events2 = _interopRequireDefault(_events);

var _propTypes3 = __webpack_require__("./node_modules/material-ui/utils/propTypes.js");

var _propTypes4 = _interopRequireDefault(_propTypes3);

var _Menu = __webpack_require__("./node_modules/material-ui/Menu/Menu.js");

var _Menu2 = _interopRequireDefault(_Menu);

var _Popover = __webpack_require__("./node_modules/material-ui/Popover/Popover.js");

var _Popover2 = _interopRequireDefault(_Popover);

var _warning = __webpack_require__("./node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconMenu = function (_Component) {
  (0, _inherits3.default)(IconMenu, _Component);

  function IconMenu() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, IconMenu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = IconMenu.__proto__ || (0, _getPrototypeOf2.default)(IconMenu)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      menuInitiallyKeyboardFocused: false,
      open: false
    }, _this.handleItemTouchTap = function (event, child) {
      if (_this.props.touchTapCloseDelay !== 0 && !child.props.hasOwnProperty('menuItems')) {
        var isKeyboard = _events2.default.isKeyboard(event);
        _this.timerCloseId = setTimeout(function () {
          _this.close(isKeyboard ? 'enter' : 'itemTap', isKeyboard);
        }, _this.props.touchTapCloseDelay);
      }

      _this.props.onItemTouchTap(event, child);
    }, _this.handleRequestClose = function (reason) {
      _this.close(reason);
    }, _this.handleEscKeyDownMenu = function (event) {
      _this.close('escape', event);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(IconMenu, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.open != null) {
        this.setState({
          open: nextProps.open,
          anchorEl: this.refs.iconMenuContainer
        });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.timerCloseId);
    }
  }, {
    key: 'isOpen',
    value: function isOpen() {
      return this.state.open;
    }
  }, {
    key: 'close',
    value: function close(reason, isKeyboard) {
      var _this2 = this;

      if (!this.state.open) {
        return;
      }

      if (this.props.open !== null) {
        this.props.onRequestChange(false, reason);
      } else {
        this.setState({ open: false }, function () {
          // Set focus on the icon button when the menu close
          if (isKeyboard) {
            var iconButton = _this2.refs.iconButton;
            _reactDom2.default.findDOMNode(iconButton).focus();
            iconButton.setKeyboardFocus();
          }
        });
      }
    }
  }, {
    key: 'open',
    value: function open(reason, event) {
      if (this.props.open !== null) {
        this.props.onRequestChange(true, reason);

        return this.setState({
          menuInitiallyKeyboardFocused: _events2.default.isKeyboard(event),
          anchorEl: event.currentTarget
        });
      }

      this.setState({
        open: true,
        menuInitiallyKeyboardFocused: _events2.default.isKeyboard(event),
        anchorEl: event.currentTarget
      });

      event.preventDefault();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          anchorOrigin = _props.anchorOrigin,
          className = _props.className,
          animated = _props.animated,
          animation = _props.animation,
          iconButtonElement = _props.iconButtonElement,
          iconStyle = _props.iconStyle,
          onItemTouchTap = _props.onItemTouchTap,
          onKeyboardFocus = _props.onKeyboardFocus,
          onMouseDown = _props.onMouseDown,
          onMouseLeave = _props.onMouseLeave,
          onMouseEnter = _props.onMouseEnter,
          onMouseUp = _props.onMouseUp,
          onRequestChange = _props.onRequestChange,
          onTouchTap = _props.onTouchTap,
          listStyle = _props.listStyle,
          menuStyle = _props.menuStyle,
          style = _props.style,
          targetOrigin = _props.targetOrigin,
          touchTapCloseDelay = _props.touchTapCloseDelay,
          useLayerForClickAway = _props.useLayerForClickAway,
          other = (0, _objectWithoutProperties3.default)(_props, ['anchorOrigin', 'className', 'animated', 'animation', 'iconButtonElement', 'iconStyle', 'onItemTouchTap', 'onKeyboardFocus', 'onMouseDown', 'onMouseLeave', 'onMouseEnter', 'onMouseUp', 'onRequestChange', 'onTouchTap', 'listStyle', 'menuStyle', 'style', 'targetOrigin', 'touchTapCloseDelay', 'useLayerForClickAway']);
      var prepareStyles = this.context.muiTheme.prepareStyles;
      var _state = this.state,
          open = _state.open,
          anchorEl = _state.anchorEl;


      var styles = {
        root: {
          display: 'inline-block',
          position: 'relative'
        },
        menu: {
          position: 'relative'
        }
      };

      var mergedRootStyles = (0, _simpleAssign2.default)(styles.root, style);
      var mergedMenuStyles = (0, _simpleAssign2.default)(styles.menu, menuStyle);

      undefined !== "production" ? (0, _warning2.default)(iconButtonElement.type.muiName !== 'SvgIcon', 'Material-UI: You shoud not provide an <SvgIcon /> to the \'iconButtonElement\' property of <IconMenu />.\nYou should wrapped it with an <IconButton />.') : void 0;

      var iconButtonProps = {
        onKeyboardFocus: onKeyboardFocus,
        onTouchTap: function onTouchTap(event) {
          _this3.open(_events2.default.isKeyboard(event) ? 'keyboard' : 'iconTap', event);
          if (iconButtonElement.props.onTouchTap) {
            iconButtonElement.props.onTouchTap(event);
          }
        },
        ref: 'iconButton'
      };
      if (iconStyle || iconButtonElement.props.iconStyle) {
        iconButtonProps.iconStyle = iconStyle ? (0, _simpleAssign2.default)({}, iconStyle, iconButtonElement.props.iconStyle) : iconButtonElement.props.iconStyle;
      }
      var iconButton = _react2.default.cloneElement(iconButtonElement, iconButtonProps);

      var menu = _react2.default.createElement(
        _Menu2.default,
        (0, _extends3.default)({}, other, {
          initiallyKeyboardFocused: this.state.menuInitiallyKeyboardFocused,
          onEscKeyDown: this.handleEscKeyDownMenu,
          onItemTouchTap: this.handleItemTouchTap,
          style: mergedMenuStyles,
          listStyle: listStyle
        }),
        this.props.children
      );

      return _react2.default.createElement(
        'div',
        {
          ref: 'iconMenuContainer',
          className: className,
          onMouseDown: onMouseDown,
          onMouseLeave: onMouseLeave,
          onMouseEnter: onMouseEnter,
          onMouseUp: onMouseUp,
          onTouchTap: onTouchTap,
          style: prepareStyles(mergedRootStyles)
        },
        iconButton,
        _react2.default.createElement(
          _Popover2.default,
          {
            anchorOrigin: anchorOrigin,
            targetOrigin: targetOrigin,
            open: open,
            anchorEl: anchorEl,
            childContextTypes: this.constructor.childContextTypes,
            useLayerForClickAway: useLayerForClickAway,
            onRequestClose: this.handleRequestClose,
            animated: animated,
            animation: animation,
            context: this.context
          },
          menu
        )
      );
    }
  }]);
  return IconMenu;
}(_react.Component);

IconMenu.muiName = 'IconMenu';
IconMenu.defaultProps = {
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'left'
  },
  animated: true,
  multiple: false,
  open: null,
  onItemTouchTap: function onItemTouchTap() {},
  onKeyboardFocus: function onKeyboardFocus() {},
  onMouseDown: function onMouseDown() {},
  onMouseLeave: function onMouseLeave() {},
  onMouseEnter: function onMouseEnter() {},
  onMouseUp: function onMouseUp() {},
  onRequestChange: function onRequestChange() {},
  onTouchTap: function onTouchTap() {},
  targetOrigin: {
    vertical: 'top',
    horizontal: 'left'
  },
  touchTapCloseDelay: 200,
  useLayerForClickAway: false
};
IconMenu.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? IconMenu.propTypes = {
  /**
   * This is the point on the icon where the menu
   * `targetOrigin` will attach.
   * Options:
   * vertical: [top, center, bottom]
   * horizontal: [left, middle, right].
   */
  anchorOrigin: _propTypes4.default.origin,
  /**
   * If true, the popover will apply transitions when
   * it gets added to the DOM.
   */
  animated: _propTypes2.default.bool,
  /**
   * Override the default animation component used.
   */
  animation: _propTypes2.default.func,
  /**
   * Should be used to pass `MenuItem` components.
   */
  children: _propTypes2.default.node,
  /**
   * The CSS class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * This is the `IconButton` to render. This button will open the menu.
   */
  iconButtonElement: _propTypes2.default.element.isRequired,
  /**
   * Override the inline-styles of the underlying icon element.
   */
  iconStyle: _propTypes2.default.object,
  /**
   * Override the inline-styles of the underlying `List` element.
   */
  listStyle: _propTypes2.default.object,
  /**
   * Override the inline-styles of the menu element.
   */
  menuStyle: _propTypes2.default.object,
  /**
   * If true, the value can an be array and allow the menu to be a multi-select.
   */
  multiple: _propTypes2.default.bool,
  /**
   * Callback function fired when a menu item is selected with a touch-tap.
   *
   * @param {object} event TouchTap event targeting the selected menu item element.
   * @param {object} child The selected element.
   */
  onItemTouchTap: _propTypes2.default.func,
  /**
   * Callback function fired when the `IconButton` element is focused or blurred by the keyboard.
   *
   * @param {object} event `focus` or `blur` event targeting the `IconButton` element.
   * @param {boolean} keyboardFocused If true, the `IconButton` element is focused.
   */
  onKeyboardFocus: _propTypes2.default.func,
  /** @ignore */
  onMouseDown: _propTypes2.default.func,
  /** @ignore */
  onMouseEnter: _propTypes2.default.func,
  /** @ignore */
  onMouseLeave: _propTypes2.default.func,
  /** @ignore */
  onMouseUp: _propTypes2.default.func,
  /**
   * Callback function fired when the `open` state of the menu is requested to be changed.
   *
   * @param {boolean} open If true, the menu was requested to be opened.
   * @param {string} reason The reason for the open or close request. Possible values are
   * 'keyboard' and 'iconTap' for open requests; 'enter', 'escape', 'itemTap', and 'clickAway'
   * for close requests.
   */
  onRequestChange: _propTypes2.default.func,
  /**
   * Callback function fired when the `IconButton` element is touch-tapped.
   *
   * @param {object} event TouchTap event targeting the `IconButton` element.
   */
  onTouchTap: _propTypes2.default.func,
  /**
   * If true, the `IconMenu` is opened.
   */
  open: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * This is the point on the menu which will stick to the menu
   * origin.
   * Options:
   * vertical: [top, center, bottom]
   * horizontal: [left, middle, right].
   */
  targetOrigin: _propTypes4.default.origin,
  /**
   * Sets the delay in milliseconds before closing the
   * menu when an item is clicked.
   * If set to 0 then the auto close functionality
   * will be disabled.
   */
  touchTapCloseDelay: _propTypes2.default.number,
  /**
   * If true, the popover will render on top of an invisible
   * layer, which will prevent clicks to the underlying elements.
   */
  useLayerForClickAway: _propTypes2.default.bool
} : void 0;
exports.default = IconMenu;

/***/ },

/***/ "./node_modules/material-ui/IconMenu/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MenuItem = exports.IconMenu = undefined;

var _IconMenu2 = __webpack_require__("./node_modules/material-ui/IconMenu/IconMenu.js");

var _IconMenu3 = _interopRequireDefault(_IconMenu2);

var _MenuItem2 = __webpack_require__("./node_modules/material-ui/MenuItem/MenuItem.js");

var _MenuItem3 = _interopRequireDefault(_MenuItem2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.IconMenu = _IconMenu3.default;
exports.MenuItem = _MenuItem3.default;
exports.default = _IconMenu3.default;

/***/ },

/***/ "./node_modules/material-ui/LinearProgress/LinearProgress.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__("./node_modules/material-ui/styles/transitions.js");

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getRelativeValue(value, min, max) {
  var clampedValue = Math.min(Math.max(min, value), max);
  var rangeValue = max - min;
  var relValue = Math.round((clampedValue - min) / rangeValue * 10000) / 10000;
  return relValue * 100;
}

function getStyles(props, context) {
  var max = props.max,
      min = props.min,
      value = props.value;
  var _context$muiTheme = context.muiTheme,
      palette = _context$muiTheme.baseTheme.palette,
      borderRadius = _context$muiTheme.borderRadius;


  var styles = {
    root: {
      position: 'relative',
      height: 4,
      display: 'block',
      width: '100%',
      backgroundColor: palette.primary3Color,
      borderRadius: borderRadius,
      margin: 0,
      overflow: 'hidden'
    },
    bar: {
      height: '100%'
    },
    barFragment1: {},
    barFragment2: {}
  };

  if (props.mode === 'indeterminate') {
    styles.barFragment1 = {
      position: 'absolute',
      backgroundColor: props.color || palette.primary1Color,
      top: 0,
      left: 0,
      bottom: 0,
      transition: _transitions2.default.create('all', '840ms', null, 'cubic-bezier(0.650, 0.815, 0.735, 0.395)')
    };

    styles.barFragment2 = {
      position: 'absolute',
      backgroundColor: props.color || palette.primary1Color,
      top: 0,
      left: 0,
      bottom: 0,
      transition: _transitions2.default.create('all', '840ms', null, 'cubic-bezier(0.165, 0.840, 0.440, 1.000)')
    };
  } else {
    styles.bar.backgroundColor = props.color || palette.primary1Color;
    styles.bar.transition = _transitions2.default.create('width', '.3s', null, 'linear');
    styles.bar.width = getRelativeValue(value, min, max) + '%';
  }

  return styles;
}

var LinearProgress = function (_Component) {
  (0, _inherits3.default)(LinearProgress, _Component);

  function LinearProgress() {
    (0, _classCallCheck3.default)(this, LinearProgress);
    return (0, _possibleConstructorReturn3.default)(this, (LinearProgress.__proto__ || (0, _getPrototypeOf2.default)(LinearProgress)).apply(this, arguments));
  }

  (0, _createClass3.default)(LinearProgress, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.timers = {};

      this.timers.bar1 = this.barUpdate('bar1', 0, this.refs.bar1, [[-35, 100], [100, -90]], 0);

      this.timers.bar2 = setTimeout(function () {
        _this2.barUpdate('bar2', 0, _this2.refs.bar2, [[-200, 100], [107, -8]], 0);
      }, 850);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.timers.bar1);
      clearTimeout(this.timers.bar2);
    }
  }, {
    key: 'barUpdate',
    value: function barUpdate(id, step, barElement, stepValues, timeToNextStep) {
      var _this3 = this;

      if (this.props.mode !== 'indeterminate') return;

      timeToNextStep = timeToNextStep || 420;
      step = step || 0;
      step %= 4;

      var right = this.context.muiTheme.isRtl ? 'left' : 'right';
      var left = this.context.muiTheme.isRtl ? 'right' : 'left';

      if (step === 0) {
        barElement.style[left] = stepValues[0][0] + '%';
        barElement.style[right] = stepValues[0][1] + '%';
      } else if (step === 1) {
        barElement.style.transitionDuration = '840ms';
      } else if (step === 2) {
        barElement.style[left] = stepValues[1][0] + '%';
        barElement.style[right] = stepValues[1][1] + '%';
      } else if (step === 3) {
        barElement.style.transitionDuration = '0ms';
      }
      this.timers[id] = setTimeout(function () {
        return _this3.barUpdate(id, step + 1, barElement, stepValues);
      }, timeToNextStep);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          other = (0, _objectWithoutProperties3.default)(_props, ['style']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, other, { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) }),
        _react2.default.createElement(
          'div',
          { style: prepareStyles(styles.bar) },
          _react2.default.createElement('div', { ref: 'bar1', style: prepareStyles(styles.barFragment1) }),
          _react2.default.createElement('div', { ref: 'bar2', style: prepareStyles(styles.barFragment2) })
        )
      );
    }
  }]);
  return LinearProgress;
}(_react.Component);

LinearProgress.defaultProps = {
  mode: 'indeterminate',
  value: 0,
  min: 0,
  max: 100
};
LinearProgress.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? LinearProgress.propTypes = {
  /**
   * The color of the progress bar, defaults to
   * primary color of theme.
   */
  color: _propTypes2.default.string,
  /**
   * The max value of progress, only works in determinate mode.
   */
  max: _propTypes2.default.number,
  /**
   * The min value of progress, only works in determinate mode.
   */
  min: _propTypes2.default.number,
  /**
   * The mode of show your progress, indeterminate for when
   * there is no value for progress.
   */
  mode: _propTypes2.default.oneOf(['determinate', 'indeterminate']),
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * The value of progress, only works in determinate mode.
   */
  value: _propTypes2.default.number
} : void 0;
exports.default = LinearProgress;

/***/ },

/***/ "./node_modules/material-ui/LinearProgress/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _LinearProgress = __webpack_require__("./node_modules/material-ui/LinearProgress/LinearProgress.js");

var _LinearProgress2 = _interopRequireDefault(_LinearProgress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _LinearProgress2.default;

/***/ },

/***/ "./node_modules/material-ui/List/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.makeSelectable = exports.ListItem = exports.List = undefined;

var _List2 = __webpack_require__("./node_modules/material-ui/List/List.js");

var _List3 = _interopRequireDefault(_List2);

var _ListItem2 = __webpack_require__("./node_modules/material-ui/List/ListItem.js");

var _ListItem3 = _interopRequireDefault(_ListItem2);

var _makeSelectable2 = __webpack_require__("./node_modules/material-ui/List/makeSelectable.js");

var _makeSelectable3 = _interopRequireDefault(_makeSelectable2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.List = _List3.default;
exports.ListItem = _ListItem3.default;
exports.makeSelectable = _makeSelectable3.default;
exports.default = _List3.default;

/***/ },

/***/ "./node_modules/material-ui/List/makeSelectable.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSelectable = undefined;

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _colorManipulator = __webpack_require__("./node_modules/material-ui/utils/colorManipulator.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var makeSelectable = function makeSelectable(MyComponent) {
  var _class, _temp2;

  return _temp2 = _class = function (_Component) {
    (0, _inherits3.default)(_class, _Component);

    function _class() {
      var _ref;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, _class);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = _class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call.apply(_ref, [this].concat(args))), _this), _this.hasSelectedDescendant = function (previousValue, child) {
        if (_react2.default.isValidElement(child) && child.props.nestedItems && child.props.nestedItems.length > 0) {
          return child.props.nestedItems.reduce(_this.hasSelectedDescendant, previousValue);
        }
        return previousValue || _this.isChildSelected(child, _this.props);
      }, _this.handleItemTouchTap = function (event, item) {
        var itemValue = item.props.value;

        if (itemValue !== _this.props.value) {
          if (_this.props.onChange) {
            _this.props.onChange(event, itemValue);
          }
        }
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(_class, [{
      key: 'extendChild',
      value: function extendChild(child, styles, selectedItemStyle) {
        var _this2 = this;

        if (child && child.type && child.type.muiName === 'ListItem') {
          var selected = this.isChildSelected(child, this.props);
          var selectedChildrenStyles = void 0;
          if (selected) {
            selectedChildrenStyles = (0, _simpleAssign2.default)({}, styles, selectedItemStyle);
          }

          var mergedChildrenStyles = (0, _simpleAssign2.default)({}, child.props.style, selectedChildrenStyles);

          this.keyIndex += 1;

          return _react2.default.cloneElement(child, {
            onTouchTap: function onTouchTap(event) {
              _this2.handleItemTouchTap(event, child);
              if (child.props.onTouchTap) {
                child.props.onTouchTap(event);
              }
            },
            key: this.keyIndex,
            style: mergedChildrenStyles,
            nestedItems: child.props.nestedItems.map(function (child) {
              return _this2.extendChild(child, styles, selectedItemStyle);
            }),
            initiallyOpen: this.isInitiallyOpen(child)
          });
        } else {
          return child;
        }
      }
    }, {
      key: 'isInitiallyOpen',
      value: function isInitiallyOpen(child) {
        if (child.props.initiallyOpen) {
          return child.props.initiallyOpen;
        }
        return this.hasSelectedDescendant(false, child);
      }
    }, {
      key: 'isChildSelected',
      value: function isChildSelected(child, props) {
        return props.value === child.props.value;
      }
    }, {
      key: 'render',
      value: function render() {
        var _this3 = this;

        var _props = this.props,
            children = _props.children,
            selectedItemStyle = _props.selectedItemStyle,
            other = (0, _objectWithoutProperties3.default)(_props, ['children', 'selectedItemStyle']);


        this.keyIndex = 0;
        var styles = {};

        if (!selectedItemStyle) {
          var textColor = this.context.muiTheme.baseTheme.palette.textColor;
          styles.backgroundColor = (0, _colorManipulator.fade)(textColor, 0.2);
        }

        return _react2.default.createElement(
          MyComponent,
          (0, _extends3.default)({}, other, this.state),
          _react.Children.map(children, function (child) {
            return _this3.extendChild(child, styles, selectedItemStyle);
          })
        );
      }
    }]);
    return _class;
  }(_react.Component), _class.propTypes = {
    children: _propTypes2.default.node,
    onChange: _propTypes2.default.func,
    selectedItemStyle: _propTypes2.default.object,
    value: _propTypes2.default.any
  }, _class.contextTypes = {
    muiTheme: _propTypes2.default.object.isRequired
  }, _temp2;
};

exports.makeSelectable = makeSelectable;
exports.default = makeSelectable;

/***/ },

/***/ "./node_modules/material-ui/RadioButton/RadioButton.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__("./node_modules/material-ui/styles/transitions.js");

var _transitions2 = _interopRequireDefault(_transitions);

var _EnhancedSwitch = __webpack_require__("./node_modules/material-ui/internal/EnhancedSwitch.js");

var _EnhancedSwitch2 = _interopRequireDefault(_EnhancedSwitch);

var _radioButtonUnchecked = __webpack_require__("./node_modules/material-ui/svg-icons/toggle/radio-button-unchecked.js");

var _radioButtonUnchecked2 = _interopRequireDefault(_radioButtonUnchecked);

var _radioButtonChecked = __webpack_require__("./node_modules/material-ui/svg-icons/toggle/radio-button-checked.js");

var _radioButtonChecked2 = _interopRequireDefault(_radioButtonChecked);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var radioButton = context.muiTheme.radioButton;


  return {
    icon: {
      height: radioButton.size,
      width: radioButton.size
    },
    target: {
      transition: _transitions2.default.easeOut(),
      position: 'absolute',
      opacity: 1,
      transform: 'scale(1)',
      fill: radioButton.borderColor
    },
    fill: {
      position: 'absolute',
      opacity: 1,
      transform: 'scale(0)',
      transformOrigin: '50% 50%',
      transition: _transitions2.default.easeOut(),
      fill: radioButton.checkedColor
    },
    targetWhenChecked: {
      opacity: 0,
      transform: 'scale(0)'
    },
    fillWhenChecked: {
      opacity: 1,
      transform: 'scale(1)'
    },
    targetWhenDisabled: {
      fill: radioButton.disabledColor
    },
    fillWhenDisabled: {
      fill: radioButton.disabledColor
    },
    label: {
      color: props.disabled ? radioButton.labelDisabledColor : radioButton.labelColor
    },
    ripple: {
      color: props.checked ? radioButton.checkedColor : radioButton.borderColor
    }
  };
}

var RadioButton = function (_Component) {
  (0, _inherits3.default)(RadioButton, _Component);

  function RadioButton() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RadioButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RadioButton.__proto__ || (0, _getPrototypeOf2.default)(RadioButton)).call.apply(_ref, [this].concat(args))), _this), _this.handleSwitch = function (event) {
      if (_this.props.onCheck) {
        _this.props.onCheck(event, _this.props.value);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  // Only called when selected, not when unselected.


  (0, _createClass3.default)(RadioButton, [{
    key: 'isChecked',
    value: function isChecked() {
      return this.refs.enhancedSwitch.isSwitched();
    }

    // Use RadioButtonGroup.setSelectedValue(newSelectionValue) to set a
    // RadioButton's checked value.

  }, {
    key: 'setChecked',
    value: function setChecked(newCheckedValue) {
      this.refs.enhancedSwitch.setSwitched(newCheckedValue);
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.refs.enhancedSwitch.getValue();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          checkedIcon = _props.checkedIcon,
          checked = _props.checked,
          iconStyle = _props.iconStyle,
          labelStyle = _props.labelStyle,
          labelPosition = _props.labelPosition,
          onCheck = _props.onCheck,
          uncheckedIcon = _props.uncheckedIcon,
          disabled = _props.disabled,
          other = (0, _objectWithoutProperties3.default)(_props, ['checkedIcon', 'checked', 'iconStyle', 'labelStyle', 'labelPosition', 'onCheck', 'uncheckedIcon', 'disabled']);


      var styles = getStyles(this.props, this.context);

      var uncheckedStyles = (0, _simpleAssign2.default)(styles.target, checked && styles.targetWhenChecked, iconStyle, disabled && styles.targetWhenDisabled);

      var checkedStyles = (0, _simpleAssign2.default)(styles.fill, checked && styles.fillWhenChecked, iconStyle, disabled && styles.fillWhenDisabled);

      var uncheckedElement = _react2.default.isValidElement(uncheckedIcon) ? _react2.default.cloneElement(uncheckedIcon, {
        style: (0, _simpleAssign2.default)(uncheckedStyles, uncheckedIcon.props.style)
      }) : _react2.default.createElement(_radioButtonUnchecked2.default, { style: uncheckedStyles });

      var checkedElement = _react2.default.isValidElement(checkedIcon) ? _react2.default.cloneElement(checkedIcon, {
        style: (0, _simpleAssign2.default)(checkedStyles, checkedIcon.props.style)
      }) : _react2.default.createElement(_radioButtonChecked2.default, { style: checkedStyles });

      var mergedIconStyle = (0, _simpleAssign2.default)(styles.icon, iconStyle);
      var mergedLabelStyle = (0, _simpleAssign2.default)(styles.label, labelStyle);

      return _react2.default.createElement(_EnhancedSwitch2.default, (0, _extends3.default)({}, other, {
        ref: 'enhancedSwitch',
        inputType: 'radio',
        checked: checked,
        switched: checked,
        disabled: disabled,
        rippleColor: styles.ripple.color,
        iconStyle: mergedIconStyle,
        labelStyle: mergedLabelStyle,
        labelPosition: labelPosition,
        onSwitch: this.handleSwitch,
        switchElement: _react2.default.createElement(
          'div',
          null,
          uncheckedElement,
          checkedElement
        )
      }));
    }
  }]);
  return RadioButton;
}(_react.Component);

RadioButton.defaultProps = {
  checked: false,
  disabled: false,
  labelPosition: 'right'
};
RadioButton.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? RadioButton.propTypes = {
  /**
   * @ignore
   * checked if true
   * Used internally by `RadioButtonGroup`.
   */
  checked: _propTypes2.default.bool,
  /**
   * The icon element to show when the radio button is checked.
   */
  checkedIcon: _propTypes2.default.element,
  /**
   * If true, the radio button is disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the icon element.
   */
  iconStyle: _propTypes2.default.object,
  /**
   * Override the inline-styles of the input element.
   */
  inputStyle: _propTypes2.default.object,
  /**
   * @ignore
   * Used internally by `RadioButtonGroup`. Use the `labelPosition` property of `RadioButtonGroup` instead.
   * Where the label will be placed next to the radio button.
   */
  labelPosition: _propTypes2.default.oneOf(['left', 'right']),
  /**
   * Override the inline-styles of the label element.
   */
  labelStyle: _propTypes2.default.object,
  /**
   * @ignore
   * Callback function fired when the radio button is checked. Note that this
   * function will not be called if the radio button is part of a
   * radio button group: in this case, use the `onChange` property of
   * `RadioButtonGroup`.
   *
   * @param {object} event `change` event targeting the element.
   * @param {string} value The element's `value`.
   */
  onCheck: _propTypes2.default.func,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * The icon element to show when the radio button is unchecked.
   */
  uncheckedIcon: _propTypes2.default.element,
  /**
   * The value of the radio button.
   */
  value: _propTypes2.default.any
} : void 0;
exports.default = RadioButton;

/***/ },

/***/ "./node_modules/material-ui/RadioButton/RadioButtonGroup.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _RadioButton = __webpack_require__("./node_modules/material-ui/RadioButton/RadioButton.js");

var _RadioButton2 = _interopRequireDefault(_RadioButton);

var _warning = __webpack_require__("./node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RadioButtonGroup = function (_Component) {
  (0, _inherits3.default)(RadioButtonGroup, _Component);

  function RadioButtonGroup() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RadioButtonGroup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RadioButtonGroup.__proto__ || (0, _getPrototypeOf2.default)(RadioButtonGroup)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      numberCheckedRadioButtons: 0,
      selected: ''
    }, _this.handleChange = function (event, newSelection) {
      _this.updateRadioButtons(newSelection);

      // Successful update
      if (_this.state.numberCheckedRadioButtons === 0) {
        if (_this.props.onChange) _this.props.onChange(event, newSelection);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RadioButtonGroup, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var cnt = 0;
      var selected = '';
      var _props = this.props,
          valueSelected = _props.valueSelected,
          defaultSelected = _props.defaultSelected;

      if (valueSelected !== undefined) {
        selected = valueSelected;
      } else if (defaultSelected !== undefined) {
        selected = defaultSelected;
      }

      _react2.default.Children.forEach(this.props.children, function (option) {
        if (_this2.hasCheckAttribute(option)) cnt++;
      }, this);

      this.setState({
        numberCheckedRadioButtons: cnt,
        selected: selected
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.hasOwnProperty('valueSelected')) {
        this.setState({
          selected: nextProps.valueSelected
        });
      }
    }
  }, {
    key: 'hasCheckAttribute',
    value: function hasCheckAttribute(radioButton) {
      return radioButton.props.hasOwnProperty('checked') && radioButton.props.checked;
    }
  }, {
    key: 'updateRadioButtons',
    value: function updateRadioButtons(newSelection) {
      if (this.state.numberCheckedRadioButtons === 0) {
        this.setState({ selected: newSelection });
      } else {
        undefined !== "production" ? (0, _warning2.default)(false, 'Material-UI: Cannot select a different radio button while another radio button\n        has the \'checked\' property set to true.') : void 0;
      }
    }
  }, {
    key: 'getSelectedValue',
    value: function getSelectedValue() {
      return this.state.selected;
    }
  }, {
    key: 'setSelectedValue',
    value: function setSelectedValue(newSelectionValue) {
      this.updateRadioButtons(newSelectionValue);
    }
  }, {
    key: 'clearValue',
    value: function clearValue() {
      this.setSelectedValue('');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var prepareStyles = this.context.muiTheme.prepareStyles;


      var options = _react2.default.Children.map(this.props.children, function (option) {
        var _option$props = option.props,
            name = _option$props.name,
            value = _option$props.value,
            label = _option$props.label,
            onCheck = _option$props.onCheck,
            other = (0, _objectWithoutProperties3.default)(_option$props, ['name', 'value', 'label', 'onCheck']);


        return _react2.default.createElement(_RadioButton2.default, (0, _extends3.default)({}, other, {
          ref: option.props.value,
          name: _this3.props.name,
          key: option.props.value,
          value: option.props.value,
          label: option.props.label,
          labelPosition: _this3.props.labelPosition,
          onCheck: _this3.handleChange,
          checked: option.props.value === _this3.state.selected
        }));
      }, this);

      return _react2.default.createElement(
        'div',
        {
          style: prepareStyles((0, _simpleAssign2.default)({}, this.props.style)),
          className: this.props.className
        },
        options
      );
    }
  }]);
  return RadioButtonGroup;
}(_react.Component);

RadioButtonGroup.defaultProps = {
  style: {}
};
RadioButtonGroup.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? RadioButtonGroup.propTypes = {
  /**
   * Should be used to pass `RadioButton` components.
   */
  children: _propTypes2.default.node,
  /**
   * The CSS class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * The `value` property of the radio button that will be
   * selected by default. This takes precedence over the `checked` property
   * of the `RadioButton` elements.
   */
  defaultSelected: _propTypes2.default.any,
  /**
   * Where the label will be placed for all child radio buttons.
   * This takes precedence over the `labelPosition` property of the
   * `RadioButton` elements.
   */
  labelPosition: _propTypes2.default.oneOf(['left', 'right']),
  /**
   * The name that will be applied to all child radio buttons.
   */
  name: _propTypes2.default.string.isRequired,
  /**
   * Callback function that is fired when a radio button has
   * been checked.
   *
   * @param {object} event `change` event targeting the selected
   * radio button.
   * @param {*} value The `value` of the selected radio button.
   */
  onChange: _propTypes2.default.func,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * The `value` of the currently selected radio button.
   */
  valueSelected: _propTypes2.default.any
} : void 0;
exports.default = RadioButtonGroup;

/***/ },

/***/ "./node_modules/material-ui/RadioButton/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.RadioButtonGroup = exports.RadioButton = undefined;

var _RadioButton2 = __webpack_require__("./node_modules/material-ui/RadioButton/RadioButton.js");

var _RadioButton3 = _interopRequireDefault(_RadioButton2);

var _RadioButtonGroup2 = __webpack_require__("./node_modules/material-ui/RadioButton/RadioButtonGroup.js");

var _RadioButtonGroup3 = _interopRequireDefault(_RadioButtonGroup2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.RadioButton = _RadioButton3.default;
exports.RadioButtonGroup = _RadioButtonGroup3.default;
exports.default = _RadioButton3.default;

/***/ },

/***/ "./node_modules/material-ui/RaisedButton/RaisedButton.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__("./node_modules/material-ui/styles/transitions.js");

var _transitions2 = _interopRequireDefault(_transitions);

var _colorManipulator = __webpack_require__("./node_modules/material-ui/utils/colorManipulator.js");

var _childUtils = __webpack_require__("./node_modules/material-ui/utils/childUtils.js");

var _EnhancedButton = __webpack_require__("./node_modules/material-ui/internal/EnhancedButton.js");

var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);

var _Paper = __webpack_require__("./node_modules/material-ui/Paper/index.js");

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validateLabel(props, propName, componentName) {
  if (undefined !== 'production') {
    if (!props.children && props.label !== 0 && !props.label && !props.icon) {
      return new Error('Required prop label or children or icon was not specified in ' + componentName + '.');
    }
  }
}

function getStyles(props, context, state) {
  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      button = _context$muiTheme.button,
      raisedButton = _context$muiTheme.raisedButton,
      borderRadius = _context$muiTheme.borderRadius;
  var disabled = props.disabled,
      disabledBackgroundColor = props.disabledBackgroundColor,
      disabledLabelColor = props.disabledLabelColor,
      fullWidth = props.fullWidth,
      icon = props.icon,
      label = props.label,
      labelPosition = props.labelPosition,
      primary = props.primary,
      secondary = props.secondary,
      style = props.style;


  var amount = primary || secondary ? 0.4 : 0.08;

  var backgroundColor = raisedButton.color;
  var labelColor = raisedButton.textColor;

  if (disabled) {
    backgroundColor = disabledBackgroundColor || raisedButton.disabledColor;
    labelColor = disabledLabelColor || raisedButton.disabledTextColor;
  } else if (primary) {
    backgroundColor = raisedButton.primaryColor;
    labelColor = raisedButton.primaryTextColor;
  } else if (secondary) {
    backgroundColor = raisedButton.secondaryColor;
    labelColor = raisedButton.secondaryTextColor;
  } else {
    if (props.backgroundColor) {
      backgroundColor = props.backgroundColor;
    }
    if (props.labelColor) {
      labelColor = props.labelColor;
    }
  }

  var buttonHeight = style && style.height || button.height;

  return {
    root: {
      display: 'inline-block',
      transition: _transitions2.default.easeOut(),
      minWidth: fullWidth ? '100%' : button.minWidth
    },
    button: {
      height: buttonHeight,
      lineHeight: buttonHeight + 'px',
      width: '100%',
      padding: 0,
      borderRadius: borderRadius,
      transition: _transitions2.default.easeOut(),
      backgroundColor: backgroundColor,
      // That's the default value for a button but not a link
      textAlign: 'center'
    },
    label: {
      position: 'relative',
      opacity: 1,
      fontSize: raisedButton.fontSize,
      letterSpacing: 0,
      textTransform: raisedButton.textTransform || button.textTransform || 'uppercase',
      fontWeight: raisedButton.fontWeight,
      margin: 0,
      userSelect: 'none',
      paddingLeft: icon && labelPosition !== 'before' ? 8 : baseTheme.spacing.desktopGutterLess,
      paddingRight: icon && labelPosition === 'before' ? 8 : baseTheme.spacing.desktopGutterLess,
      color: labelColor
    },
    icon: {
      verticalAlign: 'middle',
      marginLeft: label && labelPosition !== 'before' ? 12 : 0,
      marginRight: label && labelPosition === 'before' ? 12 : 0
    },
    overlay: {
      height: buttonHeight,
      borderRadius: borderRadius,
      backgroundColor: (state.keyboardFocused || state.hovered) && !disabled && (0, _colorManipulator.fade)(labelColor, amount),
      transition: _transitions2.default.easeOut(),
      top: 0
    },
    ripple: {
      color: labelColor,
      opacity: !(primary || secondary) ? 0.1 : 0.16
    }
  };
}

var RaisedButton = function (_Component) {
  (0, _inherits3.default)(RaisedButton, _Component);

  function RaisedButton() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RaisedButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RaisedButton.__proto__ || (0, _getPrototypeOf2.default)(RaisedButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hovered: false,
      keyboardFocused: false,
      touched: false,
      initialZDepth: 0,
      zDepth: 0
    }, _this.handleMouseDown = function (event) {
      // only listen to left clicks
      if (event.button === 0) {
        _this.setState({
          zDepth: _this.state.initialZDepth + 1
        });
      }
      if (_this.props.onMouseDown) {
        _this.props.onMouseDown(event);
      }
    }, _this.handleMouseUp = function (event) {
      _this.setState({
        zDepth: _this.state.initialZDepth
      });
      if (_this.props.onMouseUp) {
        _this.props.onMouseUp(event);
      }
    }, _this.handleMouseLeave = function (event) {
      if (!_this.state.keyboardFocused) {
        _this.setState({
          zDepth: _this.state.initialZDepth,
          hovered: false
        });
      }
      if (_this.props.onMouseLeave) {
        _this.props.onMouseLeave(event);
      }
    }, _this.handleMouseEnter = function (event) {
      if (!_this.state.keyboardFocused && !_this.state.touched) {
        _this.setState({
          hovered: true
        });
      }
      if (_this.props.onMouseEnter) {
        _this.props.onMouseEnter(event);
      }
    }, _this.handleTouchStart = function (event) {
      _this.setState({
        touched: true,
        zDepth: _this.state.initialZDepth + 1
      });

      if (_this.props.onTouchStart) {
        _this.props.onTouchStart(event);
      }
    }, _this.handleTouchEnd = function (event) {
      _this.setState({
        touched: true,
        zDepth: _this.state.initialZDepth
      });

      if (_this.props.onTouchEnd) {
        _this.props.onTouchEnd(event);
      }
    }, _this.handleKeyboardFocus = function (event, keyboardFocused) {
      var zDepth = keyboardFocused && !_this.props.disabled ? _this.state.initialZDepth + 1 : _this.state.initialZDepth;

      _this.setState({
        zDepth: zDepth,
        keyboardFocused: keyboardFocused
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RaisedButton, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var zDepth = this.props.disabled ? 0 : 1;
      this.setState({
        zDepth: zDepth,
        initialZDepth: zDepth
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var zDepth = nextProps.disabled ? 0 : 1;
      var nextState = {
        zDepth: zDepth,
        initialZDepth: zDepth
      };

      if (nextProps.disabled) {
        nextState.hovered = false;
      }

      this.setState(nextState);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          backgroundColor = _props.backgroundColor,
          buttonStyle = _props.buttonStyle,
          children = _props.children,
          className = _props.className,
          disabled = _props.disabled,
          disabledBackgroundColor = _props.disabledBackgroundColor,
          disabledLabelColor = _props.disabledLabelColor,
          fullWidth = _props.fullWidth,
          icon = _props.icon,
          label = _props.label,
          labelColor = _props.labelColor,
          labelPosition = _props.labelPosition,
          labelStyle = _props.labelStyle,
          overlayStyle = _props.overlayStyle,
          primary = _props.primary,
          rippleStyle = _props.rippleStyle,
          secondary = _props.secondary,
          style = _props.style,
          other = (0, _objectWithoutProperties3.default)(_props, ['backgroundColor', 'buttonStyle', 'children', 'className', 'disabled', 'disabledBackgroundColor', 'disabledLabelColor', 'fullWidth', 'icon', 'label', 'labelColor', 'labelPosition', 'labelStyle', 'overlayStyle', 'primary', 'rippleStyle', 'secondary', 'style']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context, this.state);
      var mergedRippleStyles = (0, _simpleAssign2.default)({}, styles.ripple, rippleStyle);

      var buttonEventHandlers = disabled ? {} : {
        onMouseDown: this.handleMouseDown,
        onMouseUp: this.handleMouseUp,
        onMouseLeave: this.handleMouseLeave,
        onMouseEnter: this.handleMouseEnter,
        onTouchStart: this.handleTouchStart,
        onTouchEnd: this.handleTouchEnd,
        onKeyboardFocus: this.handleKeyboardFocus
      };

      var labelElement = label && _react2.default.createElement(
        'span',
        { style: prepareStyles((0, _simpleAssign2.default)(styles.label, labelStyle)) },
        label
      );

      var iconCloned = icon && (0, _react.cloneElement)(icon, {
        color: icon.props.color || styles.label.color,
        style: (0, _simpleAssign2.default)(styles.icon, icon.props.style)
      });

      // Place label before or after children.
      var childrenFragment = labelPosition === 'before' ? {
        labelElement: labelElement,
        iconCloned: iconCloned,
        children: children
      } : {
        children: children,
        iconCloned: iconCloned,
        labelElement: labelElement
      };

      var enhancedButtonChildren = (0, _childUtils.createChildFragment)(childrenFragment);

      return _react2.default.createElement(
        _Paper2.default,
        {
          className: className,
          style: (0, _simpleAssign2.default)(styles.root, style),
          zDepth: this.state.zDepth
        },
        _react2.default.createElement(
          _EnhancedButton2.default,
          (0, _extends3.default)({}, other, buttonEventHandlers, {
            ref: 'container',
            disabled: disabled,
            style: (0, _simpleAssign2.default)(styles.button, buttonStyle),
            focusRippleColor: mergedRippleStyles.color,
            touchRippleColor: mergedRippleStyles.color,
            focusRippleOpacity: mergedRippleStyles.opacity,
            touchRippleOpacity: mergedRippleStyles.opacity
          }),
          _react2.default.createElement(
            'div',
            {
              ref: 'overlay',
              style: prepareStyles((0, _simpleAssign2.default)(styles.overlay, overlayStyle))
            },
            enhancedButtonChildren
          )
        )
      );
    }
  }]);
  return RaisedButton;
}(_react.Component);

RaisedButton.muiName = 'RaisedButton';
RaisedButton.defaultProps = {
  disabled: false,
  labelPosition: 'after',
  fullWidth: false,
  primary: false,
  secondary: false
};
RaisedButton.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? RaisedButton.propTypes = {
  /**
   * Override the default background color for the button,
   * but not the default disabled background color
   * (use `disabledBackgroundColor` for this).
   */
  backgroundColor: _propTypes2.default.string,
  /**
   * Override the inline-styles of the button element.
   */
  buttonStyle: _propTypes2.default.object,
  /**
   * The content of the button.
   * If a label is provided via the `label` prop, the text within the label
   * will be displayed in addition to the content provided here.
   */
  children: _propTypes2.default.node,
  /**
   * The CSS class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
    * The element to use as the container for the RaisedButton. Either a string to
    * use a DOM element or a ReactElement. This is useful for wrapping the
    * RaisedButton in a custom Link component. If a ReactElement is given, ensure
    * that it passes all of its given props through to the underlying DOM
    * element and renders its children prop for proper integration.
    */
  containerElement: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  /**
   * If true, the element's ripple effect will be disabled.
   */
  disableTouchRipple: _propTypes2.default.bool,
  /**
   * If true, the button will be disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * Override the default background color for the button
   * when it is disabled.
   */
  disabledBackgroundColor: _propTypes2.default.string,
  /**
   * The color of the button's label when the button is disabled.
   */
  disabledLabelColor: _propTypes2.default.string,
  /**
   * If true, the button will take up the full width of its container.
   */
  fullWidth: _propTypes2.default.bool,
  /**
   * The URL to link to when the button is clicked.
   */
  href: _propTypes2.default.string,
  /**
   * An icon to be displayed within the button.
   */
  icon: _propTypes2.default.node,
  /**
   * The label to be displayed within the button.
   * If content is provided via the `children` prop, that content will be
   * displayed in addition to the label provided here.
   */
  label: validateLabel,
  /**
   * The color of the button's label.
   */
  labelColor: _propTypes2.default.string,
  /**
   * The position of the button's label relative to the button's `children`.
   */
  labelPosition: _propTypes2.default.oneOf(['before', 'after']),
  /**
   * Override the inline-styles of the button's label element.
   */
  labelStyle: _propTypes2.default.object,
  /** @ignore */
  onMouseDown: _propTypes2.default.func,
  /** @ignore */
  onMouseEnter: _propTypes2.default.func,
  /** @ignore */
  onMouseLeave: _propTypes2.default.func,
  /** @ignore */
  onMouseUp: _propTypes2.default.func,
  /** @ignore */
  onTouchEnd: _propTypes2.default.func,
  /** @ignore */
  onTouchStart: _propTypes2.default.func,
  /**
   * Callback function fired when the button is touch-tapped.
   *
   * @param {object} event TouchTap event targeting the button.
   */
  onTouchTap: _propTypes2.default.func,
  /**
   * Override the inline style of the button overlay.
   */
  overlayStyle: _propTypes2.default.object,
  /**
   * If true, the button will use the theme's primary color.
   */
  primary: _propTypes2.default.bool,
  /**
   * Override the inline style of the ripple element.
   */
  rippleStyle: _propTypes2.default.object,
  /**
   * If true, the button will use the theme's secondary color.
   * If both `secondary` and `primary` are true, the button will use
   * the theme's primary color.
   */
  secondary: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : void 0;
exports.default = RaisedButton;

/***/ },

/***/ "./node_modules/material-ui/RaisedButton/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _RaisedButton = __webpack_require__("./node_modules/material-ui/RaisedButton/RaisedButton.js");

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _RaisedButton2.default;

/***/ },

/***/ "./node_modules/material-ui/RefreshIndicator/RefreshIndicator.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _slicedToArray2 = __webpack_require__("./node_modules/babel-runtime/helpers/slicedToArray.js");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _autoPrefix = __webpack_require__("./node_modules/material-ui/utils/autoPrefix.js");

var _autoPrefix2 = _interopRequireDefault(_autoPrefix);

var _transitions = __webpack_require__("./node_modules/material-ui/styles/transitions.js");

var _transitions2 = _interopRequireDefault(_transitions);

var _Paper = __webpack_require__("./node_modules/material-ui/Paper/index.js");

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VIEWBOX_SIZE = 32;

function getStyles(props) {
  var padding = props.size * 0.1; // same implementation of `this.getPaddingSize()`
  return {
    root: {
      position: 'absolute',
      zIndex: 2,
      width: props.size,
      height: props.size,
      padding: padding,
      top: -10000,
      left: -10000,
      transform: 'translate(' + (10000 + props.left) + 'px, ' + (10000 + props.top) + 'px)',
      opacity: props.status === 'hide' ? 0 : 1,
      transition: props.status === 'hide' ? _transitions2.default.create('all', '.3s', 'ease-out') : 'none'
    }
  };
}

var RefreshIndicator = function (_Component) {
  (0, _inherits3.default)(RefreshIndicator, _Component);

  function RefreshIndicator() {
    (0, _classCallCheck3.default)(this, RefreshIndicator);
    return (0, _possibleConstructorReturn3.default)(this, (RefreshIndicator.__proto__ || (0, _getPrototypeOf2.default)(RefreshIndicator)).apply(this, arguments));
  }

  (0, _createClass3.default)(RefreshIndicator, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.scalePath(this.refs.path, 0);
      this.rotateWrapper(this.refs.wrapper);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      clearTimeout(this.scalePathTimer);
      clearTimeout(this.rotateWrapperTimer);
      clearTimeout(this.rotateWrapperSecondTimer);

      this.scalePath(this.refs.path, 0);
      this.rotateWrapper(this.refs.wrapper);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.scalePathTimer);
      clearTimeout(this.rotateWrapperTimer);
      clearTimeout(this.rotateWrapperSecondTimer);
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var paperSize = this.getPaperSize();

      var childrenCmp = null;
      if (this.props.status !== 'ready') {
        var circleStyle = this.getCircleStyle(paperSize);
        childrenCmp = _react2.default.createElement(
          'div',
          {
            ref: 'wrapper',
            style: prepareStyles({
              transition: _transitions2.default.create('transform', '20s', null, 'linear'),
              width: '100%',
              height: '100%'
            })
          },
          _react2.default.createElement(
            'svg',
            {
              style: {
                width: paperSize,
                height: paperSize
              },
              viewBox: '0 0 ' + VIEWBOX_SIZE + ' ' + VIEWBOX_SIZE
            },
            _react2.default.createElement('circle', (0, _extends3.default)({
              ref: 'path',
              style: prepareStyles((0, _simpleAssign2.default)(circleStyle.style, {
                transition: _transitions2.default.create('all', '1.5s', null, 'ease-in-out')
              }))
            }, circleStyle.attr))
          )
        );
      } else {
        var _circleStyle = this.getCircleStyle(paperSize);
        var polygonStyle = this.getPolygonStyle(paperSize);
        childrenCmp = _react2.default.createElement(
          'svg',
          {
            style: {
              width: paperSize,
              height: paperSize
            },
            viewBox: '0 0 ' + VIEWBOX_SIZE + ' ' + VIEWBOX_SIZE
          },
          _react2.default.createElement('circle', (0, _extends3.default)({
            style: prepareStyles(_circleStyle.style)
          }, _circleStyle.attr)),
          _react2.default.createElement('polygon', (0, _extends3.default)({
            style: prepareStyles(polygonStyle.style)
          }, polygonStyle.attr))
        );
      }

      return childrenCmp;
    }
  }, {
    key: 'getTheme',
    value: function getTheme() {
      return this.context.muiTheme.refreshIndicator;
    }
  }, {
    key: 'getPaddingSize',
    value: function getPaddingSize() {
      var padding = this.props.size * 0.1;
      return padding;
    }
  }, {
    key: 'getPaperSize',
    value: function getPaperSize() {
      return this.props.size - this.getPaddingSize() * 2;
    }
  }, {
    key: 'getCircleAttr',
    value: function getCircleAttr() {
      return {
        radiu: VIEWBOX_SIZE / 2 - 5,
        originX: VIEWBOX_SIZE / 2,
        originY: VIEWBOX_SIZE / 2,
        strokeWidth: 3
      };
    }
  }, {
    key: 'getArcDeg',
    value: function getArcDeg() {
      var p = this.props.percentage / 100;

      var beginDeg = p * 120;
      var endDeg = p * 410;
      return [beginDeg, endDeg];
    }
  }, {
    key: 'getFactor',
    value: function getFactor() {
      var p = this.props.percentage / 100;
      var p1 = Math.min(1, p / 0.4);

      return p1;
    }
  }, {
    key: 'getCircleStyle',
    value: function getCircleStyle() {
      var isLoading = this.props.status === 'loading';
      var p1 = isLoading ? 1 : this.getFactor();
      var circle = this.getCircleAttr();
      var perimeter = Math.PI * 2 * circle.radiu;

      var _getArcDeg = this.getArcDeg(),
          _getArcDeg2 = (0, _slicedToArray3.default)(_getArcDeg, 2),
          beginDeg = _getArcDeg2[0],
          endDeg = _getArcDeg2[1];

      var arcLen = (endDeg - beginDeg) * perimeter / 360;
      var dashOffset = -beginDeg * perimeter / 360;

      var theme = this.getTheme();
      return {
        style: {
          strokeDasharray: arcLen + ', ' + (perimeter - arcLen),
          strokeDashoffset: dashOffset,
          stroke: isLoading || this.props.percentage === 100 ? this.props.loadingColor || theme.loadingStrokeColor : this.props.color || theme.strokeColor,
          strokeLinecap: 'round',
          opacity: p1,
          strokeWidth: circle.strokeWidth * p1,
          fill: 'none'
        },
        attr: {
          cx: circle.originX,
          cy: circle.originY,
          r: circle.radiu
        }
      };
    }
  }, {
    key: 'getPolygonStyle',
    value: function getPolygonStyle() {
      var p1 = this.getFactor();
      var circle = this.getCircleAttr();

      var triangleCx = circle.originX + circle.radiu;
      var triangleCy = circle.originY;
      var dx = circle.strokeWidth * 7 / 4 * p1;
      var trianglePath = triangleCx - dx + ',' + triangleCy + ' ' + (triangleCx + dx) + ',' + triangleCy + ' ' + triangleCx + ',' + (triangleCy + dx);

      var _getArcDeg3 = this.getArcDeg(),
          _getArcDeg4 = (0, _slicedToArray3.default)(_getArcDeg3, 2),
          endDeg = _getArcDeg4[1];

      var theme = this.getTheme();
      return {
        style: {
          fill: this.props.percentage === 100 ? this.props.loadingColor || theme.loadingStrokeColor : this.props.color || theme.strokeColor,
          transform: 'rotate(' + endDeg + 'deg)',
          transformOrigin: circle.originX + 'px ' + circle.originY + 'px',
          opacity: p1
        },
        attr: {
          points: trianglePath
        }
      };
    }
  }, {
    key: 'scalePath',
    value: function scalePath(path, step) {
      var _this2 = this;

      if (this.props.status !== 'loading') return;

      var currStep = (step || 0) % 3;

      var circle = this.getCircleAttr();
      var perimeter = Math.PI * 2 * circle.radiu;
      var arcLen = perimeter * 0.64;

      var strokeDasharray = void 0;
      var strokeDashoffset = void 0;
      var transitionDuration = void 0;

      if (currStep === 0) {
        strokeDasharray = '1, 200';
        strokeDashoffset = 0;
        transitionDuration = '0ms';
      } else if (currStep === 1) {
        strokeDasharray = arcLen + ', 200';
        strokeDashoffset = -15;
        transitionDuration = '750ms';
      } else {
        strokeDasharray = arcLen + ', 200';
        strokeDashoffset = -(perimeter - 1);
        transitionDuration = '850ms';
      }

      _autoPrefix2.default.set(path.style, 'strokeDasharray', strokeDasharray);
      _autoPrefix2.default.set(path.style, 'strokeDashoffset', strokeDashoffset);
      _autoPrefix2.default.set(path.style, 'transitionDuration', transitionDuration);

      this.scalePathTimer = setTimeout(function () {
        return _this2.scalePath(path, currStep + 1);
      }, currStep ? 750 : 250);
    }
  }, {
    key: 'rotateWrapper',
    value: function rotateWrapper(wrapper) {
      var _this3 = this;

      if (this.props.status !== 'loading') return;

      _autoPrefix2.default.set(wrapper.style, 'transform', null);
      _autoPrefix2.default.set(wrapper.style, 'transform', 'rotate(0deg)');
      _autoPrefix2.default.set(wrapper.style, 'transitionDuration', '0ms');

      this.rotateWrapperSecondTimer = setTimeout(function () {
        _autoPrefix2.default.set(wrapper.style, 'transform', 'rotate(1800deg)');
        _autoPrefix2.default.set(wrapper.style, 'transitionDuration', '10s');
        _autoPrefix2.default.set(wrapper.style, 'transitionTimingFunction', 'linear');
      }, 50);

      this.rotateWrapperTimer = setTimeout(function () {
        return _this3.rotateWrapper(wrapper);
      }, 10050);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          top = _props.top,
          left = _props.left,
          percentage = _props.percentage,
          status = _props.status,
          loadingColor = _props.loadingColor,
          other = (0, _objectWithoutProperties3.default)(_props, ['style', 'top', 'left', 'percentage', 'status', 'loadingColor']);


      var styles = getStyles(this.props, this.context);

      return _react2.default.createElement(
        _Paper2.default,
        (0, _extends3.default)({
          circle: true,
          style: (0, _simpleAssign2.default)(styles.root, style)
        }, other),
        this.renderChildren()
      );
    }
  }]);
  return RefreshIndicator;
}(_react.Component);

RefreshIndicator.defaultProps = {
  percentage: 0,
  size: 40,
  status: 'hide'
};
RefreshIndicator.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? RefreshIndicator.propTypes = {
  /**
   * Override the theme's color of the indicator while it's status is
   * "ready" and it's percentage is less than 100.
   */
  color: _propTypes2.default.string,
  /**
   * The absolute left position of the indicator in pixels.
   */
  left: _propTypes2.default.number.isRequired,
  /**
   * Override the theme's color of the indicator while
   * it's status is "loading" or when it's percentage is 100.
   */
  loadingColor: _propTypes2.default.string,
  /**
   * The confirmation progress to fetch data. Max value is 100.
   */
  percentage: _propTypes2.default.number,
  /**
   * Size in pixels.
   */
  size: _propTypes2.default.number,
  /**
   * The display status of the indicator. If the status is
   * "ready", the indicator will display the ready state
   * arrow. If the status is "loading", it will display
   * the loading progress indicator. If the status is "hide",
   * the indicator will be hidden.
   */
  status: _propTypes2.default.oneOf(['ready', 'loading', 'hide']),
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * The absolute top position of the indicator in pixels.
   */
  top: _propTypes2.default.number.isRequired
} : void 0;
exports.default = RefreshIndicator;

/***/ },

/***/ "./node_modules/material-ui/RefreshIndicator/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _RefreshIndicator = __webpack_require__("./node_modules/material-ui/RefreshIndicator/RefreshIndicator.js");

var _RefreshIndicator2 = _interopRequireDefault(_RefreshIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _RefreshIndicator2.default;

/***/ },

/***/ "./node_modules/material-ui/SelectField/SelectField.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TextField = __webpack_require__("./node_modules/material-ui/TextField/index.js");

var _TextField2 = _interopRequireDefault(_TextField);

var _DropDownMenu = __webpack_require__("./node_modules/material-ui/DropDownMenu/index.js");

var _DropDownMenu2 = _interopRequireDefault(_DropDownMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props) {
  return {
    label: {
      paddingLeft: 0,
      top: props.floatingLabelText ? 6 : -4
    },
    icon: {
      right: 0,
      top: props.floatingLabelText ? 8 : 0
    },
    hideDropDownUnderline: {
      borderTop: 'none'
    },
    dropDownMenu: {
      display: 'block'
    }
  };
}

var SelectField = function (_Component) {
  (0, _inherits3.default)(SelectField, _Component);

  function SelectField() {
    (0, _classCallCheck3.default)(this, SelectField);
    return (0, _possibleConstructorReturn3.default)(this, (SelectField.__proto__ || (0, _getPrototypeOf2.default)(SelectField)).apply(this, arguments));
  }

  (0, _createClass3.default)(SelectField, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          autoWidth = _props.autoWidth,
          multiple = _props.multiple,
          children = _props.children,
          style = _props.style,
          labelStyle = _props.labelStyle,
          iconStyle = _props.iconStyle,
          id = _props.id,
          underlineDisabledStyle = _props.underlineDisabledStyle,
          underlineFocusStyle = _props.underlineFocusStyle,
          menuItemStyle = _props.menuItemStyle,
          selectedMenuItemStyle = _props.selectedMenuItemStyle,
          underlineStyle = _props.underlineStyle,
          dropDownMenuProps = _props.dropDownMenuProps,
          errorStyle = _props.errorStyle,
          disabled = _props.disabled,
          floatingLabelFixed = _props.floatingLabelFixed,
          floatingLabelText = _props.floatingLabelText,
          floatingLabelStyle = _props.floatingLabelStyle,
          hintStyle = _props.hintStyle,
          hintText = _props.hintText,
          fullWidth = _props.fullWidth,
          errorText = _props.errorText,
          listStyle = _props.listStyle,
          maxHeight = _props.maxHeight,
          menuStyle = _props.menuStyle,
          onFocus = _props.onFocus,
          onBlur = _props.onBlur,
          onChange = _props.onChange,
          selectionRenderer = _props.selectionRenderer,
          value = _props.value,
          other = (0, _objectWithoutProperties3.default)(_props, ['autoWidth', 'multiple', 'children', 'style', 'labelStyle', 'iconStyle', 'id', 'underlineDisabledStyle', 'underlineFocusStyle', 'menuItemStyle', 'selectedMenuItemStyle', 'underlineStyle', 'dropDownMenuProps', 'errorStyle', 'disabled', 'floatingLabelFixed', 'floatingLabelText', 'floatingLabelStyle', 'hintStyle', 'hintText', 'fullWidth', 'errorText', 'listStyle', 'maxHeight', 'menuStyle', 'onFocus', 'onBlur', 'onChange', 'selectionRenderer', 'value']);


      var styles = getStyles(this.props, this.context);

      return _react2.default.createElement(
        _TextField2.default,
        (0, _extends3.default)({}, other, {
          style: style,
          disabled: disabled,
          floatingLabelFixed: floatingLabelFixed,
          floatingLabelText: floatingLabelText,
          floatingLabelStyle: floatingLabelStyle,
          hintStyle: hintStyle,
          hintText: !hintText && !floatingLabelText ? ' ' : hintText,
          fullWidth: fullWidth,
          errorText: errorText,
          underlineStyle: underlineStyle,
          errorStyle: errorStyle,
          onFocus: onFocus,
          onBlur: onBlur,
          id: id,
          underlineDisabledStyle: underlineDisabledStyle,
          underlineFocusStyle: underlineFocusStyle
        }),
        _react2.default.createElement(
          _DropDownMenu2.default,
          (0, _extends3.default)({
            disabled: disabled,
            style: (0, _simpleAssign2.default)(styles.dropDownMenu, menuStyle),
            labelStyle: (0, _simpleAssign2.default)(styles.label, labelStyle),
            iconStyle: (0, _simpleAssign2.default)(styles.icon, iconStyle),
            menuItemStyle: menuItemStyle,
            selectedMenuItemStyle: selectedMenuItemStyle,
            underlineStyle: styles.hideDropDownUnderline,
            listStyle: listStyle,
            autoWidth: autoWidth,
            value: value,
            onChange: onChange,
            maxHeight: maxHeight,
            multiple: multiple,
            selectionRenderer: selectionRenderer
          }, dropDownMenuProps),
          children
        )
      );
    }
  }]);
  return SelectField;
}(_react.Component);

SelectField.defaultProps = {
  autoWidth: false,
  disabled: false,
  fullWidth: false,
  multiple: false
};
SelectField.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? SelectField.propTypes = {
  /**
   * If true, the width will automatically be set according to the
   * items inside the menu.
   * To control the width in CSS instead, leave this prop set to `false`.
   */
  autoWidth: _propTypes2.default.bool,
  /**
   * The `MenuItem` elements to populate the select field with.
   * If the menu items have a `label` prop, that value will
   * represent the selected menu item in the rendered select field.
   */
  children: _propTypes2.default.node,
  /**
   * If true, the select field will be disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * Object that can handle and override any property of component DropDownMenu.
   */
  dropDownMenuProps: _propTypes2.default.object,
  /**
   * Override the inline-styles of the error element.
   */
  errorStyle: _propTypes2.default.object,
  /**
   * The error content to display.
   */
  errorText: _propTypes2.default.node,
  /**
   * If true, the floating label will float even when no value is selected.
   */
  floatingLabelFixed: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the floating label.
   */
  floatingLabelStyle: _propTypes2.default.object,
  /**
   * The content of the floating label.
   */
  floatingLabelText: _propTypes2.default.node,
  /**
   * If true, the select field will take up the full width of its container.
   */
  fullWidth: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the hint element.
   */
  hintStyle: _propTypes2.default.object,
  /**
   * The hint content to display.
   */
  hintText: _propTypes2.default.node,
  /**
   * Override the inline-styles of the icon element.
   */
  iconStyle: _propTypes2.default.object,
  /**
   * The id prop for the text field.
   */
  id: _propTypes2.default.string,
  /**
   * Override the label style when the select field is inactive.
   */
  labelStyle: _propTypes2.default.object,
  /**
   * Override the inline-styles of the underlying `List` element.
   */
  listStyle: _propTypes2.default.object,
  /**
   * Override the default max-height of the underlying `DropDownMenu` element.
   */
  maxHeight: _propTypes2.default.number,
  /**
   * Override the inline-styles of menu items.
   */
  menuItemStyle: _propTypes2.default.object,
  /**
   * Override the inline-styles of the underlying `DropDownMenu` element.
   */
  menuStyle: _propTypes2.default.object,
  /**
   * If true, `value` must be an array and the menu will support
   * multiple selections.
   */
  multiple: _propTypes2.default.bool,
  /** @ignore */
  onBlur: _propTypes2.default.func,
  /**
   * Callback function fired when a menu item is selected.
   *
   * @param {object} event TouchTap event targeting the menu item
   * that was selected.
   * @param {number} key The index of the selected menu item, or undefined
   * if `multiple` is true.
   * @param {any} payload If `multiple` is true, the menu's `value`
   * array with either the menu item's `value` added (if
   * it wasn't already selected) or omitted (if it was already selected).
   * Otherwise, the `value` of the menu item.
   */
  onChange: _propTypes2.default.func,
  /** @ignore */
  onFocus: _propTypes2.default.func,
  /**
   * Override the inline-styles of selected menu items.
   */
  selectedMenuItemStyle: _propTypes2.default.object,
  /**
   * Customize the rendering of the selected item.
   *
   * @param {any} value If `multiple` is true, the menu's `value`
   * array with either the menu item's `value` added (if
   * it wasn't already selected) or omitted (if it was already selected).
   * Otherwise, the `value` of the menu item.
   */
  selectionRenderer: _propTypes2.default.func,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * Override the inline-styles of the underline element when the select
   * field is disabled.
   */
  underlineDisabledStyle: _propTypes2.default.object,
  /**
   * Override the inline-styles of the underline element when the select field
   * is focused.
   */
  underlineFocusStyle: _propTypes2.default.object,
  /**
   * Override the inline-styles of the underline element.
   */
  underlineStyle: _propTypes2.default.object,
  /**
   * If `multiple` is true, an array of the `value`s of the selected
   * menu items. Otherwise, the `value` of the selected menu item.
   * If provided, the menu will be a controlled component.
   */
  value: _propTypes2.default.any
} : void 0;
exports.default = SelectField;

/***/ },

/***/ "./node_modules/material-ui/SelectField/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _SelectField = __webpack_require__("./node_modules/material-ui/SelectField/SelectField.js");

var _SelectField2 = _interopRequireDefault(_SelectField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _SelectField2.default;

/***/ },

/***/ "./node_modules/material-ui/Slider/Slider.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _keycode = __webpack_require__("./node_modules/keycode/index.js");

var _keycode2 = _interopRequireDefault(_keycode);

var _warning = __webpack_require__("./node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

var _transitions = __webpack_require__("./node_modules/material-ui/styles/transitions.js");

var _transitions2 = _interopRequireDefault(_transitions);

var _FocusRipple = __webpack_require__("./node_modules/material-ui/internal/FocusRipple.js");

var _FocusRipple2 = _interopRequireDefault(_FocusRipple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Verifies min/max range.
 * @param   {Object} props         Properties of the React component.
 * @param   {String} propName      Name of the property to validate.
 * @param   {String} componentName Name of the component whose property is being validated.
 * @returns {Object} Returns an Error if min >= max otherwise null.
 */
var minMaxPropType = function minMaxPropType(props, propName, componentName) {
  for (var _len = arguments.length, rest = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    rest[_key - 3] = arguments[_key];
  }

  var error = _propTypes2.default.number.apply(_propTypes2.default, [props, propName, componentName].concat(rest));
  if (error !== null) {
    return error;
  }

  if (props.min >= props.max) {
    var errorMsg = propName === 'min' ? 'min should be less than max' : 'max should be greater than min';
    return new Error(errorMsg);
  }
};

/**
 * Verifies value is within the min/max range.
 * @param   {Object} props         Properties of the React component.
 * @param   {String} propName      Name of the property to validate.
 * @param   {String} componentName Name of the component whose property is being validated.
 * @returns {Object} Returns an Error if the value is not within the range otherwise null.
 */
var valueInRangePropType = function valueInRangePropType(props, propName, componentName) {
  for (var _len2 = arguments.length, rest = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
    rest[_key2 - 3] = arguments[_key2];
  }

  var error = _propTypes2.default.number.apply(_propTypes2.default, [props, propName, componentName].concat(rest));
  if (error !== null) {
    return error;
  }

  var value = props[propName];
  if (value < props.min || props.max < value) {
    return new Error(propName + ' should be within the range specified by min and max');
  }
};

var crossAxisProperty = {
  x: 'height',
  'x-reverse': 'height',
  y: 'width',
  'y-reverse': 'width'
};

var crossAxisOffsetProperty = {
  x: 'top',
  'x-reverse': 'top',
  y: 'left',
  'y-reverse': 'left'
};

var mainAxisProperty = {
  x: 'width',
  'x-reverse': 'width',
  y: 'height',
  'y-reverse': 'height'
};

var mainAxisMarginFromEnd = {
  x: 'marginRight',
  'x-reverse': 'marginLeft',
  y: 'marginTop',
  'y-reverse': 'marginBottom'
};

var mainAxisMarginFromStart = {
  x: 'marginLeft',
  'x-reverse': 'marginRight',
  y: 'marginBottom',
  'y-reverse': 'marginTop'
};

var mainAxisOffsetProperty = {
  x: 'left',
  'x-reverse': 'right',
  y: 'bottom',
  'y-reverse': 'top'
};

var mainAxisClientProperty = {
  x: 'clientWidth',
  'x-reverse': 'clientWidth',
  y: 'clientHeight',
  'y-reverse': 'clientHeight'
};

var mainAxisClientOffsetProperty = {
  x: 'clientX',
  'x-reverse': 'clientX',
  y: 'clientY',
  'y-reverse': 'clientY'
};

var reverseMainAxisOffsetProperty = {
  x: 'right',
  'x-reverse': 'left',
  y: 'top',
  'y-reverse': 'bottom'
};

var isMouseControlInverted = function isMouseControlInverted(axis) {
  return axis === 'x-reverse' || axis === 'y';
};

var calculateAxis = function calculateAxis(axis, isRtl) {
  if (isRtl) {
    switch (axis) {
      case 'x':
        return 'x-reverse';
      case 'x-reverse':
        return 'x';
    }
  }
  return axis;
};

function getPercent(value, min, max) {
  var percent = (value - min) / (max - min);
  if (isNaN(percent)) {
    percent = 0;
  }

  return percent;
}

var getStyles = function getStyles(props, context, state) {
  var _slider, _track, _filledAndRemaining, _handle, _objectAssign2, _objectAssign3;

  var axis = props.axis,
      disabled = props.disabled,
      max = props.max,
      min = props.min;
  var _context$muiTheme = context.muiTheme,
      isRtl = _context$muiTheme.isRtl,
      _context$muiTheme$sli = _context$muiTheme.slider,
      handleColorZero = _context$muiTheme$sli.handleColorZero,
      handleFillColor = _context$muiTheme$sli.handleFillColor,
      handleSize = _context$muiTheme$sli.handleSize,
      handleSizeDisabled = _context$muiTheme$sli.handleSizeDisabled,
      handleSizeActive = _context$muiTheme$sli.handleSizeActive,
      trackSize = _context$muiTheme$sli.trackSize,
      trackColor = _context$muiTheme$sli.trackColor,
      trackColorSelected = _context$muiTheme$sli.trackColorSelected,
      rippleColor = _context$muiTheme$sli.rippleColor,
      selectionColor = _context$muiTheme$sli.selectionColor;


  var fillGutter = handleSize / 2;
  var disabledGutter = trackSize + handleSizeDisabled / 2;
  var calcDisabledSpacing = disabled ? ' - ' + disabledGutter + 'px' : '';
  var percent = getPercent(state.value, min, max);
  var calculatedAxis = calculateAxis(axis, isRtl);

  var styles = {
    slider: (_slider = {
      touchCallout: 'none',
      userSelect: 'none',
      cursor: 'default'
    }, (0, _defineProperty3.default)(_slider, crossAxisProperty[calculatedAxis], handleSizeActive), (0, _defineProperty3.default)(_slider, mainAxisProperty[calculatedAxis], '100%'), (0, _defineProperty3.default)(_slider, 'position', 'relative'), (0, _defineProperty3.default)(_slider, 'marginTop', 24), (0, _defineProperty3.default)(_slider, 'marginBottom', 48), _slider),
    track: (_track = {
      position: 'absolute'
    }, (0, _defineProperty3.default)(_track, crossAxisOffsetProperty[calculatedAxis], (handleSizeActive - trackSize) / 2), (0, _defineProperty3.default)(_track, mainAxisOffsetProperty[calculatedAxis], 0), (0, _defineProperty3.default)(_track, mainAxisProperty[calculatedAxis], '100%'), (0, _defineProperty3.default)(_track, crossAxisProperty[calculatedAxis], trackSize), _track),
    filledAndRemaining: (_filledAndRemaining = {
      directionInvariant: true,
      position: 'absolute'
    }, (0, _defineProperty3.default)(_filledAndRemaining, crossAxisOffsetProperty, 0), (0, _defineProperty3.default)(_filledAndRemaining, crossAxisProperty[calculatedAxis], '100%'), (0, _defineProperty3.default)(_filledAndRemaining, 'transition', _transitions2.default.easeOut(null, 'margin')), _filledAndRemaining),
    handle: (_handle = {
      directionInvariant: true,
      boxSizing: 'border-box',
      position: 'absolute',
      cursor: 'pointer',
      pointerEvents: 'inherit'
    }, (0, _defineProperty3.default)(_handle, crossAxisOffsetProperty[calculatedAxis], 0), (0, _defineProperty3.default)(_handle, mainAxisOffsetProperty[calculatedAxis], percent === 0 ? '0%' : percent * 100 + '%'), (0, _defineProperty3.default)(_handle, 'zIndex', 1), (0, _defineProperty3.default)(_handle, 'margin', {
      x: trackSize / 2 + 'px 0 0 0',
      'x-reverse': trackSize / 2 + 'px 0 0 0',
      y: '0 0 0 ' + trackSize / 2 + 'px',
      'y-reverse': '0 0 0 ' + trackSize / 2 + 'px'
    }[calculatedAxis]), (0, _defineProperty3.default)(_handle, 'width', handleSize), (0, _defineProperty3.default)(_handle, 'height', handleSize), (0, _defineProperty3.default)(_handle, 'backgroundColor', selectionColor), (0, _defineProperty3.default)(_handle, 'backgroundClip', 'padding-box'), (0, _defineProperty3.default)(_handle, 'border', '0px solid transparent'), (0, _defineProperty3.default)(_handle, 'borderRadius', '50%'), (0, _defineProperty3.default)(_handle, 'transform', {
      x: 'translate(-50%, -50%)',
      'x-reverse': 'translate(50%, -50%)',
      y: 'translate(-50%, 50%)',
      'y-reverse': 'translate(-50%, -50%)'
    }[calculatedAxis]), (0, _defineProperty3.default)(_handle, 'transition', _transitions2.default.easeOut('450ms', 'background') + ', ' + _transitions2.default.easeOut('450ms', 'border-color') + ', ' + _transitions2.default.easeOut('450ms', 'width') + ', ' + _transitions2.default.easeOut('450ms', 'height')), (0, _defineProperty3.default)(_handle, 'overflow', 'visible'), (0, _defineProperty3.default)(_handle, 'outline', 'none'), _handle),
    handleWhenDisabled: {
      boxSizing: 'content-box',
      cursor: 'not-allowed',
      backgroundColor: trackColor,
      width: handleSizeDisabled,
      height: handleSizeDisabled,
      border: 'none'
    },
    handleWhenPercentZero: {
      border: trackSize + 'px solid ' + handleColorZero,
      backgroundColor: handleFillColor,
      boxShadow: 'none'
    },
    handleWhenPercentZeroAndDisabled: {
      cursor: 'not-allowed',
      width: handleSizeDisabled,
      height: handleSizeDisabled
    },
    handleWhenPercentZeroAndFocused: {
      border: trackSize + 'px solid ' + trackColorSelected
    },
    handleWhenActive: {
      width: handleSizeActive,
      height: handleSizeActive
    },
    ripple: {
      height: handleSize,
      width: handleSize,
      overflow: 'visible'
    },
    rippleWhenPercentZero: {
      top: -trackSize,
      left: -trackSize
    },
    rippleInner: {
      height: '300%',
      width: '300%',
      top: -handleSize,
      left: -handleSize
    },
    rippleColor: {
      fill: percent === 0 ? handleColorZero : rippleColor
    }
  };
  styles.filled = (0, _simpleAssign2.default)({}, styles.filledAndRemaining, (_objectAssign2 = {}, (0, _defineProperty3.default)(_objectAssign2, mainAxisOffsetProperty[calculatedAxis], 0), (0, _defineProperty3.default)(_objectAssign2, 'backgroundColor', disabled ? trackColor : selectionColor), (0, _defineProperty3.default)(_objectAssign2, mainAxisMarginFromEnd[calculatedAxis], fillGutter), (0, _defineProperty3.default)(_objectAssign2, mainAxisProperty[calculatedAxis], 'calc(' + percent * 100 + '%' + calcDisabledSpacing + ')'), _objectAssign2));
  styles.remaining = (0, _simpleAssign2.default)({}, styles.filledAndRemaining, (_objectAssign3 = {}, (0, _defineProperty3.default)(_objectAssign3, reverseMainAxisOffsetProperty[calculatedAxis], 0), (0, _defineProperty3.default)(_objectAssign3, 'backgroundColor', (state.hovered || state.focused) && !disabled ? trackColorSelected : trackColor), (0, _defineProperty3.default)(_objectAssign3, mainAxisMarginFromStart[calculatedAxis], fillGutter), (0, _defineProperty3.default)(_objectAssign3, mainAxisProperty[calculatedAxis], 'calc(' + (1 - percent) * 100 + '%' + calcDisabledSpacing + ')'), _objectAssign3));

  return styles;
};

var Slider = function (_Component) {
  (0, _inherits3.default)(Slider, _Component);

  function Slider() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Slider);

    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Slider.__proto__ || (0, _getPrototypeOf2.default)(Slider)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      active: false,
      dragging: false,
      focused: false,
      hovered: false,
      value: 0
    }, _this.track = null, _this.handle = null, _this.handleKeyDown = function (event) {
      var _this$props = _this.props,
          axis = _this$props.axis,
          min = _this$props.min,
          max = _this$props.max,
          step = _this$props.step;
      var isRtl = _this.context.muiTheme.isRtl;


      var calculatedAxis = calculateAxis(axis, isRtl);

      var action = void 0;

      switch ((0, _keycode2.default)(event)) {
        case 'page down':
        case 'down':
          if (calculatedAxis === 'y-reverse') {
            action = 'increase';
          } else {
            action = 'decrease';
          }
          break;
        case 'left':
          if (calculatedAxis === 'x-reverse') {
            action = 'increase';
          } else {
            action = 'decrease';
          }
          break;
        case 'page up':
        case 'up':
          if (calculatedAxis === 'y-reverse') {
            action = 'decrease';
          } else {
            action = 'increase';
          }
          break;
        case 'right':
          if (calculatedAxis === 'x-reverse') {
            action = 'decrease';
          } else {
            action = 'increase';
          }
          break;
        case 'home':
          action = 'min';
          break;
        case 'end':
          action = 'max';
          break;
      }

      if (action) {
        var newValue = void 0;

        // Cancel scroll
        event.preventDefault();

        switch (action) {
          case 'decrease':
            newValue = _this.state.value - step;
            break;
          case 'increase':
            newValue = _this.state.value + step;
            break;
          case 'min':
            newValue = min;
            break;
          case 'max':
            newValue = max;
            break;
        }

        // We need to use toFixed() because of float point errors.
        // For example, 0.01 + 0.06 = 0.06999999999999999
        newValue = parseFloat(newValue.toFixed(5));

        if (newValue > max) {
          newValue = max;
        } else if (newValue < min) {
          newValue = min;
        }

        if (_this.state.value !== newValue) {
          _this.setState({
            value: newValue
          });

          if (_this.props.onChange) {
            _this.props.onChange(event, newValue);
          }
        }
      }
    }, _this.handleDragMouseMove = function (event) {
      _this.onDragUpdate(event, 'mouse');
    }, _this.handleTouchMove = function (event) {
      _this.onDragUpdate(event, 'touch');
    }, _this.handleMouseEnd = function (event) {
      document.removeEventListener('mousemove', _this.handleDragMouseMove);
      document.removeEventListener('mouseup', _this.handleMouseEnd);

      _this.onDragStop(event);
    }, _this.handleTouchEnd = function (event) {
      document.removeEventListener('touchmove', _this.handleTouchMove);
      document.removeEventListener('touchup', _this.handleTouchEnd);
      document.removeEventListener('touchend', _this.handleTouchEnd);
      document.removeEventListener('touchcancel', _this.handleTouchEnd);

      _this.onDragStop(event);
    }, _this.handleTouchStart = function (event) {
      var _this$props2 = _this.props,
          axis = _this$props2.axis,
          disabled = _this$props2.disabled;
      var isRtl = _this.context.muiTheme.isRtl;


      if (disabled) {
        return;
      }

      var calculatedAxis = calculateAxis(axis, isRtl);

      var position = void 0;
      if (isMouseControlInverted(calculatedAxis)) {
        position = _this.getTrackOffset() - event.touches[0][mainAxisClientOffsetProperty[calculatedAxis]];
      } else {
        position = event.touches[0][mainAxisClientOffsetProperty[calculatedAxis]] - _this.getTrackOffset();
      }
      _this.setValueFromPosition(event, position);

      document.addEventListener('touchmove', _this.handleTouchMove);
      document.addEventListener('touchup', _this.handleTouchEnd);
      document.addEventListener('touchend', _this.handleTouchEnd);
      document.addEventListener('touchcancel', _this.handleTouchEnd);

      _this.onDragStart(event);

      // Cancel scroll and context menu
      event.preventDefault();
    }, _this.handleFocus = function (event) {
      _this.setState({
        focused: true
      });

      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }
    }, _this.handleBlur = function (event) {
      _this.setState({
        focused: false,
        active: false
      });

      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }
    }, _this.handleMouseDown = function (event) {
      var _this$props3 = _this.props,
          axis = _this$props3.axis,
          disabled = _this$props3.disabled;
      var isRtl = _this.context.muiTheme.isRtl;


      if (disabled) {
        return;
      }

      var calculatedAxis = calculateAxis(axis, isRtl);

      var position = void 0;
      if (isMouseControlInverted(calculatedAxis)) {
        position = _this.getTrackOffset() - event[mainAxisClientOffsetProperty[calculatedAxis]];
      } else {
        position = event[mainAxisClientOffsetProperty[calculatedAxis]] - _this.getTrackOffset();
      }
      _this.setValueFromPosition(event, position);

      document.addEventListener('mousemove', _this.handleDragMouseMove);
      document.addEventListener('mouseup', _this.handleMouseEnd);

      // Cancel text selection
      event.preventDefault();

      // Set focus manually since we called preventDefault()
      _this.handle.focus();

      _this.onDragStart(event);
    }, _this.handleMouseUp = function () {
      if (!_this.props.disabled) {
        _this.setState({
          active: false
        });
      }
    }, _this.handleMouseEnter = function () {
      _this.setState({
        hovered: true
      });
    }, _this.handleMouseLeave = function () {
      _this.setState({
        hovered: false
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Slider, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          valueProp = _props.value,
          defaultValue = _props.defaultValue,
          min = _props.min,
          max = _props.max;


      var value = valueProp;
      if (value === undefined) {
        value = defaultValue !== undefined ? defaultValue : min;
      }

      if (value > max) {
        value = max;
      } else if (value < min) {
        value = min;
      }

      this.setState({
        value: value
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.value !== undefined && !this.state.dragging) {
        this.setState({
          value: nextProps.value
        });
      }
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      undefined !== "production" ? (0, _warning2.default)(false, 'Material-UI Slider: getValue() method is deprecated.\n      Use the onChange callbacks instead.\n      It will be removed with v0.17.0.') : void 0;

      return this.state.value;
    }
  }, {
    key: 'clearValue',
    value: function clearValue() {
      undefined !== "production" ? (0, _warning2.default)(false, 'Material-UI Slider: clearValue() method is deprecated.\n      Use the value property to control the component instead.\n      It will be removed with v0.17.0.') : void 0;

      this.setState({
        value: this.props.min
      });
    }
  }, {
    key: 'getTrackOffset',
    value: function getTrackOffset() {
      var axis = this.props.axis;
      var isRtl = this.context.muiTheme.isRtl;


      var calculatedAxis = calculateAxis(axis, isRtl);

      return this.track.getBoundingClientRect()[mainAxisOffsetProperty[calculatedAxis]];
    }
  }, {
    key: 'onDragStart',
    value: function onDragStart(event) {
      this.setState({
        dragging: true,
        active: true
      });

      if (this.props.onDragStart) {
        this.props.onDragStart(event);
      }
    }
  }, {
    key: 'onDragUpdate',
    value: function onDragUpdate(event, type) {
      var _this2 = this;

      var _props2 = this.props,
          axis = _props2.axis,
          disabled = _props2.disabled;
      var isRtl = this.context.muiTheme.isRtl;


      if (this.dragRunning) {
        return;
      }
      this.dragRunning = true;

      requestAnimationFrame(function () {
        _this2.dragRunning = false;

        var calculatedAxis = calculateAxis(axis, isRtl);
        var source = type === 'touch' ? event.touches[0] : event;

        var position = void 0;
        if (isMouseControlInverted(calculatedAxis)) {
          position = _this2.getTrackOffset() - source[mainAxisClientOffsetProperty[calculatedAxis]];
        } else {
          position = source[mainAxisClientOffsetProperty[calculatedAxis]] - _this2.getTrackOffset();
        }

        if (!disabled) {
          _this2.setValueFromPosition(event, position);
        }
      });
    }
  }, {
    key: 'onDragStop',
    value: function onDragStop(event) {
      this.setState({
        dragging: false,
        active: false
      });

      if (this.props.onDragStop) {
        this.props.onDragStop(event);
      }
    }
  }, {
    key: 'setValueFromPosition',
    value: function setValueFromPosition(event, position) {
      var _props3 = this.props,
          axis = _props3.axis,
          step = _props3.step,
          min = _props3.min,
          max = _props3.max;
      var isRtl = this.context.muiTheme.isRtl;


      var calculatedAxis = calculateAxis(axis, isRtl);
      var positionMax = this.track[mainAxisClientProperty[calculatedAxis]];

      var value = void 0;

      if (position <= 0) {
        value = min;
      } else if (position >= positionMax) {
        value = max;
      } else {
        value = position / positionMax * (max - min);
        value = Math.round(value / step) * step + min;
        value = parseFloat(value.toFixed(5));
      }

      if (this.state.value !== value) {
        this.setState({
          value: value
        });

        if (this.props.onChange) {
          this.props.onChange(event, value);
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props4 = this.props,
          axis = _props4.axis,
          disabled = _props4.disabled,
          disableFocusRipple = _props4.disableFocusRipple,
          max = _props4.max,
          min = _props4.min,
          name = _props4.name,
          onBlur = _props4.onBlur,
          onChange = _props4.onChange,
          onDragStart = _props4.onDragStart,
          onDragStop = _props4.onDragStop,
          onFocus = _props4.onFocus,
          required = _props4.required,
          sliderStyle = _props4.sliderStyle,
          step = _props4.step,
          style = _props4.style,
          other = (0, _objectWithoutProperties3.default)(_props4, ['axis', 'disabled', 'disableFocusRipple', 'max', 'min', 'name', 'onBlur', 'onChange', 'onDragStart', 'onDragStop', 'onFocus', 'required', 'sliderStyle', 'step', 'style']);
      var _state = this.state,
          active = _state.active,
          focused = _state.focused,
          hovered = _state.hovered,
          value = _state.value;
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context, this.state);
      var percent = getPercent(value, min, max);

      var handleStyles = {};
      if (percent === 0) {
        handleStyles = (0, _simpleAssign2.default)({}, styles.handle, styles.handleWhenPercentZero, active && styles.handleWhenActive, (hovered || focused) && !disabled && styles.handleWhenPercentZeroAndFocused, disabled && styles.handleWhenPercentZeroAndDisabled);
      } else {
        handleStyles = (0, _simpleAssign2.default)({}, styles.handle, active && styles.handleWhenActive, disabled && styles.handleWhenDisabled);
      }

      var rippleStyle = (0, _simpleAssign2.default)({}, styles.ripple, percent === 0 && styles.rippleWhenPercentZero);

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, other, { style: prepareStyles((0, _simpleAssign2.default)({}, style)) }),
        _react2.default.createElement(
          'div',
          {
            style: prepareStyles((0, _simpleAssign2.default)({}, styles.slider, sliderStyle)),
            onFocus: this.handleFocus,
            onBlur: this.handleBlur,
            onMouseDown: this.handleMouseDown,
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave,
            onMouseUp: this.handleMouseUp,
            onTouchStart: this.handleTouchStart,
            onKeyDown: !disabled && this.handleKeyDown
          },
          _react2.default.createElement(
            'div',
            { ref: function ref(node) {
                return _this3.track = node;
              }, style: prepareStyles(styles.track) },
            _react2.default.createElement('div', { style: prepareStyles(styles.filled) }),
            _react2.default.createElement('div', { style: prepareStyles(styles.remaining) }),
            _react2.default.createElement(
              'div',
              {
                ref: function ref(node) {
                  return _this3.handle = node;
                },
                style: prepareStyles(handleStyles),
                tabIndex: 0
              },
              !disabled && !disableFocusRipple && _react2.default.createElement(_FocusRipple2.default, {
                style: rippleStyle,
                innerStyle: styles.rippleInner,
                show: (hovered || focused) && !active,
                color: styles.rippleColor.fill
              })
            )
          )
        ),
        _react2.default.createElement('input', {
          type: 'hidden',
          name: name,
          value: value,
          required: required,
          min: min,
          max: max,
          step: step
        })
      );
    }
  }]);
  return Slider;
}(_react.Component);

Slider.defaultProps = {
  axis: 'x',
  disabled: false,
  disableFocusRipple: false,
  max: 1,
  min: 0,
  required: true,
  step: 0.01,
  style: {}
};
Slider.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? Slider.propTypes = {
  /**
   * The axis on which the slider will slide.
   */
  axis: _propTypes2.default.oneOf(['x', 'x-reverse', 'y', 'y-reverse']),
  /**
   * The default value of the slider.
   */
  defaultValue: valueInRangePropType,
  /**
   * Disables focus ripple if set to true.
   */
  disableFocusRipple: _propTypes2.default.bool,
  /**
   * If true, the slider will not be interactable.
   */
  disabled: _propTypes2.default.bool,
  /**
   * The maximum value the slider can slide to on
   * a scale from 0 to 1 inclusive. Cannot be equal to min.
   */
  max: minMaxPropType,
  /**
   * The minimum value the slider can slide to on a scale
   * from 0 to 1 inclusive. Cannot be equal to max.
   */
  min: minMaxPropType,
  /**
   * The name of the slider. Behaves like the name attribute
   * of an input element.
   */
  name: _propTypes2.default.string,
  /** @ignore */
  onBlur: _propTypes2.default.func,
  /**
   * Callback function that is fired when the slider's value changed.
   *
   * @param {object} event KeyDown event targeting the slider.
   * @param {number} newValue The new value of the slider.
   */
  onChange: _propTypes2.default.func,
  /**
   * Callback function that is fired when the slider has begun to move.
   *
   * @param {object} event MouseDown or TouchStart event targeting the slider.
   */
  onDragStart: _propTypes2.default.func,
  /**
   * Callback function that is fired when the slide has stopped moving.
   *
   * @param {object} event MouseEnd or TouchEnd event targeting the slider.
   */
  onDragStop: _propTypes2.default.func,
  /** @ignore */
  onFocus: _propTypes2.default.func,
  /**
   * Whether or not the slider is required in a form.
   */
  required: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the inner slider element.
   */
  sliderStyle: _propTypes2.default.object,
  /**
   * The granularity the slider can step through values.
   */
  step: _propTypes2.default.number,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * The value of the slider.
   */
  value: valueInRangePropType
} : void 0;
exports.default = Slider;

/***/ },

/***/ "./node_modules/material-ui/Slider/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Slider = __webpack_require__("./node_modules/material-ui/Slider/Slider.js");

var _Slider2 = _interopRequireDefault(_Slider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Slider2.default;

/***/ },

/***/ "./node_modules/material-ui/Snackbar/Snackbar.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__("./node_modules/material-ui/styles/transitions.js");

var _transitions2 = _interopRequireDefault(_transitions);

var _ClickAwayListener = __webpack_require__("./node_modules/material-ui/internal/ClickAwayListener.js");

var _ClickAwayListener2 = _interopRequireDefault(_ClickAwayListener);

var _SnackbarBody = __webpack_require__("./node_modules/material-ui/Snackbar/SnackbarBody.js");

var _SnackbarBody2 = _interopRequireDefault(_SnackbarBody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context, state) {
  var _context$muiTheme = context.muiTheme,
      desktopSubheaderHeight = _context$muiTheme.baseTheme.spacing.desktopSubheaderHeight,
      zIndex = _context$muiTheme.zIndex;
  var open = state.open;


  var styles = {
    root: {
      position: 'fixed',
      left: '50%',
      display: 'flex',
      bottom: 0,
      zIndex: zIndex.snackbar,
      visibility: open ? 'visible' : 'hidden',
      transform: open ? 'translate(-50%, 0)' : 'translate(-50%, ' + desktopSubheaderHeight + 'px)',
      transition: _transitions2.default.easeOut('400ms', 'transform') + ', ' + _transitions2.default.easeOut('400ms', 'visibility')
    }
  };

  return styles;
}

var Snackbar = function (_Component) {
  (0, _inherits3.default)(Snackbar, _Component);

  function Snackbar() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Snackbar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Snackbar.__proto__ || (0, _getPrototypeOf2.default)(Snackbar)).call.apply(_ref, [this].concat(args))), _this), _this.componentClickAway = function () {
      if (_this.timerTransitionId) {
        // If transitioning, don't close the snackbar.
        return;
      }

      if (_this.props.open !== null && _this.props.onRequestClose) {
        _this.props.onRequestClose('clickaway');
      } else {
        _this.setState({ open: false });
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Snackbar, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({
        open: this.props.open,
        message: this.props.message,
        action: this.props.action
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.state.open) {
        this.setAutoHideTimer();
        this.setTransitionTimer();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (this.props.open && nextProps.open && (nextProps.message !== this.props.message || nextProps.action !== this.props.action)) {
        this.setState({
          open: false
        });

        clearTimeout(this.timerOneAtTheTimeId);
        this.timerOneAtTheTimeId = setTimeout(function () {
          _this2.setState({
            message: nextProps.message,
            action: nextProps.action,
            open: true
          });
        }, 400);
      } else {
        var open = nextProps.open;

        this.setState({
          open: open !== null ? open : this.state.open,
          message: nextProps.message,
          action: nextProps.action
        });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.open !== this.state.open) {
        if (this.state.open) {
          this.setAutoHideTimer();
          this.setTransitionTimer();
        } else {
          clearTimeout(this.timerAutoHideId);
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.timerAutoHideId);
      clearTimeout(this.timerTransitionId);
      clearTimeout(this.timerOneAtTheTimeId);
    }
  }, {
    key: 'setAutoHideTimer',


    // Timer that controls delay before snackbar auto hides
    value: function setAutoHideTimer() {
      var _this3 = this;

      var autoHideDuration = this.props.autoHideDuration;

      if (autoHideDuration > 0) {
        clearTimeout(this.timerAutoHideId);
        this.timerAutoHideId = setTimeout(function () {
          if (_this3.props.open !== null && _this3.props.onRequestClose) {
            _this3.props.onRequestClose('timeout');
          } else {
            _this3.setState({ open: false });
          }
        }, autoHideDuration);
      }
    }

    // Timer that controls delay before click-away events are captured (based on when animation completes)

  }, {
    key: 'setTransitionTimer',
    value: function setTransitionTimer() {
      var _this4 = this;

      this.timerTransitionId = setTimeout(function () {
        _this4.timerTransitionId = undefined;
      }, 400);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          autoHideDuration = _props.autoHideDuration,
          contentStyle = _props.contentStyle,
          bodyStyle = _props.bodyStyle,
          messageProp = _props.message,
          onRequestClose = _props.onRequestClose,
          onActionTouchTap = _props.onActionTouchTap,
          style = _props.style,
          other = (0, _objectWithoutProperties3.default)(_props, ['autoHideDuration', 'contentStyle', 'bodyStyle', 'message', 'onRequestClose', 'onActionTouchTap', 'style']);
      var _state = this.state,
          action = _state.action,
          message = _state.message,
          open = _state.open;
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context, this.state);

      return _react2.default.createElement(
        _ClickAwayListener2.default,
        { onClickAway: open ? this.componentClickAway : null },
        _react2.default.createElement(
          'div',
          (0, _extends3.default)({}, other, { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) }),
          _react2.default.createElement(_SnackbarBody2.default, {
            action: action,
            contentStyle: contentStyle,
            message: message,
            open: open,
            onActionTouchTap: onActionTouchTap,
            style: bodyStyle
          })
        )
      );
    }
  }]);
  return Snackbar;
}(_react.Component);

Snackbar.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? Snackbar.propTypes = {
  /**
   * The label for the action on the snackbar.
   */
  action: _propTypes2.default.node,
  /**
   * The number of milliseconds to wait before automatically dismissing.
   * If no value is specified the snackbar will dismiss normally.
   * If a value is provided the snackbar can still be dismissed normally.
   * If a snackbar is dismissed before the timer expires, the timer will be cleared.
   */
  autoHideDuration: _propTypes2.default.number,
  /**
   * Override the inline-styles of the body element.
   */
  bodyStyle: _propTypes2.default.object,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * Override the inline-styles of the content element.
   */
  contentStyle: _propTypes2.default.object,
  /**
   * The message to be displayed.
   *
   * (Note: If the message is an element or array, and the `Snackbar` may re-render while it is still open,
   * ensure that the same object remains as the `message` property if you want to avoid the `Snackbar` hiding and
   * showing again)
   */
  message: _propTypes2.default.node.isRequired,
  /**
   * Fired when the action button is touchtapped.
   *
   * @param {object} event Action button event.
   */
  onActionTouchTap: _propTypes2.default.func,
  /**
   * Fired when the `Snackbar` is requested to be closed by a click outside the `Snackbar`, or after the
   * `autoHideDuration` timer expires.
   *
   * Typically `onRequestClose` is used to set state in the parent component, which is used to control the `Snackbar`
   * `open` prop.
   *
   * The `reason` parameter can optionally be used to control the response to `onRequestClose`,
   * for example ignoring `clickaway`.
   *
   * @param {string} reason Can be:`"timeout"` (`autoHideDuration` expired) or: `"clickaway"`
   */
  onRequestClose: _propTypes2.default.func,
  /**
   * Controls whether the `Snackbar` is opened or not.
   */
  open: _propTypes2.default.bool.isRequired,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : void 0;
exports.default = Snackbar;

/***/ },

/***/ "./node_modules/material-ui/Snackbar/SnackbarBody.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SnackbarBody = undefined;

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__("./node_modules/material-ui/styles/transitions.js");

var _transitions2 = _interopRequireDefault(_transitions);

var _withWidth = __webpack_require__("./node_modules/material-ui/utils/withWidth.js");

var _withWidth2 = _interopRequireDefault(_withWidth);

var _FlatButton = __webpack_require__("./node_modules/material-ui/FlatButton/index.js");

var _FlatButton2 = _interopRequireDefault(_FlatButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var open = props.open,
      width = props.width;
  var _context$muiTheme = context.muiTheme,
      _context$muiTheme$bas = _context$muiTheme.baseTheme,
      _context$muiTheme$bas2 = _context$muiTheme$bas.spacing,
      desktopGutter = _context$muiTheme$bas2.desktopGutter,
      desktopSubheaderHeight = _context$muiTheme$bas2.desktopSubheaderHeight,
      fontFamily = _context$muiTheme$bas.fontFamily,
      _context$muiTheme$sna = _context$muiTheme.snackbar,
      backgroundColor = _context$muiTheme$sna.backgroundColor,
      textColor = _context$muiTheme$sna.textColor,
      actionColor = _context$muiTheme$sna.actionColor,
      borderRadius = _context$muiTheme.borderRadius;


  var isSmall = width === _withWidth.SMALL;

  var styles = {
    root: {
      fontFamily: fontFamily,
      backgroundColor: backgroundColor,
      padding: '0 ' + desktopGutter + 'px',
      height: desktopSubheaderHeight,
      lineHeight: desktopSubheaderHeight + 'px',
      borderRadius: isSmall ? 0 : borderRadius,
      maxWidth: isSmall ? 'inherit' : 568,
      minWidth: isSmall ? 'inherit' : 288,
      width: isSmall ? 'calc(100vw - ' + desktopGutter * 2 + 'px)' : 'auto',
      flexGrow: isSmall ? 1 : 0
    },
    content: {
      fontSize: 14,
      color: textColor,
      opacity: open ? 1 : 0,
      transition: open ? _transitions2.default.easeOut('500ms', 'opacity', '100ms') : _transitions2.default.easeOut('400ms', 'opacity')
    },
    action: {
      color: actionColor,
      float: 'right',
      marginTop: 6,
      marginRight: -16,
      marginLeft: desktopGutter,
      backgroundColor: 'transparent'
    }
  };

  return styles;
}

var SnackbarBody = function SnackbarBody(props, context) {
  var action = props.action,
      contentStyle = props.contentStyle,
      message = props.message,
      open = props.open,
      onActionTouchTap = props.onActionTouchTap,
      style = props.style,
      other = (0, _objectWithoutProperties3.default)(props, ['action', 'contentStyle', 'message', 'open', 'onActionTouchTap', 'style']);
  var prepareStyles = context.muiTheme.prepareStyles;

  var styles = getStyles(props, context);

  var actionButton = action && _react2.default.createElement(_FlatButton2.default, {
    style: styles.action,
    label: action,
    onTouchTap: onActionTouchTap
  });

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({}, other, { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) }),
    _react2.default.createElement(
      'div',
      { style: prepareStyles((0, _simpleAssign2.default)(styles.content, contentStyle)) },
      _react2.default.createElement(
        'span',
        null,
        message
      ),
      actionButton
    )
  );
};

exports.SnackbarBody = SnackbarBody;
undefined !== "production" ? SnackbarBody.propTypes = {
  /**
   * The label for the action on the snackbar.
   */
  action: _propTypes2.default.node,
  /**
   * Override the inline-styles of the content element.
   */
  contentStyle: _propTypes2.default.object,
  /**
   * The message to be displayed.
   *
   * (Note: If the message is an element or array, and the `Snackbar` may re-render while it is still open,
   * ensure that the same object remains as the `message` property if you want to avoid the `Snackbar` hiding and
   * showing again)
   */
  message: _propTypes2.default.node.isRequired,
  /**
   * Fired when the action button is touchtapped.
   *
   * @param {object} event Action button event.
   */
  onActionTouchTap: _propTypes2.default.func,
  /**
   * @ignore
   * Controls whether the `Snackbar` is opened or not.
   */
  open: _propTypes2.default.bool.isRequired,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * @ignore
   * Width of the screen.
   */
  width: _propTypes2.default.number.isRequired
} : void 0;

SnackbarBody.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};

exports.default = (0, _withWidth2.default)()(SnackbarBody);

/***/ },

/***/ "./node_modules/material-ui/Snackbar/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Snackbar = __webpack_require__("./node_modules/material-ui/Snackbar/Snackbar.js");

var _Snackbar2 = _interopRequireDefault(_Snackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Snackbar2.default;

/***/ },

/***/ "./node_modules/material-ui/Stepper/Step.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getStyles = function getStyles(_ref, _ref2) {
  var index = _ref.index;
  var stepper = _ref2.stepper;
  var orientation = stepper.orientation;

  var styles = {
    root: {
      flex: '0 0 auto'
    }
  };

  if (index > 0) {
    if (orientation === 'horizontal') {
      styles.root.marginLeft = -6;
    } else if (orientation === 'vertical') {
      styles.root.marginTop = -14;
    }
  }

  return styles;
};

var Step = function (_Component) {
  (0, _inherits3.default)(Step, _Component);

  function Step() {
    var _ref3;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Step);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref3 = Step.__proto__ || (0, _getPrototypeOf2.default)(Step)).call.apply(_ref3, [this].concat(args))), _this), _this.renderChild = function (child) {
      var _this$props = _this.props,
          active = _this$props.active,
          completed = _this$props.completed,
          disabled = _this$props.disabled,
          index = _this$props.index,
          last = _this$props.last;


      var icon = index + 1;

      return _react2.default.cloneElement(child, (0, _simpleAssign2.default)({ active: active, completed: completed, disabled: disabled, icon: icon, last: last }, child.props));
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Step, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          active = _props.active,
          completed = _props.completed,
          disabled = _props.disabled,
          index = _props.index,
          last = _props.last,
          children = _props.children,
          style = _props.style,
          other = (0, _objectWithoutProperties3.default)(_props, ['active', 'completed', 'disabled', 'index', 'last', 'children', 'style']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) }, other),
        _react2.default.Children.map(children, this.renderChild)
      );
    }
  }]);
  return Step;
}(_react.Component);

Step.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired,
  stepper: _propTypes2.default.object
};
undefined !== "production" ? Step.propTypes = {
  /**
   * Sets the step as active. Is passed to child components.
   */
  active: _propTypes2.default.bool,
  /**
   * Should be `Step` sub-components such as `StepLabel`.
   */
  children: _propTypes2.default.node,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: _propTypes2.default.bool,
  /**
   * Mark the step as disabled, will also disable the button if
   * `StepButton` is a child of `Step`. Is passed to child components.
   */
  disabled: _propTypes2.default.bool,
  /**
   * @ignore
   * Used internally for numbering.
   */
  index: _propTypes2.default.number,
  /**
   * @ignore
   */
  last: _propTypes2.default.bool,
  /**
   * Override the inline-style of the root element.
   */
  style: _propTypes2.default.object
} : void 0;
exports.default = Step;

/***/ },

/***/ "./node_modules/material-ui/Stepper/StepButton.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__("./node_modules/material-ui/styles/transitions.js");

var _transitions2 = _interopRequireDefault(_transitions);

var _EnhancedButton = __webpack_require__("./node_modules/material-ui/internal/EnhancedButton.js");

var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);

var _StepLabel = __webpack_require__("./node_modules/material-ui/Stepper/StepLabel.js");

var _StepLabel2 = _interopRequireDefault(_StepLabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isLabel = function isLabel(child) {
  return child && child.type && child.type.muiName === 'StepLabel';
};

var getStyles = function getStyles(props, context, state) {
  var hovered = state.hovered;
  var _context$muiTheme$ste = context.muiTheme.stepper,
      backgroundColor = _context$muiTheme$ste.backgroundColor,
      hoverBackgroundColor = _context$muiTheme$ste.hoverBackgroundColor;


  var styles = {
    root: {
      padding: 0,
      backgroundColor: hovered ? hoverBackgroundColor : backgroundColor,
      transition: _transitions2.default.easeOut()
    }
  };

  if (context.stepper.orientation === 'vertical') {
    styles.root.width = '100%';
  }

  return styles;
};

var StepButton = function (_Component) {
  (0, _inherits3.default)(StepButton, _Component);

  function StepButton() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, StepButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = StepButton.__proto__ || (0, _getPrototypeOf2.default)(StepButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hovered: false,
      touched: false
    }, _this.handleMouseEnter = function (event) {
      var onMouseEnter = _this.props.onMouseEnter;
      // Cancel hover styles for touch devices

      if (!_this.state.touched) {
        _this.setState({ hovered: true });
      }
      if (typeof onMouseEnter === 'function') {
        onMouseEnter(event);
      }
    }, _this.handleMouseLeave = function (event) {
      var onMouseLeave = _this.props.onMouseLeave;

      _this.setState({ hovered: false });
      if (typeof onMouseLeave === 'function') {
        onMouseLeave(event);
      }
    }, _this.handleTouchStart = function (event) {
      var onTouchStart = _this.props.onTouchStart;

      if (!_this.state.touched) {
        _this.setState({ touched: true });
      }
      if (typeof onTouchStart === 'function') {
        onTouchStart(event);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(StepButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          active = _props.active,
          children = _props.children,
          completed = _props.completed,
          disabled = _props.disabled,
          icon = _props.icon,
          iconContainerStyle = _props.iconContainerStyle,
          last = _props.last,
          onMouseEnter = _props.onMouseEnter,
          onMouseLeave = _props.onMouseLeave,
          onTouchStart = _props.onTouchStart,
          style = _props.style,
          other = (0, _objectWithoutProperties3.default)(_props, ['active', 'children', 'completed', 'disabled', 'icon', 'iconContainerStyle', 'last', 'onMouseEnter', 'onMouseLeave', 'onTouchStart', 'style']);


      var styles = getStyles(this.props, this.context, this.state);

      var child = isLabel(children) ? children : _react2.default.createElement(
        _StepLabel2.default,
        null,
        children
      );

      return _react2.default.createElement(
        _EnhancedButton2.default,
        (0, _extends3.default)({
          disabled: disabled,
          style: (0, _simpleAssign2.default)(styles.root, style),
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave,
          onTouchStart: this.handleTouchStart
        }, other),
        _react2.default.cloneElement(child, { active: active, completed: completed, disabled: disabled, icon: icon, iconContainerStyle: iconContainerStyle })
      );
    }
  }]);
  return StepButton;
}(_react.Component);

StepButton.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired,
  stepper: _propTypes2.default.object
};
undefined !== "production" ? StepButton.propTypes = {
  /**
   * Passed from `Step` Is passed to StepLabel.
   */
  active: _propTypes2.default.bool,
  /**
   * Can be a `StepLabel` or a node to place inside `StepLabel` as children.
   */
  children: _propTypes2.default.node,
  /**
   * Sets completed styling. Is passed to StepLabel.
   */
  completed: _propTypes2.default.bool,
  /**
   * Disables the button and sets disabled styling. Is passed to StepLabel.
   */
  disabled: _propTypes2.default.bool,
  /**
   * The icon displayed by the step label.
   */
  icon: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.string, _propTypes2.default.number]),
  /**
   * Override the inline-styles of the icon container element.
   */
  iconContainerStyle: _propTypes2.default.object,
  /** @ignore */
  last: _propTypes2.default.bool,
  /** @ignore */
  onMouseEnter: _propTypes2.default.func,
  /** @ignore */
  onMouseLeave: _propTypes2.default.func,
  /** @ignore */
  onTouchStart: _propTypes2.default.func,
  /**
   * Override the inline-style of the root element.
   */
  style: _propTypes2.default.object
} : void 0;
exports.default = StepButton;

/***/ },

/***/ "./node_modules/material-ui/Stepper/StepConnector.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlainStepConnector = undefined;

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _pure = __webpack_require__("./node_modules/recompose/pure.js");

var _pure2 = _interopRequireDefault(_pure);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  /**
   * Override the inline-style of the root element.
   */
  style: _propTypes2.default.object
};

var contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired,
  stepper: _propTypes2.default.object
};

var StepConnector = function StepConnector(props, context) {
  var muiTheme = context.muiTheme,
      stepper = context.stepper;


  var styles = {
    wrapper: {
      flex: '1 1 auto'
    },
    line: {
      display: 'block',
      borderColor: muiTheme.stepper.connectorLineColor
    }
  };

  /**
   * Clean up once we can use CSS pseudo elements
   */
  if (stepper.orientation === 'horizontal') {
    styles.line.marginLeft = -6;
    styles.line.borderTopStyle = 'solid';
    styles.line.borderTopWidth = 1;
  } else if (stepper.orientation === 'vertical') {
    styles.wrapper.marginLeft = 14 + 11; // padding + 1/2 icon
    styles.line.borderLeftStyle = 'solid';
    styles.line.borderLeftWidth = 1;
    styles.line.minHeight = 28;
  }

  var prepareStyles = muiTheme.prepareStyles;


  return _react2.default.createElement(
    'div',
    { style: prepareStyles(styles.wrapper) },
    _react2.default.createElement('span', { style: prepareStyles(styles.line) })
  );
};

undefined !== "production" ? StepConnector.propTypes = propTypes : void 0;
StepConnector.contextTypes = contextTypes;

exports.PlainStepConnector = StepConnector;
exports.default = (0, _pure2.default)(StepConnector);

/***/ },

/***/ "./node_modules/material-ui/Stepper/StepContent.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ExpandTransition = __webpack_require__("./node_modules/material-ui/internal/ExpandTransition.js");

var _ExpandTransition2 = _interopRequireDefault(_ExpandTransition);

var _warning = __webpack_require__("./node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ExpandTransition(props) {
  return _react2.default.createElement(_ExpandTransition2.default, props);
}

var getStyles = function getStyles(props, context) {
  var styles = {
    root: {
      marginTop: -14,
      marginLeft: 14 + 11, // padding + 1/2 icon
      paddingLeft: 24 - 11 + 8,
      paddingRight: 16,
      overflow: 'hidden'
    }
  };

  if (!props.last) {
    styles.root.borderLeft = '1px solid ' + context.muiTheme.stepper.connectorLineColor;
  }

  return styles;
};

var StepContent = function (_Component) {
  (0, _inherits3.default)(StepContent, _Component);

  function StepContent() {
    (0, _classCallCheck3.default)(this, StepContent);
    return (0, _possibleConstructorReturn3.default)(this, (StepContent.__proto__ || (0, _getPrototypeOf2.default)(StepContent)).apply(this, arguments));
  }

  (0, _createClass3.default)(StepContent, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          active = _props.active,
          children = _props.children,
          completed = _props.completed,
          last = _props.last,
          style = _props.style,
          transition = _props.transition,
          transitionDuration = _props.transitionDuration,
          other = (0, _objectWithoutProperties3.default)(_props, ['active', 'children', 'completed', 'last', 'style', 'transition', 'transitionDuration']);
      var _context = this.context,
          stepper = _context.stepper,
          prepareStyles = _context.muiTheme.prepareStyles;


      if (stepper.orientation !== 'vertical') {
        undefined !== "production" ? (0, _warning2.default)(false, 'Material-UI: <StepContent /> is only designed for use with the vertical stepper.') : void 0;
        return null;
      }

      var styles = getStyles(this.props, this.context);
      var transitionProps = {
        enterDelay: transitionDuration,
        transitionDuration: transitionDuration,
        open: active
      };

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) }, other),
        _react2.default.createElement(transition, transitionProps, _react2.default.createElement(
          'div',
          { style: { overflow: 'hidden' } },
          children
        ))
      );
    }
  }]);
  return StepContent;
}(_react.Component);

StepContent.defaultProps = {
  transition: ExpandTransition,
  transitionDuration: 450
};
StepContent.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired,
  stepper: _propTypes2.default.object
};
undefined !== "production" ? StepContent.propTypes = {
  /**
   * Expands the content
   */
  active: _propTypes2.default.bool,
  /**
   * Step content
   */
  children: _propTypes2.default.node,
  /**
   * @ignore
   */
  completed: _propTypes2.default.bool,
  /**
   * @ignore
   */
  last: _propTypes2.default.bool,
  /**
   * Override the inline-style of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * ReactTransitionGroup component.
   */
  transition: _propTypes2.default.func,
  /**
   * Adjust the duration of the content expand transition. Passed as a prop to the transition component.
   */
  transitionDuration: _propTypes2.default.number
} : void 0;
exports.default = StepContent;

/***/ },

/***/ "./node_modules/material-ui/Stepper/StepLabel.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _checkCircle = __webpack_require__("./node_modules/material-ui/svg-icons/action/check-circle.js");

var _checkCircle2 = _interopRequireDefault(_checkCircle);

var _SvgIcon = __webpack_require__("./node_modules/material-ui/SvgIcon/index.js");

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getStyles = function getStyles(_ref, _ref2) {
  var active = _ref.active,
      completed = _ref.completed,
      disabled = _ref.disabled;
  var muiTheme = _ref2.muiTheme,
      stepper = _ref2.stepper;
  var _muiTheme$stepper = muiTheme.stepper,
      textColor = _muiTheme$stepper.textColor,
      disabledTextColor = _muiTheme$stepper.disabledTextColor,
      iconColor = _muiTheme$stepper.iconColor,
      inactiveIconColor = _muiTheme$stepper.inactiveIconColor;
  var baseTheme = muiTheme.baseTheme;
  var orientation = stepper.orientation;


  var styles = {
    root: {
      height: orientation === 'horizontal' ? 72 : 64,
      color: textColor,
      display: 'flex',
      alignItems: 'center',
      fontFamily: baseTheme.fontFamily,
      fontSize: 14,
      paddingLeft: 14,
      paddingRight: 14
    },
    icon: {
      color: iconColor,
      display: 'block',
      fontSize: 24,
      width: 24,
      height: 24
    },
    iconContainer: {
      paddingRight: 8
    }
  };

  if (active) {
    styles.root.fontWeight = 500;
  }

  if (!completed && !active) {
    styles.icon.color = inactiveIconColor;
  }

  if (disabled) {
    styles.icon.color = inactiveIconColor;
    styles.root.color = disabledTextColor;
    styles.root.cursor = 'default';
  }

  return styles;
};

var renderIcon = function renderIcon(completed, icon, styles) {
  var iconType = typeof icon === 'undefined' ? 'undefined' : (0, _typeof3.default)(icon);

  if (iconType === 'number' || iconType === 'string') {
    if (completed) {
      return _react2.default.createElement(_checkCircle2.default, {
        color: styles.icon.color,
        style: styles.icon
      });
    }

    return _react2.default.createElement(
      _SvgIcon2.default,
      { color: styles.icon.color, style: styles.icon },
      _react2.default.createElement('circle', { cx: '12', cy: '12', r: '10' }),
      _react2.default.createElement(
        'text',
        {
          x: '12',
          y: '16',
          textAnchor: 'middle',
          fontSize: '12',
          fill: '#fff'
        },
        icon
      )
    );
  }

  return icon;
};

var StepLabel = function StepLabel(props, context) {
  var active = props.active,
      children = props.children,
      completed = props.completed,
      userIcon = props.icon,
      iconContainerStyle = props.iconContainerStyle,
      last = props.last,
      style = props.style,
      other = (0, _objectWithoutProperties3.default)(props, ['active', 'children', 'completed', 'icon', 'iconContainerStyle', 'last', 'style']);
  var prepareStyles = context.muiTheme.prepareStyles;

  var styles = getStyles(props, context);
  var icon = renderIcon(completed, userIcon, styles);

  return _react2.default.createElement(
    'span',
    (0, _extends3.default)({ style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) }, other),
    icon && _react2.default.createElement(
      'span',
      { style: prepareStyles((0, _simpleAssign2.default)(styles.iconContainer, iconContainerStyle)) },
      icon
    ),
    children
  );
};

StepLabel.muiName = 'StepLabel';

undefined !== "production" ? StepLabel.propTypes = {
  /**
   * Sets active styling. Overrides disabled coloring.
   */
  active: _propTypes2.default.bool,
  /**
   * The label text node
   */
  children: _propTypes2.default.node,
  /**
   * Sets completed styling. Overrides disabled coloring.
   */
  completed: _propTypes2.default.bool,
  /**
   * Sets disabled styling.
   */
  disabled: _propTypes2.default.bool,
  /**
   * The icon displayed by the step label.
   */
  icon: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.string, _propTypes2.default.number]),
  /**
   * Override the inline-styles of the icon container element.
   */
  iconContainerStyle: _propTypes2.default.object,
  /**
   * @ignore
   */
  last: _propTypes2.default.bool,
  /**
   * Override the inline-style of the root element.
   */
  style: _propTypes2.default.object
} : void 0;

StepLabel.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired,
  stepper: _propTypes2.default.object
};

exports.default = StepLabel;

/***/ },

/***/ "./node_modules/material-ui/Stepper/Stepper.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _StepConnector = __webpack_require__("./node_modules/material-ui/Stepper/StepConnector.js");

var _StepConnector2 = _interopRequireDefault(_StepConnector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getStyles = function getStyles(props) {
  var orientation = props.orientation;

  return {
    root: {
      display: 'flex',
      flexDirection: orientation === 'horizontal' ? 'row' : 'column',
      alignContent: 'center',
      alignItems: orientation === 'horizontal' ? 'center' : 'stretch',
      justifyContent: 'space-between'
    }
  };
};

var Stepper = function (_Component) {
  (0, _inherits3.default)(Stepper, _Component);

  function Stepper() {
    (0, _classCallCheck3.default)(this, Stepper);
    return (0, _possibleConstructorReturn3.default)(this, (Stepper.__proto__ || (0, _getPrototypeOf2.default)(Stepper)).apply(this, arguments));
  }

  (0, _createClass3.default)(Stepper, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var orientation = this.props.orientation;

      return { stepper: { orientation: orientation } };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          activeStep = _props.activeStep,
          children = _props.children,
          connector = _props.connector,
          linear = _props.linear,
          style = _props.style;
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      /**
       * One day, we may be able to use real CSS tools
       * For now, we need to create our own "pseudo" elements
       * and nth child selectors, etc
       * That's what some of this garbage is for :)
       */
      var numChildren = _react.Children.count(children);
      var steps = _react.Children.map(children, function (step, index) {
        var controlProps = { index: index };

        if (activeStep === index) {
          controlProps.active = true;
        } else if (linear && activeStep > index) {
          controlProps.completed = true;
        } else if (linear && activeStep < index) {
          controlProps.disabled = true;
        }

        if (index + 1 === numChildren) {
          controlProps.last = true;
        }

        return [index > 0 && connector, _react2.default.cloneElement(step, (0, _simpleAssign2.default)(controlProps, step.props))];
      });

      return _react2.default.createElement(
        'div',
        { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) },
        steps
      );
    }
  }]);
  return Stepper;
}(_react.Component);

Stepper.defaultProps = {
  connector: _react2.default.createElement(_StepConnector2.default, null),
  orientation: 'horizontal',
  linear: true
};
Stepper.contextTypes = { muiTheme: _propTypes2.default.object.isRequired };
Stepper.childContextTypes = { stepper: _propTypes2.default.object };
undefined !== "production" ? Stepper.propTypes = {
  /**
   * Set the active step (zero based index). This will enable `Step` control helpers.
   */
  activeStep: _propTypes2.default.number,
  /**
   * Should be two or more `<Step />` components.
   */
  children: _propTypes2.default.node,
  /**
   * A component to be placed between each step.
   */
  connector: _propTypes2.default.node,
  /**
   * If set to `true`, the `Stepper` will assist in controlling steps for linear flow
   */
  linear: _propTypes2.default.bool,
  /**
   * The stepper orientation (layout flow direction)
   */
  orientation: _propTypes2.default.oneOf(['horizontal', 'vertical']),
  /**
   * Override the inline-style of the root element.
   */
  style: _propTypes2.default.object
} : void 0;
exports.default = Stepper;

/***/ },

/***/ "./node_modules/material-ui/Table/Table.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = __webpack_require__("./node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      table = _context$muiTheme.table;


  return {
    root: {
      backgroundColor: table.backgroundColor,
      width: '100%',
      borderCollapse: 'collapse',
      borderSpacing: 0,
      tableLayout: 'fixed',
      fontFamily: baseTheme.fontFamily
    },
    bodyTable: {
      height: props.fixedHeader || props.fixedFooter ? props.height : 'auto',
      overflowX: 'hidden',
      overflowY: 'auto'
    },
    tableWrapper: {
      height: props.fixedHeader || props.fixedFooter ? 'auto' : props.height,
      overflow: 'auto'
    }
  };
}

var Table = function (_Component) {
  (0, _inherits3.default)(Table, _Component);

  function Table() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Table);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Table.__proto__ || (0, _getPrototypeOf2.default)(Table)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      allRowsSelected: false
    }, _this.onCellClick = function (rowNumber, columnNumber, event) {
      if (_this.props.onCellClick) _this.props.onCellClick(rowNumber, columnNumber, event);
    }, _this.onCellHover = function (rowNumber, columnNumber, event) {
      if (_this.props.onCellHover) _this.props.onCellHover(rowNumber, columnNumber, event);
    }, _this.onCellHoverExit = function (rowNumber, columnNumber, event) {
      if (_this.props.onCellHoverExit) _this.props.onCellHoverExit(rowNumber, columnNumber, event);
    }, _this.onRowHover = function (rowNumber) {
      if (_this.props.onRowHover) _this.props.onRowHover(rowNumber);
    }, _this.onRowHoverExit = function (rowNumber) {
      if (_this.props.onRowHoverExit) _this.props.onRowHoverExit(rowNumber);
    }, _this.onRowSelection = function (selectedRows) {
      if (_this.state.allRowsSelected) {
        _this.setState({ allRowsSelected: false });
      }

      if (_this.props.onRowSelection) {
        _this.props.onRowSelection(selectedRows);
      }
    }, _this.onSelectAll = function () {
      if (_this.props.onRowSelection) {
        if (!_this.state.allRowsSelected) {
          _this.props.onRowSelection('all');
        } else {
          _this.props.onRowSelection('none');
        }
      }

      _this.setState({ allRowsSelected: !_this.state.allRowsSelected });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Table, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (this.props.allRowsSelected) {
        this.setState({ allRowsSelected: true });
      }
    }
  }, {
    key: 'isScrollbarVisible',
    value: function isScrollbarVisible() {
      var tableDivHeight = this.refs.tableDiv.clientHeight;
      var tableBodyHeight = this.refs.tableBody.clientHeight;

      return tableBodyHeight > tableDivHeight;
    }
  }, {
    key: 'createTableHeader',
    value: function createTableHeader(base) {
      return _react2.default.cloneElement(base, {
        enableSelectAll: base.props.enableSelectAll && this.props.selectable && this.props.multiSelectable,
        onSelectAll: this.onSelectAll,
        selectAllSelected: this.state.allRowsSelected
      });
    }
  }, {
    key: 'createTableBody',
    value: function createTableBody(base) {
      return _react2.default.cloneElement(base, {
        allRowsSelected: this.state.allRowsSelected,
        multiSelectable: this.props.multiSelectable,
        onCellClick: this.onCellClick,
        onCellHover: this.onCellHover,
        onCellHoverExit: this.onCellHoverExit,
        onRowHover: this.onRowHover,
        onRowHoverExit: this.onRowHoverExit,
        onRowSelection: this.onRowSelection,
        selectable: this.props.selectable,
        style: (0, _simpleAssign2.default)({ height: this.props.height }, base.props.style)
      });
    }
  }, {
    key: 'createTableFooter',
    value: function createTableFooter(base) {
      return base;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          className = _props.className,
          fixedFooter = _props.fixedFooter,
          fixedHeader = _props.fixedHeader,
          style = _props.style,
          wrapperStyle = _props.wrapperStyle,
          headerStyle = _props.headerStyle,
          bodyStyle = _props.bodyStyle,
          footerStyle = _props.footerStyle;
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      var tHead = void 0;
      var tFoot = void 0;
      var tBody = void 0;

      _react2.default.Children.forEach(children, function (child) {
        if (!_react2.default.isValidElement(child)) return;

        var muiName = child.type.muiName;

        if (muiName === 'TableBody') {
          tBody = _this2.createTableBody(child);
        } else if (muiName === 'TableHeader') {
          tHead = _this2.createTableHeader(child);
        } else if (muiName === 'TableFooter') {
          tFoot = _this2.createTableFooter(child);
        } else {
          undefined !== "production" ? (0, _warning2.default)(false, 'Material-UI: Children of the Table component must be TableBody or TableHeader or TableFooter.\n           Nothing is rendered.') : void 0;
        }
      });

      // If we could not find a table-header and a table-body, do not attempt to display anything.
      if (!tBody && !tHead) return null;

      var mergedTableStyle = (0, _simpleAssign2.default)(styles.root, style);
      var headerTable = void 0;
      var footerTable = void 0;
      var inlineHeader = void 0;
      var inlineFooter = void 0;

      if (fixedHeader) {
        headerTable = _react2.default.createElement(
          'div',
          { style: prepareStyles((0, _simpleAssign2.default)({}, headerStyle)) },
          _react2.default.createElement(
            'table',
            { className: className, style: mergedTableStyle },
            tHead
          )
        );
      } else {
        inlineHeader = tHead;
      }

      if (tFoot !== undefined) {
        if (fixedFooter) {
          footerTable = _react2.default.createElement(
            'div',
            { style: prepareStyles((0, _simpleAssign2.default)({}, footerStyle)) },
            _react2.default.createElement(
              'table',
              { className: className, style: prepareStyles(mergedTableStyle) },
              tFoot
            )
          );
        } else {
          inlineFooter = tFoot;
        }
      }

      return _react2.default.createElement(
        'div',
        { style: prepareStyles((0, _simpleAssign2.default)(styles.tableWrapper, wrapperStyle)) },
        headerTable,
        _react2.default.createElement(
          'div',
          { style: prepareStyles((0, _simpleAssign2.default)(styles.bodyTable, bodyStyle)), ref: 'tableDiv' },
          _react2.default.createElement(
            'table',
            { className: className, style: mergedTableStyle, ref: 'tableBody' },
            inlineHeader,
            inlineFooter,
            tBody
          )
        ),
        footerTable
      );
    }
  }]);
  return Table;
}(_react.Component);

Table.defaultProps = {
  allRowsSelected: false,
  fixedFooter: true,
  fixedHeader: true,
  height: 'inherit',
  multiSelectable: false,
  selectable: true
};
Table.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? Table.propTypes = {
  /**
   * Set to true to indicate that all rows should be selected.
   */
  allRowsSelected: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the body's table element.
   */
  bodyStyle: _propTypes2.default.object,
  /**
   * Children passed to table.
   */
  children: _propTypes2.default.node,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * If true, the footer will appear fixed below the table.
   * The default value is true.
   */
  fixedFooter: _propTypes2.default.bool,
  /**
   * If true, the header will appear fixed above the table.
   * The default value is true.
   */
  fixedHeader: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the footer's table element.
   */
  footerStyle: _propTypes2.default.object,
  /**
   * Override the inline-styles of the header's table element.
   */
  headerStyle: _propTypes2.default.object,
  /**
   * The height of the table.
   */
  height: _propTypes2.default.string,
  /**
   * If true, multiple table rows can be selected.
   * CTRL/CMD+Click and SHIFT+Click are valid actions.
   * The default value is false.
   */
  multiSelectable: _propTypes2.default.bool,
  /**
   * Called when a row cell is clicked.
   * rowNumber is the row number and columnId is
   * the column number or the column key.
   */
  onCellClick: _propTypes2.default.func,
  /**
   * Called when a table cell is hovered.
   * rowNumber is the row number of the hovered row
   * and columnId is the column number or the column key of the cell.
   */
  onCellHover: _propTypes2.default.func,
  /**
   * Called when a table cell is no longer hovered.
   * rowNumber is the row number of the row and columnId
   * is the column number or the column key of the cell.
   */
  onCellHoverExit: _propTypes2.default.func,
  /**
   * Called when a table row is hovered.
   * rowNumber is the row number of the hovered row.
   */
  onRowHover: _propTypes2.default.func,
  /**
   * Called when a table row is no longer hovered.
   * rowNumber is the row number of the row that is no longer hovered.
   */
  onRowHoverExit: _propTypes2.default.func,
  /**
   * Called when a row is selected.
   * selectedRows is an array of all row selections.
   * IF all rows have been selected, the string "all"
   * will be returned instead to indicate that all rows have been selected.
   */
  onRowSelection: _propTypes2.default.func,
  /**
   * If true, table rows can be selected.
   * If multiple row selection is desired, enable multiSelectable.
   * The default value is true.
   */
  selectable: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * Override the inline-styles of the table's wrapper element.
   */
  wrapperStyle: _propTypes2.default.object
} : void 0;
exports.default = Table;

/***/ },

/***/ "./node_modules/material-ui/Table/TableBody.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _toConsumableArray2 = __webpack_require__("./node_modules/babel-runtime/helpers/toConsumableArray.js");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Checkbox = __webpack_require__("./node_modules/material-ui/Checkbox/index.js");

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _TableRowColumn = __webpack_require__("./node_modules/material-ui/Table/TableRowColumn.js");

var _TableRowColumn2 = _interopRequireDefault(_TableRowColumn);

var _ClickAwayListener = __webpack_require__("./node_modules/material-ui/internal/ClickAwayListener.js");

var _ClickAwayListener2 = _interopRequireDefault(_ClickAwayListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableBody = function (_Component) {
  (0, _inherits3.default)(TableBody, _Component);

  function TableBody() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TableBody);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TableBody.__proto__ || (0, _getPrototypeOf2.default)(TableBody)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      selectedRows: []
    }, _this.isControlled = false, _this.handleClickAway = function () {
      if (_this.props.deselectOnClickaway && _this.state.selectedRows.length > 0) {
        var selectedRows = [];
        _this.setState({ selectedRows: selectedRows });
        if (_this.props.onRowSelection) {
          _this.props.onRowSelection(selectedRows);
        }
      }
    }, _this.onRowClick = function (event, rowNumber) {
      event.stopPropagation();

      if (_this.props.selectable) {
        // Prevent text selection while selecting rows.
        window.getSelection().removeAllRanges();
        _this.processRowSelection(event, rowNumber);
      }
    }, _this.onCellClick = function (event, rowNumber, columnNumber) {
      event.stopPropagation();
      if (_this.props.onCellClick) {
        _this.props.onCellClick(rowNumber, _this.getColumnId(columnNumber), event);
      }
    }, _this.onCellHover = function (event, rowNumber, columnNumber) {
      if (_this.props.onCellHover) {
        _this.props.onCellHover(rowNumber, _this.getColumnId(columnNumber), event);
      }
      _this.onRowHover(event, rowNumber);
    }, _this.onCellHoverExit = function (event, rowNumber, columnNumber) {
      if (_this.props.onCellHoverExit) {
        _this.props.onCellHoverExit(rowNumber, _this.getColumnId(columnNumber), event);
      }
      _this.onRowHoverExit(event, rowNumber);
    }, _this.onRowHover = function (event, rowNumber) {
      if (_this.props.onRowHover) {
        _this.props.onRowHover(rowNumber);
      }
    }, _this.onRowHoverExit = function (event, rowNumber) {
      if (_this.props.onRowHoverExit) {
        _this.props.onRowHoverExit(rowNumber);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(TableBody, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (this.props.preScanRows) {
        this.setState({
          selectedRows: this.getSelectedRows(this.props)
        });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!this.props.preScanRows) {
        this.setState({ // eslint-disable-line react/no-did-mount-set-state
          selectedRows: this.getSelectedRows(this.props)
        });
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.allRowsSelected !== nextProps.allRowsSelected) {
        if (!nextProps.allRowsSelected) {
          this.setState({
            selectedRows: []
          });
          return;
        }
      }

      this.setState({
        selectedRows: this.getSelectedRows(nextProps)
      });
    }
  }, {
    key: 'createRows',
    value: function createRows() {
      var _this2 = this;

      var numChildren = _react2.default.Children.count(this.props.children);
      var rowNumber = 0;
      var handlers = {
        onCellClick: this.onCellClick,
        onCellHover: this.onCellHover,
        onCellHoverExit: this.onCellHoverExit,
        onRowHover: this.onRowHover,
        onRowHoverExit: this.onRowHoverExit,
        onRowClick: this.onRowClick
      };

      return _react2.default.Children.map(this.props.children, function (child) {
        if (_react2.default.isValidElement(child)) {
          var props = {
            hoverable: _this2.props.showRowHover,
            selected: _this2.isRowSelected(rowNumber),
            striped: _this2.props.stripedRows && rowNumber % 2 === 0,
            rowNumber: rowNumber++
          };

          if (rowNumber === numChildren) {
            props.displayBorder = false;
          }

          var children = [_this2.createRowCheckboxColumn(props)];

          _react2.default.Children.forEach(child.props.children, function (child) {
            children.push(child);
          });

          return _react2.default.cloneElement(child, (0, _extends3.default)({}, props, handlers), children);
        }
      });
    }
  }, {
    key: 'createRowCheckboxColumn',
    value: function createRowCheckboxColumn(rowProps) {
      if (!this.props.displayRowCheckbox) {
        return null;
      }

      var name = rowProps.rowNumber + '-cb';
      var disabled = !this.props.selectable;

      return _react2.default.createElement(
        _TableRowColumn2.default,
        {
          key: name,
          columnNumber: 0,
          style: {
            width: 24,
            cursor: disabled ? 'default' : 'inherit'
          }
        },
        _react2.default.createElement(_Checkbox2.default, {
          name: name,
          value: 'selected',
          disabled: disabled,
          checked: rowProps.selected
        })
      );
    }
  }, {
    key: 'getSelectedRows',
    value: function getSelectedRows(props) {
      var _this3 = this;

      var selectedRows = [];

      if (props.selectable) {
        var index = 0;
        _react2.default.Children.forEach(props.children, function (child) {
          if (_react2.default.isValidElement(child)) {
            if (child.props.selected !== undefined) {
              _this3.isControlled = true;
            }

            if (child.props.selected && (selectedRows.length === 0 || props.multiSelectable)) {
              selectedRows.push(index);
            }

            index++;
          }
        });
      }

      return selectedRows;
    }
  }, {
    key: 'isRowSelected',
    value: function isRowSelected(rowNumber) {
      var _this4 = this;

      if (this.props.allRowsSelected) {
        return true;
      }

      return this.state.selectedRows.some(function (row) {
        if ((typeof row === 'undefined' ? 'undefined' : (0, _typeof3.default)(row)) === 'object') {
          if (_this4.isValueInRange(rowNumber, row)) {
            return true;
          }
        } else {
          if (row === rowNumber) {
            return true;
          }
        }

        return false;
      });
    }
  }, {
    key: 'isValueInRange',
    value: function isValueInRange(value, range) {
      if (!range) return false;

      if (range.start <= value && value <= range.end || range.end <= value && value <= range.start) {
        return true;
      }

      return false;
    }
  }, {
    key: 'processRowSelection',
    value: function processRowSelection(event, rowNumber) {
      var selectedRows = [].concat((0, _toConsumableArray3.default)(this.state.selectedRows));

      if (event.shiftKey && this.props.multiSelectable && selectedRows.length > 0) {
        var lastIndex = selectedRows.length - 1;
        var lastSelection = selectedRows[lastIndex];

        if ((typeof lastSelection === 'undefined' ? 'undefined' : (0, _typeof3.default)(lastSelection)) === 'object') {
          lastSelection.end = rowNumber;
        } else {
          selectedRows.splice(lastIndex, 1, {
            start: lastSelection,
            end: rowNumber
          });
        }
      } else if ((event.ctrlKey && !event.metaKey || event.metaKey && !event.ctrlKey) && this.props.multiSelectable) {
        var idx = selectedRows.indexOf(rowNumber);
        if (idx < 0) {
          var foundRange = false;
          for (var i = 0; i < selectedRows.length; i++) {
            var range = selectedRows[i];
            if ((typeof range === 'undefined' ? 'undefined' : (0, _typeof3.default)(range)) !== 'object') continue;

            if (this.isValueInRange(rowNumber, range)) {
              var _selectedRows;

              foundRange = true;
              var values = this.splitRange(range, rowNumber);
              (_selectedRows = selectedRows).splice.apply(_selectedRows, [i, 1].concat((0, _toConsumableArray3.default)(values)));
            }
          }

          if (!foundRange) selectedRows.push(rowNumber);
        } else {
          selectedRows.splice(idx, 1);
        }
      } else {
        if (selectedRows.length === 1 && selectedRows[0] === rowNumber) {
          selectedRows = [];
        } else {
          selectedRows = [rowNumber];
        }
      }

      if (!this.isControlled) {
        this.setState({ selectedRows: selectedRows });
      }

      if (this.props.onRowSelection) {
        this.props.onRowSelection(this.flattenRanges(selectedRows));
      }
    }
  }, {
    key: 'splitRange',
    value: function splitRange(range, splitPoint) {
      var splitValues = [];
      var startOffset = range.start - splitPoint;
      var endOffset = range.end - splitPoint;

      // Process start half
      splitValues.push.apply(splitValues, (0, _toConsumableArray3.default)(this.genRangeOfValues(splitPoint, startOffset)));

      // Process end half
      splitValues.push.apply(splitValues, (0, _toConsumableArray3.default)(this.genRangeOfValues(splitPoint, endOffset)));

      return splitValues;
    }
  }, {
    key: 'genRangeOfValues',
    value: function genRangeOfValues(start, offset) {
      var values = [];
      var dir = offset > 0 ? -1 : 1; // This forces offset to approach 0 from either direction.
      while (offset !== 0) {
        values.push(start + offset);
        offset += dir;
      }

      return values;
    }
  }, {
    key: 'flattenRanges',
    value: function flattenRanges(selectedRows) {
      var _this5 = this;

      return selectedRows.reduce(function (rows, row) {
        if ((typeof row === 'undefined' ? 'undefined' : (0, _typeof3.default)(row)) === 'object') {
          var values = _this5.genRangeOfValues(row.end, row.start - row.end);
          rows.push.apply(rows, [row.end].concat((0, _toConsumableArray3.default)(values)));
        } else {
          rows.push(row);
        }

        return rows;
      }, []).sort();
    }
  }, {
    key: 'getColumnId',
    value: function getColumnId(columnNumber) {
      var columnId = columnNumber;
      if (this.props.displayRowCheckbox) {
        columnId--;
      }

      return columnId;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          allRowsSelected = _props.allRowsSelected,
          multiSelectable = _props.multiSelectable,
          onCellClick = _props.onCellClick,
          onCellHover = _props.onCellHover,
          onCellHoverExit = _props.onCellHoverExit,
          onRowHover = _props.onRowHover,
          onRowHoverExit = _props.onRowHoverExit,
          onRowSelection = _props.onRowSelection,
          selectable = _props.selectable,
          deselectOnClickaway = _props.deselectOnClickaway,
          showRowHover = _props.showRowHover,
          stripedRows = _props.stripedRows,
          displayRowCheckbox = _props.displayRowCheckbox,
          preScanRows = _props.preScanRows,
          other = (0, _objectWithoutProperties3.default)(_props, ['style', 'allRowsSelected', 'multiSelectable', 'onCellClick', 'onCellHover', 'onCellHoverExit', 'onRowHover', 'onRowHoverExit', 'onRowSelection', 'selectable', 'deselectOnClickaway', 'showRowHover', 'stripedRows', 'displayRowCheckbox', 'preScanRows']);
      var prepareStyles = this.context.muiTheme.prepareStyles;


      return _react2.default.createElement(
        _ClickAwayListener2.default,
        { onClickAway: this.handleClickAway },
        _react2.default.createElement(
          'tbody',
          (0, _extends3.default)({ style: prepareStyles((0, _simpleAssign2.default)({}, style)) }, other),
          this.createRows()
        )
      );
    }
  }]);
  return TableBody;
}(_react.Component);

TableBody.muiName = 'TableBody';
TableBody.defaultProps = {
  allRowsSelected: false,
  deselectOnClickaway: true,
  displayRowCheckbox: true,
  multiSelectable: false,
  preScanRows: true,
  selectable: true,
  style: {}
};
TableBody.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? TableBody.propTypes = {
  /**
   * @ignore
   * Set to true to indicate that all rows should be selected.
   */
  allRowsSelected: _propTypes2.default.bool,
  /**
   * Children passed to table body.
   */
  children: _propTypes2.default.node,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * Controls whether or not to deselect all selected
   * rows after clicking outside the table.
   */
  deselectOnClickaway: _propTypes2.default.bool,
  /**
   * Controls the display of the row checkbox. The default value is true.
   */
  displayRowCheckbox: _propTypes2.default.bool,
  /**
   * @ignore
   * If true, multiple table rows can be selected.
   * CTRL/CMD+Click and SHIFT+Click are valid actions.
   * The default value is false.
   */
  multiSelectable: _propTypes2.default.bool,
  /**
   * @ignore
   * Callback function for when a cell is clicked.
   */
  onCellClick: _propTypes2.default.func,
  /**
   * @ignore
   * Called when a table cell is hovered. rowNumber
   * is the row number of the hovered row and columnId
   * is the column number or the column key of the cell.
   */
  onCellHover: _propTypes2.default.func,
  /**
   * @ignore
   * Called when a table cell is no longer hovered.
   * rowNumber is the row number of the row and columnId
   * is the column number or the column key of the cell.
   */
  onCellHoverExit: _propTypes2.default.func,
  /**
   * @ignore
   * Called when a table row is hovered.
   * rowNumber is the row number of the hovered row.
   */
  onRowHover: _propTypes2.default.func,
  /**
   * @ignore
   * Called when a table row is no longer
   * hovered. rowNumber is the row number of the row
   * that is no longer hovered.
   */
  onRowHoverExit: _propTypes2.default.func,
  /**
   * @ignore
   * Called when a row is selected. selectedRows is an
   * array of all row selections. If all rows have been selected,
   * the string "all" will be returned instead to indicate that
   * all rows have been selected.
   */
  onRowSelection: _propTypes2.default.func,
  /**
   * Controls whether or not the rows are pre-scanned to determine
   * initial state. If your table has a large number of rows and
   * you are experiencing a delay in rendering, turn off this property.
   */
  preScanRows: _propTypes2.default.bool,
  /**
   * @ignore
   * If true, table rows can be selected. If multiple
   * row selection is desired, enable multiSelectable.
   * The default value is true.
   */
  selectable: _propTypes2.default.bool,
  /**
   * If true, table rows will be highlighted when
   * the cursor is hovering over the row. The default
   * value is false.
   */
  showRowHover: _propTypes2.default.bool,
  /**
   * If true, every other table row starting
   * with the first row will be striped. The default value is false.
   */
  stripedRows: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : void 0;
exports.default = TableBody;

/***/ },

/***/ "./node_modules/material-ui/Table/TableFooter.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = __webpack_require__("./node_modules/babel-runtime/helpers/toConsumableArray.js");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TableRowColumn = __webpack_require__("./node_modules/material-ui/Table/TableRowColumn.js");

var _TableRowColumn2 = _interopRequireDefault(_TableRowColumn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var tableFooter = context.muiTheme.tableFooter;


  return {
    cell: {
      borderTop: '1px solid ' + tableFooter.borderColor,
      verticalAlign: 'bottom',
      padding: 20,
      textAlign: 'left',
      whiteSpace: 'nowrap'
    }
  };
}

var TableFooter = function (_Component) {
  (0, _inherits3.default)(TableFooter, _Component);

  function TableFooter() {
    (0, _classCallCheck3.default)(this, TableFooter);
    return (0, _possibleConstructorReturn3.default)(this, (TableFooter.__proto__ || (0, _getPrototypeOf2.default)(TableFooter)).apply(this, arguments));
  }

  (0, _createClass3.default)(TableFooter, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          adjustForCheckbox = _props.adjustForCheckbox,
          children = _props.children,
          className = _props.className,
          style = _props.style,
          other = (0, _objectWithoutProperties3.default)(_props, ['adjustForCheckbox', 'children', 'className', 'style']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      var footerRows = _react2.default.Children.map(children, function (child, rowNumber) {
        var newChildProps = {
          displayBorder: false,
          key: 'f-' + rowNumber,
          rowNumber: rowNumber,
          style: (0, _simpleAssign2.default)({}, styles.cell, child.props.style)
        };

        var newDescendants = void 0;

        if (adjustForCheckbox) {
          newDescendants = [_react2.default.createElement(_TableRowColumn2.default, { key: 'fpcb' + rowNumber, style: { width: 24 } })].concat((0, _toConsumableArray3.default)(_react2.default.Children.toArray(child.props.children)));
        } else {
          newDescendants = child.props.children;
        }

        return _react2.default.cloneElement(child, newChildProps, newDescendants);
      });

      return _react2.default.createElement(
        'tfoot',
        (0, _extends3.default)({ className: className, style: prepareStyles((0, _simpleAssign2.default)({}, style)) }, other),
        footerRows
      );
    }
  }]);
  return TableFooter;
}(_react.Component);

TableFooter.muiName = 'TableFooter';
TableFooter.defaultProps = {
  adjustForCheckbox: true,
  style: {}
};
TableFooter.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? TableFooter.propTypes = {
  /**
   * @ignore
   * Controls whether or not header rows should be adjusted
   * for a checkbox column. If the select all checkbox is true,
   * this property will not influence the number of columns.
   * This is mainly useful for "super header" rows so that
   * the checkbox column does not create an offset that needs
   * to be accounted for manually.
   */
  adjustForCheckbox: _propTypes2.default.bool,
  /**
   * Children passed to table footer.
   */
  children: _propTypes2.default.node,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : void 0;
exports.default = TableFooter;

/***/ },

/***/ "./node_modules/material-ui/Table/TableHeader.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Checkbox = __webpack_require__("./node_modules/material-ui/Checkbox/index.js");

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _TableHeaderColumn = __webpack_require__("./node_modules/material-ui/Table/TableHeaderColumn.js");

var _TableHeaderColumn2 = _interopRequireDefault(_TableHeaderColumn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var tableHeader = context.muiTheme.tableHeader;


  return {
    root: {
      borderBottom: '1px solid ' + tableHeader.borderColor
    }
  };
}

var TableHeader = function (_Component) {
  (0, _inherits3.default)(TableHeader, _Component);

  function TableHeader() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TableHeader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TableHeader.__proto__ || (0, _getPrototypeOf2.default)(TableHeader)).call.apply(_ref, [this].concat(args))), _this), _this.handleCheckAll = function (event, checked) {
      if (_this.props.onSelectAll) {
        _this.props.onSelectAll(checked);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(TableHeader, [{
    key: 'createSuperHeaderRows',
    value: function createSuperHeaderRows() {
      var numChildren = _react2.default.Children.count(this.props.children);
      if (numChildren === 1) return undefined;

      var superHeaders = [];
      for (var index = 0; index < numChildren - 1; index++) {
        var child = this.props.children[index];

        if (!_react2.default.isValidElement(child)) continue;

        var props = {
          key: 'sh' + index,
          rowNumber: index
        };
        superHeaders.push(this.createSuperHeaderRow(child, props));
      }

      if (superHeaders.length) return superHeaders;
    }
  }, {
    key: 'createSuperHeaderRow',
    value: function createSuperHeaderRow(child, props) {
      var children = [];
      if (this.props.adjustForCheckbox) {
        children.push(this.getCheckboxPlaceholder(props));
      }
      _react2.default.Children.forEach(child.props.children, function (child) {
        children.push(child);
      });

      return _react2.default.cloneElement(child, props, children);
    }
  }, {
    key: 'createBaseHeaderRow',
    value: function createBaseHeaderRow() {
      var childrenArray = _react2.default.Children.toArray(this.props.children);
      var numChildren = childrenArray.length;
      if (numChildren < 1) {
        return null;
      }

      var child = childrenArray[numChildren - 1];

      var props = {
        key: 'h' + numChildren,
        rowNumber: numChildren
      };

      var children = [this.getSelectAllCheckboxColumn(props)];
      _react2.default.Children.forEach(child.props.children, function (child) {
        children.push(child);
      });

      return _react2.default.cloneElement(child, props, children);
    }
  }, {
    key: 'getCheckboxPlaceholder',
    value: function getCheckboxPlaceholder(props) {
      if (!this.props.adjustForCheckbox) return null;

      var disabled = !this.props.enableSelectAll;
      var key = 'hpcb' + props.rowNumber;
      return _react2.default.createElement(_TableHeaderColumn2.default, {
        key: key,
        style: {
          width: 24,
          cursor: disabled ? 'default' : 'inherit'
        }
      });
    }
  }, {
    key: 'getSelectAllCheckboxColumn',
    value: function getSelectAllCheckboxColumn(props) {
      if (!this.props.displaySelectAll) return this.getCheckboxPlaceholder(props);

      var disabled = !this.props.enableSelectAll;
      var checkbox = _react2.default.createElement(_Checkbox2.default, {
        key: 'selectallcb',
        name: 'selectallcb',
        value: 'selected',
        disabled: disabled,
        checked: this.props.selectAllSelected,
        onCheck: this.handleCheckAll
      });

      var key = 'hpcb' + props.rowNumber;
      return _react2.default.createElement(
        _TableHeaderColumn2.default,
        {
          key: key,
          style: {
            width: 24,
            cursor: disabled ? 'not-allowed' : 'inherit'
          }
        },
        checkbox
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          style = _props.style;
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);
      var superHeaderRows = this.createSuperHeaderRows();
      var baseHeaderRow = this.createBaseHeaderRow();

      return _react2.default.createElement(
        'thead',
        { className: className, style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) },
        superHeaderRows,
        baseHeaderRow
      );
    }
  }]);
  return TableHeader;
}(_react.Component);

TableHeader.muiName = 'TableHeader';
TableHeader.defaultProps = {
  adjustForCheckbox: true,
  displaySelectAll: true,
  enableSelectAll: true,
  selectAllSelected: false
};
TableHeader.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? TableHeader.propTypes = {
  /**
   * Controls whether or not header rows should be
   * adjusted for a checkbox column. If the select all
   * checkbox is true, this property will not influence
   * the number of columns. This is mainly useful for
   * "super header" rows so that the checkbox column
   * does not create an offset that needs to be accounted
   * for manually.
   */
  adjustForCheckbox: _propTypes2.default.bool,
  /**
   * Children passed to table header.
   */
  children: _propTypes2.default.node,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * Controls whether or not the select all checkbox is displayed.
   */
  displaySelectAll: _propTypes2.default.bool,
  /**
   * If set to true, the select all button will be interactable.
   * If set to false, the button will not be interactable.
   * To hide the checkbox, set displaySelectAll to false.
   */
  enableSelectAll: _propTypes2.default.bool,
  /**
   * @ignore
   * Callback when select all has been checked.
   */
  onSelectAll: _propTypes2.default.func,
  /**
   * @ignore
   * True when select all has been checked.
   */
  selectAllSelected: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : void 0;
exports.default = TableHeader;

/***/ },

/***/ "./node_modules/material-ui/Table/TableHeaderColumn.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Tooltip = __webpack_require__("./node_modules/material-ui/internal/Tooltip.js");

var _Tooltip2 = _interopRequireDefault(_Tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var tableHeaderColumn = context.muiTheme.tableHeaderColumn;


  return {
    root: {
      fontWeight: 'normal',
      fontSize: 12,
      paddingLeft: tableHeaderColumn.spacing,
      paddingRight: tableHeaderColumn.spacing,
      height: tableHeaderColumn.height,
      textAlign: 'left',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      color: tableHeaderColumn.textColor,
      position: 'relative'
    },
    tooltip: {
      boxSizing: 'border-box',
      marginTop: tableHeaderColumn.height / 2
    }
  };
}

var TableHeaderColumn = function (_Component) {
  (0, _inherits3.default)(TableHeaderColumn, _Component);

  function TableHeaderColumn() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TableHeaderColumn);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TableHeaderColumn.__proto__ || (0, _getPrototypeOf2.default)(TableHeaderColumn)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hovered: false
    }, _this.onMouseEnter = function () {
      if (_this.props.tooltip !== undefined) {
        _this.setState({ hovered: true });
      }
    }, _this.onMouseLeave = function () {
      if (_this.props.tooltip !== undefined) {
        _this.setState({ hovered: false });
      }
    }, _this.onClick = function (event) {
      if (_this.props.onClick) {
        _this.props.onClick(event, _this.props.columnNumber);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(TableHeaderColumn, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          columnNumber = _props.columnNumber,
          hoverable = _props.hoverable,
          onClick = _props.onClick,
          onHover = _props.onHover,
          onHoverExit = _props.onHoverExit,
          style = _props.style,
          tooltip = _props.tooltip,
          tooltipStyle = _props.tooltipStyle,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'className', 'columnNumber', 'hoverable', 'onClick', 'onHover', 'onHoverExit', 'style', 'tooltip', 'tooltipStyle']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      var handlers = {
        onMouseEnter: this.onMouseEnter,
        onMouseLeave: this.onMouseLeave,
        onClick: this.onClick
      };

      var tooltipNode = void 0;

      if (tooltip !== undefined) {
        tooltipNode = _react2.default.createElement(_Tooltip2.default, {
          label: tooltip,
          show: this.state.hovered,
          style: (0, _simpleAssign2.default)(styles.tooltip, tooltipStyle)
        });
      }

      return _react2.default.createElement(
        'th',
        (0, _extends3.default)({
          className: className,
          style: prepareStyles((0, _simpleAssign2.default)(styles.root, style))
        }, handlers, other),
        tooltipNode,
        children
      );
    }
  }]);
  return TableHeaderColumn;
}(_react.Component);

TableHeaderColumn.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? TableHeaderColumn.propTypes = {
  children: _propTypes2.default.node,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * Number to identify the header row. This property
   * is automatically populated when used with TableHeader.
   */
  columnNumber: _propTypes2.default.number,
  /**
   * @ignore
   * Not used here but we need to remove it from the root element.
   */
  hoverable: _propTypes2.default.bool,
  /** @ignore */
  onClick: _propTypes2.default.func,
  /**
   * @ignore
   * Not used here but we need to remove it from the root element.
   */
  onHover: _propTypes2.default.func,
  /**
   * @ignore
   * Not used here but we need to remove it from the root element.
   */
  onHoverExit: _propTypes2.default.func,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * The string to supply to the tooltip. If not
   * string is supplied no tooltip will be shown.
   */
  tooltip: _propTypes2.default.string,
  /**
   * Additional styling that can be applied to the tooltip.
   */
  tooltipStyle: _propTypes2.default.object
} : void 0;
exports.default = TableHeaderColumn;

/***/ },

/***/ "./node_modules/material-ui/Table/TableRow.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context, state) {
  var tableRow = context.muiTheme.tableRow;


  var cellBgColor = 'inherit';
  if (props.hovered || state.hovered) {
    cellBgColor = tableRow.hoverColor;
  } else if (props.selected) {
    cellBgColor = tableRow.selectedColor;
  } else if (props.striped) {
    cellBgColor = tableRow.stripeColor;
  }

  return {
    root: {
      borderBottom: props.displayBorder && '1px solid ' + tableRow.borderColor,
      color: tableRow.textColor,
      height: tableRow.height
    },
    cell: {
      backgroundColor: cellBgColor
    }
  };
}

var TableRow = function (_Component) {
  (0, _inherits3.default)(TableRow, _Component);

  function TableRow() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TableRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TableRow.__proto__ || (0, _getPrototypeOf2.default)(TableRow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hovered: false
    }, _this.onCellClick = function (event, columnIndex) {
      if (_this.props.selectable && _this.props.onCellClick) {
        _this.props.onCellClick(event, _this.props.rowNumber, columnIndex);
      }
      event.ctrlKey = true;
      _this.onRowClick(event);
    }, _this.onCellHover = function (event, columnIndex) {
      if (_this.props.hoverable) {
        _this.setState({ hovered: true });
        if (_this.props.onCellHover) _this.props.onCellHover(event, _this.props.rowNumber, columnIndex);
        _this.onRowHover(event);
      }
    }, _this.onCellHoverExit = function (event, columnIndex) {
      if (_this.props.hoverable) {
        _this.setState({ hovered: false });
        if (_this.props.onCellHoverExit) _this.props.onCellHoverExit(event, _this.props.rowNumber, columnIndex);
        _this.onRowHoverExit(event);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(TableRow, [{
    key: 'onRowClick',
    value: function onRowClick(event) {
      if (this.props.selectable && this.props.onRowClick) {
        this.props.onRowClick(event, this.props.rowNumber);
      }
    }
  }, {
    key: 'onRowHover',
    value: function onRowHover(event) {
      if (this.props.onRowHover) {
        this.props.onRowHover(event, this.props.rowNumber);
      }
    }
  }, {
    key: 'onRowHoverExit',
    value: function onRowHoverExit(event) {
      if (this.props.onRowHoverExit) {
        this.props.onRowHoverExit(event, this.props.rowNumber);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          displayBorder = _props.displayBorder,
          hoverable = _props.hoverable,
          hovered = _props.hovered,
          onCellClick = _props.onCellClick,
          onCellHover = _props.onCellHover,
          onCellHoverExit = _props.onCellHoverExit,
          onRowClick = _props.onRowClick,
          onRowHover = _props.onRowHover,
          onRowHoverExit = _props.onRowHoverExit,
          rowNumber = _props.rowNumber,
          selectable = _props.selectable,
          selected = _props.selected,
          striped = _props.striped,
          style = _props.style,
          other = (0, _objectWithoutProperties3.default)(_props, ['className', 'displayBorder', 'hoverable', 'hovered', 'onCellClick', 'onCellHover', 'onCellHoverExit', 'onRowClick', 'onRowHover', 'onRowHoverExit', 'rowNumber', 'selectable', 'selected', 'striped', 'style']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context, this.state);

      var rowColumns = _react2.default.Children.map(this.props.children, function (child, columnNumber) {
        if (_react2.default.isValidElement(child)) {
          return _react2.default.cloneElement(child, {
            columnNumber: columnNumber,
            hoverable: _this2.props.hoverable,
            key: _this2.props.rowNumber + '-' + columnNumber,
            onClick: _this2.onCellClick,
            onHover: _this2.onCellHover,
            onHoverExit: _this2.onCellHoverExit,
            style: (0, _simpleAssign2.default)({}, styles.cell, child.props.style)
          });
        }
      });

      return _react2.default.createElement(
        'tr',
        (0, _extends3.default)({
          className: className,
          style: prepareStyles((0, _simpleAssign2.default)(styles.root, style))
        }, other),
        rowColumns
      );
    }
  }]);
  return TableRow;
}(_react.Component);

TableRow.defaultProps = {
  displayBorder: true,
  hoverable: false,
  hovered: false,
  selectable: true,
  striped: false
};
TableRow.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? TableRow.propTypes = {
  /**
   * Children passed to table row.
   */
  children: _propTypes2.default.node,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * If true, row border will be displayed for the row.
   * If false, no border will be drawn.
   */
  displayBorder: _propTypes2.default.bool,
  /**
   * Controls whether or not the row responds to hover events.
   */
  hoverable: _propTypes2.default.bool,
  /**
   * Controls whether or not the row should be rendered as being
   * hovered. This property is evaluated in addition to this.state.hovered
   * and can be used to synchronize the hovered state with some other
   * external events.
   */
  hovered: _propTypes2.default.bool,
  /**
   * @ignore
   * Called when a row cell is clicked.
   * rowNumber is the row number and columnId is
   * the column number or the column key.
   */
  onCellClick: _propTypes2.default.func,
  /**
   * @ignore
   * Called when a table cell is hovered.
   * rowNumber is the row number of the hovered row
   * and columnId is the column number or the column key of the cell.
   */
  onCellHover: _propTypes2.default.func,
  /**
   * @ignore
   * Called when a table cell is no longer hovered.
   * rowNumber is the row number of the row and columnId
   * is the column number or the column key of the cell.
   */
  onCellHoverExit: _propTypes2.default.func,
  /**
   * @ignore
   * Called when row is clicked.
   */
  onRowClick: _propTypes2.default.func,
  /**
   * @ignore
   * Called when a table row is hovered.
   * rowNumber is the row number of the hovered row.
   */
  onRowHover: _propTypes2.default.func,
  /**
   * @ignore
   * Called when a table row is no longer hovered.
   * rowNumber is the row number of the row that is no longer hovered.
   */
  onRowHoverExit: _propTypes2.default.func,
  /**
   * Number to identify the row. This property is
   * automatically populated when used with the TableBody component.
   */
  rowNumber: _propTypes2.default.number,
  /**
   * If true, table rows can be selected. If multiple row
   * selection is desired, enable multiSelectable.
   * The default value is true.
   */
  selectable: _propTypes2.default.bool,
  /**
   * Indicates that a particular row is selected.
   * This property can be used to programmatically select rows.
   */
  selected: _propTypes2.default.bool,
  /**
   * Indicates whether or not the row is striped.
   */
  striped: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : void 0;
exports.default = TableRow;

/***/ },

/***/ "./node_modules/material-ui/Table/TableRowColumn.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var tableRowColumn = context.muiTheme.tableRowColumn;


  var styles = {
    root: {
      paddingLeft: tableRowColumn.spacing,
      paddingRight: tableRowColumn.spacing,
      height: tableRowColumn.height,
      textAlign: 'left',
      fontSize: 13,
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis'
    }
  };

  if (_react2.default.Children.count(props.children) === 1 && !isNaN(props.children)) {
    styles.textAlign = 'right';
  }

  return styles;
}

var TableRowColumn = function (_Component) {
  (0, _inherits3.default)(TableRowColumn, _Component);

  function TableRowColumn() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TableRowColumn);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TableRowColumn.__proto__ || (0, _getPrototypeOf2.default)(TableRowColumn)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hovered: false
    }, _this.onClick = function (event) {
      if (_this.props.onClick) {
        _this.props.onClick(event, _this.props.columnNumber);
      }
    }, _this.onMouseEnter = function (event) {
      if (_this.props.hoverable) {
        _this.setState({ hovered: true });
        if (_this.props.onHover) {
          _this.props.onHover(event, _this.props.columnNumber);
        }
      }
    }, _this.onMouseLeave = function (event) {
      if (_this.props.hoverable) {
        _this.setState({ hovered: false });
        if (_this.props.onHoverExit) {
          _this.props.onHoverExit(event, _this.props.columnNumber);
        }
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(TableRowColumn, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          columnNumber = _props.columnNumber,
          hoverable = _props.hoverable,
          onClick = _props.onClick,
          onHover = _props.onHover,
          onHoverExit = _props.onHoverExit,
          style = _props.style,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'className', 'columnNumber', 'hoverable', 'onClick', 'onHover', 'onHoverExit', 'style']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      var handlers = {
        onClick: this.onClick,
        onMouseEnter: this.onMouseEnter,
        onMouseLeave: this.onMouseLeave
      };

      return _react2.default.createElement(
        'td',
        (0, _extends3.default)({
          className: className,
          style: prepareStyles((0, _simpleAssign2.default)(styles.root, style))
        }, handlers, other),
        children
      );
    }
  }]);
  return TableRowColumn;
}(_react.Component);

TableRowColumn.defaultProps = {
  hoverable: false
};
TableRowColumn.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? TableRowColumn.propTypes = {
  children: _propTypes2.default.node,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * @ignore
   * Number to identify the header row. This property
   * is automatically populated when used with TableHeader.
   */
  columnNumber: _propTypes2.default.number,
  /**
   * @ignore
   * If true, this column responds to hover events.
   */
  hoverable: _propTypes2.default.bool,
  /** @ignore */
  onClick: _propTypes2.default.func,
  /** @ignore */
  onHover: _propTypes2.default.func,
  /**
   * @ignore
   * Callback function for hover exit event.
   */
  onHoverExit: _propTypes2.default.func,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : void 0;
exports.default = TableRowColumn;

/***/ },

/***/ "./node_modules/material-ui/Table/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TableRowColumn = exports.TableRow = exports.TableHeaderColumn = exports.TableHeader = exports.TableFooter = exports.TableBody = exports.Table = undefined;

var _Table2 = __webpack_require__("./node_modules/material-ui/Table/Table.js");

var _Table3 = _interopRequireDefault(_Table2);

var _TableBody2 = __webpack_require__("./node_modules/material-ui/Table/TableBody.js");

var _TableBody3 = _interopRequireDefault(_TableBody2);

var _TableFooter2 = __webpack_require__("./node_modules/material-ui/Table/TableFooter.js");

var _TableFooter3 = _interopRequireDefault(_TableFooter2);

var _TableHeader2 = __webpack_require__("./node_modules/material-ui/Table/TableHeader.js");

var _TableHeader3 = _interopRequireDefault(_TableHeader2);

var _TableHeaderColumn2 = __webpack_require__("./node_modules/material-ui/Table/TableHeaderColumn.js");

var _TableHeaderColumn3 = _interopRequireDefault(_TableHeaderColumn2);

var _TableRow2 = __webpack_require__("./node_modules/material-ui/Table/TableRow.js");

var _TableRow3 = _interopRequireDefault(_TableRow2);

var _TableRowColumn2 = __webpack_require__("./node_modules/material-ui/Table/TableRowColumn.js");

var _TableRowColumn3 = _interopRequireDefault(_TableRowColumn2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Table = _Table3.default;
exports.TableBody = _TableBody3.default;
exports.TableFooter = _TableFooter3.default;
exports.TableHeader = _TableHeader3.default;
exports.TableHeaderColumn = _TableHeaderColumn3.default;
exports.TableRow = _TableRow3.default;
exports.TableRowColumn = _TableRowColumn3.default;
exports.default = _Table3.default;

/***/ },

/***/ "./node_modules/material-ui/Tabs/InkBar.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__("./node_modules/material-ui/styles/transitions.js");

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var _context$muiTheme = context.muiTheme,
      inkBar = _context$muiTheme.inkBar,
      isRtl = _context$muiTheme.isRtl;


  return {
    root: {
      left: props.left,
      width: props.width,
      bottom: 0,
      display: 'block',
      backgroundColor: props.color || inkBar.backgroundColor,
      height: 2,
      marginTop: -2,
      position: 'relative',
      transition: _transitions2.default.easeOut('1s', isRtl ? 'right' : 'left')
    }
  };
}

var InkBar = function (_Component) {
  (0, _inherits3.default)(InkBar, _Component);

  function InkBar() {
    (0, _classCallCheck3.default)(this, InkBar);
    return (0, _possibleConstructorReturn3.default)(this, (InkBar.__proto__ || (0, _getPrototypeOf2.default)(InkBar)).apply(this, arguments));
  }

  (0, _createClass3.default)(InkBar, [{
    key: 'render',
    value: function render() {
      var style = this.props.style;
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      return _react2.default.createElement('div', { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) });
    }
  }]);
  return InkBar;
}(_react.Component);

InkBar.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? InkBar.propTypes = {
  color: _propTypes2.default.string,
  left: _propTypes2.default.string.isRequired,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  width: _propTypes2.default.string.isRequired
} : void 0;
exports.default = InkBar;

/***/ },

/***/ "./node_modules/material-ui/Tabs/Tab.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _EnhancedButton = __webpack_require__("./node_modules/material-ui/internal/EnhancedButton.js");

var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var tabs = context.muiTheme.tabs;


  return {
    root: {
      color: props.selected ? tabs.selectedTextColor : tabs.textColor,
      fontWeight: 500,
      fontSize: 14,
      width: props.width,
      textTransform: 'uppercase',
      padding: 0
    },
    button: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: props.label && props.icon ? 72 : 48
    }
  };
}

var Tab = function (_Component) {
  (0, _inherits3.default)(Tab, _Component);

  function Tab() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Tab);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Tab.__proto__ || (0, _getPrototypeOf2.default)(Tab)).call.apply(_ref, [this].concat(args))), _this), _this.handleTouchTap = function (event) {
      if (_this.props.onTouchTap) {
        _this.props.onTouchTap(_this.props.value, event, _this);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Tab, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          icon = _props.icon,
          index = _props.index,
          onActive = _props.onActive,
          onTouchTap = _props.onTouchTap,
          selected = _props.selected,
          label = _props.label,
          buttonStyle = _props.buttonStyle,
          style = _props.style,
          value = _props.value,
          width = _props.width,
          other = (0, _objectWithoutProperties3.default)(_props, ['icon', 'index', 'onActive', 'onTouchTap', 'selected', 'label', 'buttonStyle', 'style', 'value', 'width']);


      var styles = getStyles(this.props, this.context);

      var iconElement = void 0;
      if (icon && _react2.default.isValidElement(icon)) {
        var iconProps = {
          style: {
            fontSize: 24,
            color: styles.root.color,
            marginBottom: label ? 5 : 0
          }
        };
        // If it's svg icon set color via props
        if (icon.type.muiName !== 'FontIcon') {
          iconProps.color = styles.root.color;
        }
        iconElement = _react2.default.cloneElement(icon, iconProps);
      }

      var rippleOpacity = 0.3;
      var rippleColor = this.context.muiTheme.tabs.selectedTextColor;

      return _react2.default.createElement(
        _EnhancedButton2.default,
        (0, _extends3.default)({}, other, {
          style: (0, _simpleAssign2.default)(styles.root, style),
          focusRippleColor: rippleColor,
          touchRippleColor: rippleColor,
          focusRippleOpacity: rippleOpacity,
          touchRippleOpacity: rippleOpacity,
          onTouchTap: this.handleTouchTap
        }),
        _react2.default.createElement(
          'div',
          { style: (0, _simpleAssign2.default)(styles.button, buttonStyle) },
          iconElement,
          label
        )
      );
    }
  }]);
  return Tab;
}(_react.Component);

Tab.muiName = 'Tab';
Tab.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? Tab.propTypes = {
  /**
   * Override the inline-styles of the button element.
   */
  buttonStyle: _propTypes2.default.object,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * Sets the icon of the tab, you can pass `FontIcon` or `SvgIcon` elements.
   */
  icon: _propTypes2.default.node,
  /**
   * @ignore
   */
  index: _propTypes2.default.any,
  /**
   * Sets the text value of the tab item to the string specified.
   */
  label: _propTypes2.default.node,
  /**
   * Fired when the active tab changes by touch or tap.
   * Use this event to specify any functionality when an active tab changes.
   * For example - we are using this to route to home when the third tab becomes active.
   * This function will always recieve the active tab as it\'s first argument.
   */
  onActive: _propTypes2.default.func,
  /**
   * @ignore
   * This property is overriden by the Tabs component.
   */
  onTouchTap: _propTypes2.default.func,
  /**
   * @ignore
   * Defines if the current tab is selected or not.
   * The Tabs component is responsible for setting this property.
   */
  selected: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * If value prop passed to Tabs component, this value prop is also required.
   * It assigns a value to the tab so that it can be selected by the Tabs.
   */
  value: _propTypes2.default.any,
  /**
   * @ignore
   * This property is overriden by the Tabs component.
   */
  width: _propTypes2.default.string
} : void 0;
exports.default = Tab;

/***/ },

/***/ "./node_modules/material-ui/Tabs/TabTemplate.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  width: '100%',
  position: 'relative',
  textAlign: 'initial'
};

var TabTemplate = function TabTemplate(_ref) {
  var children = _ref.children,
      selected = _ref.selected,
      style = _ref.style;

  var templateStyle = (0, _simpleAssign2.default)({}, styles, style);
  if (!selected) {
    templateStyle.height = 0;
    templateStyle.overflow = 'hidden';
  }

  return _react2.default.createElement(
    'div',
    { style: templateStyle },
    children
  );
};

undefined !== "production" ? TabTemplate.propTypes = {
  children: _propTypes2.default.node,
  selected: _propTypes2.default.bool,
  style: _propTypes2.default.object
} : void 0;

exports.default = TabTemplate;

/***/ },

/***/ "./node_modules/material-ui/Tabs/Tabs.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = __webpack_require__("./node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

var _TabTemplate = __webpack_require__("./node_modules/material-ui/Tabs/TabTemplate.js");

var _TabTemplate2 = _interopRequireDefault(_TabTemplate);

var _InkBar = __webpack_require__("./node_modules/material-ui/Tabs/InkBar.js");

var _InkBar2 = _interopRequireDefault(_InkBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var tabs = context.muiTheme.tabs;


  return {
    tabItemContainer: {
      width: '100%',
      backgroundColor: tabs.backgroundColor,
      whiteSpace: 'nowrap',
      display: 'flex'
    }
  };
}

var Tabs = function (_Component) {
  (0, _inherits3.default)(Tabs, _Component);

  function Tabs() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Tabs);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Tabs.__proto__ || (0, _getPrototypeOf2.default)(Tabs)).call.apply(_ref, [this].concat(args))), _this), _this.state = { selectedIndex: 0 }, _this.handleTabTouchTap = function (value, event, tab) {
      var valueLink = _this.getValueLink(_this.props);
      var index = tab.props.index;

      if (valueLink.value && valueLink.value !== value || _this.state.selectedIndex !== index) {
        valueLink.requestChange(value, event, tab);
      }

      _this.setState({ selectedIndex: index });

      if (tab.props.onActive) {
        tab.props.onActive(tab);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Tabs, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var valueLink = this.getValueLink(this.props);
      var initialIndex = this.props.initialSelectedIndex;

      this.setState({
        selectedIndex: valueLink.value !== undefined ? this.getSelectedIndex(this.props) : initialIndex < this.getTabCount() ? initialIndex : 0
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps, nextContext) {
      var valueLink = this.getValueLink(newProps);
      var newState = {
        muiTheme: nextContext.muiTheme || this.context.muiTheme
      };

      if (valueLink.value !== undefined) {
        newState.selectedIndex = this.getSelectedIndex(newProps);
      }

      this.setState(newState);
    }
  }, {
    key: 'getTabs',
    value: function getTabs() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

      var tabs = [];

      _react.Children.forEach(props.children, function (tab) {
        if ((0, _react.isValidElement)(tab)) {
          tabs.push(tab);
        }
      });

      return tabs;
    }
  }, {
    key: 'getTabCount',
    value: function getTabCount() {
      return this.getTabs().length;
    }

    // Do not use outside of this component, it will be removed once valueLink is deprecated

  }, {
    key: 'getValueLink',
    value: function getValueLink(props) {
      return props.valueLink || {
        value: props.value,
        requestChange: props.onChange
      };
    }
  }, {
    key: 'getSelectedIndex',
    value: function getSelectedIndex(props) {
      var valueLink = this.getValueLink(props);
      var selectedIndex = -1;

      this.getTabs(props).forEach(function (tab, index) {
        if (valueLink.value === tab.props.value) {
          selectedIndex = index;
        }
      });

      return selectedIndex;
    }
  }, {
    key: 'getSelected',
    value: function getSelected(tab, index) {
      var valueLink = this.getValueLink(this.props);
      return valueLink.value ? valueLink.value === tab.props.value : this.state.selectedIndex === index;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          contentContainerClassName = _props.contentContainerClassName,
          contentContainerStyle = _props.contentContainerStyle,
          initialSelectedIndex = _props.initialSelectedIndex,
          inkBarStyle = _props.inkBarStyle,
          onChange = _props.onChange,
          style = _props.style,
          tabItemContainerStyle = _props.tabItemContainerStyle,
          tabTemplate = _props.tabTemplate,
          tabTemplateStyle = _props.tabTemplateStyle,
          other = (0, _objectWithoutProperties3.default)(_props, ['contentContainerClassName', 'contentContainerStyle', 'initialSelectedIndex', 'inkBarStyle', 'onChange', 'style', 'tabItemContainerStyle', 'tabTemplate', 'tabTemplateStyle']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);
      var valueLink = this.getValueLink(this.props);
      var tabValue = valueLink.value;
      var tabContent = [];
      var width = 100 / this.getTabCount();

      var tabs = this.getTabs().map(function (tab, index) {
        undefined !== "production" ? (0, _warning2.default)(tab.type && tab.type.muiName === 'Tab', 'Material-UI: Tabs only accepts Tab Components as children.\n        Found ' + (tab.type.muiName || tab.type) + ' as child number ' + (index + 1) + ' of Tabs') : void 0;

        undefined !== "production" ? (0, _warning2.default)(!tabValue || tab.props.value !== undefined, 'Material-UI: Tabs value prop has been passed, but Tab ' + index + '\n        does not have a value prop. Needs value if Tabs is going\n        to be a controlled component.') : void 0;

        tabContent.push(tab.props.children ? (0, _react.createElement)(tabTemplate || _TabTemplate2.default, {
          key: index,
          selected: _this2.getSelected(tab, index),
          style: tabTemplateStyle
        }, tab.props.children) : undefined);

        return (0, _react.cloneElement)(tab, {
          key: index,
          index: index,
          selected: _this2.getSelected(tab, index),
          width: width + '%',
          onTouchTap: _this2.handleTabTouchTap
        });
      });

      var inkBar = this.state.selectedIndex !== -1 ? _react2.default.createElement(_InkBar2.default, {
        left: width * this.state.selectedIndex + '%',
        width: width + '%',
        style: inkBarStyle
      }) : null;

      var inkBarContainerWidth = tabItemContainerStyle ? tabItemContainerStyle.width : '100%';

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ style: prepareStyles((0, _simpleAssign2.default)({}, style)) }, other),
        _react2.default.createElement(
          'div',
          { style: prepareStyles((0, _simpleAssign2.default)(styles.tabItemContainer, tabItemContainerStyle)) },
          tabs
        ),
        _react2.default.createElement(
          'div',
          { style: { width: inkBarContainerWidth } },
          inkBar
        ),
        _react2.default.createElement(
          'div',
          {
            style: prepareStyles((0, _simpleAssign2.default)({}, contentContainerStyle)),
            className: contentContainerClassName
          },
          tabContent
        )
      );
    }
  }]);
  return Tabs;
}(_react.Component);

Tabs.defaultProps = {
  initialSelectedIndex: 0,
  onChange: function onChange() {}
};
Tabs.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? Tabs.propTypes = {
  /**
   * Should be used to pass `Tab` components.
   */
  children: _propTypes2.default.node,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * The css class name of the content's container.
   */
  contentContainerClassName: _propTypes2.default.string,
  /**
   * Override the inline-styles of the content's container.
   */
  contentContainerStyle: _propTypes2.default.object,
  /**
   * Specify initial visible tab index.
   * If `initialSelectedIndex` is set but larger than the total amount of specified tabs,
   * `initialSelectedIndex` will revert back to default.
   * If `initialSelectedIndex` is set to any negative value, no tab will be selected intially.
   */
  initialSelectedIndex: _propTypes2.default.number,
  /**
   * Override the inline-styles of the InkBar.
   */
  inkBarStyle: _propTypes2.default.object,
  /**
   * Called when the selected value change.
   */
  onChange: _propTypes2.default.func,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * Override the inline-styles of the tab-labels container.
   */
  tabItemContainerStyle: _propTypes2.default.object,
  /**
   * Override the default tab template used to wrap the content of each tab element.
   */
  tabTemplate: _propTypes2.default.func,
  /**
   * Override the inline-styles of the tab template.
   */
  tabTemplateStyle: _propTypes2.default.object,
  /**
   * Makes Tabs controllable and selects the tab whose value prop matches this prop.
   */
  value: _propTypes2.default.any
} : void 0;
exports.default = Tabs;

/***/ },

/***/ "./node_modules/material-ui/Tabs/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Tabs = exports.Tab = undefined;

var _Tab2 = __webpack_require__("./node_modules/material-ui/Tabs/Tab.js");

var _Tab3 = _interopRequireDefault(_Tab2);

var _Tabs2 = __webpack_require__("./node_modules/material-ui/Tabs/Tabs.js");

var _Tabs3 = _interopRequireDefault(_Tabs2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Tab = _Tab3.default;
exports.Tabs = _Tabs3.default;
exports.default = _Tabs3.default;

/***/ },

/***/ "./node_modules/material-ui/TextField/EnhancedTextarea.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactEventListener = __webpack_require__("./node_modules/react-event-listener/lib/index.js");

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rowsHeight = 24;

function getStyles(props, context, state) {
  return {
    root: {
      position: 'relative' },
    textarea: {
      height: state.height,
      width: '100%',
      resize: 'none',
      font: 'inherit',
      padding: 0,
      cursor: 'inherit'
    },
    shadow: {
      resize: 'none',
      // Overflow also needed to here to remove the extra row
      // added to textareas in Firefox.
      overflow: 'hidden',
      // Visibility needed to hide the extra text area on ipads
      visibility: 'hidden',
      position: 'absolute',
      height: 'auto'
    }
  };
}

var EnhancedTextarea = function (_Component) {
  (0, _inherits3.default)(EnhancedTextarea, _Component);

  function EnhancedTextarea() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, EnhancedTextarea);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = EnhancedTextarea.__proto__ || (0, _getPrototypeOf2.default)(EnhancedTextarea)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      height: null
    }, _this.handleResize = function (event) {
      _this.syncHeightWithShadow(undefined, event);
    }, _this.handleChange = function (event) {
      _this.syncHeightWithShadow(event.target.value);

      if (_this.props.hasOwnProperty('valueLink')) {
        _this.props.valueLink.requestChange(event.target.value);
      }

      if (_this.props.onChange) {
        _this.props.onChange(event);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(EnhancedTextarea, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({
        height: this.props.rows * rowsHeight
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.syncHeightWithShadow();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.value !== this.props.value || nextProps.rowsMax !== this.props.rowsMax) {
        this.syncHeightWithShadow(nextProps.value, null, nextProps);
      }
    }
  }, {
    key: 'getInputNode',
    value: function getInputNode() {
      return this.refs.input;
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      this.getInputNode().value = value;
      this.syncHeightWithShadow(value);
    }
  }, {
    key: 'syncHeightWithShadow',
    value: function syncHeightWithShadow(newValue, event, props) {
      var shadow = this.refs.shadow;
      var displayText = this.props.hintText && (newValue === '' || newValue === undefined || newValue === null) ? this.props.hintText : newValue;

      if (displayText !== undefined) {
        shadow.value = displayText;
      }

      var newHeight = shadow.scrollHeight;

      // Guarding for jsdom, where scrollHeight isn't present.
      // See https://github.com/tmpvar/jsdom/issues/1013
      if (newHeight === undefined) return;

      props = props || this.props;

      if (props.rowsMax >= props.rows) {
        newHeight = Math.min(props.rowsMax * rowsHeight, newHeight);
      }

      newHeight = Math.max(newHeight, rowsHeight);

      if (this.state.height !== newHeight) {
        this.setState({
          height: newHeight
        });

        if (props.onHeightChange) {
          props.onHeightChange(event, newHeight);
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          onChange = _props.onChange,
          onHeightChange = _props.onHeightChange,
          rows = _props.rows,
          rowsMax = _props.rowsMax,
          shadowStyle = _props.shadowStyle,
          style = _props.style,
          hintText = _props.hintText,
          textareaStyle = _props.textareaStyle,
          valueLink = _props.valueLink,
          other = (0, _objectWithoutProperties3.default)(_props, ['onChange', 'onHeightChange', 'rows', 'rowsMax', 'shadowStyle', 'style', 'hintText', 'textareaStyle', 'valueLink']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context, this.state);
      var rootStyles = (0, _simpleAssign2.default)(styles.root, style);
      var textareaStyles = (0, _simpleAssign2.default)(styles.textarea, textareaStyle);
      var shadowStyles = (0, _simpleAssign2.default)({}, textareaStyles, styles.shadow, shadowStyle);

      if (this.props.hasOwnProperty('valueLink')) {
        other.value = this.props.valueLink.value;
      }

      return _react2.default.createElement(
        'div',
        { style: prepareStyles(rootStyles) },
        _react2.default.createElement(_reactEventListener2.default, { target: 'window', onResize: this.handleResize }),
        _react2.default.createElement('textarea', {
          ref: 'shadow',
          style: prepareStyles(shadowStyles),
          tabIndex: '-1',
          rows: this.props.rows,
          defaultValue: this.props.defaultValue,
          readOnly: true,
          value: this.props.value,
          valueLink: this.props.valueLink
        }),
        _react2.default.createElement('textarea', (0, _extends3.default)({}, other, {
          ref: 'input',
          rows: this.props.rows,
          style: prepareStyles(textareaStyles),
          onChange: this.handleChange
        }))
      );
    }
  }]);
  return EnhancedTextarea;
}(_react.Component);

EnhancedTextarea.defaultProps = {
  rows: 1
};
EnhancedTextarea.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? EnhancedTextarea.propTypes = {
  defaultValue: _propTypes2.default.any,
  disabled: _propTypes2.default.bool,
  hintText: _propTypes2.default.node,
  onChange: _propTypes2.default.func,
  onHeightChange: _propTypes2.default.func,
  rows: _propTypes2.default.number,
  rowsMax: _propTypes2.default.number,
  shadowStyle: _propTypes2.default.object,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  textareaStyle: _propTypes2.default.object,
  value: _propTypes2.default.string,
  valueLink: _propTypes2.default.object
} : void 0;
exports.default = EnhancedTextarea;

/***/ },

/***/ "./node_modules/material-ui/TextField/TextField.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__("./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _shallowEqual = __webpack_require__("./node_modules/recompose/shallowEqual.js");

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _transitions = __webpack_require__("./node_modules/material-ui/styles/transitions.js");

var _transitions2 = _interopRequireDefault(_transitions);

var _EnhancedTextarea = __webpack_require__("./node_modules/material-ui/TextField/EnhancedTextarea.js");

var _EnhancedTextarea2 = _interopRequireDefault(_EnhancedTextarea);

var _TextFieldHint = __webpack_require__("./node_modules/material-ui/TextField/TextFieldHint.js");

var _TextFieldHint2 = _interopRequireDefault(_TextFieldHint);

var _TextFieldLabel = __webpack_require__("./node_modules/material-ui/TextField/TextFieldLabel.js");

var _TextFieldLabel2 = _interopRequireDefault(_TextFieldLabel);

var _TextFieldUnderline = __webpack_require__("./node_modules/material-ui/TextField/TextFieldUnderline.js");

var _TextFieldUnderline2 = _interopRequireDefault(_TextFieldUnderline);

var _warning = __webpack_require__("./node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getStyles = function getStyles(props, context, state) {
  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      _context$muiTheme$tex = _context$muiTheme.textField,
      floatingLabelColor = _context$muiTheme$tex.floatingLabelColor,
      focusColor = _context$muiTheme$tex.focusColor,
      textColor = _context$muiTheme$tex.textColor,
      disabledTextColor = _context$muiTheme$tex.disabledTextColor,
      backgroundColor = _context$muiTheme$tex.backgroundColor,
      errorColor = _context$muiTheme$tex.errorColor;


  var styles = {
    root: {
      fontSize: 16,
      lineHeight: '24px',
      width: props.fullWidth ? '100%' : 256,
      height: (props.rows - 1) * 24 + (props.floatingLabelText ? 72 : 48),
      display: 'inline-block',
      position: 'relative',
      backgroundColor: backgroundColor,
      fontFamily: baseTheme.fontFamily,
      transition: _transitions2.default.easeOut('200ms', 'height'),
      cursor: props.disabled ? 'not-allowed' : 'auto'
    },
    error: {
      position: 'relative',
      bottom: 2,
      fontSize: 12,
      lineHeight: '12px',
      color: errorColor,
      transition: _transitions2.default.easeOut()
    },
    floatingLabel: {
      color: props.disabled ? disabledTextColor : floatingLabelColor,
      pointerEvents: 'none'
    },
    input: {
      padding: 0,
      position: 'relative',
      width: '100%',
      border: 'none',
      outline: 'none',
      backgroundColor: 'rgba(0,0,0,0)',
      color: props.disabled ? disabledTextColor : textColor,
      cursor: 'inherit',
      font: 'inherit',
      WebkitTapHighlightColor: 'rgba(0,0,0,0)' },
    inputNative: {
      appearance: 'textfield' }
  };

  styles.textarea = (0, _simpleAssign2.default)({}, styles.input, {
    marginTop: props.floatingLabelText ? 36 : 12,
    marginBottom: props.floatingLabelText ? -36 : -12,
    boxSizing: 'border-box',
    font: 'inherit'
  });

  // Do not assign a height to the textarea as he handles it on his own.
  styles.input.height = '100%';

  if (state.isFocused) {
    styles.floatingLabel.color = focusColor;
  }

  if (props.floatingLabelText) {
    styles.input.boxSizing = 'border-box';

    if (!props.multiLine) {
      styles.input.marginTop = 14;
    }

    if (state.errorText) {
      styles.error.bottom = !props.multiLine ? styles.error.fontSize + 3 : 3;
    }
  }

  if (state.errorText) {
    if (state.isFocused) {
      styles.floatingLabel.color = styles.error.color;
    }
  }

  return styles;
};

/**
 * Check if a value is valid to be displayed inside an input.
 *
 * @param The value to check.
 * @returns True if the string provided is valid, false otherwise.
 */
function isValid(value) {
  return value !== '' && value !== undefined && value !== null && !(Array.isArray(value) && value.length === 0);
}

var TextField = function (_Component) {
  (0, _inherits3.default)(TextField, _Component);

  function TextField() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TextField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TextField.__proto__ || (0, _getPrototypeOf2.default)(TextField)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isFocused: false,
      errorText: undefined,
      hasValue: false
    }, _this.handleInputBlur = function (event) {
      _this.setState({ isFocused: false });
      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }
    }, _this.handleInputChange = function (event) {
      if (!_this.props.hasOwnProperty('value')) {
        _this.setState({ hasValue: isValid(event.target.value) });
      }
      if (_this.props.onChange) {
        _this.props.onChange(event, event.target.value);
      }
    }, _this.handleInputFocus = function (event) {
      if (_this.props.disabled) {
        return;
      }
      _this.setState({ isFocused: true });
      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }
    }, _this.handleHeightChange = function (event, height) {
      var newHeight = height + 24;
      if (_this.props.floatingLabelText) {
        newHeight += 24;
      }
      _reactDom2.default.findDOMNode(_this).style.height = newHeight + 'px';
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(TextField, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          children = _props.children,
          name = _props.name,
          hintText = _props.hintText,
          floatingLabelText = _props.floatingLabelText,
          id = _props.id;


      var propsLeaf = children ? children.props : this.props;

      this.setState({
        errorText: this.props.errorText,
        hasValue: isValid(propsLeaf.value) || isValid(propsLeaf.defaultValue)
      });

      undefined !== "production" ? (0, _warning2.default)(name || hintText || floatingLabelText || id, 'Material-UI: We don\'t have enough information\n      to build a robust unique id for the TextField component. Please provide an id or a name.') : void 0;

      var uniqueId = name + '-' + hintText + '-' + floatingLabelText + '-' + Math.floor(Math.random() * 0xFFFF);
      this.uniqueId = uniqueId.replace(/[^A-Za-z0-9-]/gi, '');
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.errorText !== this.props.errorText) {
        this.setState({
          errorText: nextProps.errorText
        });
      }

      if (nextProps.children && nextProps.children.props) {
        nextProps = nextProps.children.props;
      }

      if (nextProps.hasOwnProperty('value')) {
        var hasValue = isValid(nextProps.value);

        this.setState({
          hasValue: hasValue
        });
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
      return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState) || !(0, _shallowEqual2.default)(this.context, nextContext);
    }
  }, {
    key: 'blur',
    value: function blur() {
      if (this.input) {
        this.getInputNode().blur();
      }
    }
  }, {
    key: 'focus',
    value: function focus() {
      if (this.input) {
        this.getInputNode().focus();
      }
    }
  }, {
    key: 'select',
    value: function select() {
      if (this.input) {
        this.getInputNode().select();
      }
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.input ? this.getInputNode().value : undefined;
    }
  }, {
    key: 'getInputNode',
    value: function getInputNode() {
      return this.props.children || this.props.multiLine ? this.input.getInputNode() : _reactDom2.default.findDOMNode(this.input);
    }
  }, {
    key: '_isControlled',
    value: function _isControlled() {
      return this.props.hasOwnProperty('value');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          children = _props2.children,
          className = _props2.className,
          disabled = _props2.disabled,
          errorStyle = _props2.errorStyle,
          errorText = _props2.errorText,
          floatingLabelFixed = _props2.floatingLabelFixed,
          floatingLabelFocusStyle = _props2.floatingLabelFocusStyle,
          floatingLabelShrinkStyle = _props2.floatingLabelShrinkStyle,
          floatingLabelStyle = _props2.floatingLabelStyle,
          floatingLabelText = _props2.floatingLabelText,
          fullWidth = _props2.fullWidth,
          hintText = _props2.hintText,
          hintStyle = _props2.hintStyle,
          id = _props2.id,
          inputStyle = _props2.inputStyle,
          multiLine = _props2.multiLine,
          onBlur = _props2.onBlur,
          onChange = _props2.onChange,
          onFocus = _props2.onFocus,
          style = _props2.style,
          type = _props2.type,
          underlineDisabledStyle = _props2.underlineDisabledStyle,
          underlineFocusStyle = _props2.underlineFocusStyle,
          underlineShow = _props2.underlineShow,
          underlineStyle = _props2.underlineStyle,
          rows = _props2.rows,
          rowsMax = _props2.rowsMax,
          textareaStyle = _props2.textareaStyle,
          other = (0, _objectWithoutProperties3.default)(_props2, ['children', 'className', 'disabled', 'errorStyle', 'errorText', 'floatingLabelFixed', 'floatingLabelFocusStyle', 'floatingLabelShrinkStyle', 'floatingLabelStyle', 'floatingLabelText', 'fullWidth', 'hintText', 'hintStyle', 'id', 'inputStyle', 'multiLine', 'onBlur', 'onChange', 'onFocus', 'style', 'type', 'underlineDisabledStyle', 'underlineFocusStyle', 'underlineShow', 'underlineStyle', 'rows', 'rowsMax', 'textareaStyle']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context, this.state);
      var inputId = id || this.uniqueId;

      var errorTextElement = this.state.errorText && _react2.default.createElement(
        'div',
        { style: prepareStyles((0, _simpleAssign2.default)(styles.error, errorStyle)) },
        this.state.errorText
      );

      var floatingLabelTextElement = floatingLabelText && _react2.default.createElement(
        _TextFieldLabel2.default,
        {
          muiTheme: this.context.muiTheme,
          style: (0, _simpleAssign2.default)(styles.floatingLabel, floatingLabelStyle, this.state.isFocused ? floatingLabelFocusStyle : null),
          shrinkStyle: floatingLabelShrinkStyle,
          htmlFor: inputId,
          shrink: this.state.hasValue || this.state.isFocused || floatingLabelFixed,
          disabled: disabled
        },
        floatingLabelText
      );

      var inputProps = {
        id: inputId,
        ref: function ref(elem) {
          return _this2.input = elem;
        },
        disabled: this.props.disabled,
        onBlur: this.handleInputBlur,
        onChange: this.handleInputChange,
        onFocus: this.handleInputFocus
      };

      var childStyleMerged = (0, _simpleAssign2.default)(styles.input, inputStyle);

      var inputElement = void 0;
      if (children) {
        inputElement = _react2.default.cloneElement(children, (0, _extends3.default)({}, inputProps, children.props, {
          style: (0, _simpleAssign2.default)(childStyleMerged, children.props.style)
        }));
      } else {
        inputElement = multiLine ? _react2.default.createElement(_EnhancedTextarea2.default, (0, _extends3.default)({
          style: childStyleMerged,
          textareaStyle: (0, _simpleAssign2.default)(styles.textarea, styles.inputNative, textareaStyle),
          rows: rows,
          rowsMax: rowsMax,
          hintText: hintText
        }, other, inputProps, {
          onHeightChange: this.handleHeightChange
        })) : _react2.default.createElement('input', (0, _extends3.default)({
          type: type,
          style: prepareStyles((0, _simpleAssign2.default)(styles.inputNative, childStyleMerged))
        }, other, inputProps));
      }

      var rootProps = {};

      if (children) {
        rootProps = other;
      }

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, rootProps, {
          className: className,
          style: prepareStyles((0, _simpleAssign2.default)(styles.root, style))
        }),
        floatingLabelTextElement,
        hintText ? _react2.default.createElement(_TextFieldHint2.default, {
          muiTheme: this.context.muiTheme,
          show: !(this.state.hasValue || floatingLabelText && !this.state.isFocused) || !this.state.hasValue && floatingLabelText && floatingLabelFixed && !this.state.isFocused,
          style: hintStyle,
          text: hintText
        }) : null,
        inputElement,
        underlineShow ? _react2.default.createElement(_TextFieldUnderline2.default, {
          disabled: disabled,
          disabledStyle: underlineDisabledStyle,
          error: !!this.state.errorText,
          errorStyle: errorStyle,
          focus: this.state.isFocused,
          focusStyle: underlineFocusStyle,
          muiTheme: this.context.muiTheme,
          style: underlineStyle
        }) : null,
        errorTextElement
      );
    }
  }]);
  return TextField;
}(_react.Component);

TextField.defaultProps = {
  disabled: false,
  floatingLabelFixed: false,
  multiLine: false,
  fullWidth: false,
  type: 'text',
  underlineShow: true,
  rows: 1
};
TextField.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? TextField.propTypes = {
  children: _propTypes2.default.node,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * The text string to use for the default value.
   */
  defaultValue: _propTypes2.default.any,
  /**
   * Disables the text field if set to true.
   */
  disabled: _propTypes2.default.bool,
  /**
   * The style object to use to override error styles.
   */
  errorStyle: _propTypes2.default.object,
  /**
   * The error content to display.
   */
  errorText: _propTypes2.default.node,
  /**
   * If true, the floating label will float even when there is no value.
   */
  floatingLabelFixed: _propTypes2.default.bool,
  /**
   * The style object to use to override floating label styles when focused.
   */
  floatingLabelFocusStyle: _propTypes2.default.object,
  /**
   * The style object to use to override floating label styles when shrunk.
   */
  floatingLabelShrinkStyle: _propTypes2.default.object,
  /**
   * The style object to use to override floating label styles.
   */
  floatingLabelStyle: _propTypes2.default.object,
  /**
   * The content to use for the floating label element.
   */
  floatingLabelText: _propTypes2.default.node,
  /**
   * If true, the field receives the property width 100%.
   */
  fullWidth: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the TextField's hint text element.
   */
  hintStyle: _propTypes2.default.object,
  /**
   * The hint content to display.
   */
  hintText: _propTypes2.default.node,
  /**
   * The id prop for the text field.
   */
  id: _propTypes2.default.string,
  /**
   * Override the inline-styles of the TextField's input element.
   * When multiLine is false: define the style of the input element.
   * When multiLine is true: define the style of the container of the textarea.
   */
  inputStyle: _propTypes2.default.object,
  /**
   * If true, a textarea element will be rendered.
   * The textarea also grows and shrinks according to the number of lines.
   */
  multiLine: _propTypes2.default.bool,
  /**
   * Name applied to the input.
   */
  name: _propTypes2.default.string,
  /** @ignore */
  onBlur: _propTypes2.default.func,
  /**
   * Callback function that is fired when the textfield's value changes.
   *
   * @param {object} event Change event targeting the text field.
   * @param {string} newValue The new value of the text field.
   */
  onChange: _propTypes2.default.func,
  /** @ignore */
  onFocus: _propTypes2.default.func,
  /**
   * Number of rows to display when multiLine option is set to true.
   */
  rows: _propTypes2.default.number,
  /**
   * Maximum number of rows to display when
   * multiLine option is set to true.
   */
  rowsMax: _propTypes2.default.number,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * Override the inline-styles of the TextField's textarea element.
   * The TextField use either a textarea or an input,
   * this property has effects only when multiLine is true.
   */
  textareaStyle: _propTypes2.default.object,
  /**
   * Specifies the type of input to display
   * such as "password" or "text".
   */
  type: _propTypes2.default.string,
  /**
   * Override the inline-styles of the
   * TextField's underline element when disabled.
   */
  underlineDisabledStyle: _propTypes2.default.object,
  /**
   * Override the inline-styles of the TextField's
   * underline element when focussed.
   */
  underlineFocusStyle: _propTypes2.default.object,
  /**
   * If true, shows the underline for the text field.
   */
  underlineShow: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the TextField's underline element.
   */
  underlineStyle: _propTypes2.default.object,
  /**
   * The value of the text field.
   */
  value: _propTypes2.default.any
} : void 0;
exports.default = TextField;

/***/ },

/***/ "./node_modules/material-ui/TextField/TextFieldHint.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__("./node_modules/material-ui/styles/transitions.js");

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props) {
  var hintColor = props.muiTheme.textField.hintColor,
      show = props.show;


  return {
    root: {
      position: 'absolute',
      opacity: show ? 1 : 0,
      color: hintColor,
      transition: _transitions2.default.easeOut(),
      bottom: 12
    }
  };
}

var TextFieldHint = function TextFieldHint(props) {
  var prepareStyles = props.muiTheme.prepareStyles,
      style = props.style,
      text = props.text;


  var styles = getStyles(props);

  return _react2.default.createElement(
    'div',
    { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) },
    text
  );
};

undefined !== "production" ? TextFieldHint.propTypes = {
  /**
   * @ignore
   * The material-ui theme applied to this component.
   */
  muiTheme: _propTypes2.default.object.isRequired,
  /**
   * True if the hint text should be visible.
   */
  show: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * The hint text displayed.
   */
  text: _propTypes2.default.node
} : void 0;

TextFieldHint.defaultProps = {
  show: true
};

exports.default = TextFieldHint;

/***/ },

/***/ "./node_modules/material-ui/TextField/TextFieldLabel.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__("./node_modules/material-ui/styles/transitions.js");

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props) {
  var defaultStyles = {
    position: 'absolute',
    lineHeight: '22px',
    top: 38,
    transition: _transitions2.default.easeOut(),
    zIndex: 1, // Needed to display label above Chrome's autocomplete field background
    transform: 'scale(1) translate(0, 0)',
    transformOrigin: 'left top',
    pointerEvents: 'auto',
    userSelect: 'none'
  };

  var shrinkStyles = props.shrink ? (0, _simpleAssign2.default)({
    transform: 'scale(0.75) translate(0, -28px)',
    pointerEvents: 'none'
  }, props.shrinkStyle) : null;

  return {
    root: (0, _simpleAssign2.default)(defaultStyles, props.style, shrinkStyles)
  };
}

var TextFieldLabel = function TextFieldLabel(props) {
  var muiTheme = props.muiTheme,
      className = props.className,
      children = props.children,
      htmlFor = props.htmlFor,
      onTouchTap = props.onTouchTap;
  var prepareStyles = muiTheme.prepareStyles;

  var styles = getStyles(props);

  return _react2.default.createElement(
    'label',
    {
      className: className,
      style: prepareStyles(styles.root),
      htmlFor: htmlFor,
      onTouchTap: onTouchTap
    },
    children
  );
};

undefined !== "production" ? TextFieldLabel.propTypes = {
  /**
   * The label contents.
   */
  children: _propTypes2.default.node,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * Disables the label if set to true.
   */
  disabled: _propTypes2.default.bool,
  /**
   * The id of the target element that this label should refer to.
   */
  htmlFor: _propTypes2.default.string,
  /**
   * @ignore
   * The material-ui theme applied to this component.
   */
  muiTheme: _propTypes2.default.object.isRequired,
  /**
   * Callback function for when the label is selected via a touch tap.
   *
   * @param {object} event TouchTap event targeting the text field label.
   */
  onTouchTap: _propTypes2.default.func,
  /**
   * True if the floating label should shrink.
   */
  shrink: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element when shrunk.
   */
  shrinkStyle: _propTypes2.default.object,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : void 0;

TextFieldLabel.defaultProps = {
  disabled: false,
  shrink: false
};

exports.default = TextFieldLabel;

/***/ },

/***/ "./node_modules/material-ui/TextField/TextFieldUnderline.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__("./node_modules/material-ui/styles/transitions.js");

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  /**
   * True if the parent `TextField` is disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the underline when parent `TextField` is disabled.
   */
  disabledStyle: _propTypes2.default.object,
  /**
   * True if the parent `TextField` has an error.
   */
  error: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the underline when parent `TextField` has an error.
   */
  errorStyle: _propTypes2.default.object,
  /**
   * True if the parent `TextField` is focused.
   */
  focus: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the underline when parent `TextField` is focused.
   */
  focusStyle: _propTypes2.default.object,
  /**
   * @ignore
   * The material-ui theme applied to this component.
   */
  muiTheme: _propTypes2.default.object.isRequired,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
};

var defaultProps = {
  disabled: false,
  disabledStyle: {},
  error: false,
  errorStyle: {},
  focus: false,
  focusStyle: {},
  style: {}
};

var TextFieldUnderline = function TextFieldUnderline(props) {
  var disabled = props.disabled,
      disabledStyle = props.disabledStyle,
      error = props.error,
      errorStyle = props.errorStyle,
      focus = props.focus,
      focusStyle = props.focusStyle,
      muiTheme = props.muiTheme,
      style = props.style;
  var errorStyleColor = errorStyle.color;
  var prepareStyles = muiTheme.prepareStyles,
      _muiTheme$textField = muiTheme.textField,
      borderColor = _muiTheme$textField.borderColor,
      disabledTextColor = _muiTheme$textField.disabledTextColor,
      errorColor = _muiTheme$textField.errorColor,
      focusColor = _muiTheme$textField.focusColor;


  var styles = {
    root: {
      borderTop: 'none',
      borderLeft: 'none',
      borderRight: 'none',
      borderBottom: 'solid 1px',
      borderColor: borderColor,
      bottom: 8,
      boxSizing: 'content-box',
      margin: 0,
      position: 'absolute',
      width: '100%'
    },
    disabled: {
      borderBottom: 'dotted 2px',
      borderColor: disabledTextColor
    },
    focus: {
      borderBottom: 'solid 2px',
      borderColor: focusColor,
      transform: 'scaleX(0)',
      transition: _transitions2.default.easeOut()
    },
    error: {
      borderColor: errorStyleColor ? errorStyleColor : errorColor,
      transform: 'scaleX(1)'
    }
  };

  var underline = (0, _simpleAssign2.default)({}, styles.root, style);
  var focusedUnderline = (0, _simpleAssign2.default)({}, underline, styles.focus, focusStyle);

  if (disabled) underline = (0, _simpleAssign2.default)({}, underline, styles.disabled, disabledStyle);
  if (focus) focusedUnderline = (0, _simpleAssign2.default)({}, focusedUnderline, { transform: 'scaleX(1)' });
  if (error) focusedUnderline = (0, _simpleAssign2.default)({}, focusedUnderline, styles.error);

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement('hr', { 'aria-hidden': 'true', style: prepareStyles(underline) }),
    _react2.default.createElement('hr', { 'aria-hidden': 'true', style: prepareStyles(focusedUnderline) })
  );
};

undefined !== "production" ? TextFieldUnderline.propTypes = propTypes : void 0;
TextFieldUnderline.defaultProps = defaultProps;

exports.default = TextFieldUnderline;

/***/ },

/***/ "./node_modules/material-ui/TextField/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _TextField = __webpack_require__("./node_modules/material-ui/TextField/TextField.js");

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _TextField2.default;

/***/ },

/***/ "./node_modules/material-ui/TimePicker/Clock.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TimeDisplay = __webpack_require__("./node_modules/material-ui/TimePicker/TimeDisplay.js");

var _TimeDisplay2 = _interopRequireDefault(_TimeDisplay);

var _ClockHours = __webpack_require__("./node_modules/material-ui/TimePicker/ClockHours.js");

var _ClockHours2 = _interopRequireDefault(_ClockHours);

var _ClockMinutes = __webpack_require__("./node_modules/material-ui/TimePicker/ClockMinutes.js");

var _ClockMinutes2 = _interopRequireDefault(_ClockMinutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Clock = function (_Component) {
  (0, _inherits3.default)(Clock, _Component);

  function Clock() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Clock);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Clock.__proto__ || (0, _getPrototypeOf2.default)(Clock)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      selectedTime: null,
      mode: 'hour'
    }, _this.setMode = function (mode) {
      setTimeout(function () {
        _this.setState({
          mode: mode
        });
      }, 100);
    }, _this.handleSelectAffix = function (affix) {
      if (affix === _this.getAffix()) return;

      var hours = _this.state.selectedTime.getHours();

      if (affix === 'am') {
        _this.handleChangeHours(hours - 12, affix);
        return;
      }

      _this.handleChangeHours(hours + 12, affix);
    }, _this.handleChangeHours = function (hours, finished) {
      var time = new Date(_this.state.selectedTime);
      var affix = void 0;

      if (typeof finished === 'string') {
        affix = finished;
        finished = undefined;
      }
      if (!affix) {
        affix = _this.getAffix();
      }
      if (affix === 'pm' && hours < 12) {
        hours += 12;
      }

      time.setHours(hours);
      _this.setState({
        selectedTime: time
      });

      if (finished) {
        setTimeout(function () {
          _this.setState({
            mode: 'minute'
          });

          var onChangeHours = _this.props.onChangeHours;

          if (onChangeHours) {
            onChangeHours(time);
          }
        }, 100);
      }
    }, _this.handleChangeMinutes = function (minutes, finished) {
      var time = new Date(_this.state.selectedTime);
      time.setMinutes(minutes);
      _this.setState({
        selectedTime: time
      });

      var onChangeMinutes = _this.props.onChangeMinutes;

      if (onChangeMinutes && finished) {
        setTimeout(function () {
          onChangeMinutes(time);
        }, 0);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Clock, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({
        selectedTime: this.props.initialTime || new Date()
      });
    }
  }, {
    key: 'getAffix',
    value: function getAffix() {
      if (this.props.format !== 'ampm') return '';

      var hours = this.state.selectedTime.getHours();
      if (hours < 12) {
        return 'am';
      }

      return 'pm';
    }
  }, {
    key: 'getSelectedTime',
    value: function getSelectedTime() {
      return this.state.selectedTime;
    }
  }, {
    key: 'render',
    value: function render() {
      var clock = null;

      var _context$muiTheme = this.context.muiTheme,
          prepareStyles = _context$muiTheme.prepareStyles,
          timePicker = _context$muiTheme.timePicker;


      var styles = {
        root: {
          userSelect: 'none'
        },
        container: {
          height: 280,
          padding: 10,
          position: 'relative',
          boxSizing: 'content-box'
        },
        circle: {
          position: 'absolute',
          top: 20,
          width: 260,
          height: 260,
          borderRadius: '100%',
          backgroundColor: timePicker.clockCircleColor
        }
      };

      if (this.state.mode === 'hour') {
        clock = _react2.default.createElement(_ClockHours2.default, {
          key: 'hours',
          format: this.props.format,
          onChange: this.handleChangeHours,
          initialHours: this.state.selectedTime.getHours()
        });
      } else {
        clock = _react2.default.createElement(_ClockMinutes2.default, {
          key: 'minutes',
          onChange: this.handleChangeMinutes,
          initialMinutes: this.state.selectedTime.getMinutes()
        });
      }

      return _react2.default.createElement(
        'div',
        { style: prepareStyles(styles.root) },
        _react2.default.createElement(_TimeDisplay2.default, {
          selectedTime: this.state.selectedTime,
          mode: this.state.mode,
          format: this.props.format,
          affix: this.getAffix(),
          onSelectAffix: this.handleSelectAffix,
          onSelectHour: this.setMode.bind(this, 'hour'),
          onSelectMin: this.setMode.bind(this, 'minute')
        }),
        _react2.default.createElement(
          'div',
          { style: prepareStyles(styles.container) },
          _react2.default.createElement('div', { style: prepareStyles(styles.circle) }),
          clock
        )
      );
    }
  }]);
  return Clock;
}(_react.Component);

Clock.defaultProps = {
  initialTime: new Date()
};
Clock.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? Clock.propTypes = {
  format: _propTypes2.default.oneOf(['ampm', '24hr']),
  initialTime: _propTypes2.default.object,
  onChangeHours: _propTypes2.default.func,
  onChangeMinutes: _propTypes2.default.func
} : void 0;
exports.default = Clock;

/***/ },

/***/ "./node_modules/material-ui/TimePicker/ClockHours.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__("./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ClockNumber = __webpack_require__("./node_modules/material-ui/TimePicker/ClockNumber.js");

var _ClockNumber2 = _interopRequireDefault(_ClockNumber);

var _ClockPointer = __webpack_require__("./node_modules/material-ui/TimePicker/ClockPointer.js");

var _ClockPointer2 = _interopRequireDefault(_ClockPointer);

var _timeUtils = __webpack_require__("./node_modules/material-ui/TimePicker/timeUtils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ClockHours = function (_Component) {
  (0, _inherits3.default)(ClockHours, _Component);

  function ClockHours() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ClockHours);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ClockHours.__proto__ || (0, _getPrototypeOf2.default)(ClockHours)).call.apply(_ref, [this].concat(args))), _this), _this.handleUp = function (event) {
      event.preventDefault();
      _this.setClock(event.nativeEvent, true);
    }, _this.handleMove = function (event) {
      event.preventDefault();
      if (_this.isMousePressed(event) !== 1) return;
      _this.setClock(event.nativeEvent, false);
    }, _this.handleTouchMove = function (event) {
      event.preventDefault();
      _this.setClock(event.changedTouches[0], false);
    }, _this.handleTouchEnd = function (event) {
      event.preventDefault();
      _this.setClock(event.changedTouches[0], true);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ClockHours, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var clockElement = _reactDom2.default.findDOMNode(this.refs.mask);

      this.center = {
        x: clockElement.offsetWidth / 2,
        y: clockElement.offsetHeight / 2
      };

      this.basePoint = {
        x: this.center.x,
        y: 0
      };
    }
  }, {
    key: 'isMousePressed',
    value: function isMousePressed(event) {
      if (typeof event.buttons === 'undefined') {
        return event.nativeEvent.which;
      }

      return event.buttons;
    }
  }, {
    key: 'setClock',
    value: function setClock(event, finish) {
      if (typeof event.offsetX === 'undefined') {
        var offset = (0, _timeUtils.getTouchEventOffsetValues)(event);

        event.offsetX = offset.offsetX;
        event.offsetY = offset.offsetY;
      }

      var hours = this.getHours(event.offsetX, event.offsetY);

      this.props.onChange(hours, finish);
    }
  }, {
    key: 'getHours',
    value: function getHours(offsetX, offsetY) {
      var step = 30;
      var x = offsetX - this.center.x;
      var y = offsetY - this.center.y;
      var cx = this.basePoint.x - this.center.x;
      var cy = this.basePoint.y - this.center.y;

      var atan = Math.atan2(cx, cy) - Math.atan2(x, y);

      var deg = (0, _timeUtils.rad2deg)(atan);
      deg = Math.round(deg / step) * step;
      deg %= 360;

      var value = Math.floor(deg / step) || 0;

      var delta = Math.pow(x, 2) + Math.pow(y, 2);
      var distance = Math.sqrt(delta);

      value = value || 12;
      if (this.props.format === '24hr') {
        if (distance < 90) {
          value += 12;
          value %= 24;
        }
      } else {
        value %= 12;
      }

      return value;
    }
  }, {
    key: 'getSelected',
    value: function getSelected() {
      var hour = this.props.initialHours;

      if (this.props.format === 'ampm') {
        hour %= 12;
        hour = hour || 12;
      }

      return hour;
    }
  }, {
    key: 'getHourNumbers',
    value: function getHourNumbers() {
      var _this2 = this;

      var style = {
        pointerEvents: 'none'
      };
      var hourSize = this.props.format === 'ampm' ? 12 : 24;

      var hours = [];
      for (var i = 1; i <= hourSize; i++) {
        hours.push(i % 24);
      }

      return hours.map(function (hour) {
        var isSelected = _this2.getSelected() === hour;
        return _react2.default.createElement(_ClockNumber2.default, {
          key: hour,
          style: style,
          isSelected: isSelected,
          type: 'hour',
          value: hour
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var styles = {
        root: {
          height: '100%',
          width: '100%',
          borderRadius: '100%',
          position: 'relative',
          pointerEvents: 'none',
          boxSizing: 'border-box'
        },

        hitMask: {
          height: '100%',
          width: '100%',
          pointerEvents: 'auto'
        }
      };

      var prepareStyles = this.context.muiTheme.prepareStyles;

      var hours = this.getSelected();
      var numbers = this.getHourNumbers();

      return _react2.default.createElement(
        'div',
        { ref: 'clock', style: prepareStyles(styles.root) },
        _react2.default.createElement(_ClockPointer2.default, { hasSelected: true, value: hours, type: 'hour' }),
        numbers,
        _react2.default.createElement('div', {
          ref: 'mask', style: prepareStyles(styles.hitMask), onTouchMove: this.handleTouchMove,
          onTouchEnd: this.handleTouchEnd, onMouseUp: this.handleUp, onMouseMove: this.handleMove
        })
      );
    }
  }]);
  return ClockHours;
}(_react.Component);

ClockHours.defaultProps = {
  initialHours: new Date().getHours(),
  onChange: function onChange() {},
  format: 'ampm'
};
ClockHours.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? ClockHours.propTypes = {
  format: _propTypes2.default.oneOf(['ampm', '24hr']),
  initialHours: _propTypes2.default.number,
  onChange: _propTypes2.default.func
} : void 0;
exports.default = ClockHours;

/***/ },

/***/ "./node_modules/material-ui/TimePicker/ClockMinutes.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ClockNumber = __webpack_require__("./node_modules/material-ui/TimePicker/ClockNumber.js");

var _ClockNumber2 = _interopRequireDefault(_ClockNumber);

var _ClockPointer = __webpack_require__("./node_modules/material-ui/TimePicker/ClockPointer.js");

var _ClockPointer2 = _interopRequireDefault(_ClockPointer);

var _timeUtils = __webpack_require__("./node_modules/material-ui/TimePicker/timeUtils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ClockMinutes = function (_Component) {
  (0, _inherits3.default)(ClockMinutes, _Component);

  function ClockMinutes() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ClockMinutes);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ClockMinutes.__proto__ || (0, _getPrototypeOf2.default)(ClockMinutes)).call.apply(_ref, [this].concat(args))), _this), _this.handleUp = function (event) {
      event.preventDefault();
      _this.setClock(event.nativeEvent, true);
    }, _this.handleMove = function (event) {
      event.preventDefault();
      if (_this.isMousePressed(event) !== 1) {
        return;
      }
      _this.setClock(event.nativeEvent, false);
    }, _this.handleTouch = function (event) {
      event.preventDefault();
      _this.setClock(event.changedTouches[0], event.type === 'touchend');
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ClockMinutes, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var clockElement = this.refs.mask;

      this.center = {
        x: clockElement.offsetWidth / 2,
        y: clockElement.offsetHeight / 2
      };

      this.basePoint = {
        x: this.center.x,
        y: 0
      };
    }
  }, {
    key: 'isMousePressed',
    value: function isMousePressed(event) {
      if (typeof event.buttons === 'undefined') {
        return event.nativeEvent.which;
      }
      return event.buttons;
    }
  }, {
    key: 'setClock',
    value: function setClock(event, finish) {
      if (typeof event.offsetX === 'undefined') {
        var offset = (0, _timeUtils.getTouchEventOffsetValues)(event);

        event.offsetX = offset.offsetX;
        event.offsetY = offset.offsetY;
      }

      var minutes = this.getMinutes(event.offsetX, event.offsetY);

      this.props.onChange(minutes, finish);
    }
  }, {
    key: 'getMinutes',
    value: function getMinutes(offsetX, offsetY) {
      var step = 6;
      var x = offsetX - this.center.x;
      var y = offsetY - this.center.y;
      var cx = this.basePoint.x - this.center.x;
      var cy = this.basePoint.y - this.center.y;

      var atan = Math.atan2(cx, cy) - Math.atan2(x, y);

      var deg = (0, _timeUtils.rad2deg)(atan);
      deg = Math.round(deg / step) * step;
      deg %= 360;

      var value = Math.floor(deg / step) || 0;

      return value;
    }
  }, {
    key: 'getMinuteNumbers',
    value: function getMinuteNumbers() {
      var minutes = [];
      for (var i = 0; i < 12; i++) {
        minutes.push(i * 5);
      }
      var selectedMinutes = this.props.initialMinutes;
      var hasSelected = false;

      var numbers = minutes.map(function (minute) {
        var isSelected = selectedMinutes === minute;
        if (isSelected) {
          hasSelected = true;
        }
        return _react2.default.createElement(_ClockNumber2.default, {
          key: minute,
          isSelected: isSelected,
          type: 'minute',
          value: minute
        });
      });

      return {
        numbers: numbers,
        hasSelected: hasSelected,
        selected: selectedMinutes
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var styles = {
        root: {
          height: '100%',
          width: '100%',
          borderRadius: '100%',
          position: 'relative',
          pointerEvents: 'none',
          boxSizing: 'border-box'
        },

        hitMask: {
          height: '100%',
          width: '100%',
          pointerEvents: 'auto'
        }
      };

      var prepareStyles = this.context.muiTheme.prepareStyles;

      var minutes = this.getMinuteNumbers();

      return _react2.default.createElement(
        'div',
        { ref: 'clock', style: prepareStyles(styles.root) },
        _react2.default.createElement(_ClockPointer2.default, { value: minutes.selected, type: 'minute', hasSelected: minutes.hasSelected }),
        minutes.numbers,
        _react2.default.createElement('div', {
          ref: 'mask',
          style: prepareStyles(styles.hitMask),
          onTouchMove: this.handleTouch,
          onTouchEnd: this.handleTouch,
          onMouseUp: this.handleUp,
          onMouseMove: this.handleMove
        })
      );
    }
  }]);
  return ClockMinutes;
}(_react.Component);

ClockMinutes.defaultProps = {
  initialMinutes: new Date().getMinutes(),
  onChange: function onChange() {}
};
ClockMinutes.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? ClockMinutes.propTypes = {
  initialMinutes: _propTypes2.default.number,
  onChange: _propTypes2.default.func
} : void 0;
exports.default = ClockMinutes;

/***/ },

/***/ "./node_modules/material-ui/TimePicker/ClockNumber.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _slicedToArray2 = __webpack_require__("./node_modules/babel-runtime/helpers/slicedToArray.js");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _timeUtils = __webpack_require__("./node_modules/material-ui/TimePicker/timeUtils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var styles = {
    root: {
      directionInvariant: true,
      display: 'inline-block',
      position: 'absolute',
      width: 32,
      height: 32,
      borderRadius: '100%',
      left: 'calc(50% - 16px)',
      top: 10,
      textAlign: 'center',
      paddingTop: 5,
      userSelect: 'none', /* Chrome all / Safari all */
      fontSize: '1.1em',
      pointerEvents: 'none',
      boxSizing: 'border-box'
    }
  };

  var muiTheme = context.muiTheme;


  var pos = props.value;

  if (props.type === 'hour') {
    pos %= 12;
  } else {
    pos = pos / 5;
  }

  var positions = [[0, 5], [54.5, 16.6], [94.4, 59.5], [109, 114], [94.4, 168.5], [54.5, 208.4], [0, 223], [-54.5, 208.4], [-94.4, 168.5], [-109, 114], [-94.4, 59.5], [-54.5, 19.6]];

  var innerPositions = [[0, 40], [36.9, 49.9], [64, 77], [74, 114], [64, 151], [37, 178], [0, 188], [-37, 178], [-64, 151], [-74, 114], [-64, 77], [-37, 50]];

  if (props.isSelected) {
    styles.root.backgroundColor = muiTheme.timePicker.accentColor;
    styles.root.color = muiTheme.timePicker.selectTextColor;
  }

  var transformPos = positions[pos];

  if ((0, _timeUtils.isInner)(props)) {
    styles.root.width = 28;
    styles.root.height = 28;
    styles.root.left = 'calc(50% - 14px)';
    transformPos = innerPositions[pos];
  }

  var _transformPos = transformPos,
      _transformPos2 = (0, _slicedToArray3.default)(_transformPos, 2),
      x = _transformPos2[0],
      y = _transformPos2[1];

  styles.root.transform = 'translate(' + x + 'px, ' + y + 'px)';

  return styles;
}

var ClockNumber = function (_Component) {
  (0, _inherits3.default)(ClockNumber, _Component);

  function ClockNumber() {
    (0, _classCallCheck3.default)(this, ClockNumber);
    return (0, _possibleConstructorReturn3.default)(this, (ClockNumber.__proto__ || (0, _getPrototypeOf2.default)(ClockNumber)).apply(this, arguments));
  }

  (0, _createClass3.default)(ClockNumber, [{
    key: 'render',
    value: function render() {
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);
      var clockNumber = this.props.value === 0 ? '00' : this.props.value;

      return _react2.default.createElement(
        'span',
        { style: prepareStyles(styles.root) },
        clockNumber
      );
    }
  }]);
  return ClockNumber;
}(_react.Component);

ClockNumber.defaultProps = {
  value: 0,
  type: 'minute',
  isSelected: false
};
ClockNumber.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? ClockNumber.propTypes = {
  isSelected: _propTypes2.default.bool,
  onSelected: _propTypes2.default.func,
  type: _propTypes2.default.oneOf(['hour', 'minute']),
  value: _propTypes2.default.number
} : void 0;
exports.default = ClockNumber;

/***/ },

/***/ "./node_modules/material-ui/TimePicker/ClockPointer.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _timeUtils = __webpack_require__("./node_modules/material-ui/TimePicker/timeUtils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function calcAngle(value, base) {
  value %= base;
  var angle = 360 / base * value;
  return angle;
}

function getStyles(props, context, state) {
  var hasSelected = props.hasSelected,
      type = props.type,
      value = props.value;
  var inner = state.inner;
  var timePicker = context.muiTheme.timePicker;

  var angle = type === 'hour' ? calcAngle(value, 12) : calcAngle(value, 60);

  var styles = {
    root: {
      height: inner ? '30%' : '40%',
      background: timePicker.accentColor,
      width: 2,
      left: 'calc(50% - 1px)',
      position: 'absolute',
      bottom: '50%',
      transformOrigin: 'bottom',
      pointerEvents: 'none',
      transform: 'rotateZ(' + angle + 'deg)'
    },
    mark: {
      boxSizing: 'content-box',
      background: timePicker.selectTextColor,
      border: '4px solid ' + timePicker.accentColor,
      display: hasSelected && 'none',
      width: 7,
      height: 7,
      position: 'absolute',
      top: -5,
      left: -6,
      borderRadius: '100%'
    }
  };

  return styles;
}

var ClockPointer = function (_Component) {
  (0, _inherits3.default)(ClockPointer, _Component);

  function ClockPointer() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ClockPointer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ClockPointer.__proto__ || (0, _getPrototypeOf2.default)(ClockPointer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      inner: false
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ClockPointer, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({
        inner: (0, _timeUtils.isInner)(this.props)
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        inner: (0, _timeUtils.isInner)(nextProps)
      });
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.props.value === null) {
        return _react2.default.createElement('span', null);
      }

      var styles = getStyles(this.props, this.context, this.state);
      var prepareStyles = this.context.muiTheme.prepareStyles;


      return _react2.default.createElement(
        'div',
        { style: prepareStyles(styles.root) },
        _react2.default.createElement('div', { style: prepareStyles(styles.mark) })
      );
    }
  }]);
  return ClockPointer;
}(_react.Component);

ClockPointer.defaultProps = {
  hasSelected: false,
  value: null,
  type: 'minute'
};
ClockPointer.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? ClockPointer.propTypes = {
  hasSelected: _propTypes2.default.bool,
  type: _propTypes2.default.oneOf(['hour', 'minute']),
  value: _propTypes2.default.number
} : void 0;
exports.default = ClockPointer;

/***/ },

/***/ "./node_modules/material-ui/TimePicker/TimeDisplay.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _slicedToArray2 = __webpack_require__("./node_modules/babel-runtime/helpers/slicedToArray.js");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TimeDisplay = function (_Component) {
  (0, _inherits3.default)(TimeDisplay, _Component);

  function TimeDisplay() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TimeDisplay);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TimeDisplay.__proto__ || (0, _getPrototypeOf2.default)(TimeDisplay)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      transitionDirection: 'up'
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(TimeDisplay, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.selectedTime !== this.props.selectedTime) {
        var direction = nextProps.selectedTime > this.props.selectedTime ? 'up' : 'down';

        this.setState({
          transitionDirection: direction
        });
      }
    }
  }, {
    key: 'sanitizeTime',
    value: function sanitizeTime() {
      var hour = this.props.selectedTime.getHours();
      var min = this.props.selectedTime.getMinutes().toString();

      if (this.props.format === 'ampm') {
        hour %= 12;
        hour = hour || 12;
      }

      hour = hour.toString();
      if (hour.length < 2) hour = '0' + hour;
      if (min.length < 2) min = '0' + min;

      return [hour, min];
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          affix = _props.affix,
          format = _props.format,
          mode = _props.mode,
          onSelectAffix = _props.onSelectAffix,
          onSelectHour = _props.onSelectHour,
          onSelectMin = _props.onSelectMin,
          selectedTime = _props.selectedTime,
          other = (0, _objectWithoutProperties3.default)(_props, ['affix', 'format', 'mode', 'onSelectAffix', 'onSelectHour', 'onSelectMin', 'selectedTime']);
      var _context$muiTheme = this.context.muiTheme,
          prepareStyles = _context$muiTheme.prepareStyles,
          timePicker = _context$muiTheme.timePicker;


      var styles = {
        root: {
          padding: '14px 0',
          borderTopLeftRadius: 2,
          borderTopRightRadius: 2,
          backgroundColor: timePicker.headerColor,
          color: timePicker.textColor
        },
        text: {
          margin: '6px 0',
          lineHeight: '58px',
          height: 58,
          fontSize: 58,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'baseline'
        },
        time: {
          margin: '0 10px'
        },
        affix: {
          flex: 1,
          position: 'relative',
          lineHeight: '17px',
          height: 17,
          fontSize: 17
        },
        affixTop: {
          position: 'absolute',
          top: -20,
          left: 0
        },
        clickable: {
          cursor: 'pointer'
        },
        inactive: {
          opacity: 0.7
        }
      };

      var _sanitizeTime = this.sanitizeTime(),
          _sanitizeTime2 = (0, _slicedToArray3.default)(_sanitizeTime, 2),
          hour = _sanitizeTime2[0],
          min = _sanitizeTime2[1];

      var buttons = [];
      if (format === 'ampm') {
        buttons = [_react2.default.createElement(
          'div',
          {
            key: 'pm',
            style: prepareStyles((0, _simpleAssign2.default)({}, styles.clickable, affix === 'pm' ? {} : styles.inactive)),
            onTouchTap: function onTouchTap() {
              return onSelectAffix('pm');
            }
          },
          'PM'
        ), _react2.default.createElement(
          'div',
          {
            key: 'am',
            style: prepareStyles((0, _simpleAssign2.default)({}, styles.affixTop, styles.clickable, affix === 'am' ? {} : styles.inactive)),
            onTouchTap: function onTouchTap() {
              return onSelectAffix('am');
            }
          },
          'AM'
        )];
      }

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, other, { style: prepareStyles(styles.root) }),
        _react2.default.createElement(
          'div',
          { style: prepareStyles(styles.text) },
          _react2.default.createElement('div', { style: prepareStyles((0, _simpleAssign2.default)({}, styles.affix)) }),
          _react2.default.createElement(
            'div',
            { style: prepareStyles(styles.time) },
            _react2.default.createElement(
              'span',
              {
                style: prepareStyles((0, _simpleAssign2.default)({}, styles.clickable, mode === 'hour' ? {} : styles.inactive)),
                onTouchTap: onSelectHour
              },
              hour
            ),
            _react2.default.createElement(
              'span',
              null,
              ':'
            ),
            _react2.default.createElement(
              'span',
              {
                style: prepareStyles((0, _simpleAssign2.default)({}, styles.clickable, mode === 'minute' ? {} : styles.inactive)),
                onTouchTap: onSelectMin
              },
              min
            )
          ),
          _react2.default.createElement(
            'div',
            { style: prepareStyles((0, _simpleAssign2.default)({}, styles.affix)) },
            buttons
          )
        )
      );
    }
  }]);
  return TimeDisplay;
}(_react.Component);

TimeDisplay.defaultProps = {
  affix: '',
  mode: 'hour'
};
TimeDisplay.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? TimeDisplay.propTypes = {
  affix: _propTypes2.default.oneOf(['', 'pm', 'am']),
  format: _propTypes2.default.oneOf(['ampm', '24hr']),
  mode: _propTypes2.default.oneOf(['hour', 'minute']),
  onSelectAffix: _propTypes2.default.func,
  onSelectHour: _propTypes2.default.func,
  onSelectMin: _propTypes2.default.func,
  selectedTime: _propTypes2.default.object.isRequired
} : void 0;
exports.default = TimeDisplay;

/***/ },

/***/ "./node_modules/material-ui/TimePicker/TimePicker.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TimePickerDialog = __webpack_require__("./node_modules/material-ui/TimePicker/TimePickerDialog.js");

var _TimePickerDialog2 = _interopRequireDefault(_TimePickerDialog);

var _TextField = __webpack_require__("./node_modules/material-ui/TextField/index.js");

var _TextField2 = _interopRequireDefault(_TextField);

var _timeUtils = __webpack_require__("./node_modules/material-ui/TimePicker/timeUtils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var emptyTime = new Date();
emptyTime.setHours(0);
emptyTime.setMinutes(0);
emptyTime.setSeconds(0);
emptyTime.setMilliseconds(0);

var TimePicker = function (_Component) {
  (0, _inherits3.default)(TimePicker, _Component);

  function TimePicker() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TimePicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TimePicker.__proto__ || (0, _getPrototypeOf2.default)(TimePicker)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      time: null,
      dialogTime: new Date()
    }, _this.handleAcceptDialog = function (time) {
      _this.setState({
        time: time
      });
      if (_this.props.onChange) _this.props.onChange(null, time);
    }, _this.handleFocusInput = function (event) {
      event.target.blur();
      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }
    }, _this.handleTouchTapInput = function (event) {
      event.preventDefault();

      if (!_this.props.disabled) {
        _this.openDialog();
      }

      if (_this.props.onTouchTap) {
        _this.props.onTouchTap(event);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(TimePicker, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({
        time: this.isControlled() ? this.getControlledTime() : this.props.defaultTime
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.value !== this.props.value) {
        this.setState({
          time: this.getControlledTime(nextProps)
        });
      }
    }

    /**
     * Alias for `openDialog()` for an api consistent with TextField.
     */

  }, {
    key: 'focus',
    value: function focus() {
      this.openDialog();
    }
  }, {
    key: 'openDialog',
    value: function openDialog() {
      this.setState({
        dialogTime: this.state.time
      });
      this.refs.dialogWindow.show();
    }
  }, {
    key: 'isControlled',
    value: function isControlled() {
      return this.props.value !== null;
    }
  }, {
    key: 'getControlledTime',
    value: function getControlledTime() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

      var result = null;
      if (props.value instanceof Date) {
        result = props.value;
      }
      return result;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          autoOk = _props.autoOk,
          cancelLabel = _props.cancelLabel,
          defaultTime = _props.defaultTime,
          dialogBodyStyle = _props.dialogBodyStyle,
          dialogStyle = _props.dialogStyle,
          format = _props.format,
          okLabel = _props.okLabel,
          onFocus = _props.onFocus,
          onTouchTap = _props.onTouchTap,
          onShow = _props.onShow,
          onDismiss = _props.onDismiss,
          pedantic = _props.pedantic,
          style = _props.style,
          textFieldStyle = _props.textFieldStyle,
          other = (0, _objectWithoutProperties3.default)(_props, ['autoOk', 'cancelLabel', 'defaultTime', 'dialogBodyStyle', 'dialogStyle', 'format', 'okLabel', 'onFocus', 'onTouchTap', 'onShow', 'onDismiss', 'pedantic', 'style', 'textFieldStyle']);
      var prepareStyles = this.context.muiTheme.prepareStyles;
      var time = this.state.time;


      return _react2.default.createElement(
        'div',
        { style: prepareStyles((0, _simpleAssign2.default)({}, style)) },
        _react2.default.createElement(_TextField2.default, (0, _extends3.default)({}, other, {
          style: textFieldStyle,
          ref: 'input',
          value: time === emptyTime ? null : (0, _timeUtils.formatTime)(time, format, pedantic),
          onFocus: this.handleFocusInput,
          onTouchTap: this.handleTouchTapInput
        })),
        _react2.default.createElement(_TimePickerDialog2.default, {
          ref: 'dialogWindow',
          bodyStyle: dialogBodyStyle,
          initialTime: this.state.dialogTime,
          onAccept: this.handleAcceptDialog,
          onShow: onShow,
          onDismiss: onDismiss,
          format: format,
          okLabel: okLabel,
          cancelLabel: cancelLabel,
          autoOk: autoOk,
          style: dialogStyle
        })
      );
    }
  }]);
  return TimePicker;
}(_react.Component);

TimePicker.defaultProps = {
  autoOk: false,
  cancelLabel: 'Cancel',
  defaultTime: null,
  disabled: false,
  format: 'ampm',
  okLabel: 'OK',
  pedantic: false,
  style: {},
  value: null
};
TimePicker.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? TimePicker.propTypes = {
  /**
   * If true, automatically accept and close the picker on set minutes.
   */
  autoOk: _propTypes2.default.bool,
  /**
   * Override the label of the 'Cancel' button.
   */
  cancelLabel: _propTypes2.default.node,
  /**
   * The initial time value of the TimePicker.
   */
  defaultTime: _propTypes2.default.object,
  /**
   * Override the inline-styles of TimePickerDialog's body element.
   */
  dialogBodyStyle: _propTypes2.default.object,
  /**
   * Override the inline-styles of TimePickerDialog's root element.
   */
  dialogStyle: _propTypes2.default.object,
  /**
   * If true, the TimePicker is disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * Tells the component to display the picker in `ampm` (12hr) format or `24hr` format.
   */
  format: _propTypes2.default.oneOf(['ampm', '24hr']),
  /**
   * Override the label of the 'OK' button.
   */
  okLabel: _propTypes2.default.node,
  /**
   * Callback function that is fired when the time value changes. The time value is passed in a Date Object.
   * Since there is no particular event associated with the change the first argument will always be null
   * and the second argument will be the new Date instance.
   */
  onChange: _propTypes2.default.func,
  /**
   * Callback function fired when the TimePicker dialog is dismissed.
   */
  onDismiss: _propTypes2.default.func,
  /**
   * Callback function fired when the TimePicker `TextField` gains focus.
   */
  onFocus: _propTypes2.default.func,
  /**
   * Callback function fired when the TimePicker dialog is shown.
   */
  onShow: _propTypes2.default.func,
  /**
   * Callback function fired when the TimePicker is tapped or clicked.
   */
  onTouchTap: _propTypes2.default.func,
  /**
   * If true, uses ("noon" / "midnight") instead of ("12 a.m." / "12 p.m.").
   *
   * It's technically more correct to refer to "12 noon" and "12 midnight" rather than "12 a.m." and "12 p.m."
   * and it avoids confusion between different locales. By default (for compatibility reasons) TimePicker uses
   * ("12 a.m." / "12 p.m.").
   */
  pedantic: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * Override the inline-styles of TimePicker's TextField element.
   */
  textFieldStyle: _propTypes2.default.object,
  /**
   * Sets the time for the Time Picker programmatically.
   */
  value: _propTypes2.default.object
} : void 0;
exports.default = TimePicker;

/***/ },

/***/ "./node_modules/material-ui/TimePicker/TimePickerDialog.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactEventListener = __webpack_require__("./node_modules/react-event-listener/lib/index.js");

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _keycode = __webpack_require__("./node_modules/keycode/index.js");

var _keycode2 = _interopRequireDefault(_keycode);

var _Clock = __webpack_require__("./node_modules/material-ui/TimePicker/Clock.js");

var _Clock2 = _interopRequireDefault(_Clock);

var _Dialog = __webpack_require__("./node_modules/material-ui/Dialog/index.js");

var _Dialog2 = _interopRequireDefault(_Dialog);

var _FlatButton = __webpack_require__("./node_modules/material-ui/FlatButton/index.js");

var _FlatButton2 = _interopRequireDefault(_FlatButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TimePickerDialog = function (_Component) {
  (0, _inherits3.default)(TimePickerDialog, _Component);

  function TimePickerDialog() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TimePickerDialog);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TimePickerDialog.__proto__ || (0, _getPrototypeOf2.default)(TimePickerDialog)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      open: false
    }, _this.handleRequestClose = function () {
      _this.dismiss();
    }, _this.handleTouchTapCancel = function () {
      _this.dismiss();
    }, _this.handleTouchTapOK = function () {
      if (_this.props.onAccept) {
        _this.props.onAccept(_this.refs.clock.getSelectedTime());
      }
      _this.setState({
        open: false
      });
    }, _this.handleKeyUp = function (event) {
      switch ((0, _keycode2.default)(event)) {
        case 'enter':
          _this.handleTouchTapOK();
          break;
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(TimePickerDialog, [{
    key: 'show',
    value: function show() {
      if (this.props.onShow && !this.state.open) this.props.onShow();
      this.setState({
        open: true
      });
    }
  }, {
    key: 'dismiss',
    value: function dismiss() {
      if (this.props.onDismiss && this.state.open) this.props.onDismiss();
      this.setState({
        open: false
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          bodyStyle = _props.bodyStyle,
          initialTime = _props.initialTime,
          onAccept = _props.onAccept,
          format = _props.format,
          autoOk = _props.autoOk,
          okLabel = _props.okLabel,
          cancelLabel = _props.cancelLabel,
          style = _props.style,
          other = (0, _objectWithoutProperties3.default)(_props, ['bodyStyle', 'initialTime', 'onAccept', 'format', 'autoOk', 'okLabel', 'cancelLabel', 'style']);


      var styles = {
        root: {
          fontSize: 14,
          color: this.context.muiTheme.timePicker.clockColor
        },
        dialogContent: {
          width: 280
        },
        body: {
          padding: 0
        }
      };

      var actions = [_react2.default.createElement(_FlatButton2.default, {
        key: 0,
        label: cancelLabel,
        primary: true,
        onTouchTap: this.handleTouchTapCancel
      }), _react2.default.createElement(_FlatButton2.default, {
        key: 1,
        label: okLabel,
        primary: true,
        onTouchTap: this.handleTouchTapOK
      })];

      var onClockChangeMinutes = autoOk === true ? this.handleTouchTapOK : undefined;
      var open = this.state.open;

      return _react2.default.createElement(
        _Dialog2.default,
        (0, _extends3.default)({}, other, {
          style: (0, _simpleAssign2.default)(styles.root, style),
          bodyStyle: (0, _simpleAssign2.default)(styles.body, bodyStyle),
          actions: actions,
          contentStyle: styles.dialogContent,
          repositionOnUpdate: false,
          open: open,
          onRequestClose: this.handleRequestClose
        }),
        open && _react2.default.createElement(_reactEventListener2.default, { target: 'window', onKeyUp: this.handleKeyUp }),
        open && _react2.default.createElement(_Clock2.default, {
          ref: 'clock',
          format: format,
          initialTime: initialTime,
          onChangeMinutes: onClockChangeMinutes
        })
      );
    }
  }]);
  return TimePickerDialog;
}(_react.Component);

TimePickerDialog.defaultProps = {
  okLabel: 'OK',
  cancelLabel: 'Cancel'
};
TimePickerDialog.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? TimePickerDialog.propTypes = {
  autoOk: _propTypes2.default.bool,
  bodyStyle: _propTypes2.default.object,
  cancelLabel: _propTypes2.default.node,
  format: _propTypes2.default.oneOf(['ampm', '24hr']),
  initialTime: _propTypes2.default.object,
  okLabel: _propTypes2.default.node,
  onAccept: _propTypes2.default.func,
  onDismiss: _propTypes2.default.func,
  onShow: _propTypes2.default.func,
  style: _propTypes2.default.object
} : void 0;
exports.default = TimePickerDialog;

/***/ },

/***/ "./node_modules/material-ui/TimePicker/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _TimePicker = __webpack_require__("./node_modules/material-ui/TimePicker/TimePicker.js");

var _TimePicker2 = _interopRequireDefault(_TimePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _TimePicker2.default;

/***/ },

/***/ "./node_modules/material-ui/TimePicker/timeUtils.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addHours = addHours;
exports.addMinutes = addMinutes;
exports.addSeconds = addSeconds;
exports.formatTime = formatTime;
exports.rad2deg = rad2deg;
exports.getTouchEventOffsetValues = getTouchEventOffsetValues;
exports.isInner = isInner;
function addHours(d, hours) {
  var newDate = clone(d);
  newDate.setHours(d.getHours() + hours);
  return newDate;
}

function addMinutes(d, minutes) {
  var newDate = clone(d);
  newDate.setMinutes(d.getMinutes() + minutes);
  return newDate;
}

function addSeconds(d, seconds) {
  var newDate = clone(d);
  newDate.setSeconds(d.getMinutes() + seconds);
  return newDate;
}

function clone(d) {
  return new Date(d.getTime());
}

/**
 * @param date [Date] A Date object.
 * @param format [String] One of 'ampm', '24hr', defaults to 'ampm'.
 * @param pedantic [Boolean] Check time-picker/time-picker.jsx file.
 *
 * @return String A string representing the formatted time.
 */
function formatTime(date) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ampm';
  var pedantic = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (!date) return '';
  var hours = date.getHours();
  var mins = date.getMinutes().toString();

  if (format === 'ampm') {
    var isAM = hours < 12;
    hours = hours % 12;
    var additional = isAM ? ' am' : ' pm';
    hours = (hours || 12).toString();

    if (mins.length < 2) mins = '0' + mins;

    if (pedantic) {
      // Treat midday/midnight specially http://www.nist.gov/pml/div688/times.cfm
      if (hours === '12' && mins === '00') {
        return additional === ' pm' ? '12 noon' : '12 midnight';
      }
    }

    return hours + (mins === '00' ? '' : ':' + mins) + additional;
  }

  hours = hours.toString();

  if (hours.length < 2) hours = '0' + hours;
  if (mins.length < 2) mins = '0' + mins;

  return hours + ':' + mins;
}

function rad2deg(rad) {
  return rad * 57.29577951308232;
}

function getTouchEventOffsetValues(event) {
  var el = event.target;
  var boundingRect = el.getBoundingClientRect();

  return {
    offsetX: event.clientX - boundingRect.left,
    offsetY: event.clientY - boundingRect.top
  };
}

function isInner(props) {
  if (props.type !== 'hour') {
    return false;
  }
  return props.value < 1 || props.value > 12;
}

/***/ },

/***/ "./node_modules/material-ui/Toggle/Toggle.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__("./node_modules/material-ui/styles/transitions.js");

var _transitions2 = _interopRequireDefault(_transitions);

var _Paper = __webpack_require__("./node_modules/material-ui/Paper/index.js");

var _Paper2 = _interopRequireDefault(_Paper);

var _EnhancedSwitch = __webpack_require__("./node_modules/material-ui/internal/EnhancedSwitch.js");

var _EnhancedSwitch2 = _interopRequireDefault(_EnhancedSwitch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context, state) {
  var disabled = props.disabled,
      elementStyle = props.elementStyle,
      trackSwitchedStyle = props.trackSwitchedStyle,
      thumbSwitchedStyle = props.thumbSwitchedStyle,
      trackStyle = props.trackStyle,
      thumbStyle = props.thumbStyle,
      iconStyle = props.iconStyle,
      rippleStyle = props.rippleStyle,
      labelStyle = props.labelStyle;
  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      toggle = _context$muiTheme.toggle;


  var toggleSize = 20;
  var toggleTrackWidth = 36;
  var styles = {
    icon: {
      width: 36,
      padding: '4px 0px 6px 2px'
    },
    ripple: {
      top: -10,
      left: -10,
      color: state.switched ? toggle.thumbOnColor : baseTheme.palette.textColor
    },
    toggleElement: {
      width: toggleTrackWidth
    },
    track: {
      transition: _transitions2.default.easeOut(),
      width: '100%',
      height: 14,
      borderRadius: 30,
      backgroundColor: toggle.trackOffColor
    },
    thumb: {
      transition: _transitions2.default.easeOut(),
      position: 'absolute',
      top: 1,
      left: 0,
      width: toggleSize,
      height: toggleSize,
      lineHeight: '24px',
      borderRadius: '50%',
      backgroundColor: toggle.thumbOffColor
    },
    trackWhenSwitched: {
      backgroundColor: toggle.trackOnColor
    },
    thumbWhenSwitched: {
      backgroundColor: toggle.thumbOnColor,
      left: '100%'
    },
    trackWhenDisabled: {
      backgroundColor: toggle.trackDisabledColor
    },
    thumbWhenDisabled: {
      backgroundColor: toggle.thumbDisabledColor
    },
    label: {
      color: disabled ? toggle.labelDisabledColor : toggle.labelColor,
      width: 'calc(100% - ' + (toggleTrackWidth + 10) + 'px)'
    }
  };

  (0, _simpleAssign2.default)(styles.track, trackStyle, state.switched && styles.trackWhenSwitched, state.switched && trackSwitchedStyle, disabled && styles.trackWhenDisabled);

  (0, _simpleAssign2.default)(styles.thumb, thumbStyle, state.switched && styles.thumbWhenSwitched, state.switched && thumbSwitchedStyle, disabled && styles.thumbWhenDisabled);

  if (state.switched) {
    styles.thumb.marginLeft = 0 - styles.thumb.width;
  }

  (0, _simpleAssign2.default)(styles.icon, iconStyle);

  (0, _simpleAssign2.default)(styles.ripple, rippleStyle);

  (0, _simpleAssign2.default)(styles.label, labelStyle);

  (0, _simpleAssign2.default)(styles.toggleElement, elementStyle);

  return styles;
}

var Toggle = function (_Component) {
  (0, _inherits3.default)(Toggle, _Component);

  function Toggle() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Toggle);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Toggle.__proto__ || (0, _getPrototypeOf2.default)(Toggle)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      switched: false
    }, _this.handleStateChange = function (newSwitched) {
      _this.setState({
        switched: newSwitched
      });
    }, _this.handleToggle = function (event, isInputChecked) {
      if (_this.props.onToggle) {
        _this.props.onToggle(event, isInputChecked);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Toggle, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          toggled = _props.toggled,
          defaultToggled = _props.defaultToggled,
          valueLink = _props.valueLink;


      if (toggled || defaultToggled || valueLink && valueLink.value) {
        this.setState({
          switched: true
        });
      }
    }
  }, {
    key: 'isToggled',
    value: function isToggled() {
      return this.refs.enhancedSwitch.isSwitched();
    }
  }, {
    key: 'setToggled',
    value: function setToggled(newToggledValue) {
      this.refs.enhancedSwitch.setSwitched(newToggledValue);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          defaultToggled = _props2.defaultToggled,
          elementStyle = _props2.elementStyle,
          onToggle = _props2.onToggle,
          trackSwitchedStyle = _props2.trackSwitchedStyle,
          thumbSwitchedStyle = _props2.thumbSwitchedStyle,
          toggled = _props2.toggled,
          other = (0, _objectWithoutProperties3.default)(_props2, ['defaultToggled', 'elementStyle', 'onToggle', 'trackSwitchedStyle', 'thumbSwitchedStyle', 'toggled']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context, this.state);

      var toggleElement = _react2.default.createElement(
        'div',
        { style: prepareStyles((0, _simpleAssign2.default)({}, styles.toggleElement)) },
        _react2.default.createElement('div', { style: prepareStyles((0, _simpleAssign2.default)({}, styles.track)) }),
        _react2.default.createElement(_Paper2.default, { style: styles.thumb, circle: true, zDepth: 1 })
      );

      var enhancedSwitchProps = {
        ref: 'enhancedSwitch',
        inputType: 'checkbox',
        switchElement: toggleElement,
        rippleStyle: styles.ripple,
        rippleColor: styles.ripple.color,
        iconStyle: styles.icon,
        trackStyle: styles.track,
        thumbStyle: styles.thumb,
        labelStyle: styles.label,
        switched: this.state.switched,
        onSwitch: this.handleToggle,
        onParentShouldUpdate: this.handleStateChange,
        labelPosition: this.props.labelPosition
      };

      if (this.props.hasOwnProperty('toggled')) {
        enhancedSwitchProps.checked = toggled;
      } else if (this.props.hasOwnProperty('defaultToggled')) {
        enhancedSwitchProps.defaultChecked = defaultToggled;
      }

      return _react2.default.createElement(_EnhancedSwitch2.default, (0, _extends3.default)({}, other, enhancedSwitchProps));
    }
  }]);
  return Toggle;
}(_react.Component);

Toggle.defaultProps = {
  defaultToggled: false,
  disabled: false,
  labelPosition: 'left'
};
Toggle.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? Toggle.propTypes = {
  /**
   * Determines whether the Toggle is initially turned on.
   * **Warning:** This cannot be used in conjunction with `toggled`.
   * Decide between using a controlled or uncontrolled input element and remove one of these props.
   * More info: https://fb.me/react-controlled-components
   */
  defaultToggled: _propTypes2.default.bool,
  /**
   * Will disable the toggle if true.
   */
  disabled: _propTypes2.default.bool,
  /**
   * Overrides the inline-styles of the Toggle element.
   */
  elementStyle: _propTypes2.default.object,
  /**
   * Overrides the inline-styles of the Icon element.
   */
  iconStyle: _propTypes2.default.object,
  /**
   * Overrides the inline-styles of the input element.
   */
  inputStyle: _propTypes2.default.object,
  /**
   * Label for toggle.
   */
  label: _propTypes2.default.node,
  /**
   * Where the label will be placed next to the toggle.
   */
  labelPosition: _propTypes2.default.oneOf(['left', 'right']),
  /**
   * Overrides the inline-styles of the Toggle element label.
   */
  labelStyle: _propTypes2.default.object,
  /**
   * Callback function that is fired when the toggle switch is toggled.
   *
   * @param {object} event Change event targeting the toggle.
   * @param {bool} isInputChecked The new value of the toggle.
   */
  onToggle: _propTypes2.default.func,
  /**
   * Override style of ripple.
   */
  rippleStyle: _propTypes2.default.object,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * Override style for thumb.
   */
  thumbStyle: _propTypes2.default.object,
  /**
  * Override the inline styles for thumb when the toggle switch is toggled on.
  */
  thumbSwitchedStyle: _propTypes2.default.object,
  /**
   * Toggled if set to true.
   */
  toggled: _propTypes2.default.bool,
  /**
   * Override style for track.
   */
  trackStyle: _propTypes2.default.object,
  /**
  * Override the inline styles for track when the toggle switch is toggled on.
  */
  trackSwitchedStyle: _propTypes2.default.object,
  /**
   * ValueLink prop for when using controlled toggle.
   */
  valueLink: _propTypes2.default.object
} : void 0;
exports.default = Toggle;

/***/ },

/***/ "./node_modules/material-ui/Toggle/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Toggle = __webpack_require__("./node_modules/material-ui/Toggle/Toggle.js");

var _Toggle2 = _interopRequireDefault(_Toggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Toggle2.default;

/***/ },

/***/ "./node_modules/material-ui/Toolbar/Toolbar.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var noGutter = props.noGutter;
  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      toolbar = _context$muiTheme.toolbar;


  return {
    root: {
      boxSizing: 'border-box',
      WebkitTapHighlightColor: 'rgba(0,0,0,0)', // Remove mobile color flashing (deprecated)
      backgroundColor: toolbar.backgroundColor,
      height: toolbar.height,
      padding: noGutter ? 0 : '0px ' + baseTheme.spacing.desktopGutter + 'px',
      display: 'flex',
      justifyContent: 'space-between'
    }
  };
}

var Toolbar = function (_Component) {
  (0, _inherits3.default)(Toolbar, _Component);

  function Toolbar() {
    (0, _classCallCheck3.default)(this, Toolbar);
    return (0, _possibleConstructorReturn3.default)(this, (Toolbar.__proto__ || (0, _getPrototypeOf2.default)(Toolbar)).apply(this, arguments));
  }

  (0, _createClass3.default)(Toolbar, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          noGutter = _props.noGutter,
          style = _props.style,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'className', 'noGutter', 'style']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, other, { className: className, style: prepareStyles((0, _simpleAssign2.default)({}, styles.root, style)) }),
        children
      );
    }
  }]);
  return Toolbar;
}(_react.Component);

Toolbar.defaultProps = {
  noGutter: false
};
Toolbar.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? Toolbar.propTypes = {
  /**
   * Can be a `ToolbarGroup` to render a group of related items.
   */
  children: _propTypes2.default.node,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * Do not apply `desktopGutter` to the `Toolbar`.
   */
  noGutter: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : void 0;
exports.default = Toolbar;

/***/ },

/***/ "./node_modules/material-ui/Toolbar/ToolbarGroup.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var firstChild = props.firstChild,
      lastChild = props.lastChild;
  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      button = _context$muiTheme.button,
      toolbar = _context$muiTheme.toolbar;


  var marginHorizontal = baseTheme.spacing.desktopGutter;
  var marginVertical = (toolbar.height - button.height) / 2;

  var styles = {
    root: {
      position: 'relative',
      marginLeft: firstChild ? -marginHorizontal : undefined,
      marginRight: lastChild ? -marginHorizontal : undefined,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    dropDownMenu: {
      root: {
        color: toolbar.color, // removes hover color change, we want to keep it
        marginRight: baseTheme.spacing.desktopGutter,
        flex: 1,
        whiteSpace: 'nowrap'
      },
      controlBg: {
        backgroundColor: toolbar.menuHoverColor,
        borderRadius: 0
      },
      underline: {
        display: 'none'
      }
    },
    button: {
      margin: marginVertical + 'px ' + marginHorizontal + 'px',
      position: 'relative'
    },
    icon: {
      root: {
        cursor: 'pointer',
        lineHeight: toolbar.height + 'px',
        paddingLeft: baseTheme.spacing.desktopGutter
      }
    },
    span: {
      color: toolbar.iconColor,
      lineHeight: toolbar.height + 'px'
    }
  };

  return styles;
}

var ToolbarGroup = function (_Component) {
  (0, _inherits3.default)(ToolbarGroup, _Component);

  function ToolbarGroup() {
    (0, _classCallCheck3.default)(this, ToolbarGroup);
    return (0, _possibleConstructorReturn3.default)(this, (ToolbarGroup.__proto__ || (0, _getPrototypeOf2.default)(ToolbarGroup)).apply(this, arguments));
  }

  (0, _createClass3.default)(ToolbarGroup, [{
    key: 'handleMouseLeaveFontIcon',
    value: function handleMouseLeaveFontIcon(style) {
      return function (event) {
        event.target.style.zIndex = 'auto';
        event.target.style.color = style.root.color;
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          className = _props.className,
          firstChild = _props.firstChild,
          lastChild = _props.lastChild,
          style = _props.style,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'className', 'firstChild', 'lastChild', 'style']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      var newChildren = _react2.default.Children.map(children, function (currentChild) {
        if (!currentChild) {
          return null;
        }
        if (!currentChild.type) {
          return currentChild;
        }
        switch (currentChild.type.muiName) {
          case 'DropDownMenu':
            return _react2.default.cloneElement(currentChild, {
              style: (0, _simpleAssign2.default)({}, styles.dropDownMenu.root, currentChild.props.style),
              underlineStyle: styles.dropDownMenu.underline
            });
          case 'RaisedButton':
          case 'FlatButton':
            return _react2.default.cloneElement(currentChild, {
              style: (0, _simpleAssign2.default)({}, styles.button, currentChild.props.style)
            });
          case 'FontIcon':
            return _react2.default.cloneElement(currentChild, {
              style: (0, _simpleAssign2.default)({}, styles.icon.root, currentChild.props.style),
              color: currentChild.props.color || _this2.context.muiTheme.toolbar.iconColor,
              hoverColor: currentChild.props.hoverColor || _this2.context.muiTheme.toolbar.hoverColor
            });
          case 'ToolbarSeparator':
          case 'ToolbarTitle':
            return _react2.default.cloneElement(currentChild, {
              style: (0, _simpleAssign2.default)({}, styles.span, currentChild.props.style)
            });
          default:
            return currentChild;
        }
      }, this);

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, other, { className: className, style: prepareStyles((0, _simpleAssign2.default)({}, styles.root, style)) }),
        newChildren
      );
    }
  }]);
  return ToolbarGroup;
}(_react.Component);

ToolbarGroup.defaultProps = {
  firstChild: false,
  lastChild: false
};
ToolbarGroup.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? ToolbarGroup.propTypes = {
  /**
   * Can be any node or number of nodes.
   */
  children: _propTypes2.default.node,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * Set this to true for if the `ToolbarGroup` is the first child of `Toolbar`
   * to prevent setting the left gap.
   */
  firstChild: _propTypes2.default.bool,
  /**
   * Set this to true for if the `ToolbarGroup` is the last child of `Toolbar`
   * to prevent setting the right gap.
   */
  lastChild: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : void 0;
exports.default = ToolbarGroup;

/***/ },

/***/ "./node_modules/material-ui/Toolbar/ToolbarSeparator.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      toolbar = _context$muiTheme.toolbar;


  return {
    root: {
      backgroundColor: toolbar.separatorColor,
      display: 'block',
      height: baseTheme.spacing.desktopGutterMore,
      marginLeft: baseTheme.spacing.desktopGutter,
      width: 1
    }
  };
}

var ToolbarSeparator = function (_Component) {
  (0, _inherits3.default)(ToolbarSeparator, _Component);

  function ToolbarSeparator() {
    (0, _classCallCheck3.default)(this, ToolbarSeparator);
    return (0, _possibleConstructorReturn3.default)(this, (ToolbarSeparator.__proto__ || (0, _getPrototypeOf2.default)(ToolbarSeparator)).apply(this, arguments));
  }

  (0, _createClass3.default)(ToolbarSeparator, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          style = _props.style,
          other = (0, _objectWithoutProperties3.default)(_props, ['className', 'style']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      return _react2.default.createElement('span', (0, _extends3.default)({}, other, { className: className, style: prepareStyles((0, _simpleAssign2.default)({}, styles.root, style)) }));
    }
  }]);
  return ToolbarSeparator;
}(_react.Component);

ToolbarSeparator.muiName = 'ToolbarSeparator';
ToolbarSeparator.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? ToolbarSeparator.propTypes = {
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : void 0;
exports.default = ToolbarSeparator;

/***/ },

/***/ "./node_modules/material-ui/Toolbar/ToolbarTitle.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      toolbar = _context$muiTheme.toolbar;


  return {
    root: {
      paddingRight: baseTheme.spacing.desktopGutterLess,
      lineHeight: toolbar.height + 'px',
      fontSize: toolbar.titleFontSize,
      fontFamily: baseTheme.fontFamily,
      position: 'relative',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden'
    }
  };
}

var ToolbarTitle = function (_Component) {
  (0, _inherits3.default)(ToolbarTitle, _Component);

  function ToolbarTitle() {
    (0, _classCallCheck3.default)(this, ToolbarTitle);
    return (0, _possibleConstructorReturn3.default)(this, (ToolbarTitle.__proto__ || (0, _getPrototypeOf2.default)(ToolbarTitle)).apply(this, arguments));
  }

  (0, _createClass3.default)(ToolbarTitle, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          text = _props.text,
          other = (0, _objectWithoutProperties3.default)(_props, ['style', 'text']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      return _react2.default.createElement(
        'span',
        (0, _extends3.default)({
          style: prepareStyles((0, _simpleAssign2.default)({}, styles.root, style))
        }, other),
        text
      );
    }
  }]);
  return ToolbarTitle;
}(_react.Component);

ToolbarTitle.muiName = 'ToolbarTitle';
ToolbarTitle.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? ToolbarTitle.propTypes = {
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * The text to be displayed.
   */
  text: _propTypes2.default.node
} : void 0;
exports.default = ToolbarTitle;

/***/ },

/***/ "./node_modules/material-ui/Toolbar/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ToolbarTitle = exports.ToolbarSeparator = exports.ToolbarGroup = exports.Toolbar = undefined;

var _Toolbar2 = __webpack_require__("./node_modules/material-ui/Toolbar/Toolbar.js");

var _Toolbar3 = _interopRequireDefault(_Toolbar2);

var _ToolbarGroup2 = __webpack_require__("./node_modules/material-ui/Toolbar/ToolbarGroup.js");

var _ToolbarGroup3 = _interopRequireDefault(_ToolbarGroup2);

var _ToolbarSeparator2 = __webpack_require__("./node_modules/material-ui/Toolbar/ToolbarSeparator.js");

var _ToolbarSeparator3 = _interopRequireDefault(_ToolbarSeparator2);

var _ToolbarTitle2 = __webpack_require__("./node_modules/material-ui/Toolbar/ToolbarTitle.js");

var _ToolbarTitle3 = _interopRequireDefault(_ToolbarTitle2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Toolbar = _Toolbar3.default;
exports.ToolbarGroup = _ToolbarGroup3.default;
exports.ToolbarSeparator = _ToolbarSeparator3.default;
exports.ToolbarTitle = _ToolbarTitle3.default;
exports.default = _Toolbar3.default;

/***/ },

/***/ "./node_modules/material-ui/index.es.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AppBar__ = __webpack_require__("./node_modules/material-ui/AppBar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AppBar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__AppBar__);
/* unused harmony reexport AppBar */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AutoComplete__ = __webpack_require__("./node_modules/material-ui/AutoComplete/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AutoComplete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__AutoComplete__);
/* unused harmony reexport AutoComplete */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Avatar__ = __webpack_require__("./node_modules/material-ui/Avatar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Avatar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Avatar__);
/* unused harmony reexport Avatar */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Badge__ = __webpack_require__("./node_modules/material-ui/Badge/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Badge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Badge__);
/* unused harmony reexport Badge */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__BottomNavigation__ = __webpack_require__("./node_modules/material-ui/BottomNavigation/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__BottomNavigation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__BottomNavigation__);
/* unused harmony reexport BottomNavigation */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__BottomNavigation_BottomNavigationItem__ = __webpack_require__("./node_modules/material-ui/BottomNavigation/BottomNavigationItem.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__BottomNavigation_BottomNavigationItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__BottomNavigation_BottomNavigationItem__);
/* unused harmony reexport BottomNavigationItem */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Card__ = __webpack_require__("./node_modules/material-ui/Card/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Card__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_6__Card___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Card_CardActions__ = __webpack_require__("./node_modules/material-ui/Card/CardActions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Card_CardActions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__Card_CardActions__);
/* unused harmony reexport CardActions */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Card_CardHeader__ = __webpack_require__("./node_modules/material-ui/Card/CardHeader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Card_CardHeader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__Card_CardHeader__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(exports, "g", function() { return __WEBPACK_IMPORTED_MODULE_8__Card_CardHeader___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Card_CardMedia__ = __webpack_require__("./node_modules/material-ui/Card/CardMedia.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Card_CardMedia___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__Card_CardMedia__);
/* unused harmony reexport CardMedia */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Card_CardTitle__ = __webpack_require__("./node_modules/material-ui/Card/CardTitle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Card_CardTitle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__Card_CardTitle__);
/* unused harmony reexport CardTitle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Card_CardText__ = __webpack_require__("./node_modules/material-ui/Card/CardText.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Card_CardText___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__Card_CardText__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_11__Card_CardText___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Checkbox__ = __webpack_require__("./node_modules/material-ui/Checkbox/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Checkbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__Checkbox__);
/* unused harmony reexport Checkbox */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Chip__ = __webpack_require__("./node_modules/material-ui/Chip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Chip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__Chip__);
/* unused harmony reexport Chip */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__CircularProgress__ = __webpack_require__("./node_modules/material-ui/CircularProgress/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__CircularProgress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__CircularProgress__);
/* unused harmony reexport CircularProgress */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__DatePicker__ = __webpack_require__("./node_modules/material-ui/DatePicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__DatePicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__DatePicker__);
/* unused harmony reexport DatePicker */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Dialog__ = __webpack_require__("./node_modules/material-ui/Dialog/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__Dialog__);
/* unused harmony reexport Dialog */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__Divider__ = __webpack_require__("./node_modules/material-ui/Divider/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__Divider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__Divider__);
/* unused harmony reexport Divider */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__Drawer__ = __webpack_require__("./node_modules/material-ui/Drawer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__Drawer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__Drawer__);
/* unused harmony reexport Drawer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__DropDownMenu__ = __webpack_require__("./node_modules/material-ui/DropDownMenu/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__DropDownMenu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19__DropDownMenu__);
/* unused harmony reexport DropDownMenu */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__FlatButton__ = __webpack_require__("./node_modules/material-ui/FlatButton/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__FlatButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20__FlatButton__);
/* unused harmony reexport FlatButton */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__FloatingActionButton__ = __webpack_require__("./node_modules/material-ui/FloatingActionButton/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__FloatingActionButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21__FloatingActionButton__);
/* unused harmony reexport FloatingActionButton */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__FontIcon__ = __webpack_require__("./node_modules/material-ui/FontIcon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__FontIcon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22__FontIcon__);
/* unused harmony reexport FontIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__GridList__ = __webpack_require__("./node_modules/material-ui/GridList/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__GridList___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23__GridList__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(exports, "e", function() { return __WEBPACK_IMPORTED_MODULE_23__GridList___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__GridList_GridTile__ = __webpack_require__("./node_modules/material-ui/GridList/GridTile.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__GridList_GridTile___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24__GridList_GridTile__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(exports, "f", function() { return __WEBPACK_IMPORTED_MODULE_24__GridList_GridTile___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__IconButton__ = __webpack_require__("./node_modules/material-ui/IconButton/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25__IconButton__);
/* unused harmony reexport IconButton */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__IconMenu__ = __webpack_require__("./node_modules/material-ui/IconMenu/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__IconMenu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26__IconMenu__);
/* unused harmony reexport IconMenu */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__LinearProgress__ = __webpack_require__("./node_modules/material-ui/LinearProgress/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__LinearProgress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27__LinearProgress__);
/* unused harmony reexport LinearProgress */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__List__ = __webpack_require__("./node_modules/material-ui/List/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__List___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28__List__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(exports, "c", function() { return __WEBPACK_IMPORTED_MODULE_28__List___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__List_ListItem__ = __webpack_require__("./node_modules/material-ui/List/ListItem.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__List_ListItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29__List_ListItem__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(exports, "d", function() { return __WEBPACK_IMPORTED_MODULE_29__List_ListItem___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__List_makeSelectable__ = __webpack_require__("./node_modules/material-ui/List/makeSelectable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__List_makeSelectable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30__List_makeSelectable__);
/* unused harmony reexport makeSelectable */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__Menu__ = __webpack_require__("./node_modules/material-ui/Menu/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__Menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_31__Menu__);
/* unused harmony reexport Menu */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__MenuItem__ = __webpack_require__("./node_modules/material-ui/MenuItem/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__MenuItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_32__MenuItem__);
/* unused harmony reexport MenuItem */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__styles_MuiThemeProvider__ = __webpack_require__("./node_modules/material-ui/styles/MuiThemeProvider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__styles_MuiThemeProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_33__styles_MuiThemeProvider__);
/* unused harmony reexport MuiThemeProvider */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__Paper__ = __webpack_require__("./node_modules/material-ui/Paper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__Paper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_34__Paper__);
/* unused harmony reexport Paper */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__Popover__ = __webpack_require__("./node_modules/material-ui/Popover/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__Popover___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_35__Popover__);
/* unused harmony reexport Popover */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__RadioButton__ = __webpack_require__("./node_modules/material-ui/RadioButton/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__RadioButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_36__RadioButton__);
/* unused harmony reexport RadioButton */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__RadioButton_RadioButtonGroup__ = __webpack_require__("./node_modules/material-ui/RadioButton/RadioButtonGroup.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__RadioButton_RadioButtonGroup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_37__RadioButton_RadioButtonGroup__);
/* unused harmony reexport RadioButtonGroup */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__RaisedButton__ = __webpack_require__("./node_modules/material-ui/RaisedButton/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__RaisedButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_38__RaisedButton__);
/* unused harmony reexport RaisedButton */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__RefreshIndicator__ = __webpack_require__("./node_modules/material-ui/RefreshIndicator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__RefreshIndicator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_39__RefreshIndicator__);
/* unused harmony reexport RefreshIndicator */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__SelectField__ = __webpack_require__("./node_modules/material-ui/SelectField/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__SelectField___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_40__SelectField__);
/* unused harmony reexport SelectField */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__Slider__ = __webpack_require__("./node_modules/material-ui/Slider/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__Slider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_41__Slider__);
/* unused harmony reexport Slider */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__Subheader__ = __webpack_require__("./node_modules/material-ui/Subheader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__Subheader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_42__Subheader__);
/* unused harmony reexport Subheader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__SvgIcon__ = __webpack_require__("./node_modules/material-ui/SvgIcon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__SvgIcon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_43__SvgIcon__);
/* unused harmony reexport SvgIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__Stepper_Step__ = __webpack_require__("./node_modules/material-ui/Stepper/Step.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__Stepper_Step___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_44__Stepper_Step__);
/* unused harmony reexport Step */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__Stepper_StepButton__ = __webpack_require__("./node_modules/material-ui/Stepper/StepButton.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__Stepper_StepButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_45__Stepper_StepButton__);
/* unused harmony reexport StepButton */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__Stepper_StepContent__ = __webpack_require__("./node_modules/material-ui/Stepper/StepContent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__Stepper_StepContent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_46__Stepper_StepContent__);
/* unused harmony reexport StepContent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__Stepper_StepLabel__ = __webpack_require__("./node_modules/material-ui/Stepper/StepLabel.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__Stepper_StepLabel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_47__Stepper_StepLabel__);
/* unused harmony reexport StepLabel */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__Stepper_Stepper__ = __webpack_require__("./node_modules/material-ui/Stepper/Stepper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__Stepper_Stepper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_48__Stepper_Stepper__);
/* unused harmony reexport Stepper */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__Snackbar__ = __webpack_require__("./node_modules/material-ui/Snackbar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__Snackbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_49__Snackbar__);
/* unused harmony reexport Snackbar */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__Tabs__ = __webpack_require__("./node_modules/material-ui/Tabs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__Tabs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_50__Tabs__);
/* unused harmony reexport Tabs */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__Tabs_Tab__ = __webpack_require__("./node_modules/material-ui/Tabs/Tab.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__Tabs_Tab___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_51__Tabs_Tab__);
/* unused harmony reexport Tab */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__Table__ = __webpack_require__("./node_modules/material-ui/Table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__Table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_52__Table__);
/* unused harmony reexport Table */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__Table_TableBody__ = __webpack_require__("./node_modules/material-ui/Table/TableBody.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__Table_TableBody___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_53__Table_TableBody__);
/* unused harmony reexport TableBody */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__Table_TableFooter__ = __webpack_require__("./node_modules/material-ui/Table/TableFooter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__Table_TableFooter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_54__Table_TableFooter__);
/* unused harmony reexport TableFooter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__Table_TableHeader__ = __webpack_require__("./node_modules/material-ui/Table/TableHeader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__Table_TableHeader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_55__Table_TableHeader__);
/* unused harmony reexport TableHeader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__Table_TableHeaderColumn__ = __webpack_require__("./node_modules/material-ui/Table/TableHeaderColumn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__Table_TableHeaderColumn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_56__Table_TableHeaderColumn__);
/* unused harmony reexport TableHeaderColumn */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__Table_TableRow__ = __webpack_require__("./node_modules/material-ui/Table/TableRow.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__Table_TableRow___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_57__Table_TableRow__);
/* unused harmony reexport TableRow */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__Table_TableRowColumn__ = __webpack_require__("./node_modules/material-ui/Table/TableRowColumn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__Table_TableRowColumn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_58__Table_TableRowColumn__);
/* unused harmony reexport TableRowColumn */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__TextField__ = __webpack_require__("./node_modules/material-ui/TextField/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__TextField___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_59__TextField__);
/* unused harmony reexport TextField */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__TimePicker__ = __webpack_require__("./node_modules/material-ui/TimePicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__TimePicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_60__TimePicker__);
/* unused harmony reexport TimePicker */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__Toggle__ = __webpack_require__("./node_modules/material-ui/Toggle/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__Toggle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_61__Toggle__);
/* unused harmony reexport Toggle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__Toolbar__ = __webpack_require__("./node_modules/material-ui/Toolbar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__Toolbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_62__Toolbar__);
/* unused harmony reexport Toolbar */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__Toolbar_ToolbarGroup__ = __webpack_require__("./node_modules/material-ui/Toolbar/ToolbarGroup.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__Toolbar_ToolbarGroup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_63__Toolbar_ToolbarGroup__);
/* unused harmony reexport ToolbarGroup */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__Toolbar_ToolbarSeparator__ = __webpack_require__("./node_modules/material-ui/Toolbar/ToolbarSeparator.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__Toolbar_ToolbarSeparator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_64__Toolbar_ToolbarSeparator__);
/* unused harmony reexport ToolbarSeparator */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__Toolbar_ToolbarTitle__ = __webpack_require__("./node_modules/material-ui/Toolbar/ToolbarTitle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__Toolbar_ToolbarTitle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_65__Toolbar_ToolbarTitle__);
/* unused harmony reexport ToolbarTitle */






































































































































/***/ },

/***/ "./node_modules/material-ui/internal/AutoLockScrolling.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var originalBodyOverflow = null;
var lockingCounter = 0;

var AutoLockScrolling = function (_Component) {
  (0, _inherits3.default)(AutoLockScrolling, _Component);

  function AutoLockScrolling() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, AutoLockScrolling);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = AutoLockScrolling.__proto__ || (0, _getPrototypeOf2.default)(AutoLockScrolling)).call.apply(_ref, [this].concat(args))), _this), _this.locked = false, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(AutoLockScrolling, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.lock === true) {
        this.preventScrolling();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.lock !== nextProps.lock) {
        if (nextProps.lock) {
          this.preventScrolling();
        } else {
          this.allowScrolling();
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.allowScrolling();
    }

    // force to only lock/unlock once

  }, {
    key: 'preventScrolling',
    value: function preventScrolling() {
      if (this.locked === true) {
        return;
      }

      lockingCounter = lockingCounter + 1;
      this.locked = true;

      // only lock the first time the component is mounted.
      if (lockingCounter === 1) {
        var body = document.getElementsByTagName('body')[0];
        originalBodyOverflow = body.style.overflow;
        body.style.overflow = 'hidden';
      }
    }
  }, {
    key: 'allowScrolling',
    value: function allowScrolling() {
      if (this.locked === true) {
        lockingCounter = lockingCounter - 1;
        this.locked = false;
      }

      if (lockingCounter === 0 && originalBodyOverflow !== null) {
        var body = document.getElementsByTagName('body')[0];
        body.style.overflow = originalBodyOverflow || '';
        originalBodyOverflow = null;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);
  return AutoLockScrolling;
}(_react.Component);

undefined !== "production" ? AutoLockScrolling.propTypes = {
  lock: _propTypes2.default.bool.isRequired
} : void 0;
exports.default = AutoLockScrolling;

/***/ },

/***/ "./node_modules/material-ui/internal/BeforeAfterWrapper.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  BeforeAfterWrapper
 *    An alternative for the ::before and ::after css pseudo-elements for
 *    components whose styles are defined in javascript instead of css.
 *
 *  Usage: For the element that we want to apply before and after elements to,
 *    wrap its children with BeforeAfterWrapper. For example:
 *
 *                                            <Paper>
 *  <Paper>                                     <div> // See notice
 *    <BeforeAfterWrapper>        renders         <div/> // before element
 *      [children of paper]       ------>         [children of paper]
 *    </BeforeAfterWrapper>                       <div/> // after element
 *  </Paper>                                    </div>
 *                                            </Paper>
 *
 *  Notice: Notice that this div bundles together our elements. If the element
 *    that we want to apply before and after elements is a HTML tag (i.e. a
 *    div, p, or button tag), we can avoid this extra nesting by passing using
 *    the BeforeAfterWrapper in place of said tag like so:
 *
 *  <p>
 *    <BeforeAfterWrapper>   do this instead   <BeforeAfterWrapper elementType='p'>
 *      [children of p]          ------>         [children of p]
 *    </BeforeAfterWrapper>                    </BeforeAfterWrapper>
 *  </p>
 *
 *  BeforeAfterWrapper features spread functionality. This means that we can
 *  pass HTML tag properties directly into the BeforeAfterWrapper tag.
 *
 *  When using BeforeAfterWrapper, ensure that the parent of the beforeElement
 *  and afterElement have a defined style position.
 */

var styles = {
  box: {
    boxSizing: 'border-box'
  }
};

var BeforeAfterWrapper = function (_Component) {
  (0, _inherits3.default)(BeforeAfterWrapper, _Component);

  function BeforeAfterWrapper() {
    (0, _classCallCheck3.default)(this, BeforeAfterWrapper);
    return (0, _possibleConstructorReturn3.default)(this, (BeforeAfterWrapper.__proto__ || (0, _getPrototypeOf2.default)(BeforeAfterWrapper)).apply(this, arguments));
  }

  (0, _createClass3.default)(BeforeAfterWrapper, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          beforeStyle = _props.beforeStyle,
          afterStyle = _props.afterStyle,
          beforeElementType = _props.beforeElementType,
          afterElementType = _props.afterElementType,
          elementType = _props.elementType,
          other = (0, _objectWithoutProperties3.default)(_props, ['beforeStyle', 'afterStyle', 'beforeElementType', 'afterElementType', 'elementType']);
      var prepareStyles = this.context.muiTheme.prepareStyles;


      var beforeElement = void 0;
      var afterElement = void 0;

      if (beforeStyle) {
        beforeElement = _react2.default.createElement(this.props.beforeElementType, {
          style: prepareStyles((0, _simpleAssign2.default)({}, styles.box, beforeStyle)),
          key: '::before'
        });
      }

      if (afterStyle) {
        afterElement = _react2.default.createElement(this.props.afterElementType, {
          style: prepareStyles((0, _simpleAssign2.default)({}, styles.box, afterStyle)),
          key: '::after'
        });
      }

      var children = [beforeElement, this.props.children, afterElement];

      var props = other;
      props.style = prepareStyles((0, _simpleAssign2.default)({}, this.props.style));

      return _react2.default.createElement(this.props.elementType, props, children);
    }
  }]);
  return BeforeAfterWrapper;
}(_react.Component);

BeforeAfterWrapper.defaultProps = {
  beforeElementType: 'div',
  afterElementType: 'div',
  elementType: 'div'
};
BeforeAfterWrapper.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? BeforeAfterWrapper.propTypes = {
  afterElementType: _propTypes2.default.string,
  afterStyle: _propTypes2.default.object,
  beforeElementType: _propTypes2.default.string,
  beforeStyle: _propTypes2.default.object,
  children: _propTypes2.default.node,
  elementType: _propTypes2.default.string,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : void 0;
exports.default = BeforeAfterWrapper;

/***/ },

/***/ "./node_modules/material-ui/internal/ClearFix.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _BeforeAfterWrapper = __webpack_require__("./node_modules/material-ui/internal/BeforeAfterWrapper.js");

var _BeforeAfterWrapper2 = _interopRequireDefault(_BeforeAfterWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  before: {
    content: "' '",
    display: 'table'
  },
  after: {
    content: "' '",
    clear: 'both',
    display: 'table'
  }
};

var ClearFix = function ClearFix(_ref) {
  var style = _ref.style,
      children = _ref.children,
      other = (0, _objectWithoutProperties3.default)(_ref, ['style', 'children']);
  return _react2.default.createElement(
    _BeforeAfterWrapper2.default,
    (0, _extends3.default)({}, other, {
      beforeStyle: styles.before,
      afterStyle: styles.after,
      style: style
    }),
    children
  );
};

ClearFix.muiName = 'ClearFix';

undefined !== "production" ? ClearFix.propTypes = {
  children: _propTypes2.default.node,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : void 0;

exports.default = ClearFix;

/***/ },

/***/ "./node_modules/material-ui/internal/EnhancedSwitch.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactEventListener = __webpack_require__("./node_modules/react-event-listener/lib/index.js");

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _keycode = __webpack_require__("./node_modules/keycode/index.js");

var _keycode2 = _interopRequireDefault(_keycode);

var _transitions = __webpack_require__("./node_modules/material-ui/styles/transitions.js");

var _transitions2 = _interopRequireDefault(_transitions);

var _FocusRipple = __webpack_require__("./node_modules/material-ui/internal/FocusRipple.js");

var _FocusRipple2 = _interopRequireDefault(_FocusRipple);

var _TouchRipple = __webpack_require__("./node_modules/material-ui/internal/TouchRipple.js");

var _TouchRipple2 = _interopRequireDefault(_TouchRipple);

var _Paper = __webpack_require__("./node_modules/material-ui/Paper/index.js");

var _Paper2 = _interopRequireDefault(_Paper);

var _warning = __webpack_require__("./node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var baseTheme = context.muiTheme.baseTheme;


  return {
    root: {
      cursor: props.disabled ? 'not-allowed' : 'pointer',
      position: 'relative',
      overflow: 'visible',
      display: 'table',
      height: 'auto',
      width: '100%'
    },
    input: {
      position: 'absolute',
      cursor: 'inherit',
      pointerEvents: 'all',
      opacity: 0,
      width: '100%',
      height: '100%',
      zIndex: 2,
      left: 0,
      boxSizing: 'border-box',
      padding: 0,
      margin: 0
    },
    controls: {
      display: 'flex',
      width: '100%',
      height: '100%'
    },
    label: {
      float: 'left',
      position: 'relative',
      display: 'block',
      width: 'calc(100% - 60px)',
      lineHeight: '24px',
      color: baseTheme.palette.textColor,
      fontFamily: baseTheme.fontFamily
    },
    wrap: {
      transition: _transitions2.default.easeOut(),
      float: 'left',
      position: 'relative',
      display: 'block',
      flexShrink: 0,
      width: 60 - baseTheme.spacing.desktopGutterLess,
      marginRight: props.labelPosition === 'right' ? baseTheme.spacing.desktopGutterLess : 0,
      marginLeft: props.labelPosition === 'left' ? baseTheme.spacing.desktopGutterLess : 0
    },
    ripple: {
      color: props.rippleColor || baseTheme.palette.primary1Color,
      height: '200%',
      width: '200%',
      top: -12,
      left: -12
    }
  };
}

var EnhancedSwitch = function (_Component) {
  (0, _inherits3.default)(EnhancedSwitch, _Component);

  function EnhancedSwitch() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, EnhancedSwitch);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = EnhancedSwitch.__proto__ || (0, _getPrototypeOf2.default)(EnhancedSwitch)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isKeyboardFocused: false
    }, _this.handleChange = function (event) {
      _this.tabPressed = false;
      _this.setState({
        isKeyboardFocused: false
      });

      var isInputChecked = _this.refs.checkbox.checked;

      if (!_this.props.hasOwnProperty('checked') && _this.props.onParentShouldUpdate) {
        _this.props.onParentShouldUpdate(isInputChecked);
      }

      if (_this.props.onSwitch) {
        _this.props.onSwitch(event, isInputChecked);
      }
    }, _this.handleKeyDown = function (event) {
      var code = (0, _keycode2.default)(event);

      if (code === 'tab') {
        _this.tabPressed = true;
      }
      if (_this.state.isKeyboardFocused && code === 'space') {
        _this.handleChange(event);
      }
    }, _this.handleKeyUp = function (event) {
      if (_this.state.isKeyboardFocused && (0, _keycode2.default)(event) === 'space') {
        _this.handleChange(event);
      }
    }, _this.handleMouseDown = function (event) {
      // only listen to left clicks
      if (event.button === 0) {
        _this.refs.touchRipple.start(event);
      }
    }, _this.handleMouseUp = function () {
      _this.refs.touchRipple.end();
    }, _this.handleMouseLeave = function () {
      _this.refs.touchRipple.end();
    }, _this.handleTouchStart = function (event) {
      _this.refs.touchRipple.start(event);
    }, _this.handleTouchEnd = function () {
      _this.refs.touchRipple.end();
    }, _this.handleBlur = function (event) {
      _this.setState({
        isKeyboardFocused: false
      });

      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }
    }, _this.handleFocus = function (event) {
      // setTimeout is needed becuase the focus event fires first
      // Wait so that we can capture if this was a keyboard focus
      // or touch focus
      setTimeout(function () {
        if (_this.tabPressed) {
          _this.setState({
            isKeyboardFocused: true
          });
        }
      }, 150);

      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(EnhancedSwitch, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var inputNode = this.refs.checkbox;
      if ((!this.props.switched || inputNode.checked !== this.props.switched) && this.props.onParentShouldUpdate) {
        this.props.onParentShouldUpdate(inputNode.checked);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var hasCheckedProp = nextProps.hasOwnProperty('checked');
      var hasNewDefaultProp = nextProps.hasOwnProperty('defaultChecked') && nextProps.defaultChecked !== this.props.defaultChecked;

      if (hasCheckedProp || hasNewDefaultProp) {
        var switched = nextProps.checked || nextProps.defaultChecked || false;

        this.setState({
          switched: switched
        });

        if (this.props.onParentShouldUpdate && switched !== this.props.switched) {
          this.props.onParentShouldUpdate(switched);
        }
      }
    }
  }, {
    key: 'isSwitched',
    value: function isSwitched() {
      return this.refs.checkbox.checked;
    }

    // no callback here because there is no event

  }, {
    key: 'setSwitched',
    value: function setSwitched(newSwitchedValue) {
      if (!this.props.hasOwnProperty('checked') || this.props.checked === false) {
        if (this.props.onParentShouldUpdate) {
          this.props.onParentShouldUpdate(newSwitchedValue);
        }
        this.refs.checkbox.checked = newSwitchedValue;
      } else {
        undefined !== "production" ? (0, _warning2.default)(false, 'Material-UI: Cannot call set method while checked is defined as a property.') : void 0;
      }
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.refs.checkbox.value;
    }

    // Checkbox inputs only use SPACE to change their state. Using ENTER will
    // update the ui but not the input.


    /**
     * Because both the ripples and the checkbox input cannot share pointer
     * events, the checkbox input takes control of pointer events and calls
     * ripple animations manually.
     */

  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          name = _props.name,
          value = _props.value,
          iconStyle = _props.iconStyle,
          inputStyle = _props.inputStyle,
          inputType = _props.inputType,
          label = _props.label,
          labelStyle = _props.labelStyle,
          labelPosition = _props.labelPosition,
          onSwitch = _props.onSwitch,
          onBlur = _props.onBlur,
          onFocus = _props.onFocus,
          onMouseUp = _props.onMouseUp,
          onMouseDown = _props.onMouseDown,
          onMouseLeave = _props.onMouseLeave,
          onTouchStart = _props.onTouchStart,
          onTouchEnd = _props.onTouchEnd,
          onParentShouldUpdate = _props.onParentShouldUpdate,
          disabled = _props.disabled,
          disableTouchRipple = _props.disableTouchRipple,
          disableFocusRipple = _props.disableFocusRipple,
          className = _props.className,
          rippleColor = _props.rippleColor,
          rippleStyle = _props.rippleStyle,
          style = _props.style,
          switched = _props.switched,
          switchElement = _props.switchElement,
          thumbStyle = _props.thumbStyle,
          trackStyle = _props.trackStyle,
          other = (0, _objectWithoutProperties3.default)(_props, ['name', 'value', 'iconStyle', 'inputStyle', 'inputType', 'label', 'labelStyle', 'labelPosition', 'onSwitch', 'onBlur', 'onFocus', 'onMouseUp', 'onMouseDown', 'onMouseLeave', 'onTouchStart', 'onTouchEnd', 'onParentShouldUpdate', 'disabled', 'disableTouchRipple', 'disableFocusRipple', 'className', 'rippleColor', 'rippleStyle', 'style', 'switched', 'switchElement', 'thumbStyle', 'trackStyle']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);
      var wrapStyles = (0, _simpleAssign2.default)(styles.wrap, iconStyle);
      var mergedRippleStyle = (0, _simpleAssign2.default)(styles.ripple, rippleStyle);

      if (thumbStyle) {
        wrapStyles.marginLeft /= 2;
        wrapStyles.marginRight /= 2;
      }

      var labelElement = label && _react2.default.createElement(
        'label',
        { style: prepareStyles((0, _simpleAssign2.default)(styles.label, labelStyle)) },
        label
      );

      var showTouchRipple = !disabled && !disableTouchRipple;
      var showFocusRipple = !disabled && !disableFocusRipple;

      var touchRipple = _react2.default.createElement(_TouchRipple2.default, {
        ref: 'touchRipple',
        key: 'touchRipple',
        style: mergedRippleStyle,
        color: mergedRippleStyle.color,
        muiTheme: this.context.muiTheme,
        centerRipple: true
      });

      var focusRipple = _react2.default.createElement(_FocusRipple2.default, {
        key: 'focusRipple',
        innerStyle: mergedRippleStyle,
        color: mergedRippleStyle.color,
        muiTheme: this.context.muiTheme,
        show: this.state.isKeyboardFocused
      });

      var ripples = [showTouchRipple ? touchRipple : null, showFocusRipple ? focusRipple : null];

      var inputElement = _react2.default.createElement('input', (0, _extends3.default)({}, other, {
        ref: 'checkbox',
        type: inputType,
        style: prepareStyles((0, _simpleAssign2.default)(styles.input, inputStyle)),
        name: name,
        value: value,
        disabled: disabled,
        onBlur: this.handleBlur,
        onFocus: this.handleFocus,
        onChange: this.handleChange,
        onMouseUp: showTouchRipple && this.handleMouseUp,
        onMouseDown: showTouchRipple && this.handleMouseDown,
        onMouseLeave: showTouchRipple && this.handleMouseLeave,
        onTouchStart: showTouchRipple && this.handleTouchStart,
        onTouchEnd: showTouchRipple && this.handleTouchEnd
      }));

      // If toggle component (indicated by whether the style includes thumb) manually lay out
      // elements in order to nest ripple elements
      var switchOrThumbElement = !thumbStyle ? _react2.default.createElement(
        'div',
        { style: prepareStyles(wrapStyles) },
        switchElement,
        ripples
      ) : _react2.default.createElement(
        'div',
        { style: prepareStyles(wrapStyles) },
        _react2.default.createElement('div', { style: prepareStyles((0, _simpleAssign2.default)({}, trackStyle)) }),
        _react2.default.createElement(
          _Paper2.default,
          { style: thumbStyle, zDepth: 1, circle: true },
          ' ',
          ripples,
          ' '
        )
      );

      var elementsInOrder = labelPosition === 'right' ? _react2.default.createElement(
        'div',
        { style: styles.controls },
        switchOrThumbElement,
        labelElement
      ) : _react2.default.createElement(
        'div',
        { style: styles.controls },
        labelElement,
        switchOrThumbElement
      );

      return _react2.default.createElement(
        'div',
        { ref: 'root', className: className, style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) },
        _react2.default.createElement(_reactEventListener2.default, {
          target: 'window',
          onKeyDown: this.handleKeyDown,
          onKeyUp: this.handleKeyUp
        }),
        inputElement,
        elementsInOrder
      );
    }
  }]);
  return EnhancedSwitch;
}(_react.Component);

EnhancedSwitch.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? EnhancedSwitch.propTypes = {
  checked: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  defaultChecked: _propTypes2.default.bool,
  disableFocusRipple: _propTypes2.default.bool,
  disableTouchRipple: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  iconStyle: _propTypes2.default.object,
  inputStyle: _propTypes2.default.object,
  inputType: _propTypes2.default.string.isRequired,
  label: _propTypes2.default.node,
  labelPosition: _propTypes2.default.oneOf(['left', 'right']),
  labelStyle: _propTypes2.default.object,
  name: _propTypes2.default.string,
  onBlur: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onMouseDown: _propTypes2.default.func,
  onMouseLeave: _propTypes2.default.func,
  onMouseUp: _propTypes2.default.func,
  onParentShouldUpdate: _propTypes2.default.func,
  onSwitch: _propTypes2.default.func,
  onTouchEnd: _propTypes2.default.func,
  onTouchStart: _propTypes2.default.func,
  rippleColor: _propTypes2.default.string,
  rippleStyle: _propTypes2.default.object,
  style: _propTypes2.default.object,
  switchElement: _propTypes2.default.element.isRequired,
  switched: _propTypes2.default.bool.isRequired,
  thumbStyle: _propTypes2.default.object,
  trackStyle: _propTypes2.default.object,
  value: _propTypes2.default.any
} : void 0;
exports.default = EnhancedSwitch;

/***/ },

/***/ "./node_modules/material-ui/internal/ExpandTransition.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TransitionGroup = __webpack_require__("./node_modules/react-transition-group/TransitionGroup.js");

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

var _ExpandTransitionChild = __webpack_require__("./node_modules/material-ui/internal/ExpandTransitionChild.js");

var _ExpandTransitionChild2 = _interopRequireDefault(_ExpandTransitionChild);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ExpandTransition = function (_Component) {
  (0, _inherits3.default)(ExpandTransition, _Component);

  function ExpandTransition() {
    (0, _classCallCheck3.default)(this, ExpandTransition);
    return (0, _possibleConstructorReturn3.default)(this, (ExpandTransition.__proto__ || (0, _getPrototypeOf2.default)(ExpandTransition)).apply(this, arguments));
  }

  (0, _createClass3.default)(ExpandTransition, [{
    key: 'renderChildren',
    value: function renderChildren(children) {
      var _props = this.props,
          enterDelay = _props.enterDelay,
          transitionDelay = _props.transitionDelay,
          transitionDuration = _props.transitionDuration;

      return _react2.default.Children.map(children, function (child) {
        return _react2.default.createElement(
          _ExpandTransitionChild2.default,
          {
            enterDelay: enterDelay,
            transitionDelay: transitionDelay,
            transitionDuration: transitionDuration,
            key: child.key
          },
          child
        );
      }, this);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          enterDelay = _props2.enterDelay,
          loading = _props2.loading,
          open = _props2.open,
          style = _props2.style,
          transitionDelay = _props2.transitionDelay,
          transitionDuration = _props2.transitionDuration,
          other = (0, _objectWithoutProperties3.default)(_props2, ['children', 'enterDelay', 'loading', 'open', 'style', 'transitionDelay', 'transitionDuration']);
      var prepareStyles = this.context.muiTheme.prepareStyles;


      var mergedRootStyles = (0, _simpleAssign2.default)({}, {
        position: 'relative',
        overflow: 'hidden',
        height: 'auto'
      }, style);

      var newChildren = loading ? [] : this.renderChildren(children);

      return _react2.default.createElement(
        _TransitionGroup2.default,
        (0, _extends3.default)({
          style: prepareStyles(mergedRootStyles),
          component: 'div'
        }, other),
        open && newChildren
      );
    }
  }]);
  return ExpandTransition;
}(_react.Component);

ExpandTransition.defaultProps = {
  enterDelay: 0,
  transitionDelay: 0,
  transitionDuration: 450,
  loading: false,
  open: false
};
ExpandTransition.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? ExpandTransition.propTypes = {
  children: _propTypes2.default.node,
  enterDelay: _propTypes2.default.number,
  loading: _propTypes2.default.bool,
  open: _propTypes2.default.bool,
  style: _propTypes2.default.object,
  transitionDelay: _propTypes2.default.number,
  transitionDuration: _propTypes2.default.number
} : void 0;
exports.default = ExpandTransition;

/***/ },

/***/ "./node_modules/material-ui/internal/ExpandTransitionChild.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__("./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _transitions = __webpack_require__("./node_modules/material-ui/styles/transitions.js");

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reflow = function reflow(elem) {
  return elem.offsetHeight;
};

var ExpandTransitionChild = function (_Component) {
  (0, _inherits3.default)(ExpandTransitionChild, _Component);

  function ExpandTransitionChild() {
    (0, _classCallCheck3.default)(this, ExpandTransitionChild);
    return (0, _possibleConstructorReturn3.default)(this, (ExpandTransitionChild.__proto__ || (0, _getPrototypeOf2.default)(ExpandTransitionChild)).apply(this, arguments));
  }

  (0, _createClass3.default)(ExpandTransitionChild, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.enterTimer);
      clearTimeout(this.enteredTimer);
      clearTimeout(this.leaveTimer);
    }
  }, {
    key: 'componentWillAppear',
    value: function componentWillAppear(callback) {
      this.open();
      callback();
    }
  }, {
    key: 'componentDidAppear',
    value: function componentDidAppear() {
      this.setAutoHeight();
    }
  }, {
    key: 'componentWillEnter',
    value: function componentWillEnter(callback) {
      var _this2 = this;

      var _props = this.props,
          enterDelay = _props.enterDelay,
          transitionDelay = _props.transitionDelay,
          transitionDuration = _props.transitionDuration;

      var element = _reactDom2.default.findDOMNode(this);
      element.style.height = 0;
      this.enterTimer = setTimeout(function () {
        return _this2.open();
      }, enterDelay);
      this.enteredTimer = setTimeout(function () {
        return callback();
      }, enterDelay + transitionDelay + transitionDuration);
    }
  }, {
    key: 'componentDidEnter',
    value: function componentDidEnter() {
      this.setAutoHeight();
    }
  }, {
    key: 'componentWillLeave',
    value: function componentWillLeave(callback) {
      var _props2 = this.props,
          transitionDelay = _props2.transitionDelay,
          transitionDuration = _props2.transitionDuration;

      var element = _reactDom2.default.findDOMNode(this);
      // Set fixed height first for animated property value
      element.style.height = this.refs.wrapper.clientHeight + 'px';
      reflow(element);
      element.style.transitionDuration = transitionDuration + 'ms';
      element.style.height = 0;
      this.leaveTimer = setTimeout(function () {
        return callback();
      }, transitionDelay + transitionDuration);
    }
  }, {
    key: 'setAutoHeight',
    value: function setAutoHeight() {
      var _ReactDOM$findDOMNode = _reactDom2.default.findDOMNode(this),
          style = _ReactDOM$findDOMNode.style;

      style.transitionDuration = 0;
      style.height = 'auto';
    }
  }, {
    key: 'open',
    value: function open() {
      var element = _reactDom2.default.findDOMNode(this);
      element.style.height = this.refs.wrapper.clientHeight + 'px';
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          children = _props3.children,
          enterDelay = _props3.enterDelay,
          style = _props3.style,
          transitionDelay = _props3.transitionDelay,
          transitionDuration = _props3.transitionDuration,
          other = (0, _objectWithoutProperties3.default)(_props3, ['children', 'enterDelay', 'style', 'transitionDelay', 'transitionDuration']);
      var prepareStyles = this.context.muiTheme.prepareStyles;


      var mergedRootStyles = (0, _simpleAssign2.default)({
        position: 'relative',
        height: 0,
        width: '100%',
        top: 0,
        left: 0,
        overflow: 'hidden',
        transition: _transitions2.default.easeOut(transitionDuration + 'ms', ['height'], transitionDelay + 'ms')
      }, style);

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, other, { style: prepareStyles(mergedRootStyles) }),
        _react2.default.createElement(
          'div',
          { ref: 'wrapper' },
          children
        )
      );
    }
  }]);
  return ExpandTransitionChild;
}(_react.Component);

ExpandTransitionChild.defaultProps = {
  enterDelay: 0,
  transitionDelay: 0,
  transitionDuration: 450
};
ExpandTransitionChild.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? ExpandTransitionChild.propTypes = {
  children: _propTypes2.default.node,
  enterDelay: _propTypes2.default.number,
  style: _propTypes2.default.object,
  transitionDelay: _propTypes2.default.number,
  transitionDuration: _propTypes2.default.number
} : void 0;
exports.default = ExpandTransitionChild;

/***/ },

/***/ "./node_modules/material-ui/internal/Overlay.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__("./node_modules/material-ui/styles/transitions.js");

var _transitions2 = _interopRequireDefault(_transitions);

var _AutoLockScrolling = __webpack_require__("./node_modules/material-ui/internal/AutoLockScrolling.js");

var _AutoLockScrolling2 = _interopRequireDefault(_AutoLockScrolling);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var overlay = context.muiTheme.overlay;


  var style = {
    root: {
      position: 'fixed',
      height: '100%',
      width: '100%',
      top: 0,
      left: '-100%',
      opacity: 0,
      backgroundColor: overlay.backgroundColor,
      WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', // Remove mobile color flashing (deprecated)

      // Two ways to promote overlay to its own render layer
      willChange: 'opacity',
      transform: 'translateZ(0)',

      transition: props.transitionEnabled && _transitions2.default.easeOut('0ms', 'left', '400ms') + ', ' + _transitions2.default.easeOut('400ms', 'opacity')
    }
  };

  if (props.show) {
    (0, _simpleAssign2.default)(style.root, {
      left: 0,
      opacity: 1,
      transition: _transitions2.default.easeOut('0ms', 'left') + ', ' + _transitions2.default.easeOut('400ms', 'opacity')
    });
  }

  return style;
}

var Overlay = function (_Component) {
  (0, _inherits3.default)(Overlay, _Component);

  function Overlay() {
    (0, _classCallCheck3.default)(this, Overlay);
    return (0, _possibleConstructorReturn3.default)(this, (Overlay.__proto__ || (0, _getPrototypeOf2.default)(Overlay)).apply(this, arguments));
  }

  (0, _createClass3.default)(Overlay, [{
    key: 'setOpacity',
    value: function setOpacity(opacity) {
      this.refs.overlay.style.opacity = opacity;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          autoLockScrolling = _props.autoLockScrolling,
          show = _props.show,
          style = _props.style,
          transitionEnabled = _props.transitionEnabled,
          other = (0, _objectWithoutProperties3.default)(_props, ['autoLockScrolling', 'show', 'style', 'transitionEnabled']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, other, { ref: 'overlay', style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) }),
        autoLockScrolling && _react2.default.createElement(_AutoLockScrolling2.default, { lock: show })
      );
    }
  }]);
  return Overlay;
}(_react.Component);

Overlay.defaultProps = {
  autoLockScrolling: true,
  style: {},
  transitionEnabled: true
};
Overlay.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? Overlay.propTypes = {
  autoLockScrolling: _propTypes2.default.bool,
  show: _propTypes2.default.bool.isRequired,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  transitionEnabled: _propTypes2.default.bool
} : void 0;
exports.default = Overlay;

/***/ },

/***/ "./node_modules/material-ui/internal/SlideIn.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TransitionGroup = __webpack_require__("./node_modules/react-transition-group/TransitionGroup.js");

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

var _SlideInChild = __webpack_require__("./node_modules/material-ui/internal/SlideInChild.js");

var _SlideInChild2 = _interopRequireDefault(_SlideInChild);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SlideIn = function (_Component) {
  (0, _inherits3.default)(SlideIn, _Component);

  function SlideIn() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, SlideIn);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SlideIn.__proto__ || (0, _getPrototypeOf2.default)(SlideIn)).call.apply(_ref, [this].concat(args))), _this), _this.getLeaveDirection = function () {
      return _this.props.direction;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(SlideIn, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          enterDelay = _props.enterDelay,
          children = _props.children,
          childStyle = _props.childStyle,
          direction = _props.direction,
          style = _props.style,
          other = (0, _objectWithoutProperties3.default)(_props, ['enterDelay', 'children', 'childStyle', 'direction', 'style']);
      var prepareStyles = this.context.muiTheme.prepareStyles;


      var mergedRootStyles = (0, _simpleAssign2.default)({}, {
        position: 'relative',
        overflow: 'hidden',
        height: '100%'
      }, style);

      var newChildren = _react2.default.Children.map(children, function (child) {
        return _react2.default.createElement(
          _SlideInChild2.default,
          {
            key: child.key,
            direction: direction,
            enterDelay: enterDelay,
            getLeaveDirection: _this2.getLeaveDirection,
            style: childStyle
          },
          child
        );
      }, this);

      return _react2.default.createElement(
        _TransitionGroup2.default,
        (0, _extends3.default)({}, other, {
          style: prepareStyles(mergedRootStyles),
          component: 'div'
        }),
        newChildren
      );
    }
  }]);
  return SlideIn;
}(_react.Component);

SlideIn.defaultProps = {
  enterDelay: 0,
  direction: 'left'
};
SlideIn.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? SlideIn.propTypes = {
  childStyle: _propTypes2.default.object,
  children: _propTypes2.default.node,
  direction: _propTypes2.default.oneOf(['left', 'right', 'up', 'down']),
  enterDelay: _propTypes2.default.number,
  style: _propTypes2.default.object
} : void 0;
exports.default = SlideIn;

/***/ },

/***/ "./node_modules/material-ui/internal/SlideInChild.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__("./node_modules/simple-assign/index.js");

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__("./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _autoPrefix = __webpack_require__("./node_modules/material-ui/utils/autoPrefix.js");

var _autoPrefix2 = _interopRequireDefault(_autoPrefix);

var _transitions = __webpack_require__("./node_modules/material-ui/styles/transitions.js");

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SlideInChild = function (_Component) {
  (0, _inherits3.default)(SlideInChild, _Component);

  function SlideInChild() {
    (0, _classCallCheck3.default)(this, SlideInChild);
    return (0, _possibleConstructorReturn3.default)(this, (SlideInChild.__proto__ || (0, _getPrototypeOf2.default)(SlideInChild)).apply(this, arguments));
  }

  (0, _createClass3.default)(SlideInChild, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.enterTimer);
      clearTimeout(this.leaveTimer);
    }
  }, {
    key: 'componentWillEnter',
    value: function componentWillEnter(callback) {
      var style = _reactDom2.default.findDOMNode(this).style;
      var x = this.props.direction === 'left' ? '100%' : this.props.direction === 'right' ? '-100%' : '0';
      var y = this.props.direction === 'up' ? '100%' : this.props.direction === 'down' ? '-100%' : '0';

      style.opacity = '0';
      _autoPrefix2.default.set(style, 'transform', 'translate(' + x + ', ' + y + ')');

      this.enterTimer = setTimeout(callback, this.props.enterDelay);
    }
  }, {
    key: 'componentDidEnter',
    value: function componentDidEnter() {
      var style = _reactDom2.default.findDOMNode(this).style;
      style.opacity = '1';
      _autoPrefix2.default.set(style, 'transform', 'translate(0,0)');
    }
  }, {
    key: 'componentWillLeave',
    value: function componentWillLeave(callback) {
      var style = _reactDom2.default.findDOMNode(this).style;
      var direction = this.props.getLeaveDirection();
      var x = direction === 'left' ? '-100%' : direction === 'right' ? '100%' : '0';
      var y = direction === 'up' ? '-100%' : direction === 'down' ? '100%' : '0';

      style.opacity = '0';
      _autoPrefix2.default.set(style, 'transform', 'translate(' + x + ', ' + y + ')');

      this.leaveTimer = setTimeout(callback, 450);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          enterDelay = _props.enterDelay,
          getLeaveDirection = _props.getLeaveDirection,
          style = _props.style,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'enterDelay', 'getLeaveDirection', 'style']);
      var prepareStyles = this.context.muiTheme.prepareStyles;


      var mergedRootStyles = (0, _simpleAssign2.default)({}, {
        position: 'absolute',
        height: '100%',
        width: '100%',
        top: 0,
        left: 0,
        transition: _transitions2.default.easeOut(null, ['transform', 'opacity'])
      }, style);

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, other, { style: prepareStyles(mergedRootStyles) }),
        children
      );
    }
  }]);
  return SlideInChild;
}(_react.Component);

SlideInChild.defaultProps = {
  enterDelay: 0
};
SlideInChild.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
undefined !== "production" ? SlideInChild.propTypes = {
  children: _propTypes2.default.node,
  direction: _propTypes2.default.string,
  enterDelay: _propTypes2.default.number,
  // This callback is needed bacause the direction could change when leaving the DOM
  getLeaveDirection: _propTypes2.default.func.isRequired,
  style: _propTypes2.default.object
} : void 0;
exports.default = SlideInChild;

/***/ },

/***/ "./node_modules/material-ui/svg-icons/action/check-circle.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__("./node_modules/recompose/pure.js");

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__("./node_modules/material-ui/SvgIcon/index.js");

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ActionCheckCircle = function ActionCheckCircle(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' })
  );
};
ActionCheckCircle = (0, _pure2.default)(ActionCheckCircle);
ActionCheckCircle.displayName = 'ActionCheckCircle';
ActionCheckCircle.muiName = 'SvgIcon';

exports.default = ActionCheckCircle;

/***/ },

/***/ "./node_modules/material-ui/svg-icons/hardware/keyboard-arrow-down.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__("./node_modules/recompose/pure.js");

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__("./node_modules/material-ui/SvgIcon/index.js");

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HardwareKeyboardArrowDown = function HardwareKeyboardArrowDown(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z' })
  );
};
HardwareKeyboardArrowDown = (0, _pure2.default)(HardwareKeyboardArrowDown);
HardwareKeyboardArrowDown.displayName = 'HardwareKeyboardArrowDown';
HardwareKeyboardArrowDown.muiName = 'SvgIcon';

exports.default = HardwareKeyboardArrowDown;

/***/ },

/***/ "./node_modules/material-ui/svg-icons/hardware/keyboard-arrow-up.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__("./node_modules/recompose/pure.js");

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__("./node_modules/material-ui/SvgIcon/index.js");

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HardwareKeyboardArrowUp = function HardwareKeyboardArrowUp(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z' })
  );
};
HardwareKeyboardArrowUp = (0, _pure2.default)(HardwareKeyboardArrowUp);
HardwareKeyboardArrowUp.displayName = 'HardwareKeyboardArrowUp';
HardwareKeyboardArrowUp.muiName = 'SvgIcon';

exports.default = HardwareKeyboardArrowUp;

/***/ },

/***/ "./node_modules/material-ui/svg-icons/navigation/arrow-drop-down.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__("./node_modules/recompose/pure.js");

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__("./node_modules/material-ui/SvgIcon/index.js");

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavigationArrowDropDown = function NavigationArrowDropDown(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M7 10l5 5 5-5z' })
  );
};
NavigationArrowDropDown = (0, _pure2.default)(NavigationArrowDropDown);
NavigationArrowDropDown.displayName = 'NavigationArrowDropDown';
NavigationArrowDropDown.muiName = 'SvgIcon';

exports.default = NavigationArrowDropDown;

/***/ },

/***/ "./node_modules/material-ui/svg-icons/navigation/cancel.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__("./node_modules/recompose/pure.js");

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__("./node_modules/material-ui/SvgIcon/index.js");

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavigationCancel = function NavigationCancel(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z' })
  );
};
NavigationCancel = (0, _pure2.default)(NavigationCancel);
NavigationCancel.displayName = 'NavigationCancel';
NavigationCancel.muiName = 'SvgIcon';

exports.default = NavigationCancel;

/***/ },

/***/ "./node_modules/material-ui/svg-icons/navigation/chevron-left.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__("./node_modules/recompose/pure.js");

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__("./node_modules/material-ui/SvgIcon/index.js");

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavigationChevronLeft = function NavigationChevronLeft(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z' })
  );
};
NavigationChevronLeft = (0, _pure2.default)(NavigationChevronLeft);
NavigationChevronLeft.displayName = 'NavigationChevronLeft';
NavigationChevronLeft.muiName = 'SvgIcon';

exports.default = NavigationChevronLeft;

/***/ },

/***/ "./node_modules/material-ui/svg-icons/navigation/chevron-right.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__("./node_modules/recompose/pure.js");

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__("./node_modules/material-ui/SvgIcon/index.js");

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavigationChevronRight = function NavigationChevronRight(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z' })
  );
};
NavigationChevronRight = (0, _pure2.default)(NavigationChevronRight);
NavigationChevronRight.displayName = 'NavigationChevronRight';
NavigationChevronRight.muiName = 'SvgIcon';

exports.default = NavigationChevronRight;

/***/ },

/***/ "./node_modules/material-ui/svg-icons/toggle/check-box-outline-blank.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__("./node_modules/recompose/pure.js");

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__("./node_modules/material-ui/SvgIcon/index.js");

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ToggleCheckBoxOutlineBlank = function ToggleCheckBoxOutlineBlank(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z' })
  );
};
ToggleCheckBoxOutlineBlank = (0, _pure2.default)(ToggleCheckBoxOutlineBlank);
ToggleCheckBoxOutlineBlank.displayName = 'ToggleCheckBoxOutlineBlank';
ToggleCheckBoxOutlineBlank.muiName = 'SvgIcon';

exports.default = ToggleCheckBoxOutlineBlank;

/***/ },

/***/ "./node_modules/material-ui/svg-icons/toggle/check-box.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__("./node_modules/recompose/pure.js");

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__("./node_modules/material-ui/SvgIcon/index.js");

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ToggleCheckBox = function ToggleCheckBox(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' })
  );
};
ToggleCheckBox = (0, _pure2.default)(ToggleCheckBox);
ToggleCheckBox.displayName = 'ToggleCheckBox';
ToggleCheckBox.muiName = 'SvgIcon';

exports.default = ToggleCheckBox;

/***/ },

/***/ "./node_modules/material-ui/svg-icons/toggle/radio-button-checked.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__("./node_modules/recompose/pure.js");

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__("./node_modules/material-ui/SvgIcon/index.js");

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ToggleRadioButtonChecked = function ToggleRadioButtonChecked(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z' })
  );
};
ToggleRadioButtonChecked = (0, _pure2.default)(ToggleRadioButtonChecked);
ToggleRadioButtonChecked.displayName = 'ToggleRadioButtonChecked';
ToggleRadioButtonChecked.muiName = 'SvgIcon';

exports.default = ToggleRadioButtonChecked;

/***/ },

/***/ "./node_modules/material-ui/svg-icons/toggle/radio-button-unchecked.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__("./node_modules/recompose/pure.js");

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__("./node_modules/material-ui/SvgIcon/index.js");

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ToggleRadioButtonUnchecked = function ToggleRadioButtonUnchecked(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z' })
  );
};
ToggleRadioButtonUnchecked = (0, _pure2.default)(ToggleRadioButtonUnchecked);
ToggleRadioButtonUnchecked.displayName = 'ToggleRadioButtonUnchecked';
ToggleRadioButtonUnchecked.muiName = 'SvgIcon';

exports.default = ToggleRadioButtonUnchecked;

/***/ },

/***/ "./node_modules/material-ui/utils/withWidth.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LARGE = exports.MEDIUM = exports.SMALL = undefined;

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = withWidth;

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactEventListener = __webpack_require__("./node_modules/react-event-listener/lib/index.js");

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SMALL = exports.SMALL = 1;
var MEDIUM = exports.MEDIUM = 2;
var LARGE = exports.LARGE = 3;

function withWidth() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$largeWidth = options.largeWidth,
      largeWidth = _options$largeWidth === undefined ? 992 : _options$largeWidth,
      _options$mediumWidth = options.mediumWidth,
      mediumWidth = _options$mediumWidth === undefined ? 768 : _options$mediumWidth,
      _options$resizeInterv = options.resizeInterval,
      resizeInterval = _options$resizeInterv === undefined ? 166 : _options$resizeInterv;


  return function (MyComponent) {
    return function (_Component) {
      (0, _inherits3.default)(WithWidth, _Component);

      function WithWidth() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, WithWidth);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = WithWidth.__proto__ || (0, _getPrototypeOf2.default)(WithWidth)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
          width: null
        }, _this.handleResize = function () {
          clearTimeout(_this.deferTimer);
          _this.deferTimer = setTimeout(function () {
            _this.updateWidth();
          }, resizeInterval);
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
      }

      (0, _createClass3.default)(WithWidth, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          this.updateWidth();
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          clearTimeout(this.deferTimer);
        }
      }, {
        key: 'updateWidth',
        value: function updateWidth() {
          var innerWidth = window.innerWidth;
          var width = void 0;

          if (innerWidth >= largeWidth) {
            width = LARGE;
          } else if (innerWidth >= mediumWidth) {
            width = MEDIUM;
          } else {
            // innerWidth < 768
            width = SMALL;
          }

          if (width !== this.state.width) {
            this.setState({
              width: width
            });
          }
        }
      }, {
        key: 'render',
        value: function render() {
          var width = this.state.width;

          /**
           * When rendering the component on the server,
           * we have no idea about the screen width.
           * In order to prevent blinks and help the reconciliation
           * we are not rendering the component.
           *
           * A better alternative would be to send client hints.
           * But the browser support of this API is low:
           * http://caniuse.com/#search=client%20hint
           */
          if (width === null) {
            return null;
          }

          return _react2.default.createElement(
            _reactEventListener2.default,
            { target: 'window', onResize: this.handleResize },
            _react2.default.createElement(MyComponent, (0, _extends3.default)({
              width: width
            }, this.props))
          );
        }
      }]);
      return WithWidth;
    }(_react.Component);
  };
}

/***/ }

});