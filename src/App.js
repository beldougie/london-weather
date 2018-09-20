import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Weather from './containers/weather';
import Header from './containers/header';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Weather />
      </div>
    );
  }
}

export default App;
