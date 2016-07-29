'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.faceDetectStop = exports.FACE_DETECT_STOP = exports.faceDetectStart = exports.FACE_DETECT_START = exports.faceDetectorSetup = exports.FACE_DETECTOR_SETUP = exports.faceLost = exports.FACE_LOST = exports.faceInterimReport = exports.FACE_INTERIM_REPORT = exports.faceDetected = exports.FACE_DETECTED = exports.faceDetectorReady = exports.FACE_DETECTOR_READY = undefined;

var _reduxActions = require('redux-actions');

var FACE_DETECTOR_READY = exports.FACE_DETECTOR_READY = 'FACE_DETECTOR_READY';
var faceDetectorReady = exports.faceDetectorReady = (0, _reduxActions.createAction)(FACE_DETECTOR_READY);
var FACE_DETECTED = exports.FACE_DETECTED = 'FACE_DETECTED';
var faceDetected = exports.faceDetected = (0, _reduxActions.createAction)(FACE_DETECTED);
var FACE_INTERIM_REPORT = exports.FACE_INTERIM_REPORT = 'FACE_INTERIM_REPORT';
var faceInterimReport = exports.faceInterimReport = (0, _reduxActions.createAction)(FACE_INTERIM_REPORT);
var FACE_LOST = exports.FACE_LOST = 'FACE_LOST';
var faceLost = exports.faceLost = (0, _reduxActions.createAction)(FACE_LOST);
var FACE_DETECTOR_SETUP = exports.FACE_DETECTOR_SETUP = 'FACE_DETECTOR_SETUP';
var faceDetectorSetup = exports.faceDetectorSetup = (0, _reduxActions.createAction)(FACE_DETECTOR_SETUP);
var FACE_DETECT_START = exports.FACE_DETECT_START = 'FACE_DETECT_START';
var faceDetectStart = exports.faceDetectStart = (0, _reduxActions.createAction)(FACE_DETECT_START);
var FACE_DETECT_STOP = exports.FACE_DETECT_STOP = 'FACE_DETECT_STOP';
var faceDetectStop = exports.faceDetectStop = (0, _reduxActions.createAction)(FACE_DETECT_STOP);