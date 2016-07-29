import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  faceDetectorSetup
} from '../actions';

@connect( state => ({}), { faceDetectorSetup } )
export default class Detector extends Component {
  constructor( props ) {
    super( props );
  }

  componentDidMount() {
    faceDetectorSetup({ videoTag: this.videoTag });
  }

  render() {
    return (
      <video
        width="400"
        height="300"
        ref={ ref => this.videoTag = ref }
      ></video>
    );
  }
}

