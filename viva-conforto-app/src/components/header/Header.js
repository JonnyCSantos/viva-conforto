import React, { Component } from 'react';
import Helper_links from '../snippets/helper-links.js'
import Search from '../snippets/search.js' 


import Background from '../../img/logo-viva-conforto.png'



class Header extends Component {

  render() {
    return (
      <div>
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 flex justify-around align-center">
                        <h1 className="site-logo col-md-2" alt="">
                            <a href="/">
                                <img src={Background}></img>
                            </a>
                        </h1>                    
                        <div className="login col-md-2">
                            <p className="text-style-1 dark-blue">Bem Vindo!</p>
                            <span className="text-style-1 light-blue">
                                <a href="#" className="light-blue">Acessar conta</a> /  
                                <a href="#"className="light-blue"> Rastrear Pedidos</a>
                            </span>
                        </div>
                        <Helper_links/>
                        <Search/>
                    </div>
                    <hr/>
                </div>
            </div>
            
        </header>
      </div>
    );
  }
}

export default Header;
