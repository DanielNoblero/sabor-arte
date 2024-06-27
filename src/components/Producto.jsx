import React from 'react';

function Producto(props) {
    return (
        <section className="container">
            <div className="row">
                <h3>{props.titulo}</h3>
                <img className="row-img" src={props.img} alt={props.titulo} style={{ width: '300px' }} />
                <p>{props.descripcion}</p>
                <p className="row-p2">Precio: ${props.precio}</p>
                <button className="button" onClick={props.onButtonClick}>Comprar</button>
            </div>
        </section>
    );
}


export default Producto;
