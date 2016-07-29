import * as actions from './actions';
import { models } from 'clmtrackr';
import FaceDetector from 'face-detector';

const initState = () => {
  const detector = new FaceDetector({ model: models.pca20Svm });
  return { detector };
};

export const initial = initState();

export default (state = initial, action) => {
  switch (action.type) {
    default:
      return state;
  }
};


