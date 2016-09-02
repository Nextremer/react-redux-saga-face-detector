import { takeEvery, eventChannel } from 'redux-saga';
import { fork, call, take, put, select } from 'redux-saga/effects';
import * as actions from './actions';

function* setupDetectorHandler({ payload }) {
  const detector = yield select( state => state.faceDetectorReducer.detector );
  detector.setup( payload );
}

function* setupDetectorWatcher() {
  yield* takeEvery( actions.FACE_DETECTOR_SETUP, setupDetectorHandler );
}

function* startDetectHandler() {
  const detector = yield select( state => state.faceDetectorReducer.detector );
  detector.start();
}

function* startDetectWatcher() {
  yield* takeEvery( actions.FACE_DETECT_START, startDetectHandler );
}

function* stopDetectHandler() {
  const detector = yield select( state => state.faceDetectorReducer.detector );
  detector.stop();
}

function* stopDetectWatcher() {
  yield* takeEvery( actions.FACE_DETECT_STOP, stopDetectHandler );
}

function subscribe( socket ) {
  return eventChannel( emit => {
    socket.on('ready', payload => {
      emit( actions.faceDetectorReady( payload ) );
    });
    socket.on('detected', payload => {
      emit( actions.faceDetected( payload ) );
    });
    socket.on('interim report', payload => {
      emit( actions.faceInterimReport( payload ) );
    });
    socket.on('lost', payload => {
      emit( actions.faceLost( payload ) );
    });
    return () => {};
  });
}

export function* registerHandler(dispatch) {
  const socket = yield select( state => state.faceDetectorReducer.detector );
  if ( !!socket ) {
    const channel = yield call( subscribe, socket );
    while( true ) {
      const action = yield take( channel );
      yield put( action );
    }
  }
}

export function* faceDetectorRootSaga() {
  yield fork( setupDetectorWatcher );
  yield fork( startDetectWatcher );
  yield fork( stopDetectWatcher );
  yield fork( registerHandler );
}

