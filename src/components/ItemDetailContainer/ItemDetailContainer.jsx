import { useEffect, useState } from 'react';
import { db } from '../../service/firebase';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { doc, getDoc } from 'firebase/firestore';

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        getDoc(doc(db, "products", id))
            .then((querySnapshot) => {
                const product = {id: querySnapshot.id, ...querySnapshot.data()}
                setProduct(product);
            })
            .catch((err) => console.log(err));
    }, [id]);

    return (
        <div>
            {product && <ItemDetail {...product} />}
        </div>
    );
}

export default ItemDetailContainer;
