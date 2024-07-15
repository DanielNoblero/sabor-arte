
import React from 'react';
import { Link } from 'react-router-dom';

const ItemDetail = ({ img, precio, titulo, descripcion }) => {
    return (
        <section className="container">
            <div className="row">
                <h3>{titulo}</h3>
                <img src={img} style={{ width: '300px' }} alt={titulo} />
                <p>{descripcion}</p>
                <p className='row-p2'>${precio}</p>
                <Link to="/">
                    <button className="button">Volver</button>
                </Link>
            </div>
        </section>
    );
}

export default ItemDetail;