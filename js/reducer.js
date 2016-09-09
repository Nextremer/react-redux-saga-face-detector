import * as actions from './actions';
import FaceDetector from 'face-detector';

const initState = () => {
  const detector = new FaceDetector();
  return { detector };
};

export const initial = initState();

export default (state = initial, action) => {
  switch (action.type) {
    default:
      return state;
  }
};


