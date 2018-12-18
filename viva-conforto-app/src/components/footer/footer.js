import React, { Component } from 'react';

class Footer extends Component {

  render() {
    return (
        <footer id="footer">
            <div className="container">
                <div className="info">
                    <nav className="footer-title">
                        <h3>Institucionais</h3>
                        <a href="/" className="footer-text">Quem somos</a>
                        <a href="/" className="footer-text">Minha conta</a>
                        <a href="/" className="footer-text">Cadastre-se</a>
                        <a href="/" className="footer-text">Meus pedidos</a>
                        <a href="/" className="footer-text">Política de privacidade</a>
                        <a href="/" className="footer-text">Contato</a>
                    </nav>
                    <nav className="footer-title">
                        <h3>Ajuda</h3>
                        <a href="/" className="footer-text">Como comprar</a>
                        <a href="/" className="footer-text">Pagamento e envio</a>
                        <a href="/" className="footer-text">Segurança</a>
                        <a href="/" className="footer-text">Frete</a>
                        <a href="/" className="footer-text">Política de troca e devoluções</a>
                    </nav>
                    <nav className="footer-title">
                        <h3>Atendimento</h3>
                        <span className="contact-text">Telefone</span>
                        <span className="contact-info">11 4193-3659</span>
                        <span className="contact-text">Whatsapp</span>
                        <span className="contact-info">11 96302-5392</span>
                        <span className="contact-text">E-mail</span>
                        <span className="contact-info">faleconosco@vivaconforto.com.br</span>
                        <span className="contact-info">sac@vivaconforto.com.br</span>
                        <span className="contact-info">Segunda à Sexta das 9 às 17h</span>
                    </nav>
                    <div className="social">
                        <span>SIGA-NOS 
                            <img src="" alt=""></img>
                        </span>
                    </div>
                </div>
                <div className="selos">
                    <ul>
                        <li><img src="https://images.tcdn.com.br/assets/store/img/icons/formas_pagamento/pag_peqpagseguro.png?5f78a8a31906a7998bd9393e5869486b" alt="PagSeguro"/></li>
                        <li><img src="https://images.tcdn.com.br/assets/store/img/icons/formas_pagamento/pag_peqcartavisatraycheckout.png?5f78a8a31906a7998bd9393e5869486b" alt="Cartão Visa - Yapay"/></li>
                        <li><img src="https://images.tcdn.com.br/assets/store/img/icons/formas_pagamento/pag_peqmastercardtraycheckout.png?5f78a8a31906a7998bd9393e5869486b" alt="Cartão MasterCard - Yapay"/></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
  }
}

export default Footer;
