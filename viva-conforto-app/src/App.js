import React, { Component } from 'react';
import $ from 'jquery'
import './app.min.css';

import Header from './components/header/Header.js'
import Carousel from './components/carousel/Carousel.js'
import Newsletter from './components/newsletter/Newsletter.js'
import Shelf from './components/shelf/Shelf.js'
import Categories from './components/categories/Categories.js'
import Ruler from './components/ruler/Ruler.js'
import Footer from './components/footer/Footer.js'
import Modal from './components/modal/Modal.js'

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

  componentDidMount() {
    /* Toggle Search */ 
    $('#btn-search').click(function() {
      $('#search-form').toggle('normal');
    });
    $('#close-search').click(function() {
      $('#search-form').toggle('normal');
    });
    
    /* Toggle Mob-Menu */
    $('.hamburguer').click(function(){
        $('nav.mob-menu').css('left', '0');
        $('.mask').css('display', 'block');
    });
    $('.close-icon').click(function(){
        $('nav.mob-menu').css('left', '-350px');
        $('.mask').css('display', 'none');
    });

    /* Show Sub-menus */ 
    $("#baby").hover(function() {
        $("#baby > .sub-menu").show();
    }, function() {
        $("#baby > .sub-menu").hide();
    });

    $("#bed").hover(function() {
        $("#bed > .sub-menu").show();
    }, function() {
        $("#bed > .sub-menu").hide();
    });

    $("#pillow").hover(function() {
        $("#pillow > .sub-menu").show();
    }, function() {
        $("#pillow > .sub-menu").hide();
    });
    
    $("#travel").hover(function() {
        $("#travel > .sub-menu").show();
    }, function() {
        $("#travel > .sub-menu").hide();
    });

    $("#decoration").hover(function() {
        $("#decoration > .sub-menu").show();
    }, function() {
        $("#decoration > .sub-menu").hide();
    });

    $("#all").hover(function() {
        $("#all > .sub-menu").show();
    }, function() {
        $("#all > .sub-menu").hide();
    });

    /* Modal */
    setTimeout(function(){ 
      $('section.modal').addClass('show-modal');
      $('.mask').css('display', 'block');
     }, 3000);
    
    $('.close-icon-modal').click(function(){
        $('section.modal').removeClass('show-modal');
        $('.mask').css('display', 'none');
    });
  }

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
        <Modal/>
      </div>
    );
  }
}

export default App;
