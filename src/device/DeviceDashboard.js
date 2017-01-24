import React, { Component, PropTypes } from 'react';
import DeviceList from './DeviceList';
import Device from './Device';
import './DeviceDashboard.css';

class DeviceDashboard extends Component {
  render() {
    const showingList = (this.props.device === null);
    let conditionalElement = showingList ? (
        <DeviceList {...this.props} />
      ) : (
        <Device
          {...this.props.device}
          onShowDevice={this.props.onShowDevice}
        />
      );

    return (
      <section className="DeviceDashboard">
        {conditionalElement}
      </section>
    );
  }
}

DeviceDashboard.propTypes = {
  device: PropTypes.object,
  devices: PropTypes.array.isRequired,
  onShowDevice: PropTypes.func.isRequired
}

export default DeviceDashboard;
