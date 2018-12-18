import React, { Component } from 'react';
import HelperLinks from '../snippets/helper-links.js'
import SearchBag from '../snippets/search_bag.js' 
import Menu from '../snippets/menu.js'


import Logo from '../../img/logo-viva-conforto.png'

class Header extends Component {

  render() {
    return (
      <div>
        <header>
            <div className="container">
                <div className="row">
                    <div className="flex justify-between align-center border-bottom">
                        <h1 className="site-logo" alt="">
                            <a href="/">
                                <img src={Logo} alt="Viva Conforto - Logomarca"></img>
                            </a>
                        </h1>                    
                        <div className="login">
                            <div>
                            <p className="text-style-1 dark-blue">Bem Vindo!</p>
                            <span className="text-style-1 light-blue">
                                <a href="/" className="light-blue">Acessar conta</a> /  
                                <a href="/"className="light-blue"> Rastrear Pedidos</a>
                            </span>
                            </div>
                        </div>
                        <HelperLinks/>
                        <SearchBag/>
                    </div>
                </div>
                <div className="row">
                    <Menu/>
                </div>
            </div>
            
        </header>
      </div>
    );
  }
}

export default Header;
