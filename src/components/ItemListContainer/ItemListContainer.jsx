import React, { useEffect, useState } from 'react';
import { getProducts, getProductsByCategory } from '../Productos';
import Item from '../Item/Item';


    const ItemListContainer = ({ greetings }) => {
        const [products, setProducts] = useState([]);
    
        useEffect(() => {
            if (greetings && greetings !== "Lista de productos") {
                getProductsByCategory(greetings)
                    .then((res) => setProducts(res))
                    .catch((err) => console.log(err));
            } else {
                getProducts()
                    .then((res) => setProducts(res))
                    .catch((err) => console.log(err));
            }
        }, [greetings]);

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
