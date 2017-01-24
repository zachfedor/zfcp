import React, { Component, PropTypes } from 'react';
import DeviceTypeList from './DeviceTypeList';
import DeviceType from './DeviceType';
import './DeviceTypeDashboard.css';

class DeviceTypeDashboard extends Component {
  render() {
    const showingList = (this.props.deviceType === null);
    let conditionalElement = showingList ? (
        <DeviceTypeList {...this.props} />
      ) : (
        <DeviceType
          {...this.props.deviceType}
          onShowDeviceType={this.props.onShowDeviceType}
        />
      );

    return (
      <section className="DeviceTypeDashboard">
        {conditionalElement}
      </section>
    );
  }
}

DeviceTypeDashboard.propTypes = {
  deviceType: PropTypes.object,
  deviceTypes: PropTypes.array.isRequired,
  onShowDeviceType: PropTypes.func.isRequired
}

export default DeviceTypeDashboard;
