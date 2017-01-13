import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';
import DeviceContainer from '../device/DeviceContainer';
import AddDevice from '../device/AddDevice';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <main className="App">
        <header>
          <h1>ZFCP</h1>

          <img className="logo" src={logo} alt="zfcp"/>
        </header>

        <Router history={hashHistory}>
          <Route path='/' component={DeviceContainer} />
          <Route path='/add' component={AddDevice} />
          <Route path='*' component={DeviceContainer} />
        </Router>
      </main>
    );
  }
}

export default App;
