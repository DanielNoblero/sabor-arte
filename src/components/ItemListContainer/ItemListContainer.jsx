import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import { db } from '../../service/firebase/index';
import { collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = ({ greetings, categoryId }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const collectionRef = categoryId
                    ? query(collection(db, "products"), where("category", "==", categoryId))
                    : collection(db, "products");

                const querySnapshot = await getDocs(collectionRef);
                const products = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setProducts(products);
            } catch (error) {
                console.error("Error fetching products: ", error);
            }
        };

        fetchProducts();
    }, [categoryId]);

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
