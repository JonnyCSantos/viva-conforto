import React, { Component } from 'react';
import Baby from '../../img/mini-banner-baby.jpg'
import Bed from '../../img/mini-banner-bed.jpg'
import Pillow from '../../img/mini-banner-pillow.jpg'
import Travel from '../../img/mini-banner-travel.jpg'
import Decoration from '../../img/mini-banner-decoration.jpg'

class Menu extends Component {
    render() {
        return (
            <nav className="main-menu">
                <ul className="menu flex justify-around align-center">
                    <li id="baby" className="item">
                        <a href="/">BABY E KIDS</a>
                        <ul className="sub-menu">
                            <div>
                                <li className="sub-item"><a href="/">Travesseiros e Almofadas</a></li>
                                <li className="sub-item"><a href="/">Alimentação</a></li>
                                <li className="sub-item"><a href="/">Jogo de Lençol</a></li>
                            </div>
                            <figure>
                                <img src={Baby} alt="baby and kids"/>
                            </figure>
                        </ul>
                    </li>
                    <li id="bed" className="item">
                        <a href="/">CAMA</a>
                        <ul className="sub-menu">
                            <div>
                                <li className="sub-item"><a href="/">Jogo de Lençol</a></li>
                                <li className="sub-item"><a href="/">Colcha e Cobre leito</a></li>
                                <li className="sub-item"><a href="/">Protetor de Colchão</a></li>
                                <li className="sub-item"><a href="/">Acessórios</a></li>
                            </div>
                            <figure>
                                <img src={Bed} alt="Cama"/>
                            </figure>
                        </ul>
                    </li>
                    <li id="pillow" className="item">
                        <a href="/">TRAVESSEIRO</a>
                        <ul className="sub-menu">
                            <div>
                                <li className="sub-item"><a href="/">Travesseiro Viscoelástico</a></li>
                                <li className="sub-item"><a href="/">Travesseiro Látex</a></li>
                                <li className="sub-item"><a href="/">Travesseiro Fibra</a></li>
                                <li className="sub-item"><a href="/">Travesseiro de Pena e Pluma de Ganso</a></li>
                                <li className="sub-item"><a href="/">Linha Saúde</a></li>
                                <li className="sub-item"><a href="/">Acessórios</a></li>
                            </div>
                            <figure>
                                <img src={Pillow} alt="Travesseiros"/>
                            </figure>
                        </ul>
                    </li>
                    <li id="travel" className="item">
                        <a href="/">ACESSÓRIOS DE VIAGEM</a>
                        <ul className="sub-menu">
                            <div>
                                <li className="sub-item"><a href="/">Travesseiro de Viagem</a></li>
                                <li className="sub-item"><a href="/">Conforto</a></li>
                                <li className="sub-item"><a href="/">Segurança</a></li>
                            </div>
                            <figure>
                                <img src={Travel} alt="Acessórios para Viagem"/>
                            </figure>
                        </ul>
                    </li>
                    <li id="decoration" className="item">
                        <a href="/">DECORAÇÃO</a>
                        <ul className="sub-menu">
                            <div>
                                <li className="sub-item"><a href="/">Almofada</a></li>
                                <li className="sub-item"><a href="/">Capa para Sofá</a></li>
                                <li className="sub-item"><a href="/">Cortinas</a></li>
                            </div>
                            <figure>
                                <img src={Decoration} alt="Decoração"/>
                            </figure>
                        </ul>
                    </li>
                    <li id="all" className="item">
                        <a href="/">MENU COMPLETO</a>
                        <ul className="sub-menu">
                            <li className="item-all">
                            <a href="/">BABY E KIDS</a>
                            <ul className="sub-menu-all">
                                <li className="sub-item"><a href="/">Travesseiros e Almofadas</a></li>
                                <li className="sub-item"><a href="/">Alimentação</a></li>
                                <li className="sub-item"><a href="/">Jogo de Lençol</a></li>
                            </ul>
                            </li>
                            <li className="item-all">
                                <a href="/">CAMA</a>
                                <ul className="sub-menu-all">
                                    <li className="sub-item"><a href="/">Jogo de Lençol</a></li>
                                    <li className="sub-item"><a href="/">Colcha e Cobre leito</a></li>
                                    <li className="sub-item"><a href="/">Protetor de Colchão</a></li>
                                    <li className="sub-item"><a href="/">Acessórios</a></li>
                                </ul>
                            </li>
                            <li className="item-all">
                                <a href="/">TRAVESSEIRO</a>
                                <ul className="sub-menu-all">
                                    <li className="sub-item"><a href="/">Travesseiro Viscoelástico</a></li>
                                    <li className="sub-item"><a href="/">Travesseiro Látex</a></li>
                                    <li className="sub-item"><a href="/">Travesseiro Fibra</a></li>
                                    <li className="sub-item"><a href="/">Travesseiro de Pena e Pluma de Ganso</a></li>
                                    <li className="sub-item"><a href="/">Linha Saúde</a></li>
                                    <li className="sub-item"><a href="/">Acessórios</a></li>
                                </ul>
                            </li>
                            <li className="item-all">
                                <a href="/">ACESSÓRIOS DE VIAGEM</a>
                                <ul className="sub-menu-all">
                                    <li className="sub-item"><a href="/">Travesseiro de Viagem</a></li>
                                    <li className="sub-item"><a href="/">Conforto</a></li>
                                    <li className="sub-item"><a href="/">Segurança</a></li>
                                </ul>
                            </li>
                            <li className="item-all">
                                <a href="/">DECORAÇÃO</a>
                                <ul className="sub-menu-all">
                                    <li className="sub-item"><a href="/">Almofada</a></li>
                                    <li className="sub-item"><a href="/">Capa para Sofá</a></li>
                                    <li className="sub-item"><a href="/">Cortinas</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Menu;
