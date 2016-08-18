import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  faceDetectorSetup
} from '../actions';

@connect( state => ({}), { faceDetectorSetup } )
export default class Detector extends Component {
  constructor( props ) {
    super( props );
    this.opts = {};
  }

  componentDidMount() {
    this.props.faceDetectorSetup({ ...this.opts });
  }

  render() {
    return (
      <div>
        <video
          width={ this.props.width }
          height={ this.props.height }
          ref={ ref => this.opts.videoTag = ref }
          style={{ display: 'none' }}
        ></video>
        <canvas
          width={ this.props.width }
          height={ this.props.height }
          ref={ ref => this.opts.canvasTag = ref }
          style={{ display: 'none' }}
        ></canvas>
      </div>
    );
  }
}

