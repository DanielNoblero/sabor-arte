import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Item = ({ id, img, precio, titulo, descripcion }) => {
    const { t } = useTranslation();

    return (
        <section className="container">
            <div className="row">
                {/* Título traducido */}
                <h3>{titulo}</h3>
                <img className="row-img" src={img} style={{ width: '300px' }} alt={titulo} />
                <p>{descripcion}</p> {/* Descripción traducida */}
                <p className="row-p2">${precio}</p>
                <Link to={`/detail/${id}`}>
                    <button className="button">{t('item.viewDetailsButton')}</button>
                </Link>
            </div>
        </section>
    );
};

export default Item;
