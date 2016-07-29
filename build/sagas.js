'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerHandler = registerHandler;
exports.faceDetectorRootSaga = faceDetectorRootSaga;

require('babel-polyfill');

var _reduxSaga = require('redux-saga');

var _effects = require('redux-saga/effects');

var _actions = require('./actions');

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var _marked = [setupDetectorHandler, setupDetectorWatcher, startDetectHandler, startDetectWatcher, stopDetectHandler, stopDetectWatcher, registerHandler, faceDetectorRootSaga].map(regeneratorRuntime.mark);

function setupDetectorHandler(_ref) {
  var videoTag = _ref.payload.videoTag;
  var detector;
  return regeneratorRuntime.wrap(function setupDetectorHandler$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.select)(function (state) {
            return state.faceDetectorReducer.detector;
          });

        case 2:
          detector = _context.sent;

          detector.setup(videoTag);

        case 4:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}

function setupDetectorWatcher() {
  return regeneratorRuntime.wrap(function setupDetectorWatcher$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.delegateYield((0, _reduxSaga.takeEvery)(actions.FACE_DETECTOR_SETUP, setupDetectorHandler), 't0', 1);

        case 1:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked[1], this);
}

function startDetectHandler() {
  var detector;
  return regeneratorRuntime.wrap(function startDetectHandler$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return (0, _effects.select)(function (state) {
            return state.faceDetectorReducer.detector;
          });

        case 2:
          detector = _context3.sent;

          detector.start();

        case 4:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked[2], this);
}

function startDetectWatcher() {
  return regeneratorRuntime.wrap(function startDetectWatcher$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          return _context4.delegateYield((0, _reduxSaga.takeEvery)(actions.FACE_DETECT_START, startDetectHandler), 't0', 1);

        case 1:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked[3], this);
}

function stopDetectHandler() {
  var detector;
  return regeneratorRuntime.wrap(function stopDetectHandler$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return (0, _effects.select)(function (state) {
            return state.faceDetectorReducer.detector;
          });

        case 2:
          detector = _context5.sent;

          detector.stop();

        case 4:
        case 'end':
          return _context5.stop();
      }
    }
  }, _marked[4], this);
}

function stopDetectWatcher() {
  return regeneratorRuntime.wrap(function stopDetectWatcher$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          return _context6.delegateYield((0, _reduxSaga.takeEvery)(actions.FACE_DETECT_STOP, stopDetectHandler), 't0', 1);

        case 1:
        case 'end':
          return _context6.stop();
      }
    }
  }, _marked[5], this);
}

function subscribe(socket) {
  return (0, _reduxSaga.eventChannel)(function (emit) {
    socket.on('ready', function (payload) {
      emit(actions.faceDetectorReady(payload));
    });
    socket.on('detected', function (payload) {
      emit(actions.faceDetected(payload));
    });
    socket.on('interim report', function (payload) {
      emit(actions.faceInterimReport(payload));
    });
    socket.on('lost', function (payload) {
      emit(actions.faceLost(payload));
    });
    return function () {};
  });
}

function registerHandler(dispatch) {
  var socket, channel, action;
  return regeneratorRuntime.wrap(function registerHandler$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return (0, _effects.select)(function (state) {
            return state.faceDetectorReducer.detector;
          });

        case 2:
          socket = _context7.sent;

          if (!socket) {
            _context7.next = 15;
            break;
          }

          _context7.next = 6;
          return (0, _effects.call)(subscribe, socket);

        case 6:
          channel = _context7.sent;

        case 7:
          if (!true) {
            _context7.next = 15;
            break;
          }

          _context7.next = 10;
          return (0, _effects.take)(channel);

        case 10:
          action = _context7.sent;
          _context7.next = 13;
          return (0, _effects.put)(action);

        case 13:
          _context7.next = 7;
          break;

        case 15:
        case 'end':
          return _context7.stop();
      }
    }
  }, _marked[6], this);
}

function faceDetectorRootSaga() {
  return regeneratorRuntime.wrap(function faceDetectorRootSaga$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return (0, _effects.fork)(setupDetectorWatcher);

        case 2:
          _context8.next = 4;
          return (0, _effects.fork)(startDetectWatcher);

        case 4:
          _context8.next = 6;
          return (0, _effects.fork)(stopDetectWatcher);

        case 6:
          _context8.next = 8;
          return (0, _effects.fork)(registerHandler);

        case 8:
        case 'end':
          return _context8.stop();
      }
    }
  }, _marked[7], this);
}