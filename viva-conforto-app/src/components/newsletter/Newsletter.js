import React, { Component } from 'react';
import Brands from '../snippets/brands.js'
import News from '../snippets/news.js'

class Newsletter extends Component {

  render() {
    return (
      <section className="container">
        <div className="News flex justify-between align-center">
          <Brands/>
          <News/>
        </div>
      </section>
    );
  }
}

export default Newsletter;
