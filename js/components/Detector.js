import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  faceDetectorSetup
} from '../actions';

@connect( state => ({}), { faceDetectorSetup } )
export default class Detector extends Component {
  constructor( props ) {
    super( props );
    const { tracker, freq, sizeThreshold, scoreThreshold } = this.props;
    this.opts = { tracker, freq, sizeThreshold, scoreThreshold };
  }

  componentDidMount() {
    this.props.faceDetectorSetup({ ...this.opts });
  }

  render() {
    const zIndex = ( ( 'debug' in this.props ) && this.props.debug ) ? 1 : -1;
    return (
      <div style={{ position: 'absolute',top:0, left:0, zIndex }}>
        <video
          width={ this.props.width }
          height={ this.props.height }
          ref={ ref => this.opts = { ...this.opts, videoTag: ref } }
        ></video>
        <canvas
          width={ this.props.width }
          height={ this.props.height }
          ref={ ref => this.opts = { ...this.opts, canvasTag: ref } }
        ></canvas>
      </div>
    );
  }
}

