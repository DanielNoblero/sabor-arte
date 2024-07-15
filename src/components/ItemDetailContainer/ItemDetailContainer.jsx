import { useEffect, useState } from 'react';
import { getProductById } from '../Productos';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        getProductById(id)
            .then((res) => {
                setProduct(res);
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
