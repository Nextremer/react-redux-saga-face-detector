'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _actions = require('../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Detector = (_dec = (0, _reactRedux.connect)(function (state) {
  return {};
}, { faceDetectorSetup: _actions.faceDetectorSetup }), _dec(_class = function (_Component) {
  _inherits(Detector, _Component);

  function Detector(props) {
    _classCallCheck(this, Detector);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Detector).call(this, props));
  }

  _createClass(Detector, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.faceDetectorSetup({ videoTag: this.videoTag });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('video', {
        width: '400',
        height: '300',
        ref: function ref(_ref) {
          return _this2.videoTag = _ref;
        }
      });
    }
  }]);

  return Detector;
}(_react.Component)) || _class);
exports.default = Detector;