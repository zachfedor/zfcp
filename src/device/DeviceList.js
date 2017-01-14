import React, { Component, PropTypes } from 'react';
import './DeviceList.css';

class DeviceList extends Component {
  render() {
    let listElements;
    const devices = this.props.devices;

    if(devices.length === 0) {
      listElements = <li className="device disabled">No devices are configured</li>
    } else {
      listElements = devices.map(device => {
        return (
          <li className="device" key={device.id} onClick={() => { this.props.onShowDevice(device.id); }}>
            {device.name}
          </li>
        );
      });
    }

    return (
      <article className="DeviceList">
        <h2>Devices</h2>

        <ul>
          {listElements}
        </ul>
      </article>
    );
  }
}

DeviceList.propTypes = {
  devices: PropTypes.array.isRequired,
  onShowDevice: PropTypes.func
}

export default DeviceList;
