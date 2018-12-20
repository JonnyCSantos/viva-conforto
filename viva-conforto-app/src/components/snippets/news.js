import React from 'react';

function Helper_links () {
    return (
        <div className="newsletter col-md-5 col-sm-12">
            <div className="content">
                <span>
                    <span className="news-text">RECEBA NOSSAS<br/>NOVIDADE E OFERTAS</span>
                </span>
                <span className="border-mail">
                    <form>
                        <input className="input-mail" type="text" placeholder="Digite o seu e-mail"></input>
                        <button className="send-mail" type="input"><i class="fa fa-check" aria-hidden="true"></i></button>
                    </form>
                </span>

            </div>
        </div>
    )
}

export default Helper_links;
