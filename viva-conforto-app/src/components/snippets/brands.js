import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';

import Nap from '../../img/nap.png'
import Trisoft from '../../img/trisoft.png'
import Chuca from '../../img/chuca.png'
import Fribasca from '../../img/fibrasca.png'

const options = {
    nav: true,
    rewind: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      600: {
        items: 3,
      },
      620: {
        items: 4,
      }
    }
};

class Brands extends Component {

  render() {
    return (
      <div className="brands col-md-6 col-sm-8">
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
