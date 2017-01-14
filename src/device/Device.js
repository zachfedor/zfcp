import React, { Component, PropTypes } from 'react';
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

    const controls = this.props.controls;
    let controlElements = (<li>no controls</li>);
    if(controls.length > 0 ) {
      controlElements = controls.map(c => <li key={c}>control id: {c}</li>)
    }

    return (
      <article className="Device">
        <a href="#" onClick={this.backToList}>&lt; Back to Device List</a>

        <h2>{this.props.name}</h2>

        {subtitle}

        <ul>
          {controlElements}
        </ul>
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
