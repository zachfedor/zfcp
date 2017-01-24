import React, { Component } from 'react';
import './DeviceTypeList.css';

class DeviceTypeList extends Component {
  render() {
    let listElements;
    const deviceTypes = this.props.deviceTypes;

    if(deviceTypes.length === 0) {
      listElements = <li className="deviceType disabled">No device types are configured</li>
    } else {
      listElements = deviceTypes.map(deviceType => {
        return (
          <li className="deviceType" key={deviceType.id} onClick={() => { this.props.onShowDeviceType(deviceType.id); }}>
            {deviceType.name}
          </li>
        );
      });
    }

    return (
      <article className="DeviceTypeList">
        <h2>Device Types</h2>

        <ul>
          {listElements}
        </ul>
      </article>
    );
  }
}

export default DeviceTypeList;
