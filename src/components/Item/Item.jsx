import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ id, img, precio, titulo }) => {
    return (
        <section className="container">
            <div className="row">
                <h3>{titulo}</h3>
                <img className="row-img" src={img} style={{ width: '300px' }} alt={titulo} />
                <p className='row-p2'>${precio}</p>
                <Link to={`/detail/${id}`}>
                    <button className="button">Ver detalle</button>
                </Link>
            </div>
        </section>
    );
}

export default Item;
