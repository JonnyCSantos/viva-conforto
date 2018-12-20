import React from 'react';
import Pillow from '../../img/pillows.jpg'
import Cushion from '../../img/almofadas.jpg'
import Bed from '../../img/cama.jpg'

function Categories () {
    return (
        <section className="container">
            <div className="cat flex justify-around align-center">
                <figure className="cat-img">
                    <a href="/">
                        <img src={Pillow} alt=""/>
                    </a>
                </figure>
                <figure className="cat-img">
                    <a href="/">
                        <img src={Cushion} alt=""/>
                    </a>
                </figure>
                <figure className="cat-img">
                    <a href="/">
                        <img src={Bed} alt=""/>
                    </a>
                </figure>
            </div>
        </section>
    )
}

export default Categories;
