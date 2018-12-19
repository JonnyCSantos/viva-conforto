import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';

import Nap from '../../img/nap.png'
import Trisoft from '../../img/trisoft.png'
import Chuca from '../../img/chuca.png'
import Fribasca from '../../img/fibrasca.png'

const options = {
    items: 4,
    nav: true,
    rewind: true,
    autoplay: true,
};

class Brands extends Component {

  render() {
    return (
      <div className="brands col-md-6">
        <OwlCarousel ref="car" options={options} >
            <div className="brand-item"><a href="/"><img src={Nap} alt="Nap"/></a></div>
            <div className="brand-item"><a href="/"><img src={Trisoft} alt="Trisoft"/></a></div>
            <div className="brand-item"><a href="/"><img src={Chuca} alt="Chuca"/></a></div>
            <div className="brand-item"><a href="/"><img src={Fribasca} alt="Fribasca"/></a></div>
            <div className="brand-item"><a href="/"><img src={Nap} alt="Nap"/></a></div>
            <div className="brand-item"><a href="/"><img src={Trisoft} alt="Trisoft"/></a></div>
            <div className="brand-item"><a href="/"><img src={Chuca} alt="Chuca"/></a></div>
            <div className="brand-item"><a href="/"><img src={Fribasca} alt="Fribasca"/></a></div>
        </OwlCarousel>
      </div>
    );
  }
}

export default Brands;
