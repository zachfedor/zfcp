import React, { Component } from 'react';
import DeviceContainer from '../device/DeviceContainer';
import DeviceTypeList from '../devicetype/DeviceTypeList';
import DeviceType from '../devicetype/DeviceType';
import AddDeviceType from '../devicetype/AddDeviceType';

class AdminDashboard extends Component {
  render() {
    return (
      <section className="AdminDashboard">
        <h2>Dashboard</h2>

        <DeviceContainer />

        <AddDeviceType />
        <DeviceTypeList />
        <DeviceType />
      </section>
    );
  }
};

export default AdminDashboard;
