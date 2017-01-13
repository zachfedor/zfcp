import React, { Component } from 'react';
import './Device.css';

class Device extends Component {
  render() {
    return (
      <li className="device">{this.props.name}</li>
    );
  }
}

export default Device;
