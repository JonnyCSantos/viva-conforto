import React, { Component } from 'react';
import './app.min.css';

import Header from './components/header/Header.js'
import Carousel from './components/carousel/Carousel.js'
import Newsletter from './components/newsletter/Newsletter.js'


import Footer from './components/footer/Footer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Carousel/>
        <Newsletter/>
        
        <Footer/>
      </div>
    );
  }
}

export default App;
