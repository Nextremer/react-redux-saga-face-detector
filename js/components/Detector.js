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
    this.props.faceDetectorSetup({ videoTag: this.videoTag, canvasTag: this.canvasTag });
  }

  render() {
    return (
      <div>
        <video
          width="400"
          height="300"
          ref={ ref => this.videoTag = ref }
          style={{ display: 'none' }}
        ></video>
        <canvas
          width="400"
          height="300"
          ref={ ref => this.canvasTag = ref }
        ></canvas>
      </div>
    );
  }
}

