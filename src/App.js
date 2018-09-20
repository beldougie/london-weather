import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Weather from './containers/weather';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="app-title">Weather for London,uk</h1>
        </header>
        <Weather />
      </div>
    );
  }
}

export default App;
