import React, { Component } from 'react';
import DeviceList from './DeviceList';
import DeviceTypeList from '../devicetype/DeviceTypeList';
import DeviceType from '../devicetype/DeviceType';
import AddDeviceType from '../devicetype/AddDeviceType';

class AdminDashboard extends Component {
  render() {
    return (
      <section className="AdminDashboard">
        <h2>Dashboard</h2>

        <DeviceList devices={[]}/>

        <AddDeviceType />
        <DeviceTypeList />
        <DeviceType />
      </section>
    );
  }
};

export default AdminDashboard;
