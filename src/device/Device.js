import React, { Component } from 'react';

class Device extends Component {
  render() {
    return (
      <li>{this.props.name}</li>
    );
  }
}

export default Device;
