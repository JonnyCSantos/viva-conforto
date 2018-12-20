import React from 'react';

function Ruler () {
    return (
        <section className="container">
            <div className="ruler flex justify-around align-center">
                <span className="ruler-content">
                    <span className="boleto">Desconto de 5% no Boleto</span>
                </span>
                <span className="ruler-content">
                    <span className="card">Parcelamos em 3x sem juros</span>
                </span>
                <span className="ruler-content">
                    <span className="frete">Entregamos em todo o Brasil
</span>
                </span>
                <span className="ruler-content">
                    <span className="security">Compra 100% segura</span>
                </span>
            </div>
        </section>
    )
}

export default Ruler;
