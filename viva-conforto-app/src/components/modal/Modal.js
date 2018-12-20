import React from 'react';

function Modal () {
    return (
        <section className="modal">
            <span className="close-icon-modal"></span>
            <div className="collum-text">
                <span className="text-big">Cadastre <br/>seu e-mail</span>
                <span className="text-small">E fique por dentro de nossas novidades e promoções!</span>
                <span className="text-big">Ganhe 10% <b className="two">de desconto</b></span>
                <span className="text-small">Em sua primeira conta</span>
                <form>
                    <input className="input-tex" type="text" placeholder="Digite o seu nome"></input>
                    <input className="input-tex" type="text" placeholder="Digite o seu e-mail"></input>
                    <button className="send-mail" type="input"><i className="fa fa-check" aria-hidden="true"></i></button>
                </form>
            </div>
        </section>
    )
}

export default Modal;
