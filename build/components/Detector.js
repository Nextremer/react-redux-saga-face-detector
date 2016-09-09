'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _actions = require('../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Detector = (_dec = (0, _reactRedux.connect)(function (state) {
  return {};
}, { faceDetectorSetup: _actions.faceDetectorSetup }), _dec(_class = function (_Component) {
  (0, _inherits3.default)(Detector, _Component);

  function Detector(props) {
    (0, _classCallCheck3.default)(this, Detector);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Detector.__proto__ || (0, _getPrototypeOf2.default)(Detector)).call(this, props));

    var _this$props = _this.props;
    var tracker = _this$props.tracker;
    var freq = _this$props.freq;
    var sizeThreshold = _this$props.sizeThreshold;
    var scoreThreshold = _this$props.scoreThreshold;

    _this.opts = { tracker: tracker, freq: freq, sizeThreshold: sizeThreshold, scoreThreshold: scoreThreshold };
    return _this;
  }

  (0, _createClass3.default)(Detector, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.faceDetectorSetup((0, _extends3.default)({}, this.opts));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var zIndex = 'debug' in this.props && this.props.debug ? 1 : -1;
      return _react2.default.createElement(
        'div',
        { style: { position: 'absolute', top: 0, left: 0, zIndex: zIndex } },
        _react2.default.createElement('video', {
          width: this.props.width,
          height: this.props.height,
          ref: function ref(_ref) {
            return _this2.opts = (0, _extends3.default)({}, _this2.opts, { videoTag: _ref });
          }
        }),
        _react2.default.createElement('canvas', {
          width: this.props.width,
          height: this.props.height,
          ref: function ref(_ref2) {
            return _this2.opts = (0, _extends3.default)({}, _this2.opts, { canvasTag: _ref2 });
          }
        })
      );
    }
  }]);
  return Detector;
}(_react.Component)) || _class);
exports.default = Detector;