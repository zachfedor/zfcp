import React, { Component, PropTypes } from 'react';
import ControlContainer from '../control/ControlContainer';
import './Device.css';

class Device extends Component {
  backToList = (e) => {
    e.preventDefault();
    this.props.onShowDevice(null);
  }

  render() {
    let subtitle = null;
    if(this.props.deviceTypeName !== null) {
      subtitle = <h3>Control your {this.props.deviceTypeName} device:</h3>
    }

    return (
      <article className="Device">
        <a href="#" onClick={this.backToList}>&lt; Back to Device List</a>

        <h2>{this.props.name}</h2>

        {subtitle}

        <ControlContainer />
      </article>
    );
  }
}

Device.propTypes = {
  name: PropTypes.string,
  deviceTypeName: PropTypes.string,
  controls: PropTypes.array,
  onShowDevice: PropTypes.func.isRequired
};

export default Device;
