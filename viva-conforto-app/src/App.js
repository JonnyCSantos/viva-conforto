import React, { Component } from 'react';
import './app.min.css';

import Header from './components/header/Header.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
      </div>
    );
  }
}

export default App;
