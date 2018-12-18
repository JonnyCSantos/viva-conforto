import React from 'react';
import Bag from '../../img/icons/bag.png'

function Search () {
    return (
        <div className="search flex align-center">
            <input type="text" className="input-search" placeholder="Faça a Sua Busca"></input>
            <button className="btn-search dark-blue">Buscar</button>
            <button className="btn-bag dark-blue">
                <img src={Bag} alt="bag"/>
                <span className="count-items">0</span>
            </button>
            
        </div>
    )
}

export default Search;
