import React, { Component } from 'react';
import DeviceList from './DeviceList';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <main className="App">
        <h1>Zach Fedor's Citrusbyte Prototype</h1>

        <DeviceList devices={['a', 'b', 'c']} />
      </main>
    );
  }
}

export default App;
