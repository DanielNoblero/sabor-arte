import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import { getProducts } from '../Productos';

const ItemListContainer = ({ greetings }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
            .then((res) => {
                setProducts(res);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <h2>{greetings}</h2>
            <div className="container">
                {products.map(product => (
                    <Item
                        key={product.id}
                        id={product.id}
                        img={product.img}
                        precio={product.precio}
                        titulo={product.titulo}
                    />
                ))}
            </div>
        </div>
    );
};

export default ItemListContainer;
