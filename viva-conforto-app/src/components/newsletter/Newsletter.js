import React, { Component } from 'react';
import Brands from '../snippets/brands.js'

class Newsletter extends Component {

  render() {
    return (
      <div className="container">
        <div className="News">
          <Brands/>
          
        </div>
      </div>
    );
  }
}

export default Newsletter;
