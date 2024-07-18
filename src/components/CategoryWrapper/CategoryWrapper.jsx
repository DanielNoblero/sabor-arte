import React from 'react';
import { useParams } from 'react-router-dom';
import ItemListContainer from '../ItemListContainer/ItemListContainer';

const CategoryWrapper = () => {
    const { category } = useParams();
    return <ItemListContainer greetings={category} />;
};

export default CategoryWrapper;
