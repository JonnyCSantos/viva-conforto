import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';

import Banner_1 from '../../img/banner-1.jpg'
import Banner_2 from '../../img/banner-2.jpg'
import Banner_3 from '../../img/banner-3.jpg'
import Banner_4 from '../../img/banner-4.jpg'

const options = {
    items: 1,
    rewind: true,
    autoplay: true,
};

class Carousel extends Component {

  render() {
    return (
      <div>
        <OwlCarousel ref="car" options={options} >
            <div classname="car-item"><a href="/"><img src={Banner_1} alt="Kit Space "/></a></div>
            <div classname="car-item"><a href="/"><img src={Banner_2} alt="Linha Baby"/></a></div>
            <div classname="car-item"><a href="/"><img src={Banner_3} alt="Saúde e Bem-estar"/></a></div>
            <div classname="car-item"><a href="/"><img src={Banner_4} alt="Kit Travesseiros"/></a></div>
        </OwlCarousel>
      </div>
    );
  }
}

export default Carousel;
