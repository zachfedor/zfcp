import React, { Component } from 'react';
import './DeviceType.css';

class DeviceType extends Component {
  backToList = (e) => {
    e.preventDefault();
    this.props.onShowDeviceType(null);
  }

  render() {
    return (
      <article className="DeviceType">
        <a href="#" onClick={this.backToList}>&lt; Back to Device Type List</a>

        <h2>{this.props.name}</h2>

        {/*<ControlContainer />*/}
      </article>
    );
  }
}

export default DeviceType;
