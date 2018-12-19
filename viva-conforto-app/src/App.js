import React, { Component } from 'react';
import './app.min.css';

import Header from './components/header/Header.js'
import Carousel from './components/carousel/Carousel.js'
import Newsletter from './components/newsletter/Newsletter.js'
import Shelf from './components/shelf/Shelf.js'
import Categories from './components/categories/Categories.js'
import Ruler from './components/ruler/Ruler.js'
import Footer from './components/footer/Footer.js'

const shelf_1 = {
  name: 'Viva Conforto Indica',
  desc: 'Produtos escolhidos a dedos para você'
}
const shelf_2 = {
  name: 'Mais Vendidos',
  desc: 'Os produtos que todo mundo leva pra casa'
}

const shelf_3 = {
  name: 'Outlet',
  desc: 'Preços incríveis para levar agora'
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Carousel/>
        <Newsletter/>
        <Shelf ShelfName={shelf_1.name} ShelfDesc={shelf_1.desc}/>
        <Categories/>
        <Shelf ShelfName={shelf_2.name} ShelfDesc={shelf_2.desc}/>
        <Shelf ShelfName={shelf_3.name} ShelfDesc={shelf_3.desc}/>
        <Ruler/>
        <Footer/>
      </div>
    );
  }
}

export default App;
