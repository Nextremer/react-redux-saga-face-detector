'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initial = undefined;

var _actions = require('./actions');

var actions = _interopRequireWildcard(_actions);

var _faceDetector = require('face-detector');

var _faceDetector2 = _interopRequireDefault(_faceDetector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

console.log(_faceDetector2.default);

var initState = function initState() {
  var detector = new _faceDetector2.default({ tracker: 'clmtrackr' });
  return { detector: detector };
};

var initial = exports.initial = initState();

exports.default = function () {
  var state = arguments.length <= 0 || arguments[0] === undefined ? initial : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    default:
      return state;
  }
};