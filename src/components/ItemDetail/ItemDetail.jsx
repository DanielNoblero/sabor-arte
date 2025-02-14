import React from 'react';
import { Link } from "react-router-dom";
import ItemCount from '../ItemCount/ItemCount';
import { useCart } from "../../hooks/useCart";
import { useTranslation } from 'react-i18next'; // Importar hook para traducción

const ItemDetail = ({ stock, img, precio, titulo, descripcion, id }) => {
    const { addItem } = useCart();
    const { t } = useTranslation(); // Usar el hook para obtener las traducciones

    const handleAdd = (count) => {
        const productObj = {
            id, titulo, precio, quantity: count
        };
        addItem(productObj);
    };

    return (
        <section className="container2">
            <div className="row">
                <h3>{titulo}</h3>
                <img src={img} alt={titulo} />
                <p>{descripcion}</p>
                <p className="row-p2">${precio}</p>
                <Link to="/">
                    <button className="button">{t('itemDetail.backButton')}</button> {/* Botón de vuelta traducido */}
                </Link>
                <ItemCount stock={stock} onAdd={handleAdd} />
            </div>
        </section>
    );
};

export default ItemDetail;
