import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ItemListContainer from '../ItemListContainer/ItemListContainer';

const CategoryWrapper = () => {
    const { category } = useParams();
    const { t } = useTranslation();

    // Traduce la categoría usando la clave correspondiente
    const translatedCategory = t(`categories.${category}`, { defaultValue: category });

    return <ItemListContainer greetings={translatedCategory} categoryId={category} />;
};

export default CategoryWrapper;
