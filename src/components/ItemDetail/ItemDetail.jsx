import React from 'react';
import { Link } from "react-router-dom";
import ItemCount from '../ItemCount/ItemCount';
import { useCart } from "../../hooks/useCart";

const ItemDetail = ({ stock, img, precio, titulo, descripcion, id }) => {
    const { addItem } = useCart();

    const handleAdd = (count) => {

        const produtObj = {
            id, titulo, precio, quantity: count
        }
        addItem(produtObj)

    }

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
                
                        <ItemCount stock={stock} onAdd={handleAdd} />
            </div>
        </section>

    );

};

export default ItemDetail;