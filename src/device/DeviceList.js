import React, { Component } from 'react';
import Device from './Device';

class DeviceList extends Component {
  render() {
    const devices = this.props.devices.map(device => {
      return <Device key={device.id} name={device.name} />
    });

    return (
      <section className="devicelist">
        <h2>Devices</h2>

        <ul>
          {devices}
        </ul>
      </section>
    )
  }
}

export default DeviceList;
