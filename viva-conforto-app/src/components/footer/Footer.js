import React, { Component } from 'react';
import Ebit from '../../img/icons/ebit.png'

class Footer extends Component {

  render() {
    return (
        <div className="footer">
            <footer id="footer">
                <div className="container">
                    <div className="info flex justify-around">
                        <nav className="footer-title col-md-5 col-sm-5 col-xs-12">
                            <h3>Institucionais</h3>
                            <a href="/" className="footer-text">Quem somos</a>
                            <a href="/" className="footer-text">Minha conta</a>
                            <a href="/" className="footer-text">Cadastre-se</a>
                            <a href="/" className="footer-text">Meus pedidos</a>
                            <a href="/" className="footer-text">Política de privacidade</a>
                            <a href="/" className="footer-text">Contato</a>
                            <div className="social ">
                            <span>SIGA-NOS 
                                    <a href="/" className="facebook">/vivaconforto</a>
                                    <a href="/" className="insta">/lojavivaconforto</a>
                                </span>
                            </div>
                        </nav>
                        <nav className="footer-title col-md-3 col-sm-5 col-xs-12">
                            <h3 className="ajuda">Ajuda</h3>
                            <a href="/" className="footer-text">Como comprar</a>
                            <a href="/" className="footer-text">Pagamento e envio</a>
                            <a href="/" className="footer-text">Segurança</a>
                            <a href="/" className="footer-text">Frete</a>
                            <a href="/" className="footer-text">Política de troca e devoluções</a>
                        </nav>
                        <nav className="footer-title col-md-3 col-sm-5 col-xs-12">
                            <h3>Atendimento</h3>
                            <span className="contact-text tel">Telefone</span>
                            <span className="contact-info">11 4193-3659</span>
                            <span className="contact-text whats">Whatsapp</span>
                            <span className="contact-info">11 96302-5392</span>
                            <span className="contact-text email">E-mail</span>
                            <span className="contact-info mail">faleconosco@vivaconforto.com.br</span>
                            <span className="contact-info mail">sac@vivaconforto.com.br</span>
                            <span className="days-info">Segunda à Sexta das 9 às 17h</span>
                        </nav>
                        <div className="selos col-md-3 col-sm-5 col-xs-12">
                            <ul>
                                <h3>PAGAMENTO</h3>
                                <li><img src="https://images.tcdn.com.br/assets/store/img/icons/formas_pagamento/pag_peqpagseguro.png?5f78a8a31906a7998bd9393e5869486b" alt="PagSeguro"/></li>
                                <li><img src="https://images.tcdn.com.br/assets/store/img/icons/formas_pagamento/pag_peqcartavisatraycheckout.png?5f78a8a31906a7998bd9393e5869486b" alt="Cartão Visa - Yapay"/></li>
                                <li><img src="https://images.tcdn.com.br/assets/store/img/icons/formas_pagamento/pag_peqmastercardtraycheckout.png?5f78a8a31906a7998bd9393e5869486b" alt="Cartão MasterCard - Yapay"/></li>
                                <li><img src="https://images.tcdn.com.br/assets/store/img/icons/formas_pagamento/pag_peqdinerstraycheckout.png?5f78a8a31906a7998bd9393e5869486b" alt=""/></li>
                                <li><img src="https://images.tcdn.com.br/assets/store/img/icons/formas_pagamento/pag_peqamextraycheckout.png?5f78a8a31906a7998bd9393e5869486b" alt=""/></li>
                                <li><img src="https://images.tcdn.com.br/assets/store/img/icons/formas_pagamento/pag_peqelotraycheckout.png?5f78a8a31906a7998bd9393e5869486b" alt=""/></li>
                                <li><img src="https://images.tcdn.com.br/assets/store/img/icons/formas_pagamento/pag_peqcartaoaura.png?5f78a8a31906a7998bd9393e5869486b" alt=""/></li>
                                <li><img src="https://images.tcdn.com.br/assets/store/img/icons/formas_pagamento/pag_peqmercadopago.png?5f78a8a31906a7998bd9393e5869486b" alt=""/></li>
                                <li><img src="https://images.tcdn.com.br/assets/store/img/icons/formas_pagamento/pag_pd_peqcartaohiper.png?5f78a8a31906a7998bd9393e5869486b" alt=""/></li>
                                <li><img src="https://images.tcdn.com.br/assets/store/img/icons/formas_pagamento/pag_peqcartaohiperit.png?5f78a8a31906a7998bd9393e5869486b" alt=""/></li>
                                <li><img src="https://images.tcdn.com.br/assets/store/img/icons/formas_pagamento/pag_peqboletotraycheckout.png?5f78a8a31906a7998bd9393e5869486b" alt=""/></li>
                                <li><img src="https://images.tcdn.com.br/assets/store/img/icons/formas_pagamento/pag_peqitaushoplinetraycheckout.png?5f78a8a31906a7998bd9393e5869486b" alt=""/></li>
                                <li><img src="https://images.tcdn.com.br/assets/store/img/icons/formas_pagamento/pag_peqdiscovertraycheckout.png?5f78a8a31906a7998bd9393e5869486b" alt=""/></li>
                                <li><img src="https://images.tcdn.com.br/assets/store/img/icons/formas_pagamento/pag_peqjcb.png?5f78a8a31906a7998bd9393e5869486b" alt=""/></li>
                                <li><img src="https://images.tcdn.com.br/assets/store/img/icons/formas_pagamento/pag_peqtransfbradescotraycheckout.png?5f78a8a31906a7998bd9393e5869486b" alt=""/></li>
                                <li><img src="https://images.tcdn.com.br/assets/store/img/icons/formas_pagamento/pag_peqtransfbbtraycheckout.png?5f78a8a31906a7998bd9393e5869486b" alt=""/></li>
                            </ul>
                            <ul className="seg">
                                <h3>SEGURANÇA</h3>
                                <li className="selo-img"><img src={Ebit} alt=""/></li>
                                <li className="selo-img"><img src="https://abcomm.com.br/selos/Selo_EmpresaAssociada.png" alt=""/></li>
                                <li className="selo-img"><img src="https://images.tcdn.com.br/485653/themes/64/img/com-school.png?5f78a8a31906a7998bd9393e5869486b" alt=""/></li>
                                <li className="selo-img big"><img src="//images2.tcdn.com.br/commerce/assets/store/img/selo_lojaprotegida.gif?5f78a8a31906a7998bd9393e5869486b" alt=""/></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="copy">
                <p className="copyright">Em caso de divergência de preços no site, o valor válido é o do Carrinho de Compras.  Preços e condições de pagamento podem variar de acordo com a disponibilidade dos produtos. <br/>Vendas sujeitas à análise e confirmação de dados As imagens dos produtos são meramente ilustrativas.<br/>Copyright © 2018-vivaconforto.com.br. Todos os direitos reservados.<br/>Viva Conforto Comércio Eireli Me CNPJ: 07.858.168/0001-81 - Endereço: Alameda Amazonas, 686 - Sala J - Alphaville Industrial - Barueri - SP</p>
                <a href="http://auaha.com.br/" className="seal--auaha" target="blank">
                    <img src="https://images.tcdn.com.br/485653/themes/64/img/auaha.png?5f78a8a31906a7998bd9393e5869486b" alt=""/>
                </a>
                <span className="logotray-message">Tecnologia <a href="/" target="blank">TrayCommerce</a></span>
            </div>
        </div>
        
    );
  }
}

export default Footer;
