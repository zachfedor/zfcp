import React, { Component } from 'react';
import DeviceContainer from '../device/DeviceContainer';
// import DeviceTypeList from '../devicetype/DeviceTypeList';
// import DeviceType from '../devicetype/DeviceType';
import AddDevice from '../device/AddDevice';
import './AdminDashboard.css';

class AdminDashboard extends Component {
  render() {
    return (
      <section className="AdminDashboard">
        {/* TODO: add admin tab component
          * show four tabs for d, dt, c, and ct
          * active tab highlighted
        */}
        <h2>Admin Dashboard</h2>

        {/* TODO: add tab body component
          * dependent on tab selection
          * show add component
          * show list component
        */}
        <AddDevice />
        <DeviceContainer />

        {/*
        <DeviceTypeList />
        <DeviceType />
        */}
      </section>
    );
  }
};

export default AdminDashboard;
