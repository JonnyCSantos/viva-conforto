import React from 'react';
import Bag from '../../img/icons/bag.png'
import Search_icon from '../../img/icons/search.png'

function Search () {
    return (
        <div className="search flex align-center">
            <form id="search-form">
                <input id="input-search" type="text" className="input-search" placeholder="Faça a Sua Busca"></input>
                <button id="send-search"><img src={Search_icon} alt="search icon"/></button>
                <span id="close-search"><i className="fas fa-times"></i></span>
            </form>
            <span id="btn-search" className="btn-search dark-blue">Buscar</span>
            <button className="btn-bag dark-blue">
                <img src={Bag} alt="bag"/>
                <span className="count-items">0</span>
            </button>
        </div>
    )
}

export default Search;
