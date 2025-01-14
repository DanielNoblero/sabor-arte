import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import { db } from '../../service/firebase/index';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useTranslation } from 'react-i18next';

const ItemListContainer = ({ categoryId }) => {
    const [products, setProducts] = useState([]);
    const { t } = useTranslation(); // Hook para traducir

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const collectionRef = categoryId
                    ? query(collection(db, "products"), where("category", "==", categoryId))
                    : collection(db, "products");

                const querySnapshot = await getDocs(collectionRef);
                const products = querySnapshot.docs.map((doc) => {
                    const data = doc.data();
                    return {
                        id: doc.id,
                        img: data.img,
                        precio: data.precio,
                        stock: data.stock,
                        // Traduce el título y la descripción al mapear
                        titulo: t(`product_${doc.id}.titulo`, { defaultValue: data.titulo }),
                        descripcion: t(`product_${doc.id}.descripcion`, { defaultValue: data.descripcion }),
                    };
                });
                setProducts(products);
            } catch (error) {
                console.error("Error fetching products: ", error);
            }
        };

        fetchProducts();
    }, [categoryId, t]);

    return (
        <div>
            <h2>{t('greetings')}</h2> {/* Texto traducido */}
            <div className="container">
                {products.map(product => (
                    <Item
                        key={product.id}
                        id={product.id}
                        img={product.img}
                        precio={product.precio}
                        titulo={product.titulo}
                        descripcion={product.descripcion} // Pasar descripción traducida
                    />
                ))}
            </div>
        </div>
    );
};

export default ItemListContainer;
