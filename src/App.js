import React, { Component } from 'react';
import './assets/styles/App.css';
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
