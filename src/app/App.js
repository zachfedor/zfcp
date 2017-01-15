import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';
import DeviceContainer from '../device/DeviceContainer';
import AdminDashboard from '../admin/AdminDashboard';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <main className="App">
        <header>
          <h1>Prototype</h1>

          <img className="logo" src={logo} alt="zfcp"/>
        </header>

        <Router history={hashHistory}>
          <Route path='/' component={DeviceContainer} />
          <Route path='/admin' component={AdminDashboard} />
        </Router>
      </main>
    );
  }
}

export default App;
