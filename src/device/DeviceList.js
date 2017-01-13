import React, { Component } from 'react';
import Device from './Device';
import './DeviceList.css';

class DeviceList extends Component {
  render() {
    const devices = this.props.devices.map(device => {
      return <Device key={device.id} name={device.name} />
    });

    return (
      <section className="devicelist">
        <h2>Devices</h2>

        <ul>
          {this.props.devices.length === 0 &&
            <li className="device disabled">No devices are configured</li>
          }

          {devices}
        </ul>
      </section>
    )
  }
}

export default DeviceList;
