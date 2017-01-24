import React, { Component } from 'react';
import DeviceContainer from '../device/DeviceContainer';
import DeviceTypeContainer from '../devicetype/DeviceTypeContainer';
import AddDevice from '../device/AddDevice';
import './AdminDashboard.css';

class AdminDashboard extends Component {
  state = {
    tab: 'device'
  };

  render() {
    const deviceTab = (
      <li
        className={this.state.tab === 'device' ? 'tab active' : 'tab'}
        onClick={() => { this.setState({ tab: 'device' })}}
      >
        Devices
      </li>
    );

    const deviceTypeTab = (
      <li
        className={this.state.tab === 'devicetype' ? 'tab active' : 'tab'}
        onClick={() => { this.setState({ tab: 'devicetype' })}}
      >
        Device Types
      </li>
    );

    return (
      <section className="AdminDashboard">

        <h2>Admin Dashboard</h2>

        <ul className="tabs">
          {deviceTab}
          {deviceTypeTab}
        </ul>

        {this.state.tab === 'device' ? (
          <div>
            <DeviceContainer />
            <AddDevice />
          </div>
        ) : (
          <div>
            <DeviceTypeContainer />
          </div>
        )}

      </section>
    );
  }
};

export default AdminDashboard;
