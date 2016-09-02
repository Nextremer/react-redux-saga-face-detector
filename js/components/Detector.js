import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  faceDetectorSetup
} from '../actions';

@connect( state => ({}), { faceDetectorSetup } )
export default class Detector extends Component {
  constructor( props ) {
    super( props );
    const { freq, sizeThreshold, scoreThreshold } = this.props;
    this.opts = { freq, sizeThreshold, scoreThreshold };
  }

  componentDidMount() {
    this.props.faceDetectorSetup({ ...this.opts });
  }

  render() {
    const display = ( ( 'debug' in this.props ) && this.props.debug ) ? 'inline' : 'none';
    return (
      <div style={{ position: 'relative', zIndex: 1 }}>
        <video
          width={ this.props.width }
          height={ this.props.height }
          ref={ ref => this.opts = { ...this.opts, videoTag: ref } }
          style={{ display }}
        ></video>
        <canvas
          width={ this.props.width }
          height={ this.props.height }
          ref={ ref => this.opts = { ...this.opts, canvasTag: ref } }
          style={{ display }}
        ></canvas>
      </div>
    );
  }
}

