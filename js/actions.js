import { createAction } from 'redux-actions';

export const FACE_DETECTOR_READY = 'FACE_DETECTOR_READY'
export const faceDetectorReady = createAction( FACE_DETECTOR_READY );
export const FACE_DETECTED = 'FACE_DETECTED'
export const faceDetected = createAction( FACE_DETECTED );
export const FACE_INTERIM_REPORT = 'FACE_INTERIM_REPORT'
export const faceInterimReport = createAction( FACE_INTERIM_REPORT );
export const FACE_LOST = 'FACE_LOST'
export const faceLost = createAction( FACE_LOST );
export const FACE_DETECTOR_SETUP = 'FACE_DETECTOR_SETUP'
export const faceDetectorSetup = createAction( FACE_DETECTOR_SETUP );
export const FACE_DETECT_START = 'FACE_DETECT_START'
export const faceDetectStart = createAction( FACE_DETECT_START );
export const FACE_DETECT_STOP = 'FACE_DETECT_STOP'
export const faceDetectStop = createAction( FACE_DETECT_STOP );

