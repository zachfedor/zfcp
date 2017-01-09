import React, { Component } from 'react';
import DeviceContainer from '../device/DeviceContainer';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <main className="App">
        <h1>Zach Fedor's Citrusbyte Prototype</h1>

        <DeviceContainer />
      </main>
    );
  }
}

export default App;
