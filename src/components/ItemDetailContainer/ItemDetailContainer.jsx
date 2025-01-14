import { useEffect, useState } from 'react';
import { db } from '../../service/firebase';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { doc, getDoc } from 'firebase/firestore';
import { useTranslation } from 'react-i18next';

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const { id } = useParams();
    const { t, i18n } = useTranslation();

    useEffect(() => {
        console.log('Fetching product with ID:', id);
        getDoc(doc(db, "products", id))
            .then((querySnapshot) => {
                if (querySnapshot.exists()) {
                    const productData = querySnapshot.data();
                    console.log('Product data from Firestore:', productData);
                    const product = {
                        id: querySnapshot.id,
                        titulo: t(`product_${id}.titulo`, { defaultValue: productData.titulo }),
                        descripcion: t(`product_${id}.descripcion`, { defaultValue: productData.descripcion }),
                        precio: productData.precio,
                        stock: productData.stock,
                        img: productData.img,
                    };
                    console.log('Translated product data:', product);
                    setProduct(product);
                } else {
                    setError('Producto no encontrado');
                }
            })
            .catch((err) => {
                console.error('Error fetching product:', err);
                setError('Error al cargar el producto');
            });
    }, [id, i18n.language]);

    return (
        <div>
            {error && <p>{error}</p>}
            {product && <ItemDetail {...product} />}
        </div>
    );
};

export default ItemDetailContainer;