import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Item = ({ id, img, precio, titulo }) => {
    const { t } = useTranslation();

    return (
        <section className="container">
            <div className="row">
                <h3>{t(`products.${id}.titulo`)}</h3> {/* Traducción del título */}
                <img className="row-img" src={img} style={{ width: '300px' }} alt={t(`products.${titulo}.titulo`)} />
                <p className="row-p2">${precio}</p>
                <Link to={`/detail/${id}`}>
                    <button className="button">{t('item.viewDetailsButton')}</button>
                </Link>
            </div>
        </section>
    );
};

export default Item;

