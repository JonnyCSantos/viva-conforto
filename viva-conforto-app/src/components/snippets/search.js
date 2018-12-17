import React from 'react';

function Search () {
    return (
        <div class="search">
            <input type="text" className="input-search" placeholder="Faça a Sua Busca"></input>
            <button className="btn-search dark-blue">Buscar</button>
            <button className="btn-search dark-blue"><img src="" alt="cart"/></button>
        </div>
    )
}

export default Search;
