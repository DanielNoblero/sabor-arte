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
        const fetchProduct = async () => {
            try {
                // Depuración: Verifica el idioma actual
                console.log('Idioma actual:', i18n.language);
                
                const docRef = doc(db, "products", id);
                const querySnapshot = await getDoc(docRef);
                
                if (querySnapshot.exists()) {
                    const productData = querySnapshot.data();
                    
                    // Depuración: Verifica las claves de traducción
                    console.log('Intentando traducir:', `products.${id}.titulo`);
                    console.log('Traducción encontrada:', t(`products.${id}.titulo`));
                    
                    const product = {
                        id: querySnapshot.id,
                        titulo: t(`products.${id}.titulo`) || productData.titulo,
                        descripcion: t(`products.${id}.descripcion`) || productData.descripcion,
                        precio: productData.precio,
                        stock: productData.stock,
                        img: productData.img,
                        category: t(`products.${id}.category`) || productData.category
                    };
                    
                    // Depuración: Muestra el producto traducido
                    console.log('Producto traducido:', product);
                    
                    setProduct(product);
                } else {
                    setError('Producto no encontrado');
                }
            } catch (err) {
                console.error('Error al cargar el producto:', err);
                setError('Error al cargar el producto');
            }
        };

        fetchProduct();
    }, [id, i18n.language, t]);

    return (
        <div>
            {error && <p>{error}</p>}
            {product && <ItemDetail {...product} />}
        </div>
    );
};

export default ItemDetailContainer;