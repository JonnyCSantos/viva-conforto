import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';

import Products from './products.js'

const options = {
    items: 4,
    nav: true,
    rewind: true,
    autoplay: true
};

class Shelf extends Component {
    state = {
        Products: Products
    }

    render() {
        const { Products } = this.state;
        const { ShelfName, ShelfDesc } = this.props;

        return (
        <section className="container">
            <h2 className="shelf-name">{ShelfName}</h2>
            <h4 className="shelf-desc">{ShelfDesc}</h4>
            <ul className="shelf">
            <OwlCarousel ref="car" options={options} >
                    {Products.map((product, i) => {
                        return (
                            <li className="prod-item" key={i}>
                                <a href='/' className="btn-hidden"><span className="btn-comprar">Comprar</span></a>
                                <div className="prod-border">
                                    <figure>
                                        <a href="/">
                                            <img className="prod-img" src={product.img} alt={product.name}/>
                                            <span className="tag-desc">{`- ${product.tag_desc}%`}</span>
                                            <span className="tags">
                                                { product.tag_feat
                                                    ? <img className="tag-feat" src={product.tag_feat} alt="Destaque"/>
                                                    : null
                                                }   
                                                { product.tag_entry
                                                    ? <img className="tag-entry" src={product.tag_entry} alt="Lançamento"/>
                                                    : null
                                                }                                                                                         
                                                { product.tag_truck
                                                    ? <img className="tag-truck" src={product.tag_truck} alt="Frete grátis"/>
                                                    : null
                                                }                                                                                         
                                            </span>
                                        </a>
                                    </figure>
                                    <div className="product-name">
                                        <a href="/"><h3 className="name">{product.name}</h3></a>
                                    </div>
                                    <div className="product-price">
                                        <span className="real">{`R$ ${product.val_real}`}</span>
                                        <span className="sale">{`R$ ${product.val_sale}`}</span>
                                        <span className="qtd-parc"><strong>{product.qtd_parc}</strong> de <strong>{product.val_parc}</strong> <span className="juros">Sem juros</span></span>
                                    </div>
                                </div>
                            </li>
                        )       
                    })}
            </OwlCarousel>
            </ul>
        </section>
        );
    }
}

export default Shelf;
